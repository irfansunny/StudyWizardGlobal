# Edge Education Template - Customization Guide

This document provides detailed instructions on how to customize various aspects of the template to make it your own.

## Branding Customization

### Company Name and Logo

1. **Update the Logo**
   - Replace the logo file at `client/src/assets/logo.png` with your own logo
   - Maintain similar dimensions or adjust component sizing as needed

2. **Change Company Name**
   - Update the company name in the following files:
     - `client/src/components/layout/navbar.tsx`
     - `client/src/components/layout/footer.tsx`
     - `client/src/pages/auth-page.tsx`
     - Other pages where the company name appears

### Color Scheme

1. **Update Theme Colors**
   - Modify `theme.json` to set your primary brand color
   - Choose between 'professional', 'tint', or 'vibrant' variants
   - Set radius value for rounded corners

2. **Custom CSS Adjustments**
   - Add custom color variables in `client/src/index.css` if needed
   - Use the Tailwind utility classes with your custom colors

## Content Customization

### Homepage Sections

1. **Hero Section**
   - Edit headline and subheadline in `client/src/components/sections/hero.tsx`
   - Update the hero background image

2. **Destinations Section**
   - Modify destination data in `client/src/lib/types.ts`
   - Update images and descriptions

3. **Services Section**
   - Edit service offerings in `client/src/components/sections/services.tsx`
   - Update icons, titles, and descriptions

4. **Testimonials**
   - Replace testimonial content in `client/src/components/sections/testimonials.tsx`
   - Add your own client testimonials with ratings

### Destination Pages

1. **Country-Specific Pages**
   - Edit each destination page in `client/src/pages/destinations/`
   - Customize content specific to each country
   - Update imagery and feature lists

### Forms and Data Collection

1. **Contact Form**
   - Modify form fields in `client/src/components/sections/contact.tsx`
   - Add or remove fields as needed
   - Update validation rules

2. **Student Registration**
   - Edit registration form fields and validation as needed
   - Update backend processing for form submissions

## Advanced Customization

### Authentication System

1. **User Permissions**
   - Modify user roles and permissions in `server/auth.ts`
   - Adjust protected routes in `client/src/lib/protected-route.tsx`

2. **Login/Register Forms**
   - Customize authentication forms in `client/src/pages/auth-page.tsx`
   - Add additional fields if needed

### Admin Dashboard

1. **Dashboard Features**
   - Customize admin dashboard in `client/src/pages/admin-dashboard.tsx`
   - Add or remove admin panels as needed
   - Modify data visualization components

### API Endpoints

1. **Backend Routes**
   - Add or modify API endpoints in `server/routes.ts`
   - Update corresponding frontend API calls

### Database Schema

1. **Data Models**
   - Modify database schemas in `shared/schema.ts`
   - Update corresponding storage functions in `server/storage.ts`

## SEO Optimization

1. **Meta Tags**
   - Update page titles and meta descriptions
   - Add Open Graph tags for social media sharing

2. **URL Structure**
   - Customize route paths in `client/src/App.tsx`
   - Ensure consistent URL naming conventions

## Performance Optimization

1. **Image Optimization**
   - Compress and optimize all images
   - Consider using WebP format for better performance

2. **Code Splitting**
   - Implement additional code splitting if adding large features
   - Lazy load components that aren't immediately visible

## Deployment

1. **Environment Variables**
   - Configure environment variables for production
   - Set up proper API endpoints for your hosting environment

2. **Build Process**
   - Customize build scripts in `package.json` if needed
   - Add environment-specific configurations

## Additional Resources

- React documentation: https://reactjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- TypeScript documentation: https://www.typescriptlang.org/docs