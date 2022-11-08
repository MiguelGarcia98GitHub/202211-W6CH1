import { ICharacter } from "./../models/character";
import { createAction } from "@reduxjs/toolkit";

import { actionTypes } from "./action.types";

export const loadActionCreator = createAction<Array<ICharacter>>(
    actionTypes.load
);

export const addActionCreator = createAction<ICharacter>(actionTypes.add);

export const updateActionCreator = createAction<ICharacter>(actionTypes.update);

export const deleteActionCreator = createAction<ICharacter>(actionTypes.delete);
