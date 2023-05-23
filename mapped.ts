//Gives one required field (name) and flexible Records to be added
type MyFlexibleDogInfo = {
  name: string;
  // [key: string]: string | number;
} & Record<string, string>;

const dog: MyFlexibleDogInfo = {
  name: "Pipi",
  breed: "Mutt",
};

interface DogInfo {
  name: string;
  age: number;
}

//remaps keys to specified property
type OptionsFlags<Type> = {
  [Property in keyof Type]: null;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Need to be implemented;";
}

const lg: DogInfo = {
  name: "LG",
  age: 13,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
  onNameDelete: () => {},
});
