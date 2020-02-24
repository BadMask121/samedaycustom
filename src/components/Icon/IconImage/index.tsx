import React from "react";
interface Prop {
	image: string;
	backgroundColor?: string;
}
export default ({ image, backgroundColor }: Prop) => {
	return (
		<>
			<i className="imageContainer"></i>
			<style jsx>
				{`

				.imageContainer{
					display: flex;
					flex-direction:row;
					margin-top: 10px;
				}
                        .imageContainer::before {
							display: block;
							content: "";
							height: 40px;
							width: 40px;
							border-radius: 50%;
							background: ${backgroundColor || "#529ded"};
						}
						.imageContainer::after {
							display: block;
							content: "";
							position: absolute;
							transform: scale(0.9);
							height: 40px;
							width: 40px;
							border-radius: 50%;
							background: url("${image}") no-repeat;
							background-size: cover;
						}
				`}
			</style>
		</>
	);
};
