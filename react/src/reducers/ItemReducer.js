import *as types from '../constants'

const DEFAULT_STATE = {
    listItem: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    textSearch: '',
    totalPage: 0,
    activePage: 1

}
const ItemReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                listItem: action.payload.listItem
            }
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.error
            }
        case types.ADD_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.ADD_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
            }
        case types.ADD_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.error
            }

        case types.DELETE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
            }
        case types.DELETE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.error
            }

        case types.DELETE_IMAGE_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.DELETE_IMAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
            }
        case types.DELETE_IMAGE_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.error
            }

        case types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
            }
        case types.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.error
            }
        case types.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                listItem: action.payload.listItem,
                // textSearch: action.payload.textSearch,
                // activePage: action.payload.activePage,
                // totalPage: action.payload.totalPage
            }
        case types.SEARCH_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.error
            }

        default:
            return state;
    }
}
export default ItemReducer