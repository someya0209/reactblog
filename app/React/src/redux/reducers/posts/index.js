const initialState = {
        posts: [],
};

export default function (state = initialState, action) {
        switch(action.type){
                case 'SAVE_POST_INDEX_DATA':
                        return {
                                ...state,
                                posts: action.payload.json,
                        };
                default:
                        return state;
        }
}
