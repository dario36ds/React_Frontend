import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import PageTitle from "./PageTitle";

function CanzoniClassifica() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://itunes.apple.com/it/rss/topsongs/limit=25/json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento");
        }

        return response.json();
      })
      .then((data) => {
        const entries = data.feed?.entry || [];

        const formattedSongs = entries.map((item) => ({
          id: item.id.attributes["im:id"],
          name: item["im:name"].label,
          artistName: item["im:artist"].label,
          artworkUrl100: item["im:image"].at(-1)?.label,
        }));

        setSongs(formattedSongs);
      })
      .catch(() => {
        setError("Impossibile caricare la classifica delle canzoni.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageTitle
        title="Classifica canzoni"
        subtitle="Le 25 canzoni più ascoltate in Italia."
      />

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <ol>
          {songs.map((song) => (
            <li key={song.id}>
              {song.name} — {song.artistName}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default CanzoniClassifica;
