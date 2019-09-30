import { takeLatest, call, put,all } from 'redux-saga/effects';

import ShopActionTypes from "./shop.types";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase.util";
import {fetchCollectionFailure, fetchCollectionSuccess} from "./shop.actions";

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap,snapShot);
        yield put(fetchCollectionSuccess(collectionsMap));
    }catch (error) {
        yield put (fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas(){
    yield all([
        fetchCollectionsStart
    ]);
}