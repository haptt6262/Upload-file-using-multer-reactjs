export default function addItem(data) {
    // console.log(data, "fetch");
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/items"

        fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(data)
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