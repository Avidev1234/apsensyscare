import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const CreateOrder= async()=>{
    return await axios.post('/backend_api/createOrder')
    .then((res)=>res.data)
}
export const CreateSigneture= async(signeture)=>{
    return await axios.post('/backend_api/createSigneture',signeture)
    .then((res)=>res.data)
}
export const fatchSizes = createAsyncThunk('size/sizedetails', async() => {
    return await axios
        .post("/backend_api/size")
        .then((response) => response.data)
});