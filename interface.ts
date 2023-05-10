//   "resolveJsonModule": true in tsconfig.json  to import JSON data

import houses from "./houses.json";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

type HouseFilter = string;

function findHouses(
  input: string | House[],
  houseFilter?: HouseFilter
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;
  return (
    houseFilter ? houses.filter((house) => house.name === houseFilter) : houses
  ).map((house, index) => ({
    id: houses.indexOf(house),
    ...house,
  }));
}

console.log(findHouses(JSON.stringify(houses), "Atreides"));

console.log(findHouses(houses, "Harkonnen"));
