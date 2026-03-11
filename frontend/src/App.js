import { useEffect, useState } from "react";

function App() {

  const [data,setData] = useState("");

  useEffect(()=>{
    fetch("http://localhost:5000")
    .then(res=>res.json())
    .then(data=>setData(JSON.stringify(data)))
  },[])

  return (
    <div>
      <h1>Welcome to GISFY Company</h1>
      <p>Hello All:</p>
      <pre>{data}</pre>
    </div>
  );
}

export default App;
