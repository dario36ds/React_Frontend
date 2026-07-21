import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import PageTitle from "./PageTitle";

function PodcastClassifica() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://itunes.apple.com/it/rss/toppodcasts/limit=25/json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento");
        }

        return response.json();
      })
      .then((data) => {
        const entries = data.feed?.entry || [];

        const formattedPodcasts = entries.map((item) => ({
          id: item.id.attributes["im:id"],
          name: item["im:name"].label,
          artistName: item["im:artist"].label,
          artworkUrl100: item["im:image"].at(-1)?.label,
        }));

        setPodcasts(formattedPodcasts);
      })
      .catch(() => {
        setError("Impossibile caricare la classifica dei podcast.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageTitle
        title="Classifica podcast"
        subtitle="I 25 podcast più ascoltati in Italia."
      />

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <ol>
          {podcasts.map((podcast) => (
            <li key={podcast.id}>
              {podcast.name} — {podcast.artistName}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default PodcastClassifica;
