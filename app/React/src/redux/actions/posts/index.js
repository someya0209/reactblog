export const POST_INDEX_FETCH_REQUEST = "POST_INDEX_FETCH_REQUEST"; //理解不足、後で

export const postIndexFetchRequest =() => ({
        type: 'POST_INDEX_FETCH_REQUEST'
});

export const savePostIndexData = (json) => ({
        type: 'SAVE_POST_INDEX_DATA',
        payload: {
                json: json,
        }
});
