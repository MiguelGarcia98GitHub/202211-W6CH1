import { useState } from "react";
import { useDispatch } from "react-redux";
import { ICharacter } from "../../models/character";
import * as ac from "../../reducer/action.creator";

export const Form = () => {
    const [character, setCharacter] = useState({});
    const dispatcher = useDispatch();

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
                        dispatcher(
                            ac.addActionCreator({
                                ...(character as ICharacter),
                            })
                        );
                    }}
                >
                    ADD CHARACTER
                </button>
            </form>
        </div>
    );
};
