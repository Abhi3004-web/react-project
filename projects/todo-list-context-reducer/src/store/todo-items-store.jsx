import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemContext = createContext({
    todoItems: [],
    onAddClick: () => { },
    onDeleteItem: () => { },
});

const todoItemReducer = (currentTodoItem, action) => {
    let newTodoItems = currentTodoItem;
    if (action.type === "NEW_ITEM") {
        newTodoItems = [...currentTodoItem, {
            itemName: action.payload.addNewItem,
            purchageDate: action.payload.addDueDate
        }];

    } else if (action.type === "DELETE_ITEM") {
        newTodoItems = currentTodoItem.filter((element) => element.itemName !== action.payload.itemName);
    }
    return newTodoItems;
}

const TodoItemContextProvider = ({ children }) => {
    const [todoItems, dispacher] = useReducer(todoItemReducer, []);

    const onAddClick = (addNewItem, addDueDate) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                addNewItem,
                addDueDate
            }
        }
        dispacher(newItemAction);
    }

    const onDeleteItem = (item) => {
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                itemName: item
            }
        }
        dispacher(deleteItemAction);
    }
    return <TodoItemContext.Provider value={{ todoItems, onAddClick, onDeleteItem }}>
        {children}
    </TodoItemContext.Provider>
}

export default TodoItemContextProvider;