import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import AlbumCard from "./AlbumCard";

function AlbumsClassifica() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://itunes.apple.com/it/rss/topalbums/limit=25/json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento");
        }

        return response.json();
      })
      .then((data) => {
        const entries = data.feed?.entry || [];

        const formattedAlbums = entries.map((item) => ({
          id: item.id.attributes["im:id"],
          name: item["im:name"].label,
          artistName: item["im:artist"].label,
          artworkUrl100: item["im:image"].at(-1)?.label,
        }));

        setAlbums(formattedAlbums);
      })
      .catch(() => {
        setError("Impossibile caricare la classifica.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Classifica album</h1>
      <p>I 25 album più ascoltati in Italia.</p>

      {loading && <p>Caricamento...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <Grid container spacing={2}>
          {albums.map((album, index) => (
            <Grid key={album.id} size={{ xs: 6, sm: 4, md: 3 }}>
              <AlbumCard album={album} rank={index + 1} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default AlbumsClassifica;
