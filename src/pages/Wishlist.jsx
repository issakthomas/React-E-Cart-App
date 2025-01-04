import Header from "../components/Header";

const Wishlist = () => {
	return (
		<>
			<Header />
			<div className="px-5" style={{ paddingTop: "100px" }}>
				<>
					<h1 className="text-4xl font-bold text-red-600">My Wishlist</h1>
					<div className="grid grid-cols-4 gap-4">
						<div className="rounded border p-2 shadow">
							<img
								src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid"
								alt=""
								style={{ width: "100%", height: "250px" }}
							/>
							<div className="text-center">
								<h3 className="text-xl font-bold">Product Name</h3>
								<div className="flex justify-evenly mt-3">
									<button className="text-xl">
										<i className="fa-solid fa-heart-circle-xmark text-red-500"></i>
									</button>
									<button className="text-xl">
										<i className="fa-solid fa-cart-plus text-green-700"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			</div>
		</>
	);
};

export default Wishlist;
