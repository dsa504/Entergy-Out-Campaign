import { Dispatch, SetStateAction } from "react";
import { Button } from "theme-ui";

/** @jsxImportSource theme-ui */
export default function Header({
	formhandler,
}: {
	formhandler: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<>
			<div
				sx={{
					position: "fixed",
					top: 0,
					width: "100%",
					textAlign: "center",
					height: ["180px"],
				}}
			>
				<div
					sx={{
						width: ["100%", "1200px"],
						textAlign: "left",
						mx: "auto",
						px: [2, null],
						display: "inline-flex",
						justifyContent: "space-between",
						alignItems: ["flex-start", "flex-start"],
					}}
				>
					<img
						src="./images/make-entergy-pay-logo.svg"
						alt="Make Entergy Pay"
						sx={{
							width: ["25vw", "15vw"],
							maxWidth: "140px",
							display: "block",
							pt: ["10px", "20px"],
						}}
					/>
					<ul
						sx={{
							listStyleType: "none",
							px: 0,
							display: "inline-flex",
							width: ["240px", "auto"],
							textAlign: ["center", null],
							alignItems: "center",
							li: {
								pl: 3,
								fontFamily: "heading",
								fontSize: 3,
								pt: [0, "8px"],
								lineHeight: "1em",
							},
						}}
					>
						<li
							sx={{
								display: ["none", "block"],
							}}
						>
							<a href="#demands">The Demands</a>
						</li>
						<li
							sx={{
								display: ["none", "block"],
							}}
						>
							<a href="#faqs">FAQs</a>
						</li>
						<li
							sx={{
								display: ["none", "block"],
							}}
						>
							<a
								href="https://docs.google.com/document/d/1na5fQSzLjmIVvddTPU0HyAL108L2o6FXsVTj-rGHibg/edit?usp=sharing"
								target="_blank"
								rel="noreferrer"
							>
								Toolkit
							</a>
						</li>
						<li sx={{ pr: 1 }}>
							<Button
								onClick={() => formhandler(true)}
								sx={{
									fontFamily: "heading",
									borderRadius: "8px",
									fontSize: 1,
									px: 2,
									py: 1,
									backgroundColor: "black",
								}}
							>
								Sign the Pledge
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
