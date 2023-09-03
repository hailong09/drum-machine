import { DrumPad } from "./constant";

export interface DrumProps {
	sound: DrumPad;
}

const Drum = ({ sound }: DrumProps) => {
	const handlePlay = (key: string, description: string) => {
		(document.getElementById(key) as HTMLAudioElement)
			.play()
			.catch(console.error);

		document.getElementById("display")!.innerText = description;
	};
	return (
		<button
			className="drum-pad"
			id={`drum-${sound.key}`}
			onClick={() => handlePlay(sound.key, sound.description)}
		>
			<audio id={sound.key} className="clip" src={sound.src} />
			{sound.key}
		</button>
	);
};

export default Drum;
