function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? extra : ""}`);
}

printIngredient("10", "Flour");

printIngredient("44", "Sugar", "Xylithol");

interface User {
  id: string;
  info?: {
    email: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email;
  }
  return "";
}

//? checks for existing property ?? return when undefined
function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

//The way of optional calling the function cb with a name?.()
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log(x, y);
  callback?.();
}
