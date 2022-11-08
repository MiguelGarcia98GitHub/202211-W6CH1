import { ICharacter } from "../models/character";

export const charactersData: Array<ICharacter> = [
    {
        id: 1,
        name: "Joffrey",
        family: "Baratheon",
        age: 28,
        status: true,
        imageURL: "./joffrey.jpg",
        kingdomYears: 10,
        customMessage: "Vais a morir todos",
    },
    {
        name: "Jaime",
        family: "Lannister",
        age: 40,
        status: true,
        imageURL: "./jaime.jpg",
        weapon: "sword",
        dexterity: 8,
        customMessage: "Primero golpeo y luego pregunto",
    },
];
