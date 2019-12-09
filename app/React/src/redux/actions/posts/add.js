export const POST_ADD_FETCH_REQUEST = "POST_ADD_FETCH_REQUEST"; //理解不足、後で

export const postAddFetchRequest =(values) => ({
    type: 'POST_ADD_FETCH_REQUEST',
    payload: {
        values: values,
    }
});
export const successPostAddData = (json) => ({
    type: 'SUCCESS_POST_ADD_DATA',
    payload: {
        json: json,
    }
});
