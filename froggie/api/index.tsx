import { Button, Frog, TextInput } from "frog";
import { handle } from "frog/vercel";

export const app = new Frog({
	assetsPath: "/",
	basePath: "/api",
	// Supply a Hub API URL to enable frame verification.
	hubApiUrl: "https://api.hub.wevm.dev",
});

app.frame("/", (c) => {
	const { buttonValue, inputText, status } = c;
	const chain = inputText || buttonValue;
	return c.res({
		action: '/submit',
		image: (
			<div
				style={{
					alignItems: "center",
					background:
						status === "response"
							? "linear-gradient(to right, #432889, #17101F)"
							: "black",
					backgroundSize: "100% 100%",
					display: "flex",
					flexDirection: "column",
					flexWrap: "nowrap",
					height: "100%",
					justifyContent: "center",
					textAlign: "center",
					width: "100%",
				}}
			>
				<div
					style={{
						color: "white",
						fontSize: 60,
						fontStyle: "normal",
						letterSpacing: "-0.025em",
						lineHeight: 1.4,
						marginTop: 30,
						display: "flex",
						padding: "0 120px",
						whiteSpace: "pre-wrap",
					}}
				>
					Hello! Choose your favorite network
					{/* {status === 'response'
            ? `Nice choice.${chain ? ` ${chain.toUpperCase()}!!` : ''}`
            : 'Welcome!'} */}
				</div>
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
					alignItems: "center",
					background: "black",
					backgroundSize: "100% 100%",
					display: "flex",
					flexDirection: "column",
					flexWrap: "nowrap",
					height: "100%",
					justifyContent: "center",
					textAlign: "center",
					width: "100%",
					color: "white",
					fontSize: 60
				}}
			>
				<h1>Selected: {buttonValue}</h1>
			</div>
		),
	});
});

export const GET = handle(app);
export const POST = handle(app);
