import axios from 'axios'
import {
    USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL
} from '../constants/constants'
import { backend_uri_local } from '../../util/constant'
import { message } from 'antd'


const Success = (value) => {
    return message.success({
        content: `${value}!`,
        duration: 2,
    });
};

const Error = (value) => {
    return message.error({
        content: `${value}!`,
        duration: 2,
    });
};


export const userRegister = (obj) => async (dispatch) => {
    try {
        dispatch({ type: USER_SIGNUP_REQUEST })

        const { data } = await axios.post(`${backend_uri_local}/api/user/register`, obj)
        console.log("data", data);

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data.data
        })

        if (data.status === 201) {
            Success(data.message)
        } else if (data.status === 403) {
            Error(data.message)
        } else if (data.status === 404) {
            Error(data.message)
        } else if (data.status === 401) {
            Error(data.message)
        } else if (data.status === 500) {
            Error(data.message)
        }
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
