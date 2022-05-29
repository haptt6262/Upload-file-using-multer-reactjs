import * as types from '../constants'

export function getItemRequest(payload) {
    return {
        type: types.GET_ITEM_REQUEST,
        payload
    }
}
export function getItemSuccess(payload) {
    return {
        type: types.GET_ITEM_SUCCESS,
        payload
    }
}
export function getItemFailure(payload) {
    return {
        type: types.GET_ITEM_FAILURE,
        payload
    }
}


export function addItemRequest(payload) {
    return {
        type: types.ADD_ITEM_REQUEST,
        payload
    }
}
export function addItemSuccess(payload) {
    return {
        type: types.ADD_ITEM_SUCCESS,
        payload
    }
}
export function addItemFailure(payload) {
    return {
        type: types.ADD_ITEM_FAILURE,
        payload
    }
}

export function deleteItemRequest(payload) {
    return {
        type: types.DELETE_ITEM_REQUEST,
        payload
    }
}
export function deleteItemSuccess(payload) {
    return {
        type: types.DELETE_ITEM_SUCCESS,
        payload
    }
}
export function deleteItemFailure(payload) {
    return {
        type: types.DELETE_ITEM_FAILURE,
        payload
    }
}

export function deleteImageRequest(payload) {
    return {
        type: types.DELETE_IMAGE_REQUEST,
        payload
    }
}
export function deleteImageSuccess(payload) {
    return {
        type: types.DELETE_IMAGE_SUCCESS,
        payload
    }
}
export function deleteImageFailure(payload) {
    return {
        type: types.DELETE_IMAGE_FAILURE,
        payload
    }
}

export function updateItemRequest(payload) {
    return {
        type: types.UPDATE_ITEM_REQUEST,
        payload
    }
}
export function updateItemSuccess(payload) {
    return {
        type: types.UPDATE_ITEM_SUCCESS,
        payload
    }
}
export function updateItemFailure(payload) {
    return {
        type: types.UPDATE_ITEM_FAILURE,
        payload
    }
}

export function searchItemRequest(payload) {
    return {
        type: types.SEARCH_ITEM_REQUEST,
        payload
    }
}
export function searchItemSuccess(payload) {
    return {
        type: types.SEARCH_ITEM_SUCCESS,
        payload
    }
}
export function searchItemFailure(payload) {
    return {
        type: types.SEARCH_ITEM_FAILURE,
        payload
    }
}