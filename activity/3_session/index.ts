
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
  } catch  {
    console.log("Error");
  }
}

sumOrConcatenate(x, y);




//--------------------------E4---------------------------------

const newArray = (arr: (number | string)[])=> {
  arr.shift();
    console.log((arr));
}

newArray([1,2,3]);        // ok
newArray(['1','2','3']);  // ok
newArray([1,2,'3',4]);  // ok