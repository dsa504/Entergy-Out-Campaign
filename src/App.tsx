/** @jsxImportSource theme-ui */
import "./App.css";

// import React from "react";
import { Container, ThemeProvider } from "theme-ui";

import EmailForm from "./components/EmailForm";
import Faqs from "./components/Faqs";
import theme from "./theme";

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div
				sx={{
					fontFamily: "body",
					fontSize: 2,
				}}
			>
				<header />
				<Container>
					<section
						sx={{
							mx: [2, 2, 4],
						}}
					>
						<div>
							<div
								sx={{
									fontFamily: "heading",
									fontSize: ["8vw", "7.5vw"],
									lineHeight: ".85em",
									pt: "9vw",
								}}
							>
								Entergy made <span sx={{ color: "primary" }}>$1.2 billion</span>{" "}
								<br />
								last year in profits. <br />
								Entergy needs us.
							</div>
							<h1
								sx={{
									fontSize: ["17.5vw", "17vw"],
									lineHeight: ".8em",
									m: 0,
									pt: 2,
								}}
							>
								We Don't <br /> Need Entergy
							</h1>
						</div>
					</section>
					<section>
						<EmailForm />
					</section>
					<section sx={{ maxWidth: "normal", mx: "auto" }}>
						<h2>What we're fighting for</h2>
						<h3>End Entergy’s Guaranteed Profits</h3>
						<p>
							While New Orleanians have suffered through COVID, hurricanes, and
							record heat with little to no assistance, Entergy New Orleans is
							guaranteed a 9.35% profit every year, regardless of conditions.
							New Orleans has some of the highest energy-cost burdens in the
							country, and half of all low-income families in New Orleans spend
							over 10% of their income on electricity. Entergy’s CEO, Leo
							Denault, made over $17m. It’s time for Entergy to pay their fair
							share, and for City Council to stop guaranteeing corporate
							profits.
						</p>
						<h3>End all residential shutoffs</h3>
						<p>
							Utilities should be about providing reliable, safe power to
							residents, not about investor profit. In an era of economic
							instability, rising costs, and worsening hurricanes, it’s more
							important than ever that no child in New Orleans is left doing
							homework in the dark. We demand an indefinite end to all
							residential shutoffs.
						</p>
						<h3>Repair the Grid, No More Fees</h3>
						<p>
							In 2017, a City Council report found that more than 1/3 of the
							prior year’s outages were caused by equipment failure. What are we
							getting for our money? It's us or them/Climate Change hiring and
							training working class residents of New Orleans to do so
						</p>
					</section>
					<section sx={{ maxWidth: "normal", mx: "auto" }}>
						<h2>Frequently Asked Questions</h2>

						<Faqs />
					</section>
				</Container>
			</div>
		</ThemeProvider>
	);
};

export default App;
