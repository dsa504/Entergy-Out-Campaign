import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import * as Accordion from "@radix-ui/react-accordion";
import { Dispatch, SetStateAction } from "react";

export default function Faqs({
	formhandler,
}: {
	formhandler: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<Accordion.Root type="multiple" className="accordion">
			<Accordion.Item value="faq-what-is-a-debt-strike">
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
						the less money the debt collectors make.{" "}
					</p>
					<p>
						A debt strike is a direct action where the people decide to exercise
						<b>
							our <em>collective</em> power
						</b>{" "}
						to get what we deserve! And more often than not, direct action gets
						the goods. Think about civil rights sit-ins or labor strikes. When
						we fight together, we win.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-why-a-debt-strike">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>Why is a debt strike necessary?</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Without a mass movement of residents building and fighting{" "}
						<em>for</em> each other, we are leaving the decision-making and
						policy-making up to politicians who so often put their own profits
						and comforts above the needs of the people they purport to
						represent. The New Orleans City Council was elected by less than 27%
						turnout at the last election. People already distrust our leaders
						and have become disaffected by politics as usual. If we are ever
						going to truly change the system, we need to put the power in the
						hands of the people.{" "}
					</p>
					<p>
						A debt strike works to get Entergy’s attention by hitting them where
						it hurts: <b>their bottom line</b>! By acting together and
						disrupting Entergy’s cash flow, they risk becoming less profitable.
						Entergy’s biggest fear is a cascading effect that could erase
						millions in profits from C-suite executives, hedge fund managers,
						and others that make a dollar off of our struggles to pay.{" "}
					</p>
					<p>
						Entergy’s stocks are built off of our high bills and their continual
						disinvestment in our infrastructure. Without collective action,
						there are no collective gains. It’s time we stand up and fight back
						together with a debt strike.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-what-do-we-gain">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>What do we have to gain?</span> <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>For one, we can have our demands met!</p>
					<p>
						We could win lower bills! Entergy is a multi-billion dollar entity
						taking 10% of our income. What would you do with 10% of your
						paycheck (after taxes!) back in your pocket?{" "}
					</p>
					<p>
						We could win an end to residential shutoffs! When your money is
						tight, and you have to choose between rent and lights, wouldn’t you
						rather know that you could pay your Entergy bill later without
						having the lights shut off?{" "}
					</p>
					<p>
						We could win a path forward to updating our electric grid! We need
						reliable power to keep us cool, and keep our jobs open, and we can’t
						afford to have a bird or squirrel take down whole neighborhoods!{" "}
					</p>
					<p>
						We could find ourselves on a path to full-scale municipalization,
						where WE set the prices that WE pay; where WE determine what energy
						sources that WE get to use.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-whats-the-alternative">
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

			<Accordion.Item value="faq-what-about-breaking-up-entergy">
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
						tied to fluctuating wholesale energy prices were facing bills{" "}
						<a href="https://www.nytimes.com/2021/02/20/us/texas-storm-electric-bills.html">
							for thousands of dollars within a few days
						</a>
						.
					</p>
					<p>
						Finally, there’s the potential that this is already what Entergy
						wants — to cut and run from New Orleans and sell the utilities off
						to the highest bidders. To ensure that we’re not playing directly
						into their hands, we are pressing for municipal control.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-other-cities-municipal">
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
			<Accordion.Item value="faq-what-are-the-risks">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>So what are the risks?</span> <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						For one, we understand that we are risking shutoffs if we do not
						reach a critical mass of participants. But, we’ve already lived
						through the city-wide disaster that was Hurricane Ida, and we
						continue to risk month-long shutoffs already with each hurricane
						coming our way, especially if we do nothing. At this point, shutoffs
						are the biggest threat to Entergy customers. A disconnect notice
						will appear in your mailbox before your energy is disconnected. For
						those who are especially concerned with their service or credit
						being interrupted, but still want to participate in the pledge, we
						may be able to offer participants assistance with Entergy’s own
						website to ask{" "}
						<a href="https://www.entergy-louisiana.com/bill-help/#:~:text=Payment%20Extension&text=Call%201%2D800%2DENTERGY%20(,Request%20an%20extension%20through%20myEntergy.">
							for bill extensions and other resources
						</a>{" "}
						that might be available.
					</p>
					<p>
						We'll only go ahead with the debt strike if we have power in
						numbers. So, if Entergy decides to try to disconnect people, they'll
						be forced to first contact thousands or even more customers about
						the possibility of shutoffs. Then they'll have to give a chance to
						set up a payment plan before taking further action. It'll cause
						paralysis and create a months-long backlog. We are very clear in
						that everyone that pledges to strike also pledges to defend the
						strike and that means protecting and supporting each other that are
						threatened by Entergy. We will look after each other in this
						movement and build the solidarity to do that.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-will-striking-affect-my-credit-score">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>Will striking affect my credit score?</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Entergy holds power over its customers by punishing them, so even a
						single late payment may affect your credit score. However, there are
						already thousands of customers who are unable to pay fully, or on
						time, who are already experiencing negative credit impacts and
						struggling to make ends meet even under the current shutoff
						moratorium. And, when prices go up and our energy usage increases
						this winter, thousands more will miss payments, further increasing
						these burdens. It's important we take action together to stop it
						getting to that stage.
					</p>
					<p>
						Remember, a credit report is a bit like an employer or landlord
						reference: it can have a big effect on your life, but it’s also a
						way for companies to have power over you to stop you doing anything
						that might be against their interests. That doesn’t mean it should
						stop you from complaining when something is wrong, or from
						withholding payment sometimes if you need to.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-can-my-landlord-evict-me">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>
							Can my landlord evict me if I don’t pay my Entergy bills?
						</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Unless your Entergy bills are included in your rent, your landlord
						should have nothing to do with your light bill, unless there is an
						(unlikely) provision about your electricity and gas bill in your
						lease agreement. Your landlord will only know if you haven't paid if
						you tell them. If your Entergy bills are included in your rent, you
						won't have a choice about paying your bills unless you don't pay
						your rent, in which case your landlord could decide to evict you for
						nonpayment.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-who-can-participate">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>Who can participate?</span> <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Any customer of Entergy New Orleans. We have to be clear here, that
						while we want to help all Entergy customers, our situation in New
						Orleans is unique in that our city has some local control over our
						utility in the form of City Council oversight of Entergy New
						Orleans. At this time, it seems appropriate to limit pledges to New
						Orleans zip-codes only. However, please{" "}
						<a href="mailto:hello@dsaneworleans.org">reach out</a> if you’re in
						Louisiana and curious about building your own campaign.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-why-now">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>Why now?</span> <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						As of November 1st, we’re facing a backslide to business-as-usual
						for Entergy New Orleans. That’s unacceptable. After two major storms
						caused extended outages (Hurricane Zeta in 2020, Hurricane Ida in
						2021), Entergy failed to provide power to the city for weeks and has
						since done nothing to keep us safe from future outages. Instead,
						they’ve said to prepare for{" "}
						<a href="https://www.nola.com/news/article_95f17024-0c66-11ed-a73d-dbc4ea326b63.html">
							21 days without power
						</a>{" "}
						for a Category 4 hurricane. As we face stronger storms year after
						year, that’s a death sentence for some of our residents who need
						power to stay cool, or to keep medications cold.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-who-is-organizing-this">
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
						joining us as a member?{" "}
						<a href="https://dsausa.org/join">You can do that here</a>.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-isnt-there-a-moratorium">
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
						they’ve said to prepare for <b>21 days without power</b> for a
						Category 4 hurricane. As we face stronger storms year after year,
						that’s a death sentence for some of our residents who need power to
						stay cool, or to keep medications cold.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-my-bill-is-insane">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>My bill is insane! What can I do?</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						If you haven’t already, Entergy does have a few scant{" "}
						<a href="https://www.entergy-neworleans.com/bill-help/">
							resources on their website for New Orleans customers
						</a>
						. However, be advised that accessing assistance from Entergy is
						incredibly burdensome, time-consuming, and difficult to navigate.
						New Orleans utility bill assistance programs are similarly difficult
						to navigate on our city’s website. However, those{" "}
						<a href="https://nola.gov/community-development/utility-assistance-program/">
							resources are listed here
						</a>
						. For more information or assistance on filling this out, we suggest
						reaching out to your{" "}
						<a href="https://council.nola.gov/councilmembers/">
							city councilmember
						</a>
						.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-how-can-i-help">
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
						and we’ll have an organizer reach back out to you.{" "}
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-how-can-i-support">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>
							I can’t risk having my power get shut off. Is there any way I can
							still support this campaign?
						</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						Absolutely! We understand certain folks will have mitigating
						circumstances that may mean that participating in the debt strike
						itself isn’t possible for them. However, you can still be a big help
						in our outreach efforts to connect with other local residents facing
						high Entergy bills! Please consider volunteering by{" "}
						<a
							onClick={() => formhandler(true)}
							onKeyPress={() => formhandler(true)}
							role="button"
							tabIndex={0}
						>
							signing up here
						</a>
						.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-i-dont-live-in-new-orleans-can-i-participate">
				<Accordion.Header>
					<Accordion.Trigger>
						<span>I don’t live in New Orleans. How can I participate?</span>{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						At the moment, our debt strike is focused on Entergy New Orleans,
						because it is uniquely vulnerable to corrective action from the
						city’s local government. Unfortunately, in the rest of Louisiana,
						Entergy is regulated by the state Public Service Commission, which
						generally has a much cozier relationship with Entergy than the New
						Orleans City Council. However, we do hope to expand this campaign
						beyond New Orleans in the future, and would love to connect with
						ratepayers and groups organizing against Entergy in their own
						communities - reach out to us at{" "}
						<a href="mailto:hello@dsaneworleans.org">hello@dsaneworleans.org</a>
						. If you’re outside of Orleans Parish, but in the Greater New
						Orleans area, you can also volunteer in our New Orleans outreach
						efforts by{" "}
						<a
							onClick={() => formhandler(true)}
							onKeyPress={() => formhandler(true)}
							role="button"
							tabIndex={0}
						>
							signing up here
						</a>
						.
					</p>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	);
}
