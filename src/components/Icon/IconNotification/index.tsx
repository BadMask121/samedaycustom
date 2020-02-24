import React from "react";
interface Prop {
	image?: string;
	content: string;
	backgroundColor?: string;
	color?: string;
	children?: any;
}
export default ({ image, content, backgroundColor, color, children }: Prop) => {
	return (
		<>
			{(children && <i>{children}</i>) || <i></i>}
			<style jsx>
				{`
					i {
						display: block;
						content: "";
                        height: inherit;
                        min-height: 40px;
						width: 24px;
						margin-right: 0.5rem;
						background: url("${image}") no-repeat;
						background-size: 20px 20px;
						background-position-y: 3px;
					}
					i::before {
						display: flex;
						align-items: center;
						text-align:center;
						justify-content: center;
						content: "${content}";
						background: ${backgroundColor || "#196bd8"};
						border-radius: 50%;
                        width: fit-content;
                        min-width: 13px;
                        height: fit-content;
                        max-height: 13px;
                        padding: ${(content.length > 1 && 2) || 1}px;
						float: right;
						color: ${color || "#fff"};
						font-size: 9px;
						margin-top: -5px;
						font-style: normal;
                    }
                    
				`}
			</style>
		</>
	);
};
