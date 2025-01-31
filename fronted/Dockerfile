# Use a lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .


# Expose the port Vite uses (default 5173 for dev, 4173 for preview)
EXPOSE 5173

# Start the app in production mode
CMD ["npm", "run", "dev"]
