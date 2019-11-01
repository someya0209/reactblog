export const POST_INDEX_FETCH_REQUEST = "POST_INDEX_FETCH_REQUEST"; //理解不足、後で

export const postIndexFetchRequest =() => ({
        type: 'POST_INDEX_FETCH_REQUEST'
});

export const inputTask =(task) => ({
        type: 'INPUT_TASK',
        payload: {
                task
        }
});

export const addTask =(task) => ({
        type: 'ADD_TASK',
        payload: {
                task
        }
});
