const initialState = {
        postdata: {},
    };

    export default function (state = initialState, action) {
        switch(action.type){
            case 'SUCCESS_POST_EDIT_DATA':{
                const {json} = action.payload;
                return {
                    ...state,
                    postdata: json.data.Post,
                };
            }
            default:
            return state;
        }
    }
