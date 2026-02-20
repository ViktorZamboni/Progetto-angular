# Progetto-angular

Sito web per la visualizzazione dei dati COVID-19 in Italia. Realizzato da Viktor Zamboni, alunno della classe 4^Bi dell'Istituto Tecnico Tecnologico "Marconi" di Rovereto.

## Descrizione
L'applicazione fornisce una dashboard interattiva con due viste principali:
- **Home**: grafico andamento nazionale e dati storici/correnti (contagi, decessi, ricoveri, etc.).
- **Overview**: mappa interattiva dell'Italia. Selezionando una regione, vengono mostrati i dati attuali specifici di quella regione.

## Tecnologie utilizzate
- **Framework frontend**: Angular
- **Stile**: Tailwind CSS
- **Grafici**: Chart.js
- **Backend/Database**: Firebase (Firestore per dati, Authentication per eventuale accesso)
- **Distribuzione**: (inferita) hosting statico (Firebase Hosting, Vercel, Netlify)

## Prerequisiti
- Node.js (versione 16 o superiore) e npm installati.
- Angular CLI installata globalmente: `npm install -g @angular/cli`
- Progetto Firebase configurato (credenziali da inserire in `environment.ts`).

## Installazione ed esecuzione locale
1. Clonare il repository:
   ```bash
   git clone https://github.com/ViktorZamboni/Progetto-angular.git
   cd Progetto-angular

## Utilizzo
Navigazione: menu principale per passare da Home a Overview.

Home: osservare il grafico nazionale e i dati aggregati. I dati sono aggiornati automaticamente.

Overview: interagire con la mappa cliccando sulle regioni; i dati della regione selezionata vengono visualizzati a lato.

## Configurazione Firebase
Creare un progetto su Firebase Console.

Abilitare Firestore e Authentication (se necessario).

Ottenere la configurazione SDK (apiKey, authDomain, projectId, etc.).

## Creare il file src/environments/environment.ts (e environment.prod.ts) con il seguente contenuto:
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};
Strutturare i dati in Firestore secondo le necessità dell'app (collezione regioni, nazionale, etc.).
