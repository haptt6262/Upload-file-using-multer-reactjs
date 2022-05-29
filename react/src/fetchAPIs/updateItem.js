export default function addItem(data) {
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/items"

        fetch(url, {
            method: "PUT",
            body: data
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}