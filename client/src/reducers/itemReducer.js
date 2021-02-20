
import {ITEMS_LOADING, DELETE_ITEM, GET_ITEMS, ADD_ITEM} from '../actions/types';

const initialState = {
    items:[],
    loading: false
}

export default function foo(state = initialState, action){
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state
    }
}