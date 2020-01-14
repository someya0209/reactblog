import { takeLatest, call, put } from 'redux-saga/effects'
import { POST_EDIT_FETCH_REQUEST, POST_EDIT_FETCH_SEARCH, successPostEditData } from '../../actions/posts/edit'
import fetch from 'cross-fetch';
import { createFormData } from '../../../helpers.js';

function fetchPostSearch(payload){
    const url = '/posts/search_post';
    const data = Number(payload.id);
    var formData = new FormData();
    formData.append('id', data);
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
function* requestPostSearch(action){
    let { payload } = action;
    const json = yield call(fetchPostSearch, payload);
    yield put(successPostEditData(json));
    console.log(json);
    if(json) {
        //yield put(loginSuccess());
    } else {
        //yield put(loginFailure(payload));
    }
}

function fetchPostEdit(payload){
    console.log(payload);
    const url = '/posts/edit_posts';
    const data = payload.values;
    var formData = createFormData(data);
    return fetch(url, {
        method: "POST",
        /*
        //json形式での送信がうまくいかない(原因がよくわからないので保留,調べた所Content-Typeなしでうまくいくそう)
        //Content-Type に application/x-www-form-urlencoded あるいは multipart/form-data の時だけ、$_POSTに格納される
        //formdataの形でデータの送信を行う
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        */
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
function* requestPostEdit(action){
    let { payload } = action;
    const json = yield call(fetchPostEdit, payload);
    //yield put(successPostEditData(json));
    console.log(json);
    if(json) {
        //yield put(loginSuccess());
    } else {
        //yield put(loginFailure(payload));
    }
}
const postEditSagas = [
    takeLatest(POST_EDIT_FETCH_SEARCH, requestPostSearch),
    takeLatest(POST_EDIT_FETCH_REQUEST, requestPostEdit),
]
export default postEditSagas;
