import { useEffect, useState } from "react";

function AlbumsClassifica() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/it/rss/topalbums/limit=25/json")
      .then((response) => {
        return response.json().then((data) => {
          const entries = data.feed?.entry || [];
          setAlbums(
            entries.map((item) => ({
              id: item.id.attributes["im:id"],
              name: item["im:name"].label,
              artistName: item["im:artist"].label,
              artworkUrl100: item["im:image"].at(-1).label,
              genre: item.category.attributes.label,
              releaseDate: item["im:releaseDate"]?.attributes?.label,
              price: item["im:price"]?.label,
              appleUrl: item.id.label,
            })),
          );
        });
      })
  }, []);
}

export default AlbumsClassifica;
