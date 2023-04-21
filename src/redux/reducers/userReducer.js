import {
    USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL
} from '../constants/constants'


// export const adminLoginReducer = (state = {}, action) => {
//     switch (action.type) {
//         case ADMIN_LOGIN_REQUEST:
//             return { loading: true }
//         case ADMIN_LOGIN_SUCCESS:
//             return { loading: false, adminInfo: action.payload }
//         case ADMIN_LOGIN_FAIL:
//             return { loading: true, error: action.payload }

//         default: return state
//     }
// }