import React, { useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDataLoad from '../../../Hooks/useDataLoad';

const ManageInventory = () => {
    const [products,setProducts]= useDataLoad()
    useEffect(()=>{
        fetch('https://secret-sands-49470.herokuapp.com/products')
        .then(res=>res.json())
          .then(data=>setProducts(data))
    },[products])

    const handleToDelete=(id)=>{
        const confirmation =window.confirm()
        if(confirmation){
          const url=`https://secret-sands-49470.herokuapp.com/products/${id}`
          fetch(url,{
              method:"Delete"
          })
          .then(res=>res.json())
          .then(result=>{
              console.log(result)
             const remainProducts= products.filter(rem=>rem.id !== id)
              setProducts(remainProducts)
            
          })
        }
    }
   
    return (
        <div className="mx-2 mb-3 mt-3">
            <div className='d-flex justify-content-between mb-2'>
            <Link to="/AddItem"><Button variant='outline-success'> Add New Item</Button></Link>
            <h4 className="text-warning">Total Inventory Items: {products.length}</h4>
        <Link to="/AddItem"><Button variant='outline-success'> Add New Item</Button></Link>
            </div>
         <div className="products-container">
         {
             products.map(product=> 
                <div className="product border">
                <img src={product.img} alt="logo" className='fluid w-100' />
                <div className="d-flex justify-content-between p-2 text-start">
                  <div>
                    <p> Item Name:{product.name}</p>
                    <p> Brand:{product.Brand}</p>
                  </div>
                  <div>
                    <p>Price: {product.price}</p>
                    <p className="text-dark fs-5">
                      {" "}
                      Stock:<span className="text-primary fs-5">{product.Stock}</span>
                    </p>
                  </div>
                </div>
                <Button onClick={()=>{handleToDelete(product._id)}} className=" w-50 mb-2" variant="outline-danger">
                Delete 
                </Button>
              </div>
             )
         }
         </div>
        </div>
    );
};

export default ManageInventory;