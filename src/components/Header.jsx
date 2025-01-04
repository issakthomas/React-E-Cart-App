import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="flex bg-violet-600 fixed w-full p-5 text-white">
			<Link className="text-2xl font-bold px-5" to={"/"}>
				<i className="fa-solid fa-truck-fast me-1"></i>E cart{" "}
			</Link>
			<ul className="flex-1 text-right">
				<li className="list-none inline-block px-5">
					<input
						className="rounded p-2"
						type="text"
						placeholder="Search products here"
						style={{ width: "300px" }}
					/>
				</li>
				<li className="list-none inline-block px-5">
					<Link to={"/wishlist"}>
						<i className="fa-solid fa-heart text-red-600"></i>
						<span className="px-1">Wishlist</span>
						<span className="bg-black text-white rounded p-1">0</span>
					</Link>
				</li>
				<li className="list-none inline-block px-5">
					<Link to={"/cart"}>
						<i className="fa-solid fa-cart-plus text-green-600"></i>
						<span className="px-1">Cart</span>
						<span className="bg-black text-white rounded p-1">0</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
