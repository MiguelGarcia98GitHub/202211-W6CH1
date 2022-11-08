export interface ICharacter {
    id?: number;
    name: string;
    family: string;
    age: number;
    status: boolean;
    imageURL: string;
    kingdomYears?: number;
    customMessage?: string;
    weapon?: string;
    dexterity?: number;
    advisedPerson?: string;
    servingTo?: string;
    pelotism?: number;
}
