import {take, put, call, fork} from 'redux-saga/effects';
import {request, success, failure} from '../features/item/itemSlice';

import {ApiHelper} from 'src/helpers/ApiHelper';

function callGetRequest(url, data, headers) {
    return ApiHelper.get(url, data, headers);
}

function* watchRequest () {  //* is a generator function
    while (true) {
        const {payload} = yield take(request);

        try {
            let response;
            resposne = yield call(callGetRequest, payload.url, {});
            yield put (success(response));
        } catch (er) {
            yield put (failure(er))
        }
    }
}