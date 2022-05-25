//קריאות שרת


import axios, { Axios } from "axios"

export const getAllUsers=async()=>{
    let x
    x=await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return x.data;
};

export const getAlpost=async()=>{
    let x
    x=await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return x.data;
};