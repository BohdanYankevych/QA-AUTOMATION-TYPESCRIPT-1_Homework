export interface Results {
    results: User[];
    info:{
        seed: string;
        results: number;
        page: number;
        version: string;
    };
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
export async function getJson(): Promise<Results>{
    const response =  await fetch('https://randomuser.me/api/');
    const json = await response.json() as Results;
    return json;
}

(async () => {
    const data = await getJson();
    console.log(data.results[0]);
    console.log(data.results[0].login.username);
})();
