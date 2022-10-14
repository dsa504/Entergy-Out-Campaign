/** @jsxImportSource theme-ui */

// import React from "react";
import { useState } from "react";
import { Container, Themed, ThemeProvider } from "theme-ui";

import Faqs from "./components/Faqs";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import theme from "./theme";

const EntergyApp = () => {
	const [emailFormOpen, setEmailFormOpen] = useState(false);
	const toggleEmailForm = () => {
		setEmailFormOpen(!emailFormOpen);
	};
	return (
		<ThemeProvider theme={theme}>
			<div
				sx={{
					fontFamily: "body",
					fontSize: 2,
				}}
			>
				<Header formhandler={toggleEmailForm} />

				<Container>
					<section
						sx={{
							backgroundColor: "accent",
							backgroundImage: "url(images/noise-yellow.svg)",
						}}
					>
						<Hero />
					</section>
					<section>
						<FormSection
							formopen={emailFormOpen}
							formhandler={toggleEmailForm}
						/>
					</section>
					<section sx={{ maxWidth: "normal", mx: "auto" }}>
						<Themed.h2>We Demand:</Themed.h2>
						<div
							sx={{
								border: [null, "1px solid"],
								py: 1,
								px: 3,
								boxShadow: "5px 6px #020310",
								mb: 3,
							}}
						>
							<h3>End all residential shutoffs</h3>
							<p>
								Utilities should be about providing reliable, safe power to
								residents, not about investor profit. In an era of economic
								instability, rising costs, and worsening hurricanes, it’s more
								important than ever that no child in New Orleans is left doing
								homework in the dark. We demand an indefinite end to all
								residential shutoffs.
							</p>
						</div>
						<div
							sx={{
								border: [null, "1px solid"],
								py: 1,
								px: 3,
								boxShadow: "5px 6px #020310",
								mb: [1, 3],
							}}
						>
							<h3>Cancel all residential debt</h3>
							<p>
								New Orleans has some of the{" "}
								<a href="https://www.aceee.org/sites/default/files/pdf/fact-sheet/ses-louisiana-100917.pdf">
									highest energy-cost burdens in the country
								</a>
								, and half of all low-income families in New Orleans spend over
								10% of their income on electricity. While New Orleanians have
								suffered through COVID, hurricanes, and record heat with little
								to no assistance, Entergy New Orleans is guaranteed a 9.35%
								profit every year, regardless of conditions. It’s time for
								Entergy to <b>pay their fair share</b> and{" "}
								<b>
									cancel all residential bill debts going back to the start of
									the pandemic
								</b>
								.
							</p>
						</div>
					</section>
					<section sx={{ maxWidth: "normal", mx: "auto" }}>
						<Themed.h2 sx={{ border: 0 }}>Frequently Asked Questions</Themed.h2>

						<Faqs />
					</section>
					<footer>
						<div
							sx={{
								pt: [".2em"],
								width: "4em",
								height: "4em",
								mask: "url(/dsa-logo-web.svg) no-repeat center",
								maskSize: "100% 100%",
								backgroundColor: "paper",
								display: "inline-block",
							}}
						/>
					</footer>
				</Container>
			</div>
		</ThemeProvider>
	);
};

export default EntergyApp;
