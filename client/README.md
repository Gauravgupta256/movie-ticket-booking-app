# Full Stack Movie Ticket Booking App

## Project Overview
This is a full stack movie ticket booking application built with React on the client side. It allows users to browse movies, view detailed information, select seats for shows, and manage their bookings. The app also includes an admin panel for managing shows and bookings.

## Features

### User Features
- Browse currently showing movies with detailed information including ratings, cast, and trailers.
- View movie details with overview, runtime, genres, release year, and favorite toggle.
- Select show dates and times.
- Choose seats from a seat layout with a maximum of 5 seats per booking.
- View and manage personal bookings with payment status.
- Mark movies as favorites.
- Responsive UI with notifications for user actions.

### Admin Features
- Dashboard displaying total bookings, revenue, active shows, and user count.
- Add new shows with movie selection, pricing, and scheduling.
- View list of shows with booking statistics and earnings.
- View list of all bookings with user details, seats, and amounts.

## Technologies Used
- React 19
- React Router DOM for routing
- Clerk for authentication
- Tailwind CSS for styling
- Vite as the build tool
- React Hot Toast for notifications
- Lucide React for icons

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine
- A Clerk account for authentication (to obtain publishable key)

### Steps
1. Clone the repository
2. Navigate to the `client` directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the `client` directory and add your Clerk publishable key and currency:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_CURRENCY=$  # or your preferred currency symbol
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and go to `http://localhost:3000`

## Usage
- Use the navigation bar to browse movies, view favorites, and access your bookings.
- Click on a movie to see details and buy tickets.
- Select show date, time, and seats, then proceed to checkout.
- Admin users can access the admin panel at `/admin` to manage shows and bookings.

## Folder Structure Overview
```
client/
├── public/                 # Static assets like images and favicon
├── src/
│   ├── assets/             # Dummy data and images
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utility functions (date/time formatting)
│   ├── pages/              # Page components for user and admin
│   ├── main.jsx            # App entry point
│   ├── App.jsx             # Main app component with routing
│   └── index.css           # Global styles
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Environment Variables
- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk authentication publishable key.
- `VITE_CURRENCY`: Currency symbol used in the app (e.g., `$`).

## License
This project is licensed under the MIT License.
