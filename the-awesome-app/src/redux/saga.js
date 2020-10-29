import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchCategory(){

    const resp = yield axios.get("http://localhost:9010/categories");

    yield put({type: "UPDATE_CATS", payload: resp.data});

}

function* rootSaga() {
    yield takeLatest("FETCH_CATEGORIES", fetchCategory);
}

export default rootSaga;



