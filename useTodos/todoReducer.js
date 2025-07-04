


export const todoReducer = (initialState = [], action)=>{
    console.log(action.type);
    switch(action.type){
        case '[ TODO ] Add Todo':
            return [...initialState, action.payload ]
          
        case '[ TODO ] Remove Todo':
            return initialState.filter( todolist => todolist.id !== action.payload)

        case '[ TODO ] Toggle Todo':
            return initialState.map( todolist => {
                if (todolist.id === action.payload ){
                    return{
                        ...todolist,
                        done:!todolist.done
                    }

                }
                return todolist;
            })

            default:
                return initialState;
    }

}