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
        <ul>
            {characters.map((item) => (
                <li>
                    <div key={item.id}>
                        {item.name} is currently{" "}
                        {item.status ? "alive" : "dead"}{" "}
                    </div>
                    <button
                        onClick={() => {
                            dispatcher(ac.deleteActionCreator(item));
                        }}
                    >
                        DELETE CHARACTER {item.id}
                    </button>
                    <input
                        type="checkbox"
                        name="alivecheck"
                        id="alivecheck"
                        onChange={() => {
                            dispatcher(
                                ac.updateActionCreator({
                                    ...item,
                                    status: !item.status,
                                })
                            );
                        }}
                    />
                    change status
                </li>
            ))}
        </ul>
    );
}
