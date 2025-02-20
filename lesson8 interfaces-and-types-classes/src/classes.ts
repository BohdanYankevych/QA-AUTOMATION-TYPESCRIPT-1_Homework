import { getJson } from "./interfaces";

export class ResultsClass {
    private _name;

    public get name(): string{
        return this._name;
    }
    public set name(name){
        this._name = name;
    }

    public results: Partial <User>[] = [];
    protected info: Partial<{
        seed: string;
        results: number;
        page: number;
        version: string;
    }> = {};
    public constructor(name: string, users: User[]){
        this._name = name;
        this.results = users;


    }
    public sayHello(): void{
        console.log(`hello ${this._name}`);
    }
}
interface Name {
    title: string;
    first: string;
    last: string;
}

interface Street {
    number: number;
    name: string;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Dob {
    date: string;
    age: number;
}

export interface Registered {
    date: string;
    age: number;
}

export interface Id {
    name: string;
    value: string | null;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface Picture {
    superLarge: string;
}

export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

/* async function getJson(): Promise<ResultsClass>{
    const response =  await fetch('https://randomuser.me/api/');
    const json = await response.json() as ResultsClass; 
    return json;
}
 */

(async () => {
   const data = await getJson();
   console.log(data.results[0]);
   //console.log(data.sayHello()); // will throw the error TypeError: data.sayHello is not a function
   const data2 = new ResultsClass('Joe', data.results);
   console.log(data2.sayHello());
   console.log(data2.results[0].gender);
})();
