export interface IState {
    country: any;
    isLoading: boolean;
}

export interface IAction {
    type: ActionType;
    payload: Record<string, any>;
}

export enum ActionType {
    getNameAndCode = 'GET_NAME_CODE',
    getRegion = 'GET_REGION',
    getCity = 'GET_CITY',
}

const getInitialState = (): IState => {
    return {
     country: null,
     isLoading: false,
    };
}

export const reducer = (state: IState = getInitialState(), action: IAction) => {
    switch (action.type) {
        case ActionType.getNameAndCode: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case ActionType.getRegion: {
            const { country } = action.payload;
            return {
               country,
               isLoading: true,

            }
        }
        case ActionType.getCity: {
            const { country } = action.payload;
            const modifiedCountry = state.country;
            modifiedCountry.cities = country.cities;
            return { 
               country: modifiedCountry,
               isLoading: false,
            }
        }
        default: {
            return state;
        }
    }
}