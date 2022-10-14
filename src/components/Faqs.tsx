import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import * as Accordion from "@radix-ui/react-accordion";

export default function Faqs() {
	return (
		<Accordion.Root type="multiple" className="accordion">
			<Accordion.Item value="faq-1">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>What is a debt strike?</span> <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						A debt strike is a planned action amongst people that owe money to
						some financial entity (student loan vendors, banks, etc.) to stop
						paying their debts collectively. The more people join a debt strike,
						the less money the debt collectors make. A debt strike is a direct
						action where the people decide to exercise our collective power to
						get what we deserve! And more often than not, direct action gets the
						goods. Think about civil rights sit-ins or labor strikes. When we
						fight together, we win.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-2">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>Why is a debt strike necessary?</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Without a mass movement of residents building and fighting for each
						other, we are leaving the decision-making and policy-making up to
						politicians who so often put their own profits and comforts above
						the needs of the people they purport to represent. The New Orleans
						City Council was elected by less than 27% turnout at the last
						election. People already distrust our leaders and have become
						disaffected by politics as usual. If we are ever going to truly
						change the system, we need to put the power in the hands of the
						people. A debt strike works to get Entergy’s attention by hitting
						them where it hurts: their bottom line! By acting together and
						disrupting Entergy’s cash flow, they risk becoming less profitable.
						Entergy’s biggest fear is a cascading effect that could erase
						millions in profits from C-suite executives, hedge fund managers,
						and others that make a dollar off of our struggles to pay. Entergy’s
						stocks are built off of our high bills and their continual
						disinvestment in our infrastructure. Without collective action,
						there are no collective gains. It’s time we stand up and fight back
						together with a debt strike.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-3">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>Who is organizing this?</span> <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						This campaign is being led by the New Orleans Democratic Socialists
						of America, an all-volunteer run organization of regular New Orleans
						residents. We’re dedicated to fighting against capitalism, and
						fighting for the multiracial working class of our city and region.
						You may know us from our yearly voter guides, or from our fight to
						save New Orleans’ Libraries from being defunded. Interested in
						joining us as a member? You can do that here: dsausa.org/join.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-4">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>What's the alternative to Entergy?</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						We believe that ultimately, the best alternative for our city is a
						publicly-owned utility, owned by our community, and run by a board
						accountable to residents of New Orleans. Utilities shouldn’t be
						about making money, they should be about providing citizens with
						safe and reliable power, and guided by the needs of New Orleanians,
						not stockholders.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-5">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>
							What about breaking up Entergy’s monopoly by introducing more
							“choice”?
						</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Look — we get it, at this point anything sounds better than Entergy.
						But the promise of more “choice” in a system isn’t really getting
						rid of the problem — which is that our utilities are run for profit.
						Breaking up Entergy replaces one massive problem with a lot of
						trickier problems.
					</p>
					<p>
						And without careful measures, it could end up deregulating our
						utilities, giving us less control over our bills. Remember what
						happened in Texas during the 2021 Freeze? Texas has a massively
						unregulated energy grid. In some cases residents whose prices were
						tied to fluctuating wholesale energy prices were facing bills for
						thousands of dollars within a few days.
					</p>
					<p>
						Finally, there’s the potential that this is already what Entergy
						wants — to cut and run from New Orleans and sell the utilities off
						to the highest bidders. To ensure that we’re not playing directly
						into their hands, we are pressing for municipal control.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-6">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>Do other cities have municipal power?</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Yes! Many of the largest cities in the country, like Los Angeles,
						Memphis and Austin, are publicly-owned. And here in Louisiana
						Lafayette, Alexandria, Monroe, Natchitoches, and Terrebonne Parish
						all operate their own utilities.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-7">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>Didn't Entergy agree to a moratorium on shutoffs? </span>
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Entergy New Orleans’ moratorium on shutoffs will expire November
						1st. After that date, we’re facing a backslide to business-as-usual
						for Entergy New Orleans. That’s unacceptable. After two major storms
						caused extended outages (Hurricane Zeta in 2020, Hurricane Ida in
						2021), Entergy failed to provide power to the city for weeks and has
						since done nothing to keep us safe from future outages. Instead,
						they’ve said to prepare for 21 days without power for a Category 4
						hurricane. As we face stronger storms year after year, that’s a
						death sentence for some of our residents who need power to stay
						cool, or to keep medications cold.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-8">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>How can I help fight back?</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Join the debt strike, and make a pledge! From there, we’ll be able
						to plug you in with our organizer kit, where you can learn more
						about extending the campaign in your neighborhood. Want to dig
						deeper? Drop us a line at{" "}
						<a href="mailto:hello@dsaneworleans.org">hello@dsaneworleans.org</a>{" "}
						or text _______ and we’ll have an organizer reach back out to you.{" "}
					</p>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	);
}
