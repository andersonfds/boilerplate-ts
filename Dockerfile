FROM node:current-alpine as builder

# Building the application
ENV NODE_ENV=development
WORKDIR /build
COPY . .
RUN npm i
RUN npm run test
RUN npm run build

# Deployment stage
FROM builder as deploy
WORKDIR /app
COPY --from=builder /build/dist ./

# Running the built application
CMD ["node", "index.js"]