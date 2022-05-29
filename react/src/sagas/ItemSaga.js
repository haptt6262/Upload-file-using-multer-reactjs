import { put, takeEvery } from 'redux-saga/effects'
import *as types from '../constants'
import *as actions from '../actions/index'

import getItems from '../fetchAPIs/callAPI'
import addItems from '../fetchAPIs/addItem'
import deleteItems from '../fetchAPIs/deleteItem'
import updateItems from '../fetchAPIs/updateItem'
import searchItems from '../fetchAPIs/searchPagination'
import deleteImages from '../fetchAPIs/deleteImage'

function* getItem() {
    try {
        let res = yield getItems()
        yield put(actions.getItemSuccess({ listItem: res.listItem }))
    } catch (error) {
        yield put(actions.getItemFailure(error))
    }
}
function* addItem(action) {
    try {
        yield addItems(action.payload)
        yield put(actions.addItemSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.addItemFailure(error))
    }
}
function* deleteItem(action) {
    try {
        yield deleteItems(action.payload)
        yield put(actions.deleteItemSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.deleteItemFailure(error))
    }
}
function* deleteImage(action) {
    try {
        yield deleteImages(action.payload)
        yield put(actions.deleteImageSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.deleteImageFailure(error))
    }
}
function* updateItem(action) {
    try {
        yield updateItems(action.payload.form)
        yield put(actions.updateItemSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.updateItemFailure(error))
    }
}
function* searchItem(action) {
    try {
        const res = yield searchItems(action.payload)
        // console.log(res, "in saga");
        // yield put(actions.searchItemSuccess({ listItem: res.listItem, totalPage: res.totalPage, activePage: action.payload.activePage, textSearch: action.payload.textSearch }))
        yield put(actions.searchItemSuccess({ listItem: res.listItem }))
    } catch (error) {
        yield put(actions.searchItemFailure(error))
    }
}
export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getItem),
    takeEvery(types.ADD_ITEM_REQUEST, addItem),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteItem),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItem),
    takeEvery(types.SEARCH_ITEM_REQUEST, searchItem),
    takeEvery(types.DELETE_IMAGE_REQUEST, deleteImage),
]