/** @jsxImportSource theme-ui */
import { mdiArrowLeft } from "@mdi/js";
import Icon from "@mdi/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Dispatch, SetStateAction } from "react";

// import { Button } from "theme-ui";
import EmailForm from "./EmailForm";

export default function FormSection({
	formopen,
	formhandler,
}: {
	formopen: boolean;
	formhandler: Dispatch<SetStateAction<boolean>>;
}) {
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
						fontSize: [5, 6],
						maxWidth: "600px",
						mx: [1, "auto"],
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
							pr: [1, null],
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

				<Dialog.Root open={formopen} onOpenChange={formhandler}>
					<Dialog.Trigger
						sx={{
							width: "100%",
							maxWidth: ["90%", "380px"],
							cursor: "pointer",
							backgroundColor: "accent",
							color: "black",
							fontSize: 3,
							py: 1,
							fontFamily: "heading",
							boxShadow: "5px 6px #ff2a5b",
							border: 0,
						}}
					>
						Sign the Pledge
					</Dialog.Trigger>
					<Dialog.Overlay />
					<Dialog.Content
						sx={{
							width: "100%",
							height: "100%",
							position: "fixed",
							top: 0,
							left: 0,
							backgroundColor: "accent",
						}}
					>
						<EmailForm />
						<Dialog.Close
							sx={{
								position: "absolute",
								top: "5px",
								right: "20px",
								zIndex: 10,
								color: "black",
								border: 0,
								background: "transparent",
								cursor: "pointer",
							}}
						>
							<Icon path={mdiArrowLeft} sx={{ width: "48px" }} />
						</Dialog.Close>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</div>
	);
}
