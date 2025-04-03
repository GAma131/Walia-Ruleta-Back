# Ruleta-back

## Introduction
Backend API for a roulette application that manages participants and selection history.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/Ruleta-back.git
   cd Ruleta-back
   ```
### Install dependencies
   ```bash
   npm install
   ```

### Configuration
Create a .env file in the root directory and add the following environment variables:
- MONGO_URI=your_mongodb_connection_string

### Start the server
   ```bash
   npm run dev
   ```

### API Endpoints
- GET /api/roulette - Get all participants
- POST /api/roulette - Create a new participant
- DELETE /api/roulette - Delete a participant
- PATCH /api/roulette - Select a participant
- PATCH /api/roulette/update - Update a participant
- PATCH /api/roulette/all - Unselect all participants
- POST /api/roulette/restart - Restart the roulette

- GET /api/roulette/history - Get selection history