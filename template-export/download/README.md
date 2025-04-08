# Edge Education Template

This is a complete template for a study abroad consultancy website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive modern design
- Authentication system
- Student registration forms
- Detailed destination pages
- Admin dashboard
- Contact forms and lead generation
- SEO-friendly structure

## Installation Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Download and extract the template**

2. **Install dependencies**
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. **Start the development server**
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

4. **Customize the template**
   - Update the company name, logo, and colors in `client/src/App.tsx`
   - Modify destination information in `client/src/lib/types.ts`
   - Adjust services in the services section
   - Update the contact information
   - Customize the forms as needed

5. **Build for production**
   ```
   npm run build
   ```
   or
   ```
   yarn build
   ```

## Folder Structure

- `client/` - Frontend React application
  - `src/` - Source code
    - `assets/` - Images and static files
    - `components/` - UI components
    - `hooks/` - Custom React hooks
    - `lib/` - Utilities and type definitions
    - `pages/` - Page components
- `server/` - Backend Express server
- `shared/` - Shared types and schemas
- `public/` - Public assets

## Customization Guide

### Changing the Logo

1. Replace the logo file in `client/src/assets/logo.png`
2. Update any references to the logo size in component files

### Modifying Colors

1. Update the theme colors in `theme.json`
2. Adjust any specific color values in the CSS files

### Adding or Changing Destinations

1. Modify the destinations data in `client/src/lib/types.ts`
2. Update destination cards in `client/src/components/sections/destinations.tsx`
3. Add or modify destination detail pages in `client/src/pages/destinations/`

### Adjusting Forms

1. Update form fields in the appropriate component files
2. Modify validation rules as needed

## Support

For questions or assistance with this template, please contact us at [your-email@example.com].

## License

This template is licensed under the [MIT License](LICENSE).