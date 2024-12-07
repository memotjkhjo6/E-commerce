import { Link } from "react-router-dom";
import "./Slider.css";
export default function Product(props) {
  const { product, showButton, showdescription } = props;

  return (
    <>
      <div className="card " style={{ width: "20rem", marginTop: "25px", minHeight: "700px" }}>
        <img src={product.image} className="card-img-top product-image" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title ">{product.title}</h5>
          <p className="card-text lead ">
            {showdescription && `${product.description}`}
          </p>
          <p>Price: {product.price}$</p>
          {showButton && <Link className="btn btn-success" to={`/product/${product.id}`}>Details</Link >}
        </div>
      </div >
    </>
  );
}

