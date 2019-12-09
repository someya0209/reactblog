const initialState = {
        postdata: {},
    };

    export default function (state = initialState, action) {
        switch(action.type){
            case 'SUCCESS_POST_ADD_DATA':
            return {
                ...state,
                postdata: action.payload.json,
            };
            default:
            return state;
        }
    }
