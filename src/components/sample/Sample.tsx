import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../store/store";
import * as ac from "../../reducer/action.creator";
import { charactersData } from "../../data/charactersData";

export function Sample() {
    const characters = useSelector((state: rootState) => state.characters);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(ac.loadActionCreator(charactersData));
    }, [dispatcher]);

    return (
        <>
            {characters.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </>
    );
}
