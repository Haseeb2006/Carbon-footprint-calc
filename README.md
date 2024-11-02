# SummarEase AI-Powered Educational Platform

SummarEase is an innovative educational platform that uses AI to transform video content into comprehensive learning experiences. It generates summaries, quizzes, and notes from educational videos, helping students learn more efficiently.

## Features

- Video upload and processing
- AI-generated video summaries
- Automatically created quizzes based on video content
- AI-generated study notes
- User authentication and profiles
- Performance analytics

## Tech Stack

- Frontend: React with TypeScript, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- AI Integration: OpenAI GPT-3.5

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- OpenAI API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/summarease-educational-platform.git
   cd summarease-educational-platform
   ```

2. Install dependencies for both frontend and backend:
   ```
   npm install
   cd client && npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Start the development server:
   ```
   npm run dev
   ```

This will start both the backend server and the frontend development server concurrently.

## Usage

1. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).
2. Register a new account or log in if you already have one.
3. Upload an educational video through the dashboard.
4. Wait for the AI to process the video and generate summaries, quizzes, and notes.
5. Explore the generated content and use the platform to enhance your learning experience.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.