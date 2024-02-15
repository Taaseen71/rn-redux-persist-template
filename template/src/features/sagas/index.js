import { fork } from "redux-saga/effects";

import item from './item'

export default function* Sagas(){
    yield fork(item)
}