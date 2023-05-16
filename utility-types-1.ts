//Partial - making all optional
type MyUserOptionals = Partial<MyUser>;

interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: 1,
      email: "type@gmail.com",
    },
    { email: "dot@gmail.com" }
  )
);

//Required - makes everything required
type RequiredMyUser = Required<MyUser>;

//Picking options from an interface
type JustEmailAndName = Pick<MyUser, "email" | "name">;

//Omits argument from a type
type UserWithoutId = Omit<MyUser, "id">;

//Record takes id type (here it takes it from field) and output MyUser
const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
  return users.reduce((acc, v) => {
    const { id, ...other } = v;
    return {
      ...acc,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: "Mr. Foo",
    },
    {
      id: 2,
      name: "Mr. Baz",
    },
  ])
);
