# 🎬 Movie Ticket Booking App

A modern, full-stack movie ticket booking application built with React 19, Node.js, and MongoDB. Features a responsive design, real-time seat selection, and secure payment processing.

## 🚀 Demo

[Live Demo](https://your-demo-link.com) - *Add your deployed link here*

## 📱 Features

### User Features
- **Browse Movies**: View all available movies with detailed information
- **Search & Filter**: Search movies by title, genre, or language
- **Seat Selection**: Interactive seat layout with real-time availability
- **Booking Management**: View and manage your bookings
- **Favorites**: Save movies to your favorites list
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Admin Features
- **Dashboard**: Comprehensive admin dashboard with analytics
- **Movie Management**: Add, edit, and delete movies
- **Show Management**: Create and manage showtimes
- **Booking Overview**: View all bookings and customer details
- **Revenue Tracking**: Monitor sales and revenue metrics

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with new features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Modern utility-first CSS
- **React Router v7** - Client-side routing
- **Clerk** - Authentication and user management
- **React Hot Toast** - Beautiful notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Clerk Express** - Authentication middleware
- **Cloudinary** - Image storage and optimization

### Development Tools
- **ESLint** - Code linting
- **Nodemon** - Auto-restart on file changes

## 📁 Project Structure

```
movie-ticket-booking-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Static assets
│   │   └── lib/          # Utility functions
│   ├── public/           # Public assets
│   └── package.json
├── server/                # Node.js backend
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── configs/         # Configuration files
│   └── server.js        # Entry point
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Clerk account for authentication

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/movie-ticket-booking-app.git
cd movie-ticket-booking-app
```

2. **Install server dependencies**
```bash
cd server
npm install
```

3. **Install client dependencies**
```bash
cd ../client
npm install
```

4. **Environment Variables**

Create `.env` files in both client and server directories:

**Server `.env`**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

**Client `.env`**
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000/api
```

5. **Start the development servers**

**Terminal 1 - Server**
```bash
cd server
npm run server
```

**Terminal 2 - Client**
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 🎯 Usage

### For Users
1. **Browse Movies**: Visit the home page to see featured movies
2. **Search**: Use the search bar to find specific movies
3. **Book Tickets**: Select a movie → choose showtime → pick seats → confirm booking
4. **Manage Bookings**: View your bookings in the "My Bookings" section

### For Admins
1. **Access Admin Panel**: Navigate to `/admin` route
2. **Login**: Use your admin credentials
3. **Manage Content**: Add movies, create showtimes, view bookings

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get movie details
- `POST /api/movies` - Add new movie (admin)
- `PUT /api/movies/:id` - Update movie (admin)
- `DELETE /api/movies/:id` - Delete movie (admin)

### Shows
- `GET /api/shows` - Get all shows
- `GET /api/shows/movie/:movieId` - Get shows for a movie
- `POST /api/shows` - Create new show (admin)
- `PUT /api/shows/:id` - Update show (admin)
- `DELETE /api/shows/:id` - Delete show (admin)

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking details
- `DELETE /api/bookings/:id` - Cancel booking

## 🎨 UI Components

### Key Components
- **Navbar**: Responsive navigation with user menu
- **HeroSection**: Eye-catching hero banner
- **MovieCard**: Movie display card with hover effects
- **SeatLayout**: Interactive seat selection component
- **DateSelect**: Date picker for showtimes
- **Loading**: Skeleton loading states

### Design System
- **Colors**: Primary (purple), Secondary (gray), Accent (pink)
- **Typography**: Modern sans-serif fonts
- **Spacing**: Consistent 8px grid system
- **Responsive**: Mobile-first design approach

## 🧪 Testing

### Running Tests
```bash
# Frontend tests
cd client
npm test

# Backend tests
cd server
npm test
```

### Test Coverage
- Unit tests for utility functions
- Component tests for React components
- API endpoint tests
- Integration tests for booking flow

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd client
npm run build
vercel --prod
```

### Backend (Railway/Heroku)
```bash
cd server
railway up
```

### Environment Variables for Production
- Update all `.env` variables with production values
- Set up production MongoDB cluster
- Configure production Clerk application

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
```bash
git checkout -b feature/your-feature-name
```
3. **Make your changes**
4. **Test your changes**
```bash
npm run test
```
5. **Commit your changes**
```bash
git commit -m "Add: your feature description"
```
6. **Push to your branch**
```bash
git push origin feature/your-feature-name
```
7. **Create a Pull Request**

### Code Style
- Use ESLint configuration
- Follow conventional commit messages
- Write meaningful commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Clerk** for authentication solutions
- **MongoDB** for the flexible database
- **Cloudinary** for image optimization

## 📞 Support

For support, email on theregaurav08@gmail.com or follow me on LinkedIn, Instagram.

## 📝 Changelog

### v1.0.0 (Current)
- Initial release
- Full booking system
- Admin dashboard
- Responsive design

### Roadmap
- [ ] Payment integration (Stripe)
- [ ] Email notifications
- [ ] SMS confirmations
- [ ] Multi-language support
- [ ] Theater management
- [ ] Loyalty program

---

Made with ❤️ by Gaurav Gupta (https://github.com/Gauravgupta256)
