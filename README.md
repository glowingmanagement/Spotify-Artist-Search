# UnHurd Spotify WebApp

## Description

This is a simple web app that allows you to search for an artist using the Spotify API and view their albums and tracks. The app also displays the artist and track's popularity. It also allows you to view your recently viewed when you perform a search and preview tracks.

## Requirements

- [Node.js - v16](https://nodejs.org/en/)
- [TypeScript - v5](https://www.typescriptlang.org/)
- Create a Spotify app and get your client ID and secret [here](https://developer.spotify.com/)

## Installation

1. Clone the repo by running:

    ```bash
    git clone git@github.com:glowingmanagement/unhurd-spotify-webapp.git
    ```

2. Change into the directory by running:

    ```bash
    cd unhurd-spotify-webapp
    ```

3. Install dependencies by running:

    ```bash
    npm run app:install
    ```

4. Create a `.env` file in the server directory and add your Spotify client ID and secret following the `.env.example` for reference

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

## Environment Variables

| CLIENT_ID | Client ID from the Spotify API |

| CLIENT_SECRET | Client secret from the Spotify API |

| PORT | Port to run the server on | Default: 8000 |

## Scripts

| webapp:start | Start running the webapp |

| webapp:build | Build the react application |

| webapp:install | Install dependencies for the webapp |

| server:start | Start the server |

| server:build | Compile the server |

| server:install | Install dependencies for the server |

| server:dev | Run the server in development mode using Nodemon |

| app:install | Install all dependencies for the server and webapp |

| start | Concurrently run the server and webapp |

| build | Build and compile the server and webapp |

## Endpoints

- [GET] /v1/api/search/
- [GET] /v1/api/search/:artistName
- [GET] /v1/api/album/:albumId:previewId

## Technologies

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Spotify API](https://developer.spotify.com/documentation/web-api/)
- [Axios](https://axios-http.com/)
- [React Router](https://v5.reactrouter.com/)

## License

MIT License

## Contact

Josh Holmes:

- [LinkedIn](https://www.linkedin.com/in/joshholmes22)
- [Email](mailto:josh@glowingmanagement.com)
- [GitHub](htts://www.github.com/glowingmanagement)
