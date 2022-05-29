export default function paginationItem(data) {
    return new Promise((resolve, reject) => {
        // const url = `http://localhost:3001/search-pagination?activePage=${data.activePage}&limit=2&textSearch=${data.textSearch}`
        const url = `http://localhost:3001/search-pagination?textSearch=${data.textSearch}`
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