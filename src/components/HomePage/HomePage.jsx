import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import  {fetchProducts } from "../../features/getAllProducts/getAllProductsSlice"
import Loading from "../shared/Loading"
import ProductCard from "./ProductCard";
function HomePage() {
    const {loading,products, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    console.log(products)
    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);

  return (
<div className="flex justify-center items-center">
{ loading ? <Loading /> : null}
{ error ? (
    <h2 className="text-red-600 text-xl text-center mt-10">{error}</h2>
) : null}
{/* <div className="flex gap-[20px] flex-wrap "> */}
<div className="w-full grid grid-cols-4 gap-8 pt-5 px-2">
{products?.length > 0  ? (products.map(product => ( <ProductCard data={product} key={product.id}/>))) : null}
</div>
</div>
  );
}
export default HomePage;
