import { Button, Frog, TextInput } from "frog";
import { handle } from "frog/vercel";

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
	basePath: "/api",
	// browserLocation: "/:path",
	// Supply a Hub API URL to enable frame verification.
	hubApiUrl: "https://api.hub.wevm.dev",
});

app.frame("/", (c) => {
	const { buttonValue, status } = c;
	return c.res({
		image: (
			<div
				style={{
					color: "white",
					backgroundColor: "black",
					display: "flex",
					fontSize: 60,
				}}
			>
				{status === "initial"
					? "Select your favorite chain!"
					: `Selected: ${buttonValue}`}
			</div>
		),
		intents: [
			<TextInput placeholder="Enter custom chain..." />,
			<Button value="mainnet">Mainnet</Button>,
			<Button value="polygon">Polygon</Button>,
			<Button value="base">Base</Button>,
			status === "response" && <Button.Reset>Reset</Button.Reset>,
		],
	});
});

app.frame("/submit", (c) => {
	const { buttonValue } = c;
	return c.res({
		image: (
			<div
				style={{
					color: "white",
					display: "flex",
					backgroundColor: "black",
					fontSize: 60,
				}}
			>
				Selected: {buttonValue}
			</div>
		),
	});
});

export const GET = handle(app);
export const POST = handle(app);
