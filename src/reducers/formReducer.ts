
const initialState = {
    period: "一限目",
    subject: "",
    weekday: "月曜日"
}

interface IState {
    period: string,
    subject: string,
    weekday: string
}

interface IAction {
    type: string, 
    payload: string
}

const formReducer = (
    state: IState = initialState,
    action: IAction
) => {
    switch(action.type) {
        case "SET_PERIOD":
            state = {
                ...state,
                period: action.payload
            }
        break;
        case "SET_SUBJECT":
            state = {
                ...state,
                subject: action.payload
            }
        break;
        case "SET_WEEKDAY":
            state = {
                ...state,
                weekday: action.payload
            }
        break;
        default:
            return state;
    }
}

export default formReducer;