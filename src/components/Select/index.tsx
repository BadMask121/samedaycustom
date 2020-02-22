import React from "react";

interface Props {
	children: any;
	props?: Object;
	backgroundColor?: string;
	color?: string;
	rightIcon?: string;
	style?: Object;
}
export default ({
	children,
	rightIcon,
	backgroundColor,
	color,
	style,
	...props
}: Props) => (
	<div className="selectContainer">
		<select {...props} aria-lang="en" aria-label="select button" style={style}>
			{children}
		</select>

		<style jsx>
			{`
				.selectContainer select {
					-webkit-appearance: none;
					-moz-appearance: none;
					height: fit-content;
					min-height: 25px;
					width: fit-content;
					min-width: 10rem;
					padding: 10px;
					padding-left: 15px;
					font-size: 0.8rem;
					font-family: Helvetica Medium, sans-serif;
					border: 0;
					border-radius: 5px;
					color: ${color || "#fff"};
					background: url(${rightIcon ||
							"/images/arrow-b-down-white.svg"})
						no-repeat right ${backgroundColor || "#196bd8"};
					-webkit-appearance: none;
					background-size: 15px 15px;
				}
			`}
		</style>
	</div>
);
