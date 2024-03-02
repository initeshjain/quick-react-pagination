# Quick React Pagination

Quick React Pagination is a simple pagination component for React applications. It allows users to navigate through pages of content easily.

## Installation

You can install the package using npm or yarn:

```bash
npm install quick-react-pagination
```

or

```bash
yarn add quick-react-pagination
```

## Usage

```jsx
import React from "react";
import Pagination from "quick-react-pagination";

const MyComponent = () => {
  // Define your handlePageChange function
  const handlePageChange = (page) => {
    // Logic to handle page change
  };

  return (
    <div>
      <h1>Your Content</h1>
      <Pagination
        page={1} // Current page number
        totalPages={10} // Total number of pages
        handlePageChange={handlePageChange} // Function to handle page change
      />
    </div>
  );
};

export default MyComponent;
```

## Props

- `page`: Current page number.
- `totalPages`: Total number of pages.
- `handlePageChange`: Function to handle page change.

## Customization

[WIP] I will add style configuration options in next release.

---