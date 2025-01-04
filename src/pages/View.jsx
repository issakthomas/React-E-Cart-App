import Header from "../components/Header";

const View = () => {
  return (
    <>
      <Header />
      <div className="fle flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <img
            src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid"
            alt=""
            style={{ width: "100%", height: "250px" }}
          />
          <div>
            <h3 className="font-bold">PID: id</h3>
            <h1 className="text-5xl">Product Name</h1>
            <h4 className="font-bold text-red-600">$250</h4>
            <h4>Brand: brand</h4>
            <h4>Category: category</h4>
            <p>
              <span className="font-bold">Description:</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
              id nemo consequuntur, ea sapiente qui eius porro temporibus
              voluptates debitis, rerum perspiciatis fugit laboriosam nesciunt,
              at recusandae distinctio. Adipisci?
              <div className="flex justify-between mt-5">
                <button className="bg-blue-600 text-white p-2">
                  Add to Wishlist
                </button>
                <button className="bg-green-600 text-white p-2">
                  Add to Cart
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
