import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import PageTitle from "./PageTitle";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError("Inserisci un artista, un album o una canzone.");
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    const params = new URLSearchParams({
      term: trimmedQuery,
      country: "IT",
      media: "music",
      limit: "25",
    });

    fetch(`https://itunes.apple.com/search?${params}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella ricerca");
        }

        return response.json();
      })
      .then((data) => {
        setResults(data.results || []);
      })
      .catch(() => {
        setError("Impossibile completare la ricerca. Riprova più tardi.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <PageTitle
        title="Cerca"
        subtitle="Cerca canzoni, album e artisti su Apple Music."
      />

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", gap: 1.5, mb: 4 }}
      >
        <TextField
          fullWidth
          label="Cosa vuoi ascoltare?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button type="submit" variant="contained">
          Cerca
        </Button>
      </Box>

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <ol>
          {results.map((result) => (
            <li key={result.trackId}>
              {result.trackName} — {result.artistName}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default Search;
