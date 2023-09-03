import Drum from "./Drum";
import { sounds } from "./constant";

function App() {
	const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		const s = sounds.find((sound) => (sound.key = e.key.toUpperCase()));
		if (!s) return;
		(document.getElementById(s.key) as HTMLAudioElement)
			.play()
			.catch(console.error);

		document.getElementById("drum-" + s.key)?.focus();
		document.getElementById("display")!.innerText = s.description;
	};

	return (
		<>
			<h1>Drum</h1>
			<div
				className="container"
				id="drum-machine"
				onKeyDown={(e) => handleKeyPress(e)}
			>
				<div className="whole-drum">
					{sounds.map((sound) => (
						<Drum sound={sound} key={sound.key} />
					))}
				</div>
				<p id="display"></p>
			</div>
		</>
	);
}

export default App;
