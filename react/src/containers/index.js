import React, { Component } from 'react'
import { connect } from 'react-redux'
import *as actions from '../actions/index'
import ItemComponent from '../components/index'

class ItemContainer extends Component {
    componentDidMount() {
        this.props.getItem()
    }
    render() {
        return (
            <ItemComponent {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.item.listItem,
        activePage: state.item.activePage,
        totalPage: state.item.totalPage,
        textSearch: state.item.textSearch
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getItem: () => {
            dispatch(actions.getItemRequest())
        },
        addItem: (data) => {
            dispatch(actions.addItemRequest(data))
        },
        deleteItem: (data) => {
            dispatch(actions.deleteItemRequest(data))
        },
        updateItem: (data) => {
            dispatch(actions.updateItemRequest(data))
        },
        searchItem: (data) => {
            dispatch(actions.searchItemRequest(data))
        },
        deleteImage: (data) => {
            dispatch(actions.deleteImageRequest(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
