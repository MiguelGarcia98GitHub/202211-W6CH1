import { characterReducer } from "./reducer";
describe("when actiontypes is upload", () => {
    test("then return just a new instance of the state", () => {
        const mockCharacter = {
            id: 700,
            name: "Canallita700",
            family: "Los Pepes",
            age: 24,
            status: true,
            imageURL: "./canallita.jpg",
            kingdomYears: 15,
            customMessage: "Pasalo a done",
        };
        const newState = characterReducer([mockCharacter], {
            type: "tasks@update",
            payload: { ...mockCharacter, customMessage: "Testeando con Redux" },
        });
        expect(newState).toEqual([
            { ...mockCharacter, customMessage: "Testeando con Redux" },
        ]);
    });
});
