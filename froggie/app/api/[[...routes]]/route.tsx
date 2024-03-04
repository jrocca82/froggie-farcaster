/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { handle } from "frog/next";

const app = new Frog({
	assetsPath: "/",
	basePath: "/api",
	// Supply a Hub API URL to enable frame verification.
	// hubApiUrl: 'https://api.hub.wevm.dev',
});

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame("/", (c) => {
	const { buttonValue, inputText, status } = c;
	const fruit = inputText || buttonValue;
	return c.res({
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
						padding: "0 120px",
						whiteSpace: "pre-wrap",
					}}
				>
					<h1>Try le mint</h1>
				</div>
			</div>
		),
		intents: [
			<Button.Mint target="eip155:7777777:0x060f3edd18c47f59bd23d063bbeb9aa4a8fec6df:69420">
				Mint
			</Button.Mint>,
			<Button.Link href="https://google.com">Link Google</Button.Link>,
			<Button.Redirect location="https://google.com">
				Redirect Google
			</Button.Redirect>,
			status === "response" && <Button.Reset>Reset</Button.Reset>,
		],
	});
});

export const GET = handle(app);
export const POST = handle(app);
