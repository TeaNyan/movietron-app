# Movietron ([View Demo](https://movietron.vercel.app))

Movietron is a Next.js application that displays a list of movies fetched from the OMDB API. The application features infinite scrolling, search functionality, and detailed movie views. The project is styled to fit a Star Wars theme with a starry background, and it uses URL-friendly slugs for movie titles combined with IMDb IDs.

## Motivation

This project was created as an example for a take-home task I made for the people I interviewed for front-end position. It demonstrates the use of Next.js, Tailwind CSS, and TypeScript to build a fully functional web application with modern web development practices.

## Features

- **Home Page**: Displays a list of movies fetched from the OMDB API.
- **Infinite Scrolling**: Automatically loads more movies as you scroll down.
- **Search Functionality**: Allows users to search for movies by title.
- **Movie Detail Page**: Shows detailed information about a selected movie.
- **Star Wars Theme**: Starry background and themed colors.
- **SEO-friendly URLs**: Uses movie title slugs combined with IMDb IDs in URLs.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **TypeScript**: For type safety and enhanced development experience.
- **State Management**: React hooks.
- **API Integration**: [OMDB API](http://www.omdbapi.com/)
- **Routing**: Next.js dynamic routing.

## Installation

**1. Clone the repository:**
```bash
 git clone https://github.com/your-username/movietron.git
 cd movietron
 ```
**2. Install dependencies:**

```bash
npm install
```


**3. Configure the API key in next.config.mjs:**

```javascript
// next.config.mjs
export default {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_OMDB_API_KEY: 'your_omdb_api_key',
  },
};
```
**4. Run the development server:**

```bash
npm run dev
```

**API Key**

*The application uses the OMDB API. To set your own API key, configure it in next.config.mjs:*

```javascript
// next.config.mjs
export default {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_OMDB_API_KEY: 'your_omdb_api_key',
  },
};
```

## Customization
**Star Wars Theme**

The application is styled with a Star Wars theme using Tailwind CSS. You can customize the colors and background in the tailwind.config.js and globals.css files.

License

This project is licensed under the MIT License.
