interface Person {
    name: string,
    age: number
    displayName(): void;
    talk(phrase: string);
    isAdult(): boolean;
};

interface RestResponse {
    persons: [Person],
    insitutionName: string,
    year: number
}

let studentName: any = "Pepe"; // Be careful, use with precaution

studentName = 23; // It will work great