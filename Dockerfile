# ==== Multi-stage builds ====

# ==== Stage 0 ====
# "build-stage", based on node.js, to build and compile the frontend

# Use Node 16 base image
# alpine is smaller image than regular node image
# React is not a node app, however, it needs node to run application
FROM node:16-alpine as builder

# Set the working directory to /app inside the container.
WORKDIR /app

# Copy app files
COPY . .

# ==== BUILD ====
# Install dependencies (npm ci makes sure that exact versions in the lockfile gets installed)
RUN npm ci

# Build the app
RUN npm run build
# ==== Stage 0 end ====

# ==== Stage 1 ====
# Based on nginx, to have only the compiled app, ready for production with nginx

FROM nginx:1.18.0-alpine

ENV NODE_ENV production

# Copy built assets from 'builder' image
COPY --from=builder /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
# ==== Stage 1 end ====