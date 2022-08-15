import React, {useState, useEffect} from 'react'
import Nav from '../components/nav.js' 


function Mysql() {

  const [mydata, setData] = useState([]);
  const getData = async() => {
      try{
          const data = await fetch('http://localhost:3000/api/get_data_mysql');
          setData(await data.json());  
      }
      catch(error){
          throw error;
      }
  }

  useEffect(()=>{
    getData();
    console.log(mydata['result']);
  }, []);

    

  return (
    <div className='container'>
        <Nav />
        <div className='row'>
          <ol>
            {mydata['result'] ? mydata['result'].map((v,i)=><li key={i} className="col-12"><h3>{v.name}</h3><b>Price: AED {v.price}</b> </li>) : 'No Data Found...'}
          </ol>
        </div>
    </div>
  )
}

export default Mysql