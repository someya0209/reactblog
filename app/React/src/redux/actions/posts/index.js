export const POST_INDEX_FETCH_REQUEST = "POST_INDEX_FETCH_REQUEST";
export const DELETE_POST_INDEX_DATA = "DELETE_POST_INDEX_DATA";
export const SUCCESS_DIALOG_OPEN = "SUCCESS_DIALOG_OPEN";
export const CHECK_DIALOG_OPEN = "CHECK_DIALOG_OPEN";

export const postIndexFetchRequest =() => ({
        type: 'POST_INDEX_FETCH_REQUEST'
});
export const postIndexDelete = (id) => ({
    type: 'DELETE_POST_INDEX_DATA',
    payload: {
            id: id,
    }
});
export const savePostIndexData = (json) => ({
        type: 'SAVE_POST_INDEX_DATA',
        payload: {
                json: json,
        }
});
export const postSetSuccessDialogOpen = (flag) => ({
        type: 'SUCCESS_DIALOG_OPEN',
        payload: {
            deleteDialogOpen: flag,
        }
});
export const postSetCheckDialogOpen = (flag) => ({
        type: 'CHECK_DIALOG_OPEN',
        payload: {
            checkDialogOpen: flag,
        }
});
