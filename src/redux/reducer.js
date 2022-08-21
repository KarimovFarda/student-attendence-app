import {
    ADD_LISTITEM,
    DELETE_LISTITEM,
    UPDATE_LISTITEM
} from './action'
import myJson from '../data.json';



export let reducer = (state = myJson, action) => {
    let newToDo;
    switch (action.type) {
        case ADD_LISTITEM:
            newToDo = [...state];
            newToDo.push(action.payload);
            return newToDo;
        case DELETE_LISTITEM:
            newToDo = [...state];
            newToDo = newToDo.filter(todo => todo.id !== action.payload)
            return newToDo;
        case UPDATE_LISTITEM:
            newToDo = [...state];

            let index = -1;
            for (const element of newToDo) {
                index++;

                if (element.id === action.payload.id) {
                    break
                }
            }
            if (index !== -1) {
                newToDo[index] = action.payload;
                return newToDo;
            }
            break;
        default:
            return state
    }
}