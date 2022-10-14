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
				pt: 0,
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
					}}
				>
					Pledge to
					<span sx={{ color: "accent" }}> halt your payments </span>
					and
					<span sx={{ color: "accent" }}> hold Entergy accountable</span>.
				</h2>
				<p
					sx={{
						maxWidth: "tight",
						mx: "auto",
						px: [1, null],
					}}
				>
					We deserve cheaper, more reliable electricity from cleaner energy
					sources. Enter your email and we'll let you know about protests,
					actions and how you can fight back against Entergy.
				</p>
				<input
					type="email"
					placeholder="Enter Your Email for Updates"
					sx={{
						fontSize: 2,
						p: 2,
						display: "block",
						maxWidth: ["90%", "380px"],
						mx: "auto",
						width: "100%",
						boxShadow: "5px 6px #020310",
						borderColor: "text",
						mb: 2,
						mt: 3,
					}}
				/>
				<Button
					sx={{
						width: "100%",
						maxWidth: ["90%", "380px"],
						cursor: "pointer",
						backgroundColor: "black",
					}}
				>
					Get Involved
				</Button>
			</div>
		</div>
	);
}
