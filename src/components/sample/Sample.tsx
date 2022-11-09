import { useCharacters } from "../../hooks/useCharacters";

export function Sample() {
    const { characters, handleDelete, handleUpdate } = useCharacters();

    return (
        <ul>
            {characters.map((item) => (
                <li key={item.id}>
                    <div key={item.id}>
                        {item.name} is currently{" "}
                        {item.status ? "alive" : "dead"}{" "}
                    </div>
                    <button
                        onClick={() => {
                            handleDelete(item);
                        }}
                    >
                        DELETE CHARACTER {item.id}
                    </button>
                    <input
                        type="checkbox"
                        name="alivecheck"
                        id="alivecheck"
                        onChange={() => {
                            handleUpdate({
                                ...item,
                                status: !item.status,
                            });
                        }}
                    />
                    change status
                </li>
            ))}
        </ul>
    );
}
