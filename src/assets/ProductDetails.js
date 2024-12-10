import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";

function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products"
    const params = useParams();
    const [product, setProduct] = useState({})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product))
    }, [])

    return (
        <>
            <Product product={product} showButton={false} showdescription={true} />
        </>
    );
}

export default ProductDetails;