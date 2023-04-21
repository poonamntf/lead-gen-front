import {
    GET_LEADS_REQUEST, GET_LEADS_SUCCESS, GET_LEADS_FAIL,
    ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL
} from '../constants/constants'

export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return { loading: true }
        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, adminInfo: action.payload }
        case ADMIN_LOGIN_FAIL:
            return { loading: true, error: action.payload }

        default: return state
    }
}
export const getLeadsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_LEADS_REQUEST:
            return { loading: true }
        case GET_LEADS_SUCCESS:
            return { loading: false, leadsData: action.payload }
        case GET_LEADS_FAIL:
            return { loading: true, error: action.payload }

        default: return state
    }
}