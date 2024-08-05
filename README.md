Ticket-tracking Dashboard

Project Overview

The Ticket-tracking Dashboard is a web application built using React, TypeScript, and Sass. It leverages Vite for fast development and bundling, and pnpm for package management. The dashboard features reusable card components that display ticket data based on different timeframes. The data is fetched from a JavaScript file, which is used to populate the dashboard with relevant information.

How to Start the App

1. Clone the Repository

   git clone https://github.com/AdnaanH/frontend-interview-challenge-main

2. Navigate to the Project Directory

   cd ticket-tracking-dashboard

3. Install Dependencies

   pnpm install

4. Start the Development Server

   pnpm dev

   Open your browser and navigate to `[http://localhost:3000](http://localhost:5173/)` to view the application.

## Challenges and Insights

- **Most Difficult Part:**

  The most challenging part of this project was managing and synchronizing the data between the timeframes and the reusable card components. Ensuring that the data was correctly displayed based on the selected timeframe required careful handling of state and props.

- **Easiest Part:**

  The easiest part of the project was setting up the development environment with Vite and pnpm. Vite's fast build times and pnpm's efficient package management made the initial setup and development smooth and straightforward.

## Additional Notes

- **Data Handling:**

  The data for the dashboard is fetched from a JavaScript file, which is structured to include different timeframes and their corresponding values. Ensure that this file is correctly formatted and includes all necessary data for the dashboard to function properly.

- **Component Documentation:**

  - **`CardComponent`**: A reusable component that displays information in a card format. It accepts the following props:
    - `title` (string): The title of the card.
    - `currTimeframe` (number): The current value for the selected timeframe.
    - `prevTimeframe` (number): The previous value for the selected timeframe.
    - `bgColor` (string): The background color for the card.
    - `image` (string): The URL or path to the image to be displayed in the card.
    - `frequency` (string): The label indicating the timeframe (e.g., "Yesterday", "Last week", "Last month").

- **Styling:**

  Sass is used for styling the components. The styles are organized in a way to ensure that the dashboard is visually appealing and responsive.

Feel free to reach out if you have any questions or need further clarifications!

