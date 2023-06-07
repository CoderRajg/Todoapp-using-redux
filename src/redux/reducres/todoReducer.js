import { Add_Todo, Toggle_Todo } from "../actions/todoActions";

const initialstate = {
    todos:[
        {"text":"Drink a coffe", completed:true},
        {"text":"drink as much water u can",completed:false}
    ]
}

export function todoReducer(state = initialstate , action){
    switch (action.type) {
        case Add_Todo:
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed: false
                    }
                ]
            }
        case Toggle_Todo:
            return{
                ...state,
                todos: state.todos.map((todo,i)=>{
                    if(i === action.index){
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }
    
        default:
            return state;
    }
}