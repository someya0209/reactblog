import { takeLatest, call, put } from 'redux-saga/effects'
import { POST_ADD_FETCH_REQUEST , successPostAddData } from '../../actions/posts/add'
import fetch from 'cross-fetch';
import { createFormData } from '../../../helpers.js';

function fetchPostAdd(payload){
    const url = '/posts/add_posts';
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
function* requestPostAdd(action){
    let { payload } = action;
    const json = yield call(fetchPostAdd, payload);
    //yield put(successPostAddData(json));
    console.log(json);
    if(json) {
        //yield put(loginSuccess());
    } else {
        //yield put(loginFailure(payload));
    }
}
const postAddSagas = [
    takeLatest(POST_ADD_FETCH_REQUEST, requestPostAdd),
]
export default postAddSagas;
