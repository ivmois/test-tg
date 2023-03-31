export interface IPeople {
  [k: string]: string;
  name: string;
  gender: string;
  birthyear: string;
  height: string;
  mass: string;
  hair: string;
  eye: string;
  skin: string;
}

export interface IGender {
  [k: string]: string;
  hermaphrodite: string;
  male: string;
  female: string;
}

export interface ITag {
  [key: string]: string;
  male: string;
  female: string;
  hermaphrodite: string;
  birthyear: string;
}

export interface IPeoplesData {
  peoples: IPeople[];
  loading: boolean;
}

export type languegeType = 'en' | 'wookiee'
