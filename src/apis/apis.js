const ip='http://localhost:3000'
/* 传的参数是 /api/goods */
import axios from 'axios'
export default function getaxios(abc){
    return axios.get(`${ip}${abc}`)
}