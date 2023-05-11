function mySetState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

//Generic Function set type as an initial argument
const [myStateGetter, myStateSetter] = mySetState(10);
console.log(myStateGetter());
myStateSetter(12);
console.log(myStateGetter());

//Overriding generic type
const [myState2Getter, myState2Setter] = mySetState<string | null>(null);
console.log(myState2Getter());
myState2Setter("goodbye");
console.log(myState2Getter());

interface Rank<RankItem> {
  items: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Pikachu",
    hp: 12,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
