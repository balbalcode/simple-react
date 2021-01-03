import axios from "axios"

export const categoriesServices = {
    get
};

async function get(){
    return axios.get(`${process.env.REACT_APP_APIURL}categories`).
    then( (response) => {
        return response
    })
    .catch((error) => {
        return Promise.reject(error)
    })
}