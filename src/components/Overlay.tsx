export interface OverlayProps {
  songTitle: string;
  songArtists: string;
}

export default function Overlay({ songTitle, songArtists }: OverlayProps) {
  return (
    <>
      <h1 className="sm:text-3xl text-2xl font-semibold">{songTitle}</h1>
      <h2 className="sm:text-2xl text-xl font-extralight">{songArtists}</h2>
    </>
  );
}
