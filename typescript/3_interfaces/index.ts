interface Person {
    name: string;
    age: number;
    id?: string;
    talk: (string) => void;
}

interface Student extends Person {
    college: string;
    bachelor: string;
}