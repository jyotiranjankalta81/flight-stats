import axios from "axios";


const JsonURL = "http://13.50.84.227:5000/";
const headers = {
    'Content-Type': 'application/json',
}

// const backendURL = "http://localhost:8000/api/"
// const backendURL = "https://backlom.techjainsupport.co.in/api/"
const backendURL = 'http://13.50.84.227:8000/api/'
// export const imageBacked = 'http://jyotiranjankalta.tech:8000/'

export const axiosInstance = axios.create({
    baseURL: backendURL,
    headers: headers
})

export const axiosInstances = axios.create({
    baseURL: JsonURL,
    headers: headers
});


