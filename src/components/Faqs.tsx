import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import * as Accordion from "@radix-ui/react-accordion";

export default function Faqs() {
	return (
		<Accordion.Root type="multiple">
			<Accordion.Item value="faq1-1">
				<Accordion.Header>
					<Accordion.Trigger>
						Who is organizing this? <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<p>
						We're regular residents of New Orleans fed up with… New Orleans DSA,
						an all-volunteer, member-funded organization{" "}
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="faq-2">
				<Accordion.Header>
					<Accordion.Trigger>
						What's the alternative to Entergy? <Icon path={mdiChevronDown} />
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
			<Accordion.Item value="faq-3">
				<Accordion.Header>
					<Accordion.Trigger>
						Do other cities have municipal power? <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content />
			</Accordion.Item>
			<Accordion.Item value="faq-4">
				<Accordion.Header>
					<Accordion.Trigger>
						Didn't Entergy agree to a moratorium on shutoffs?{" "}
						<Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content />
			</Accordion.Item>
			<Accordion.Item value="faq-5">
				<Accordion.Header>
					<Accordion.Trigger>
						My bill is insane! What can I do? <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content />
			</Accordion.Item>
			<Accordion.Item value="faq-6">
				<Accordion.Header>
					<Accordion.Trigger>
						How can I help fight back? <Icon path={mdiChevronDown} />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content />
			</Accordion.Item>
		</Accordion.Root>
	);
}
