import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="px-4 mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded border p-2 shadow">
            <img
              src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid"
              alt=""
              style={{ width: "100%", height: "250px" }}
            />
            <div className="text-center">
              <h3 className="text-xl font-bold">Product Name</h3>
              <Link
                to={"/:id/view"}
                className="bg-violet-600 rounded p-2 mt-3 text-white inline-block"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
