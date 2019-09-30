import ShopActionTypes from "./shop.types";

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionFailure = errMsg => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errMsg
});
