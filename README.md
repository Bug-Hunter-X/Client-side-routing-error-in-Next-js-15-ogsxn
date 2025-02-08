# Next.js 15 Client-Side Routing Error

This repository demonstrates a client-side routing error in Next.js 15.  When navigating to a page that does not exist, the application throws an unhelpful client-side error instead of a proper 404 page.

## Bug Description

The issue occurs when using client-side navigation (e.g., via a `<Link>` component) to a route that has not been defined. Instead of gracefully handling the missing route and displaying a 404 page, the application throws an error in the browser's console, providing a poor user experience.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `http://localhost:3000`.  You should see the home page.
5. Click the "Go to About Page" link.  This works fine.
6. Try navigating to a non-existent page, such as `http://localhost:3000/nonexistent`. This will throw a client-side error.

## Expected Behavior

The application should gracefully handle the 404 error and display a custom 404 page.

## Solution

The solution involves configuring Next.js to handle missing routes appropriately, possibly through the use of a custom `404.js` page or by configuring the `next.config.js` file to explicitly define routes or use the `notFound` option.