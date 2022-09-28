import React,{useState} from 'react'
import Logo from "./Image/Planet.png";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const [Open, setOpen] = useState(false);
	
  return (
		<>
			<div className="container flex sticky top-0 items-center justify-between text-white bg-black ">
				<div>
					<h2 className="text-2xl tracking-[.2rem]">Space</h2>
				</div>
				<div>
					<img src={Logo} alt="Logo" className="medium:w-14 w-16" />
				</div>

				<div>
					<button onClick={() => setOpen(!Open)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-10 h-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</button>
					<div className={Open ? "open" : "close"}>
						<nav>
							<ul
								id="bars"
								className="bg-black text-white h-[94vh] px-12 flex justify-center flex-col text-center gap-3 absolute right-0 w-50%"
							>
								<li>
									<NavLink to="/">Home</NavLink>
								</li>{" "}
								<li>
									<NavLink to="/Planets">Planets</NavLink>
								</li>
								<li>
									<NavLink to="/Galaxies">Galaxies</NavLink>
								</li>
								<li>
									<NavLink to="/Satelities">
										Satellities
									</NavLink>
								</li>
								<li>
									<NavLink to="/Gallery">Gallery</NavLink>
								</li>
								<li>
									<NavLink to="/Forum">Forum</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
  );
}

export default NavBar