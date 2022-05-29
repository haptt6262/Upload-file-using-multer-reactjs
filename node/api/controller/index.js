const ItemModel = require('../model/index')
var domain = `http://localhost:3001/`
const fs = require("fs/promises")
const path = require("path")

exports.getItem = async (req, res) => {
    try {
        let listItem = await ItemModel.find()
        res.json({ listItem: listItem })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.addItems = async (req, res) => {
    try {
        let name = req.body.name
        let file = req.files
        let nameImg = []
        for (let i = 0; i < file.length; i++) {
            let url = domain + file[i].filename
            // arrimg =[1,2,3]
            // arrten = ['long','ha']
            nameImg = file[i].originalname
            let arrImg = []
            arrImg.push(url)
            await ItemModel.create({ name: nameImg, img: arrImg })
        }
        res.json("success")
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.addItem = async (req, res) => {
    try {
        const name = req.body.name
        let file = req.files
        let arr = []
        for (let i = 0; i < file.length; i++) {
            const url = domain + file[i].filename
            arr.push(url)
        }
        let newItem = await ItemModel.create({ name, img: arr })
        res.send(newItem)
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.deleteItem = async (req, res) => {
    try {
        let id = req.params.id
        let itemDelete = await ItemModel.findByIdAndDelete(id)
        let listImg = itemDelete.img
        for (let i = 0; i < listImg.length; i++) {
            fs.unlink(path.join(`uploads/${listImg[i].slice(22)}`))
        }
        res.json({ message: 'Success' })
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.deleteImage = async (req, res) => {
    try {
        const id = req.body.id
        const index = req.body.key
        console.log(id, index);
        let imageDelete = await ItemModel.findById(id)
        let listImg = imageDelete.img
        fs.unlink(path.join(`uploads/${listImg[index].slice(22)}`))
        listImg.splice(index, 1)
        if (listImg.length === 0) await ItemModel.findByIdAndDelete(id)
        else await ItemModel.findByIdAndUpdate(id, { img: listImg })
        res.json({ message: 'Success' })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.updateItem = async (req, res) => {
    try {
        let id = req.body.id
        let name = req.body.name
        let file = req.files
        let arrImg = []
        for (let i = 0; i < file.length; i++) {
            url = domain + file[i].filename
            arrImg.push(url)
        }
        let ItemUpdate = await ItemModel.findById(id)
        let listImg = ItemUpdate.img
        if (arrImg.length === 0) {
            await ItemModel.findByIdAndUpdate(id, { name, img: listImg });
        } else {
            await ItemModel.findByIdAndUpdate(id, { name, img: arrImg });
            for (let i = 0; i < listImg.length; i++) {
                fs.unlink(path.join(`uploads/${listImg[i].slice(22)}`))
            }
        }
        res.json({ message: 'Update Success' })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.searchPaginationItems = async (req, res) => {
    try {
        let textSearch = req.query.textSearch
        let listItem = await ItemModel.find({ name: { $regex: textSearch, $options: "i" } })
        let all = await ItemModel.find()
        let arr = []
        for (let i = 0; i < all.length; i++) {
            url = all[i].img.join()
            arr.push(url)
        }
        res.json({ listItem: listItem, message: 'Success' })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.searchPaginationItem = async (req, res) => {
    try {
        let textSearch = req.query.textSearch;
        let matchText = new RegExp(textSearch, 'i');
        let data = await ItemModel.find({
            name: { $regex: textSearch, $options: "i" },
        });
        var imgData = [];
        let arrayImg = [];
        let search = await ItemModel.find()
        for (let i = 0; i < search.length; i++) {
            for (let j = 0; j < search[i].img.length; j++) {
                let imgObj = {};
                imgObj._id = search[i]._id;
                imgObj.name = search[i].name;
                imgObj.img = [];
                imgObj.img.push(search[i].img[j])
                arrayImg.push(imgObj)
            }
        }
        for (let q = 0; q < arrayImg.length; q++) {
            if (arrayImg[q].img[0].match(matchText)) {
                imgData.push(arrayImg[q])
            }
        }
        res.send({ listItem: imgData });
    } catch (error) {
        res.send(error);
    }
};