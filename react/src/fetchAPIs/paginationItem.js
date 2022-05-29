export default function paginationItem(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/pagination?activePage=${data}&limit=2`

        fetch(url, {
            method: "GET",
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