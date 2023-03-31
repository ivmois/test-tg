import { IPeople } from "@/types/types";
import { useEffect, useState } from "react";

export function getPeoples() {
  const [peoples, setPeoples] = useState<IPeople[]>([]);

  useEffect(() => {
    const data = fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((json) => {
        const peoplesList = json.results.map((item: any) => {
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
        });
        setPeoples((prev) => prev.concat(...peoplesList));
      });
  }, []);

  return peoples;
}
