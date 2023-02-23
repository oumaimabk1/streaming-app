// Step 2: Define a reducer that will update the store with the serie response
interface serieState {
    serieData: any[];
}

const initialState: serieState = {
    serieData: [],
};
const initialserie: any = {
    serieData: {},
};

export const serieReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SERIES_DATA_RECEIVED':
            return {
                serieData: [
                    ...state.serieData,
                    ...action.payload]
            };
        case 'CLEAR_SERIES_DATA':
            return { serieData: [] };


        default:
            return state;
    }
};
export const OneserieReducer = (state = initialserie, action: any) => {
    switch (action.type) {
        case 'ONE_SERIES_RECEIVED':
            return { serieData: action.payload };
        case "ONE_SERIES_CLEAR":
             return { serieData: {} }
        default:
            return state;
    }
};