# SoundRank

SoundRank è un'applicazione web per scoprire la musica e i podcast più popolari
in Italia. Permette di consultare le classifiche aggiornate e cercare contenuti
nel catalogo iTunes attraverso un'interfaccia semplice e responsive.

## Funzionalità

- Classifica delle 25 canzoni più ascoltate
- Classifica dei 25 album più popolari
- Classifica dei 25 podcast più seguiti
- Anteprima delle prime 3 canzoni nella home
- Ricerca di canzoni, album, artisti e podcast
- Schede con informazioni dettagliate sui contenuti
- Tema chiaro e scuro
- Interfaccia adattabile a desktop e dispositivi mobili

I dati sono forniti dalle API pubbliche di Apple Music e iTunes.

## Tecnologie

- [React](https://react.dev/)
- [Material UI](https://mui.com/)
- [React Router](https://reactrouter.com/)
- API iTunes Search e RSS ()

## Avvio del progetto

Clona il repository e installa le dipendenze:

```bash
npm install
```

Avvia il progetto:

```bash
npm run dev
```

## Struttura principale

```text
src/
├── Album/       # Classifica, card e dettagli degli album
├── Podcast/     # Classifica, card e dettagli dei podcast
├── Search/      # Ricerca e dettagli dei risultati
├── Song/        # Classifica, card e dettagli delle canzoni
├── App.jsx      # Rotte e struttura generale
├── Home.jsx     # Pagina iniziale e Top 3
└──  Navbar.jsx   # Navigazione e selettore del tema
```

## Dati

SoundRank utilizza esclusivamente dati pubblici ottenuti dalle API pubbliche dei servizi Apple ed iTunes.
Copertine, titoli e informazioni sui contenuti appartengono ai rispettivi proprietari.
Documentazione API utilizzate: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1
