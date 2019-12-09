import { takeLatest, call, put } from 'redux-saga/effects'
import { POST_INDEX_FETCH_REQUEST, DELETE_POST_INDEX_DATA, savePostIndexData } from '../../actions/posts/index'
import fetch from 'cross-fetch';
import { createFormData } from '../../../helpers.js';

function fetchPostIndex(payload){
    const url = '/posts/get_posts';
    console.log("payload"+payload);
    return fetch(url)
    .then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    })
    .then(json => {
        console.log(json);
        return json;
    })
    .catch(err => {
        console.error(err);
    });
}
function* requestPostIndex(action){
    let { payload } = action;
    const json = yield call(fetchPostIndex, payload);
    yield put(savePostIndexData(json));
    //console.log(json);
    if(json) {
        //yield put(loginSuccess());
    } else {
        //yield put(loginFailure(payload));
    }
}

function fetchPostDelete(payload){//改良の余地あり
    const url = '/posts/delete_post';
    const id = payload.id;
    var formData = new FormData();
    formData.append('id', id);
    //var formData = createFormData(id);
    return fetch(url, {
        method: "POST",
        body: formData,
    })
    .then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    })
    .then(json => {
        console.log(json);
        return json;
    })
    .catch(err => {
        console.error(err);
    });
}
function* requestPostDelete(action){
    let { payload } = action;
    const json = yield call(fetchPostDelete, payload);
    //console.log(json);
    if(json) {
        //yield put(loginSuccess());
    } else {
        //yield put(loginFailure(payload));
    }
}

const postIndexSagas = [
    takeLatest(POST_INDEX_FETCH_REQUEST, requestPostIndex),
    takeLatest(DELETE_POST_INDEX_DATA, requestPostDelete),
]
export default postIndexSagas;
