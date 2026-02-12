import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import  {fetchProducts } from "../../features/getAllProducts/getAllProductsSlice"
import Loading from "../shared/Loading"
function HomePage() {
    const {loading,products, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    console.log(products)
    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);

  return (
<div>
{ loading ? <Loading /> : null}
{ error ? (
    <h2 className="text-red-600 text-xl text-center mt-10">{error}</h2>
) : null}
{products?.length > 0  ? (products.map(product => (<p key={product.id}>{product.title}</p>))) : null}
</div>
  );
}

export default HomePage;
