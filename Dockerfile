# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Create env.js file at build time using environment variables
RUN echo "window.ENV = { \
    REACT_APP_API_URL: '${REACT_APP_API_URL}', \
    REACT_APP_CONFIG_VERSION: '${REACT_APP_CONFIG_VERSION}' \
};" > public/env.js

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration if you have custom config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]