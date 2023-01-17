
//-----------------------------E1----------------------------------------
// 'name', 'age' y 'profession'
interface PersonData {
  name: string;
  age: number;
  profession: string;
}

let getPersonDetail = (person: PersonData) => {
  let list = [person.name, person.age, person.profession];
  return list;
}

let Info = {
  name: 'Mariangela',
  age: 22,
  profession: "developer",
};

console.log(getPersonDetail(Info));

//--------------------------E2---------------------------------
let x = 4;
let y = "Mundo";

function sumOrConcatenate(x: any, y: any) {
  try {
    if ((typeof x) == "string" && (typeof y) == "string") {
      console.log(x + "-" + y);
    } else if ((typeof x) == "number" && (typeof y) == "number") {
      console.log(x + y);
    } else {
      console.log(x + ":" + y);
    }
  } catch {
    console.log("Error");
  }
}

sumOrConcatenate(x, y);

//--------------------------E3---------------------------------

interface Car {
  tires: () => number;
  turnOnEngine: () => void;
  pressPedal: () => void;
}

interface Motorcycle {
  tires: () => number;
  turnOnEngine: () => void;
  openThrottle: () => void;
}

function turnOnEngine(): void {
  console.log('turnOnEngine!')
}
function openThrottle(): void {
  console.log('openThrottle!')
}
function pressPedal(): void {
  console.log('pressPedal!')
}
function isFish(pet: Car | Motorcycle) {
  if (pet as Car) {
    return (pet as Car).pressPedal !== undefined;
  }
  else {
    return (pet as Motorcycle).openThrottle !== undefined;
  }

}






//--------------------------E4---------------------------------

const newArray = (arr: (number | string)[]) => {
  arr.shift();
  console.log((arr));
}

newArray([1, 2, 3]);        // ok
newArray(['1', '2', '3']);  // ok
newArray([1, 2, '3', 4]);  // ok