import { Results } from "./interfaces";

export interface ExtendedResults extends Results {
    timeLine:{
        start: string;
        end: string;

    }
}

const res: Partial<ExtendedResults> ={};
res.timeLine =  {
    end:'smth',
    start: ''
};
