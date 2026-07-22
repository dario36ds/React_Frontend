import { useState } from "react";
import { Box, Button, Card, CardActionArea, CardContent, TextField, Typography } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import PageTitle from "./PageTitle";
import SearchDetailsDialog from "./SearchDetailsDialog";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);

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
    setSelectedResult(null);

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

      {!loading && !error && results.length > 0 && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {results.map((result, index) => {
            const title = result.trackName || result.collectionName || result.artistName;

            return (
              <Card
                key={result.trackId || result.collectionId || result.artistId || index}
                sx={{ overflow: "hidden", borderRadius: 3 }}
              >
                <CardActionArea
                  onClick={() => setSelectedResult(result)}
                  aria-label={`Mostra i dettagli di ${title}`}
                  sx={{ display: "flex", justifyContent: "flex-start", textAlign: "left" }}
                >
                  {result.artworkUrl100 && (
                    <Box
                      component="img"
                      src={result.artworkUrl100}
                      alt={`Copertina di ${title}`}
                      sx={{ width: 88, height: 88, objectFit: "cover" }}
                    />
                  )}
                  <CardContent sx={{ minWidth: 0, py: 1.5, "&:last-child": { pb: 1.5 } }}>
                    <Typography variant="subtitle1" component="h2" noWrap sx={{ fontWeight: 700 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {result.artistName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Box>
      )}

      <SearchDetailsDialog
        result={selectedResult}
        open={selectedResult}
        onClose={() => setSelectedResult(null)}
      />
    </>
  );
}

export default Search;
