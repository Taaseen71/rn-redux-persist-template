import { fork } from "redux-saga/effects";

import item from './item'

export default function* rootSaga(){
    yield fork(item)
}
