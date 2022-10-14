/** @jsxImportSource theme-ui */
export default function Header() {
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
						display: "inline-flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
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
								pl: 3,
								fontFamily: "heading",
								fontSize: 3,
								pt: "8px",
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
		</>
	);
}
