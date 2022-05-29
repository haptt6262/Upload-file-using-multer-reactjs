// import * as constants from "../constants"
// export default function addDataApi(method, path, data) {
//     let objFetch = {}
//     if(method === constants.HTTP_READ || method === constants.HTTP_DELETE){
//         objFetch = {
//             method
//           }
//     }else{
//         objFetch = {
//             method,
//             headers: constants.HTTP_HEADER_JSON,
//             body: JSON.stringify(data)
//           }
//     }
//     return new Promise((resolve, reject) => {
//         const url = constants.DOMAIN + path
//         fetch(url, objFetch)
//             .then((response) => resolve(response.json()))
//             .catch((error) => reject(error));
//     });
// }

export default function addItem(data) {
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/items"

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