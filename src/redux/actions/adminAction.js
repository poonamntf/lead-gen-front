import axios from 'axios'
import { GET_LEADS_REQUEST, GET_LEADS_SUCCESS, GET_LEADS_FAIL } from '../constants/constants'
import { backend_uri_local } from '../../util/constant'


export const getLeads = () => async (dispatch) => {
    try {
        dispatch({ type: GET_LEADS_REQUEST })

        const { data } = await axios.get(`${backend_uri_local}/api/admin/leads`)
        console.log("data in action==>>>", data);

        dispatch({
            type: GET_LEADS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_LEADS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}