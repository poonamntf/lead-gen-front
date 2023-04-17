import { GET_LEADS_REQUEST, GET_LEADS_SUCCESS, GET_LEADS_FAIL } from '../constants/constants'


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