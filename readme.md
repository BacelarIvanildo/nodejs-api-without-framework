# Podcast API

This is a simple podcast API developed in Node.js without using frameworks. The API allows you to list podcast episodes and filter specific episodes.

## Project Structure

- `controllers/`: Contains the controllers for handling podcast data.
  - `podcasts-controller.ts`: Defines the functions to list and filter podcast episodes.
- `routes/`: Defines the routes used in the API.
  - `routes.ts`: Contains the API routes.
- `utils/`: Contains various utilities used in the project.
  - `http-methods.ts`: Defines the HTTP methods supported by the API.

## Example Code

```typescript
import * as http from "http";
import { getFilterEpisodies, getListEpisodies } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //queryString
    const baseUrl = request.url?.split("?")[0];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodies(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodies(request, response);
    }
};
Installation Instructions
Clone the repository:

sh
git clone https://github.com/your-username/podcast-api.git
Navigate to the project directory:

sh
cd podcast-api
Install the dependencies:

sh
npm install
Start the server:

sh
npm start
Usage
List Episodes
Endpoint: /list

HTTP Method: GET

Description: Returns the list of all podcast episodes.

Filter Episodes
Endpoint: /episode

HTTP Method: GET

Description: Returns information about a specific episode based on the provided query parameters.

Contribution
Feel free to contribute to this project. Follow the steps below:

Fork this repository.

Create a new branch for your feature or fix: git checkout -b my-feature.

Commit your changes: git commit -m 'My new feature'.

Push to the original branch: git push origin my-feature.

Create a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more information.