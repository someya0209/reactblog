const initialState = {
        posts: [],
        deleteDialogOpen: false,
        checkDialogOpen: false,
};

export default function (state = initialState, action) {
        switch(action.type){
                case 'SAVE_POST_INDEX_DATA':
                return {
                    ...state,
                    posts: action.payload.json,
                };
                case 'SUCCESS_DIALOG_OPEN':
                return {
                    ...state,
                    deleteDialogOpen: action.payload.deleteDialogOpen,
                };
                case 'CHECK_DIALOG_OPEN':
                return {
                    ...state,
                    checkDialogOpen: action.payload.checkDialogOpen,
                };
                default:
                        return state;
        }
}
