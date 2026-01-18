🩺 CareBridge | Baby Sitting & Elderly Care Service Platform
CareBridge is a modern, full-stack web application designed to connect families with certified caretakers for children, the elderly, and medical assistance. Built with a focus on trust and professional support, it provides a seamless interface for browsing specialists and managing healthcare needs.

Live Link: https://care-bridge-one.vercel.app/services

🚀 Technologies Used
Framework: Next.js 16 (App Router)

Language: JavaScript (ES6+)

Database: MongoDB (Native Driver)

Authentication: Mock Credentials with HTTP-only Cookies

Styling: Tailwind CSS + DaisyUI (OKLCH Color Palette)

Icons: Lucide React

Components: Swiper.js (Coverflow Effect)

Deployment: Vercel

✨ Implemented Features
1. Dynamic Caregiver Grid
Fetches 16+ professional caregiver profiles directly from MongoDB. Profiles include experience, ratings, bios, and specialized certifications.

2. Mock Authentication & Protected Routes
Implements a secure mock login system.

Route Guard: Middleware prevents unauthenticated access to the Experts page.

Demo Access: A "Demo User" button allows instant login for testers.

Cookie-based Session: Stores a mock token in a secure cookie to persist the session.

3. Server-Side Pagination
Efficiently manages large datasets using MongoDB .skip() and .limit(). This ensures the application stays fast even as the number of caregivers grows.

4. Interactive 3D Testimonials
Uses Swiper.js with a Coverflow effect to display family feedback in a high-end, touch-responsive 3D slider.

5. Services & FAQ System
Categorized care packages (Baby Care, Elderly Care, etc.) with dynamic pricing and a DaisyUI-powered accordion FAQ to answer common user concerns.

🛠️ Setup & Installation
Follow these steps to run the project locally:

Clone the Repository:
git clone https://github.com/your-username/care-bridge.git
cd care-bridge

Install Dependencies:
npm install
Environment Variables: Create a .env.local file in the root and add your MongoDB URI:

MONGODB_URI=your_mongodb_connection_string
Configure Images: Ensure next.config.mjs allows the necessary hostnames:

JavaScript

// next.config.mjs
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'i.pravatar.cc' },
    { protocol: 'https', hostname: 'images.unsplash.com' }
  ]
}


Run Development Server:
npm run dev
Open http://localhost:3000 to view the result.

👤 Mock Credentials
To test the manual login, use the following:

Email: admin@carebridge.com

Password: password123


Developed by Karishma Fariha