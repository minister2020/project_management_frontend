// import axios from 'axios'
// import { getNewToken } from '../redux/actions/userActions';
// import store from '../redux/store'

// // dotenv.config();


// // const url = process.env.REACT_APP_BASE_URL;
// const {getState, dispatch} = store
// const {userLogin:{userInfo}} = getState();
// const headers = {
//     'Content-Type':'application/json'
// };

// const api = axios.create({
//     baseURL:  'http://localhost:8082/',
//     headers
// })
// // const {getState, dispatch} = store
// // const {userLogin:{userInfo}} = getState();


// api.interceptors.request.use((req)=>{
//     // res.headers('Access-Control-Allow-Origin', '*');
//     const userItem = JSON.parse(localStorage.getItem("userToken"))
//     if(userItem){
//         // req.headers.Authorization = `Bearer ${userInfo.token}`;
//         req.headers.Authorization = `Bearer ${userItem.token}`;
//     }

//     return req;
// }, 
// (error)=>{
//     return Promise.reject(error)
// })





// export default api;