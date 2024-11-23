# Use a lightweight Node.js image as the base
FROM node:22.11.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port where the app will run
EXPOSE 8080

# Start the production server
CMD ["npm", "start"]