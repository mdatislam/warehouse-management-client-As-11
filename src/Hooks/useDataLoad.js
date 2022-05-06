import { useEffect, useState } from "react"

const useDataLoad=()=>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://secret-sands-49470.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return [products, setProducts]

}
export default useDataLoad;