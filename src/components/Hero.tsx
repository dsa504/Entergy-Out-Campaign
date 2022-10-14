/** @jsxImportSource theme-ui */
export default function Hero() {
	return (
		<div
			sx={{
				textAlign: "center",
				display: ["block", "flex"],
				alignItems: "center",
				pt: "120px",
				pb: 4,
			}}
		>
			<img
				src="./images/angry-entergy.min.svg"
				alt="Make Entergy Pay"
				sx={{
					width: ["40%"],
					height: "auto",
					display: "block",
					mx: "auto",
					pl: "5vw",
					pt: "3vw",
				}}
			/>
			<div
				sx={{
					fontFamily: "heading",
					width: ["60%"],
					fontSize: ["7.5vw", "5vw"],
					textTransform: "uppercase",
					lineHeight: ".85em",
					pt: ["8vw", "1vw"],
					pl: ["5vw"],
					pr: ["5vw"],
					display: ["block", "inline-block"],
					textAlign: "left",
				}}
			>
				<div>
					Entergy made <span sx={{ color: "primary" }}>$1.2 billion</span>{" "}
					<br />
					in profits last year. <br />
				</div>
				<div
					sx={{
						pt: "2.6vw",
					}}
				>
					It’s time for entergy to{" "}
					<span sx={{ color: "primary" }}>pay their fair share</span>.
				</div>
			</div>
		</div>
	);
}
