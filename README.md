# Google Clone (Practice on Next.js 13 and Tailwind CSS)

This is a Google search engine clone built using Next.js 13 and Tailwind CSS. It uses Google's custom search API to fetch search results and displays them in a similar format to Google's search results page. The project is designed to be responsive and mobile-friendly.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- Search the web using Google's search algorithm
- View search results with clickable links and descriptions
- Navigate to Google's image search page
- Responsive design for desktop and mobile devices

## Demo

You can view a live demo of the project at [Vercel](https://google-clone-nextjs-tailwind.vercel.app/).

## Installation

To run the project locally, you'll need to clone the repository and install the dependencies using `npm` or `yarn`.

```
git clone https://github.com/Ramy5/Google-Clone.git
cd Google-Clone
npm install
```

or

```
yarn install
```

You'll also need to obtain a Google custom search API key and search engine ID. You can follow the instructions in the [Google Custom Search API documentation](https://developers.google.com/custom-search/v1/overview) to obtain these.

Create a `.env.local` file in the root of the project and add the following environment variables:
```
GOOGLE_API_KEY=<your Google custom search API key>
GOOGLE_CONTEXT=<Your Google CX context>
```
Then, start the development server:
```
npm run dev
```
Or
```
yarn dev
```

The project should be running at [http://localhost:3000](http://localhost:3000).

## Usage

To use the search engine, simply enter your search query in the search bar and hit the Enter key or click the "Google Search" button. You can navigate to the image search page by clicking the link at the bottom of the search results page.

## Technologies Used

This project was built using the following technologies:

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

