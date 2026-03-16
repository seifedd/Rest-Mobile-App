# RestFinder 🍴

**RestFinder** is a modern, high-performance web application designed for discovering and rating the best local restaurants. Originally conceived as a Java/MySQL backend project, this version reimagines the experience as a sleek, interactive single-page application (SPA) built with modern web standards.

[![Live Demo](https://img.shields.io/badge/demo-live-orange?style=for-the-badge)](https://rest-finder-seif.netlify.app)

## 🚀 Experience the Demo

The application is deployed and accessible at: **[rest-finder-seif.netlify.app](https://rest-finder-seif.netlify.app)**

## ✨ Key Features

- **🔍 Smart Search**: Real-time filtering by restaurant name, cuisine, or address.
- **🍱 Cuisines & Specialties**: Categorized browsing for varied tastes (French, Italian, Japanese, Tunisian, etc.).
- **⭐ Rated Discovery**: Filter by minimum star ratings to find the top-tier spots.
- **📍 Location Awareness**: Integrated browser Geolocation to calculate distance and sort by proximity (requires location permissions).
- **🌓 Dynamic Theming**: Fully responsive design with support for System/Light/Dark modes and rich glassmorphism aesthetics.
- **💬 Interactive Feedback**: Like or dislike restaurants to influence their popularity; results are persisted locally.
- **📱 Mobile First**: A premium experience across all devices, from desktop to mobile.

## 🛠️ Technology Stack

- **Frontend**: HTML5, Semantic UI
- **Styling**: Vanilla CSS3 (Custom properties, Grid, Flexbox, Glassmorphism, Animations)
- **Logic**: Vanilla JavaScript (ES6+, Fetch, Geolocation API, LocalStorage)
- **Deployment**: Netlify

## 💻 Running Locally

To run the project locally without any dependencies:

1. Clone the repository:
   ```bash
   git clone git@github.com:seifedd/Rest-Mobile-App.git
   cd Rest-Mobile-App
   ```

2. Start a local development server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   ```

3. Open your browser and navigate to `http://localhost:8000`.

## 📜 Project History

This repository contains both the modern web frontend and the original Java-based implementation (`src/restoapp`). The web version provides a more accessible, zero-config way to showcase the core restaurant-finding logic and data model originally developed in Java.
