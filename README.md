# Progetto-angular

Web application for visualizing COVID-19 data in Italy.  
Created by Viktor Zamboni, student of class 4^Bi at Istituto Tecnico Tecnologico “Marconi” in Rovereto.

## Description

The application provides an interactive dashboard with two main views:

- **Home**: national trend chart and historical/current metrics (cases, deaths, hospitalizations, etc.).
- **Overview**: interactive map of Italy. When a region is selected, the app shows current data for that specific region.

## Tech Stack

- **Frontend framework**: Angular
- **Styling**: Tailwind CSS
- **Charts**: Chart.js
- **Backend/Database**: Firebase (Firestore for data, Authentication if needed)
- **Deployment**: static hosting (for example Firebase Hosting, Vercel, or Netlify)

## Prerequisites

- Node.js (version 16 or higher) and npm
- Angular CLI installed globally:

```bash
npm install -g @angular/cli
```

- A configured Firebase project (credentials in the environment files)

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/ViktorZamboni/Progetto-angular.git
cd Progetto-angular/ProgettoAngular
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve
```

4. Open the app at `http://localhost:4200/`.

## Usage

- Use the main navigation to switch between **Home** and **Overview**.
- In **Home**, view national charts and aggregated metrics.
- In **Overview**, click a region on the map to display regional data.

## Firebase Configuration

1. Create a project in Firebase Console.
2. Enable Firestore and Authentication (if required).
3. Copy your Firebase SDK configuration (`apiKey`, `authDomain`, `projectId`, etc.).
4. Create/update `src/environments/environment.ts` (and `environment.prod.ts`) with:

```ts
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
```

5. Organize Firestore data according to the app requirements (for example, national and regional collections).
