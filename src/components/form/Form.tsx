import { useState } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import { ICharacter } from "../../models/character";

export const Form = () => {
    const { handleAdd } = useCharacters();

    const [character, setCharacter] = useState({});

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    placeholder="name of character"
                    onChange={(e) => {
                        setCharacter({
                            name: e.target.value,
                            family: "Los Pepes",
                            age: 50,
                            status: true,
                            imageURL: "./pepe.jpg",
                        });
                    }}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setCharacter({
                            ...character,
                            id: Math.floor(Math.random() * 10000),
                        });
                        handleAdd({
                            ...(character as ICharacter),
                        });
                    }}
                >
                    ADD CHARACTER
                </button>
            </form>
        </div>
    );
};
