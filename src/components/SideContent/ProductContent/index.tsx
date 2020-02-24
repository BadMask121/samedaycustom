import React from "react";
import { useRouter } from "next/router";

export default () => {
	const Router = useRouter();
	console.log(Router);
	return (
		<div>
			Product Content id: {Router.query["id"]}
			<button onClick={() => Router.push("/", "/", { shallow: true })}>
				Got to home
			</button>
		</div>
	);
};
