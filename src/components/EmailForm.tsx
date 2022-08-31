import { Button } from "theme-ui";

export default function EmailForm() {
	return (
		<div>
			<h2>Join the fight to end Entergy’s exploitation of New Orleans.</h2>
			<p>
				We deserve cheaper, more reliable electricity from cleaner energy
				sources. Enter your email and we'll let you know about protests, actions
				and how you can fight back against Entergy.
			</p>
			<input type="email" placeholder="Enter Your Email for Updates" />
			<Button>Get Involved</Button>
		</div>
	);
}
