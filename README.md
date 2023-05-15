# Google Clone (Practice on Next.js 13 and Tailwind CSS)

The Google Clone project is a web application that aims to replicate the functionality and design of Google's search engine. It is built using Next.js and Tailwind CSS, and it utilizes Google's custom search API to fetch search results and display them in a similar format to Google's search results page. The project is designed to be responsive and mobile-friendly, allowing users to search the web on both desktop and mobile devices. The search engine allows users to enter search queries and view search results with clickable links and descriptions. Additionally, the project includes link to navigate to Google's image search page.

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
<div style="display: flex">
  <img style="width: 400px" src="https://github.com/Ramy5/Google-Clone/assets/74501165/43b86f26-9ba4-4138-a187-75da83b1ca96" alt="Preview">
  <img style="width: 400px" src="https://github.com/Ramy5/Google-Clone/assets/74501165/988dafa0-e045-447b-9a09-46bb989766ef" alt="Preview">
</div>

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

