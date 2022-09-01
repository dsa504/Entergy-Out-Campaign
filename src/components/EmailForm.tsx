/** @jsxImportSource theme-ui */
import { Button } from "theme-ui";

export default function EmailForm() {
	return (
		<div
			sx={{
				backgroundColor: "accent",
				textAlign: "center",
				pb: 4,
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
						pt: 3,
						mb: 0,
						pb: 2,
					}}
				>
					Join the fight to{" "}
					<span sx={{ color: "primary" }}>
						end Entergy’s <br sx={{ display: ["none", null] }} />
						exploitation
					</span>{" "}
					of New Orleans.
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
					}}
				>
					Get Involved
				</Button>
			</div>
		</div>
	);
}
