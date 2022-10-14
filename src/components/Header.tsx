/** @jsxImportSource theme-ui */
export default function Header() {
	return (
		<div
			sx={{
				position: "fixed",
				width: "100%",
				textAlign: "center",
			}}
		>
			<div
				sx={{
					width: ["100%", "1200px"],
					textAlign: "left",
					mx: "auto",
					display: "inline-flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<img
					src="./images/make-entergy-pay-logo.svg"
					alt="Make Entergy Pay"
					sx={{
						width: "15vw",
						maxWidth: "140px",
						display: "block",
						pt: "20px",
					}}
				/>
				<ul
					sx={{
						listStyleType: "none",
						px: 0,
						display: "inline-flex",
						li: {
							pl: 2,
							fontFamily: "heading",
							fontSize: 3,
						},
					}}
				>
					<li>
						<a href="">Sign the Pledge</a>
					</li>
					<li>
						<a href="">The Demands</a>
					</li>
					<li>
						<a href="">FAQs</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
