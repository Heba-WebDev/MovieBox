# MovieBox

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Known Issues](#known-issues)
4. [Future Improvements](#future-improvements)
5. [Screenshots](#screenshots)
6. [Getting Started](#getting-started)
7. [Local Variables](#local-variables)
8. [Contributing](#contributing)

## Overview

MovieBox is a movie discovery app built during HNG's internship stage 2. Interns were asked to create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. The app should consume data from the TMDB API. [Disclaimer: Search capability was later dropped down from requirements]. This app was built with Nextjs and Tailwind.

## Features

Here are some of the main features of the app:

- Dynamically fetching the hero movie alongside the top 10 movies.
- Dynamic routes for each movie, with a trailer, and extended details about it.
- A loading skeleton is shown while the data is being fetched.
- Errors are handled if the user tries to navigate to a non-existent route or searches for a movie that doesn't exist in the database.
- Users can favorite a movie.
- User-friendly interface with a responsive design."

## Known Issues

- Fetching and showing images of the movie in the dynamic route corresponding to it has yet to be fully implemented.
- The movies/id route doesn't have a dedicated loading component.
- There is no functional navbar on small screens.
- The navbar on medium and large screens on the movie dynamic page has non-functional links for routes that have yet to be implemented.

## Future Improvements

This app was built in hurry in less than a week time. Many features can be added but I'll try to list few:

- Implement a backend to include signup/login capabilities for users
- Imlment search capabilities.
- Optimize performance for faster loading times.
- Add css animations.

## Screenshots

![Hero section of MovieBox](https://i.ibb.co/V9sTzJd/screencapture-localhost-3000-2023-09-15-18-52-53-2.png)
![Top Rated movies](https://i.ibb.co/6JvRjcm/screencapture-localhost-3000-2023-09-15-18-52-53-3.png)

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Obtain a TMDb API key by following the instructions [here](https://www.themoviedb.org/documentation/api).
4. Create a `.env` file in the project root directory and add your API key:

5. Run the app locally using `npm start`.

## Local Variables

For the fetching to happen, you must provide a valid api key.

- `NEXT_PUBLIC_API_KEY=`: This variable stores your TMDb API key, which is required for the app to fetch movie data from the API.
- `NEXT_PUBLIC_BASE_IMG_URL=`: This variable is the base url needed to fetch images.
- `NEXT_PUBLIC_BASE_URL`: This variable is the base url used before fetching from an end point.

## Contributing

I encourage others to contribute to the project. This is a good opportunity for both of us to learn from one another, so don't hesitate to get involved. Here are the guidelines for collaboration:

- Fork this repository and create a new branch for your feature or bug fix.
- Ensure your code follows the project's coding standards.
- Submit a pull request, providing a clear description of your changes and why they're needed.
