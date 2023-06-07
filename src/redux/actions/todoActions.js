// Actions

export const Add_Todo = "Add todo";
export const Toggle_Todo = "Toggle todo";

//Action creators

export const addTodo = (text)=>({text,type:Add_Todo});
export const toggleTodo = (index)=>({index,type:Toggle_Todo});