# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy app files
COPY . .

# Expose the port
EXPOSE 5000

# Run the application
CMD ["node", "src/app.js"]
