interface Person {
    name: string,
    age: number
    displayName(): void;
    talk(phrase: string);
    isAdult(): boolean;
};

class Student implements Person {
    name: string;
    age: number;

    /**
     * Class implementation of a student
     * @param name Name of the student
     * @param age Age of the student
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    /**
     * Dislays the name of the studnet
     */
    displayName = () => {
        console.log(this.name);
    }

    /**
     * Make the student talk
     * @param phrase Phrase that the student will speak
     */
    talk = (phrase: string) => {
        console.log(phrase);
    }

    /**
     * Check if the student is an Adult
     * @returns Wether the student is and adult or not
     */
    isAdult = () : boolean => {
        return this.age > 18;
    }

};


const student: Person = new Student("Jose", 27);

student.displayName();

console.log(student.isAdult());

student.talk("Hello World");