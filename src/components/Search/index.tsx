import React from "react";
export default () => {
	return (
		<>
			{/* Todo fix animation */}
			<div className="searchContent" aria-label="search menu button">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search"
				/>
			</div>

			<style jsx>
				{`
					.searchContent {
						display: flex;
					}

					.searchContent::before {
						display: block;
						content: "";
						width: 60px;
						min-width: 40px;
						height: 30px;
						border-left: 1px solid #ddd;
						border-right: 1px solid #ddd;
						align-items: center;
						padding-right: 2rem;
						background: url("/images/magnifying-glass.svg")
							no-repeat;
						background-size: 20px 20px;
						background-position-x: 15px;
						background-position-y: 5px;
					}

					.searchContent input[type="text"] {
						display: none;
						font-size: 1rem;
						line-height: 1rem;
						font-family: Helvetica Light;
						border: none;
						outline: none;
						appearance: none;
						-webkit-appearance: none;
						-moz-appearance: none;
						-o-appearance: none;
						transition: transform 1s ease-in-out;
					}

					.searchContent:hover {
						border-bottom: 1px solid rgb(212, 208, 208);
					}

					.searchContent:hover::before {
						border: none;
					}

					.searchContent:hover input[type="text"] {
						display: block;
						transform: translateX(-100);
					}
				`}
			</style>
		</>
	);
};
