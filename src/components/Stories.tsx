/** @jsxImportSource theme-ui */

import "@splidejs/react-splide/css";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Stories() {
	return (
		<div className="splide-wrapper" sx={{ py: 3 }}>
			<h2 sx={{ fontSize: 7, my: 0, p: 0, pt: [4, 2] }}>
				Real Stories<span sx={{ color: "primary" }}> :</span>
			</h2>
			<div className="quotemarks">
				<div className="l">“</div>
				<div className="r">”</div>
			</div>
			<Splide
				aria-label="Stories"
				className="stories"
				options={{
					autoplay: true,
					rewind: true,
					perPage: 1,
					// autoHeight: false,
					// pagination: false,
					// pauseOnHover: true,
				}}
			>
				<SplideSlide>
					<p className="story">
						In my two months of living in my apartment, Entergy, the power
						utility company, disconnected my electricity, alleging a linkage
						issue with another building. They slapped me with an outrageous
						$1000 bill and left me without power for a week. Despite numerous
						complaints, they showed no interest in investigating the matter.
					</p>
					<p className="name">Chachera</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						One time they cut off my power on accident in Central City in 2019.
						They were supposed to get the other side of my double disconnected
						but made a mistake. It was so hot and I work from home and my dogs
						were panting and it was a nightmare. It took them eight hours and
						three times to come out to the house to actually figure it out and
						turn my power back on. When I called and got the number for the
						complaint department, I left a message and they sent me a postcard
						in return instead of calling back.
					</p>
					<p className="name">Clint</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						Entergy didn’t send us a bill for 6 months. They even sent emails
						during that time saying it was issues on their end and not to worry.
						Then out of nowhere we got a bill of almost $1000 and we’re told we
						had to pay it all and could not dispute it. It has been impossible
						to catch up.
					</p>
					<p className="name">Bernadette</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						When Hurricane Ida hit I was forced to vacate my home. When I
						returned I was unable to live in my home due to mold buildup. At the
						time my bill was about $500. I am now facing disconnection at my new
						home due to an outstanding balance of $1866.66 from my old apartment
						that entergy started accumulating a month after Hurricane Ida hit.
						At that time I was homeless. How could Entergy charge me if I no
						longer reside at a place and I had no job or home?
					</p>
					<p className="name">Kellie</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						Power lines to my house caught on fire after they “repaired” a
						different line in my block.
					</p>
					<p className="name">Brian</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						Other than the fact that my Entergy bill (always on level billing)
						has gone from under $100/mth to over $200/mth for the exact same
						amount of energy utilization, and I had no power for 9 days after
						Ida and 8 days after Isaac although in both cases my across the
						street neighbor had her power restored (if she lost it at all, she
						never lost power after Isaac) days earlier than we did. It’s
						bullshit. We need a public, not a for-profit, utility company in New
						Orleans.
					</p>
					<p className="name">Caroline</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						I moved here from Denver where my electricity bills were $75 at
						most, even during cold and snowy weather. Since I moved here, my
						energy bills have been $300-$500 no matter how hard I conserve usage
						… I applied for a payment extension, was approved for the 21st of
						March and this morning got a notice to pay March 6th or my power
						would be disconnected.
					</p>
					<p className="name">Erika</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						My bill has literally doubled in the last 1-2 years. I’ve lived at
						my home going on 10 years.
					</p>
					<p className="name">Amanda</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						I signed up for level billing with my last house in 2019 and my bill
						went up $30-50 every month. at the end of my lease when I closed my
						account they billed me for over $1k, stating that they “saved me
						money” every month and that there was nothing they could do about
						it. I still have yet to be able to pay it back.
					</p>
					<p className="name">Stephanie</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						I didn’t use energy for at least 2 weeks and my bill was over $200.
						Tried to shut off the energy permanently for a move and they’re
						trying to charge me over $500 for absolutely no reason.
					</p>
					<p className="name">Andrea</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						They closed my account in error, then I had to pay the deposit
						again. This has happened twice.
					</p>
					<p className="name">Tyler</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						My girlfriend and I got two bills days from each other that totaled
						1600 bucks, and gas was over 300 in the summer, which is impossible
						down here. Still fighting it to this day, with numerous phone calls
						that amount to nothing.
					</p>
					<p className="name">Taylor</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						Yes not only once but twice I got a bill for $2000 and $600 because
						they claimed after two years they weren’t reading my meter, yet I
						was paying a bill. To get someone on the phone is an utter nightmare
						and they will hang up in your face. It took hours and weeks to even
						get a conclusion. I’m still paying on it because I could not afford
						it so now with these high bills I have even more to pay. I contacted
						the commissioner’s office and filed two complaints. Entergy are
						crooks and an evil monopoly.
					</p>
					<p className="name">Ashley</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						I had the COVID/Ida arrangement and was late paying a portion. Then,
						my lights got cut off during a freeze and I had to pay the whole
						thing. $1,700 I had to borrow from people. Worst part is because of
						that, I couldn’t focus on work. I’m a writer and lost huge gigs
						because of it — would’ve made about $3,000. I haven’t been asked to
						write for them again, and that was about a year ago.
					</p>
					<p className="name">Megan</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						My current bill is $400 and I live in a 1400 sq ft home and turn all
						lights off while at work everyday. My AC set at 76. I’ve had
						MULTIPLE fair-weather power outages this summer, the longest being
						14rs (it was over 90 degrees in the house). Entergy is on Forbes and
						I’m on the poverty line, yet they charge us anytime they experience
						a profit loss. They are CRIMINALS!
					</p>
					<p className="name">Katie</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						The billmatrix crashed January of last year, they said they received
						my payment though but double billed me for the next month claiming
						that previous payment was never made. Despite showing my bank
						statement and providing proof the payment was made, I was forced to
						pay over $600. I hate Entergy.
					</p>
					<p className="name">Dylan</p>
				</SplideSlide>
				<SplideSlide>
					<p className="story">
						At our last rental, they never activated our gas account when we
						requested it. Months later (during Christmas/New Years while we were
						away) they came by and took our gas hookup without any notification.
						It took us weeks to get heat and hot water back (in January!) and
						cost hundreds of dollars to hire a licensed plumber to do the fix
						it. They’re inept and don’t deserve a cent of profit. No utility
						does, but especially them
					</p>
					<p className="name">Charlie</p>
				</SplideSlide>
				<div className="splide__progress">
					<div className="splide__progress__bar" />
				</div>
			</Splide>
		</div>
	);
}
