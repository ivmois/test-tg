import { IGender, IPeople, ITag, languegeType } from '@/types/types';

export const genderImg: IGender = {
  hermaphrodite: '/hermaphrodite.png',
  male: '/male.png',
  female: '/female.png',
  scraanwo: '/male.png',
  wwwoscraanwo: '/female.png',
  acworcscraakacrcoowaahaowo: '/hermaphrodite.png',
};

export const colorTeg: ITag = {
  male: 'green',
  female: 'magenta',
  hermaphrodite: 'yellow',
  birthyear: 'blue',
  scraanwo: 'green',
  wwwoscraanwo: 'magenta',
  acworcscraakacrcoowaahaowo: 'yellow',
};

export const noData: { [k: string]: string } = {
  none: 'none',
  unknown: 'unknown',
  'n/a': 'n/a',
  huwhorwhooohwh: 'huwhorwhooohwh',
  'wh/ra': 'wh/ra',
  whoowhwo: 'whoowhwo',
};

export const langApi: { [k: string]: string } = {
  enResults: 'results',
  wookieeResults: 'rcwochuanaoc',
  enNext: 'next',
  wookieeNext: 'whwokao',
  enPrevious: 'previous',
  wookeePrevious: 'akrcwohoahoohuc',
  enCount: 'count',
  wookieeCount: 'oaoohuwhao',
};

export const peopleParams: { [k: string]: string } = {
  enHeight: 'height',
  enMass: 'mass',
  enEyeColor: 'color eye',
  enHairColor: 'color hair',
  enSkinColor: 'color skin',
  wookieeHeight: 'acwoahrracao',
  wookieeMass: 'scracc',
  wookieeEyeColor: 'worowo_oaooanoorc',
  wookieeHairColor: 'acraahrc_oaooanoorc',
  wookieeSkinColor: 'corahwh_oaooanoorc',
};

export const getOption = (peoplesList: IPeople[], name: string) => {
  return peoplesList
    .map((people) => people[name])
    .filter((item, index, self) => self.indexOf(item) === index)
    .filter((item) => item !== 'n/a' && item !== 'none' && item !== 'unknown')
    .concat(['all']);
};

export const getPeople = (item: any, languege: languegeType): IPeople => {
  if (languege === 'wookiee') {
    const people: IPeople = {
      name: item.whrascwo,
      birthyear: item.rhahrcaoac_roworarc,
      gender: item.rrwowhwaworc,
      height: item.acwoahrracao,
      mass: item.scracc,
      eye: item.worowo_oaooanoorc,
      hair: item.acraahrc_oaooanoorc,
      skin: item.corahwh_oaooanoorc,
    };
    return people;
  }
  const people: IPeople = {
    name: item.name,
    birthyear: item.birth_year,
    gender: item.gender,
    height: item.height,
    mass: item.mass,
    eye: item.eye_color,
    hair: item.hair_color,
    skin: item.skin_color,
  };
  return people;
};
