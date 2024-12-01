import { server } from "./constants";

export async function getMeals() {
    const res  = await fetch(`${server}/meals`);
    const data = await res.json();
    
    if ( !res.ok ) {
        throw new Error(`Could not fetch meals!`)
    }

    return data;
}