export const POST_EDIT_FETCH_REQUEST = "POST_EDIT_FETCH_REQUEST";
export const POST_EDIT_FETCH_SEARCH = "POST_EDIT_FETCH_SEARCH";

export const postEditFetchSearch =(id) => ({
    type: 'POST_EDIT_FETCH_SEARCH',
    payload: {
        id: id,
    }
});
export const postEditFetchRequest =(values) => ({
    type: 'POST_EDIT_FETCH_REQUEST',
    payload: {
        values: values,
    }
});
export const successPostEditData = (json) => ({
    type: 'SUCCESS_POST_EDIT_DATA',
    payload: {
        json: json,
    }
});
