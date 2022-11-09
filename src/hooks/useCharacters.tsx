import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../store/store";
import { ICharacter } from "../models/character";
import * as ac from "../reducer/action.creator";
import { CharacterRepository } from "../services/character.repository";

export const useCharacters = () => {
    const characters = useSelector((state: rootState) => state.characters);
    const dispatcher = useDispatch();
    const apiTask = useMemo(() => new CharacterRepository(), []);

    useEffect(() => {
        apiTask
            .getAll()
            .then((characters) => dispatcher(ac.loadActionCreator(characters)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiTask, dispatcher]);

    const handleAdd = (character: ICharacter) => {
        apiTask
            .create(character)
            .then((character: ICharacter) =>
                dispatcher(ac.addActionCreator(character))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (partialCharacter: Partial<ICharacter>) => {
        apiTask
            .update(partialCharacter)
            .then((character: ICharacter) =>
                dispatcher(ac.updateActionCreator(character))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (character: ICharacter) => {
        apiTask
            .delete(character)
            .then(() => dispatcher(ac.deleteActionCreator(character)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        characters,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
