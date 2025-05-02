# URL Shortener

A simple Node.js-based URL shortener API that allows users to shorten long URLs and redirect to them using a short code. The project uses **Node.js**, **Express**, and **Docker** for containerization. It’s designed to help you learn how to build and deploy a basic API, and how to containerize it with Docker.

## Table of Contents

* [Project Overview](#project-overview)
* [Installation](#installation)
* [Usage](#usage)
* [Docker Setup](#docker-setup)
* [API Endpoints](#api-endpoints)
* [Development](#development)
* [License](#license)

## Project Overview

The URL Shortener allows users to shorten long URLs and retrieve the original URL using a short code. It is designed to be simple for educational purposes, making it easy to understand how URL shorteners work while learning backend development concepts.

## Installation

### Prerequisites

Before starting, ensure you have the following installed on your machine:

* [Node.js](https://nodejs.org/en/download/)
* [Docker](https://docs.docker.com/get-docker/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Steps to Set Up Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/URLshortener.git
   cd URLshortener
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node app.js
   ```

4. The server will run at `http://localhost:5000`.

## Usage

Once the server is running, you can interact with the URL shortener API using **Postman**, **cURL**, or any HTTP client.

### API Endpoints

#### `POST /shorten`

This endpoint allows you to shorten a long URL.

**Request Body**:

```json
{
  "url": "https://www.example.com"
}
```

**Response**:

```json
{
  "short_url": "http://localhost:5000/short/<shortCode>"
}
```

#### `GET /short/:code`

This endpoint redirects you to the original URL using the short code.

**Example Request**: `GET http://localhost:5000/short/<shortCode>`

**Response**: Redirects to the original URL.

## Docker Setup

To run this project in a Docker container:

1. **Build the Docker image**:

   ```bash
   docker build -t url-shortener .
   ```

2. **Run the Docker container**:

   ```bash
   docker run -p 5000:5000 url-shortener
   ```

This will start the application inside a Docker container and expose it on `http://localhost:5000`.

## Development

To make changes to the project:

1. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature-xyz
   ```

2. Make your changes to the code.

3. Add and commit your changes:

   ```bash
   git add .
   git commit -m "Add feature XYZ"
   ```

4. Push your changes:

   ```bash
   git push origin feature-xyz
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Optional: Add License File

If you want to include a **LICENSE** file, you can use the MIT License, which is a common open-source license. Here's the content for a basic MIT License:

```txt
MIT License

Copyright (c) 2025 Nimish Sahu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

---

### Final Notes

This **README.md** should help provide context to anyone using or contributing to the repository. It explains the project setup, usage, and how to interact with the API. Let me know if you'd like to tweak or add anything further!
