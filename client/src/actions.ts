import { ActionType, IAction } from "./redux/reducer";
import { Dispatch } from "redux";
import axios from 'axios'

const API_LINK = "http://localhost:3200/country";

export function getNameAndCodeAction(body: any) {
    return async (dispatch: Dispatch<IAction>): Promise<void> => {
        try {
            const response = await axios({
                method: "POST",
                url: API_LINK,
                data: body,
            });
            dispatch({
                type: ActionType.getNameAndCode,
                payload: {
                },
            });
        } catch (error) {
            console.log(error)
        }
    };
};

export function getRegionAction(body: any) {
    return async (dispatch: Dispatch<IAction>): Promise<void> => {
        try {
            const response = await axios({
                method: "PUT",
                url: `${API_LINK}/region`,
                data: body,
            });
            const { country } = response.data;
            dispatch({
                type: ActionType.getRegion,
                payload: {
                    country,
                },
            });
        } catch (error) {
            console.log(error)
        }
    };
};

export function getCityAction(body: any) {
    return async (dispatch: Dispatch<IAction>): Promise<void> => {
        try {
            const response = await axios({
                method: "PUT",
                url: `${API_LINK}/city`,
                data: body,
            });
            const { country } = response.data;
            dispatch({
                type: ActionType.getCity,
                payload: {
                    country,
                },
            });
        } catch (error) {
            console.log(error)
        }
    };
};
