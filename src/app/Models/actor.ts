import { Country } from "./country";

export class Actor {
    id : number | undefined;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    address: string;
    country: Country;

    constructor(firstName: string, lastName: string, email: string, userName: string, address: string, country: Country)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.address = address;
        this.country = country;
    }
}
