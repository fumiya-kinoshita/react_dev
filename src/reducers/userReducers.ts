
const initialState = {
    name: "",
    school: ""
}

interface IState {
    name: string,
    school: string
}

interface IAction {
    type: string,
    payload: string
}

const userReducer = (
    state: IState = initialState,
    action: IAction
) => {
    switch(action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
        break;
        case "SET_SCHOOL":
            state = {
                ...state,
                school: action.payload
            }
        break;
        default:
            return state;
    }
}

export default userReducer;