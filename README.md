# UnHurd Spotify WebApp

## Description

This is a simple web app that allows you to search for an artist using the Spotify API and view their albums and tracks. The app also displays the artist and track's popularity. It also allows you to view your recently viewed when you perform a search and preview tracks.

## Requirements

- [Node.js](https://nodejs.org/en/)
- Create a Spotify app and get your client ID and secret [here](https://developer.spotify.com/dashboard/applications)

## Installation

1. Clone the repo by running:

    ```bash
    git clone git@github.com:glowingmanagement/unhurd-assessment.git
    ```

2. Change into the directory by running:

    ```bash
    cd unhurd-assessment
    ```

3. Install dependencies by running:

    ```bash
    npm install
    ```

4. Add your client ID and secret to the `.env` file in the server directory (see `.env.example` for reference)

5. Build the app by running:

    ```bash
    npm run build
    ```

6. Start the server by running:

    ```bash
    npm start
    ```

7. Open your browser and go to:

    ```bash
    http://localhost:3000
    ```

## To-Do

- [X] View and select history
- [X] Make albums clickable
- [X] Display tracks from albums
- [ ] Check all files
- [ ] Refactor
- [ ] Write README with instructions
- [X] Mobile Responsive
- [X] Add similar artists on search
- [ ] Add page number to URL so back button works
