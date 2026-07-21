import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import PageTitle from "./PageTitle";
import PodcastCard from "./PodcastCard";

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
          description: item.summary?.label,
          genre: item.category?.attributes?.label,
          releaseDate: item["im:releaseDate"]?.attributes?.label,
          price: item["im:price"]?.label,
          rights: item.rights?.label,
          appleUrl: item.id.label,
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
        <Grid container spacing={2}>
          {podcasts.map((podcast, index) => (
            <Grid key={podcast.id} size={{ xs: 6, sm: 4, md: 3 }}>
              <PodcastCard podcast={podcast} rank={index + 1} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default PodcastClassifica;
