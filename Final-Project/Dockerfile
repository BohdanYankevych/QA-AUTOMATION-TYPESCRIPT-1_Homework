# Ubuntu + Node + Browsers (via Playwright image)
FROM mcr.microsoft.com/playwright:v1.39.0-focal

# Set working dir inside container
WORKDIR /usr/src/app

# Copy project files
COPY . .

# Install deps
RUN npm install

# Run tests by default (can be overridden)
CMD ["npx", "playwright", "test"]