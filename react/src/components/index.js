import React, { Component } from 'react'
import TinyComponent from './TinyComponent'

export default class ItemComponent extends Component {
    state = {
        name: '',
        listImgUpload: [],
        listImgPreview: [],
        textSearch: '',
        nameImage: []
    }
    handlePreview(file) {
        this.setState({ listImgUpload: file })
        let arrImgPreview = []
        for (let i = 0; i < file.length; i++) {
            let url = URL.createObjectURL(file[i])
            arrImgPreview.push(url)
        }
        this.setState({ listImgPreview: arrImgPreview })
    }
    handleUpload() {
        let listImg = this.state.listImgUpload
        if (listImg.length >= 1) {
            let form = new FormData()
            for (let i = 0; i < listImg.length; i++) {
                form.append("img", listImg[i])
            }
            form.append("name", this.state.name)
            this.props.addItem(form)
            this.setState({ listImgPreview: [] })
            document.getElementById("myFile").value = "";
            // document.getElementById("name").value = "";
        }
        else {
            alert("Please enter your file or your name")
        }

    }
    handleUpdate() {
        let form = new FormData()
        let listImg = this.state.listImgUpload
        for (let i = 0; i < listImg.length; i++) {
            form.append("img", listImg[i])
        }
        form.append("id", this.state.id)
        form.append("name", this.state.name)
        this.props.updateItem({ form })
        this.setState({ listImgPreview: [] })
    }

    render() {
        let listData = []
        if (this.props.items) {
            listData = this.props.items.map((item, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{item.name}</th>
                        <th>{item.img.map((image, key) => {
                            return (
                                <span key={key}>
                                    <img src={image} alt="Anh" width="100px" height="100px" />
                                    <button onClick={() => { this.props.deleteImage({ id: item._id, key: key }) }}>x</button>
                                </span>
                            )
                        })}</th>
                        <th>
                            <button onClick={() => { this.props.deleteItem({ id: item._id }) }}>DELETE</button>
                        </th>
                        <th>
                            <button onClick={() => { this.setState({ name: item.name, id: item._id, listImgPreview: item.img }) }}>SELECT</button>
                        </th>
                    </tr>
                )
            })
        }
        return (
            <div>
                <div>
                    <input onChange={(e) => { this.setState({ name: e.target.value }) }} id="name" value={this.state.name} />
                    <button onClick={() => { this.handleUpdate() }}>UPDATE</button>
                </div>
                <div>
                    <input onChange={(e) => { this.setState({ textSearch: e.target.value }) }} />
                    {/* <button onClick={() => { this.props.searchItem({ textSearch: this.state.textSearch, activePage: 1 }) }}>SEARCH P</button> */}
                    <button onClick={() => { this.props.searchItem({ textSearch: this.state.textSearch }) }}>SEARCH</button>
                </div>
                <div>
                    <input type="file" id='myFile' multiple onChange={(e) => { this.handlePreview(e.target.files) }} />
                    <button onClick={() => { this.handleUpload() }}>UPLOAD</button>
                </div>
                <div>
                    {
                        this.state.listImgPreview.map((img, index) => {
                            return (
                                <div key={index}>
                                    <span >
                                        <img src={img} alt="IMG" width="100px" height="100px" />
                                    </span>

                                    <input onChange={(e) => { console.log("value: ", e.target.value); }} />
                                </div>
                            )
                        })
                    }
                </div>

                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                            </tr>
                            {listData}
                        </tbody>
                    </table>
                </div>

                <TinyComponent />
            </div>
        )
    }
}
