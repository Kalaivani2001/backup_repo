import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Main from './components/main';

function App() {
//   const [data, setData]=useState([])
//   const uploadsFile=async(e)=>{
// console.log(e);
// const formData =new FormData()
// formData.append("name", e.target.files[0].name)
//         formData.append("file", e.target.files[0])

//         axios.post("http://localhost:3001/upload", formData).then((res)=>{
//           console.log(res);
//         }).catch((err)=>{
//           console.log();
//         })

//   }
//   useEffect(()=>{
//     axios.get("http://localhost:3001/uploadImage").then((res)=>{
//       console.log(res.data.data);
//       setData(res.data.data)
//     }).catch((err)=>{
//       console.log(err);
//     })
//   },[])
  return (
    <div className="App">
      <Main/>
      {/* <input type="file" onChange={uploadsFile}/>
      {data.map((item)=>(
      <img src={`http://localhost:3001/uploadImage/${item.image}`}/>

      ))
} */}
    </div>
  );
}

export default App;

