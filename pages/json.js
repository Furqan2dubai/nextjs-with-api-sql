import React, {useEffect, useState} from 'react'
import Nav from '../components/nav.js'
function Json() {
    const [product, setProduct] = useState([]); 

    const getPost = async() => {
        try{
            const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
            setProduct(await data.json()); 
            // console.log(product);
        }
        catch(error){
            throw error;
        }
    }

    useEffect(()=>{
        getPost();
        console.log(product);
    }, []);
  return (
    <div className='container'>
        <Nav />
        <div className='row'>
            <ol>
                {product.map((v,i)=><li key={i} className="col-12">  <h1>{v.title}</h1><p>{v.body}</p> </li>)}
            </ol>
        </div>
    </div>
  )
}

export default Json