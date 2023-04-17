import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { getLeadsReducer } from './redux/reducers/adminReducer'


// const adminInfoFromStorage = localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null

const rootReducers = combineReducers({
    // adminLogin: adminLoginReducer,
    leadsData: getLeadsReducer
})

const initialState = {
    // adminLogin: { adminInfo: adminInfoFromStorage },
    leadsData: { getLeadsReducer }
}



const middleware = [thunk];


const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store 