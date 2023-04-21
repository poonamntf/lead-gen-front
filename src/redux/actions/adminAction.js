import axios from "axios";
import {
  GET_LEADS_REQUEST,
  GET_LEADS_SUCCESS,
  GET_LEADS_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
} from "../constants/constants";
import { backend_uri_local } from "../../util/constant";
import { message } from "antd";

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

export const adminLogin = (obj) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const { data } = await axios.post(
      `${backend_uri_local}/api/admin/login`,
      obj
    );

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data.data,
    });

    if (data.statuscode === "201") {
      Success("Welcome Back Admin");
      localStorage.setItem("adminInfo", JSON.stringify(data.data));
    } else if (data.statuscode === "401") {
      Error(data.message);
    } else if (data.statuscode === "500") {
      Error(data.message);
    }
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLeads = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LEADS_REQUEST });

    const { data } = await axios.get(`${backend_uri_local}/api/admin/leads`);
    console.log("data in action==>>>", data);

    dispatch({
      type: GET_LEADS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LEADS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
