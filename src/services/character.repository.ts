import { ICharacter } from "../models/character";
import { Repository } from "./repository";

export class CharacterRepository implements Repository<ICharacter> {
    url: string;
    constructor(
        url = "https://gotreduxbackend-production.up.railway.app/characters"
    ) {
        this.url = url ? url : (process.env.REACT_APP_URL_CHARACTERS as string);
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = "HTTPError";
        return error;
    }

    // read / get
    getAll(): Promise<Array<ICharacter>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    // create / post
    create(task: Partial<ICharacter>): Promise<ICharacter> {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    // delete
    delete(character: ICharacter): Promise<void> {
        return fetch(`${this.url}/${character.id}`, {
            method: "DELETE",
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }

    // update / patch
    update(partialTask: Partial<ICharacter>): Promise<ICharacter> {
        return fetch(`${this.url}/${partialTask.id}`, {
            method: "PATCH",
            body: JSON.stringify(partialTask),
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }
}
