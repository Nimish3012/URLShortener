Here's your updated `README.md` file, reflecting everything we've done so far, including Kubernetes deployment, handling persistence issues, and using environment variables for the base URL:

---

````markdown
# URL Shortener

A simple Node.js-based URL shortener API that allows users to shorten long URLs and redirect to them using a short code. It uses Node.js, Express, and Docker for containerization. This project demonstrates building and deploying a basic API using Docker and Kubernetes, handling persistence, and managing configuration via environment variables.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Docker Setup](#docker-setup)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Development](#development)
- [License](#license)

---

## Project Overview

The URL Shortener allows users to:

- Shorten long URLs using a simple POST request.
- Retrieve and redirect to the original URL via the short code.
- Run the API locally, in Docker, or in a Kubernetes cluster.
- Persist shortened URLs using a shared JSON file (suitable for single-instance or shared-volume setups).

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- Docker
- Git
- (Optional) kubectl and minikube or a Kubernetes cluster

### Steps to Set Up Locally

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/URLshortener.git
cd URLshortener
````

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```

> Server will run at `http://localhost:5000` by default.

---

## Usage

Once the server is running, interact with the API using Postman, cURL, or any HTTP client.

### Example Request (cURL)

```bash
curl -X POST http://localhost:5000/shorten \
  -H "Content-Type: application/json" \
  -d '{"longUrl": "https://www.example.com"}'
```

### Example Response

```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

Visit the short URL in a browser to get redirected.

---

## API Endpoints

### `POST /shorten`

**Description:** Shortens a long URL.

**Request Body:**

```json
{
  "longUrl": "https://www.example.com"
}
```

**Response:**

```json
{
  "shortUrl": "http://<BASE_URL>/<shortCode>"
}
```

---

### `GET /:shortCode`

**Description:** Redirects to the original long URL.

**Example:**

```
GET http://localhost:5000/abc123
```

**Response:** HTTP redirect to the original URL.

---

## Docker Setup

### Build Docker Image

```bash
docker build -t url-shortener .
```

### Run Docker Container

```bash
docker run -p 5000:5000 \
  -e BASE_URL=http://localhost:5000 \
  url-shortener
```

> The application will be available at `http://localhost:5000`.

---

## Kubernetes Deployment

> The application is designed to be deployed in a Kubernetes cluster with proper environment variable setup.

### Key Notes:

* The app uses a shared `database.json` file for persistence. Ensure a shared volume is mounted if using multiple replicas.
* The `BASE_URL` must be set to the external IP or DNS of the service for short URLs to work correctly.

### Steps:

1. Build and push the Docker image to your container registry.
2. Create a Kubernetes `deployment.yaml` and `service.yaml`.
3. Ensure `BASE_URL` is set in the deployment environment variables.

**Example environment section in `deployment.yaml`:**

```yaml
env:
  - name: BASE_URL
    value: "http://<external-ip-or-service-name>"
```

4. Apply the configs:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

5. Get external IP:

```bash
kubectl get service url-shortener
```

Use this external IP as the `BASE_URL` when testing your shortened links.

---

## Development

### Make Changes

1. Create a new branch:

```bash
git checkout -b feature-xyz
```

2. Make your changes, then commit:

```bash
git add .
git commit -m "Add feature XYZ"
```

3. Push your branch:

```bash
git push origin feature-xyz
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## MIT License

```
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

