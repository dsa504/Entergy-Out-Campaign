/** @jsxImportSource theme-ui */
import { Button } from "theme-ui";

export default function EmailForm() {
	return (
		<div
			sx={{
				backgroundColor: "black",
				textAlign: "center",
				color: "primary",
				pb: 4,
				pt: 2,
				mt: 0,
			}}
		>
			<div
				sx={{
					maxWidth: "normal",
					mx: "auto",
				}}
			>
				<h2
					sx={{
						mt: 0,
						mb: 0,
						pb: 2,
						color: "white",
						fontSize: 6,
						maxWidth: "600px",
						mx: "auto",
					}}
				>
					Pledge to
					<span sx={{ color: "accent" }}> halt your payments </span>
					and
					<span sx={{ color: "accent" }}> hold Entergy accountable</span>.
				</h2>
				<div
					sx={{
						maxWidth: "tight",
						mx: "auto",
						px: [1, null],
					}}
				>
					<ul
						sx={{
							textAlign: "left",
							li: {
								pb: 2,
							},
						}}
					>
						<li>
							We are demanding a <b>ban on all residential power cutoffs</b> and
							the{" "}
							<b>
								cancellation of all residential bill debts going back to the
								start of the pandemic
							</b>
							.
						</li>
						<li>
							We are <b>organizing 10,000 of our fellow New Orleanians</b> to
							pledge to <b>stop paying Entergy bills</b> until Entergy (or the
							New Orleans City Council) addresses these demands.
						</li>
						<li>
							Once we reach 10,000 pledges, we will <b>begin the strike.</b>
						</li>
					</ul>
				</div>
				<Button
					sx={{
						width: "100%",
						maxWidth: ["90%", "380px"],
						cursor: "pointer",
						backgroundColor: "accent",
						color: "black",
						fontFamily: "heading",
						boxShadow: "5px 6px #ff2a5b",
					}}
				>
					Sign the Pledge
				</Button>
			</div>
		</div>
	);
}
