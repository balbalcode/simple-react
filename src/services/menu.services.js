import axios from "axios"

export const menuServices = {
    get
};

async function get(){
    return axios.get(`${process.env.REACT_APP_APIURL}products`).
    then( (response) => {
        return response
    })
    .catch((error) => {
        return Promise.reject(error)
    })
}