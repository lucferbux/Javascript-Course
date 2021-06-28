export interface Contact {
    name: string;
    age: number;
    phone: string;
}

export class ContactManager {
    private serialId = "123Sdxlkd";
    private contacts: Contact[] = [
        { name: "Michael", age: 42, phone: "622632634"},
        { name: "Jim", age: 31, phone: "678234678"},
        { name: "Pam", age: 30, phone: "692893123"},
        { name: "Andy", age: 39, phone: "624893409"},
        { name: "Ryan", age: 27, phone: "612345982"},
    ];

    getSerialId(): String {
        return this.serialId;
    }

    getAllContacts(): Contact[] {
        return this.contacts;
    }

    getTotalNumber(): Number {
        return this.contacts.length
    }

    addNewContact(contact: Contact) {
        this.contacts.push(contact);
    }

    getOlderContact(): Contact {
        return this.contacts.sort((a,b) => a.age-b.age)[0];
    }
}

