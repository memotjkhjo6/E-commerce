import "./Slider.css";
export default function Clider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688501.jpg?t=st=1733474617~exp=1733478217~hmac=b12b917e9347862f705d021d93280e849f15c5d64e60f70aad2adff37175af01&w=996" className="heigth-600 d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/large-sale-word-with-shopping-cart-gift-boxes-store-map-with-pointer-realistic-style-vector-illustration_548887-126.jpg?t=st=1733474950~exp=1733478550~hmac=a3ac07288630c19f69894ae992c3179ed5e1ee72b4deb574f0cfa9b13b3557a1&w=1060" className="heigth-600 d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/online-delivery-banner-with-realistic-laptop-parcels-clouds-social-icons-realistic-style_548887-53.jpg?t=st=1733474906~exp=1733478506~hmac=2674cc268c051ed1195e11d8abf1f1535412b69489a2dea2e01fdd44e5f45311&w=1380" className="heigth-600 d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span style={{ backgroundColor: "black", borderRadius: "6px" }} className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span style={{ backgroundColor: "black", borderRadius: "6px" }} className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
