export const POST_INDEX_FETCH_REQUEST = "POST_INDEX_FETCH_REQUEST";
export const DELETE_POST_INDEX_DATA = "DELETE_POST_INDEX_DATA"; 

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
