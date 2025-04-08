# Edge Education Template Customization Guide

This document provides comprehensive instructions on how to customize the Edge Education template to fit your specific needs.

## Table of Contents
1. [Changing Basic Information](#changing-basic-information)
2. [Modifying Colors and Styling](#modifying-colors-and-styling)
3. [Customizing Content](#customizing-content)
4. [Adding New Pages](#adding-new-pages)
5. [Modifying Components](#modifying-components)
6. [Authentication System](#authentication-system)
7. [Backend Customization](#backend-customization)

## Changing Basic Information

### Company Name and Branding
1. Replace the company name throughout the application:
   - Update the company name in `client/src/components/layout/navbar.tsx`
   - Update the company name in `client/src/components/layout/footer.tsx`
   - Update the title in `client/index.html`

### Logo
1. Replace the logo file:
   - Place your logo in the `client/src/assets` directory
   - Update the logo import in `client/src/components/layout/navbar.tsx`

## Modifying Colors and Styling

### Theme Colors
1. The primary color theme can be modified in the `theme.json` file at the root:
   ```json
   {
     "primary": "#0d9488",
     "variant": "vibrant",
     "appearance": "light",
     "radius": 0.5
   }
   ```
   - Change the `primary` value to your desired color in hex format
   - `variant` can be "professional", "tint", or "vibrant"
   - `appearance` can be "light", "dark", or "system"
   - `radius` controls the border-radius of components (0.5 is recommended)

### Tailwind Configuration
For more advanced styling, you can modify the Tailwind configuration in `tailwind.config.ts`.

## Customizing Content

### Homepage
The homepage sections are defined in `client/src/pages/home-page.tsx` and include:
- Hero section
- Services
- Destinations
- Process
- Testimonials
- FAQ
- CTA (Call to Action)

To modify any of these sections:
1. Locate the corresponding section component in `client/src/components/sections/`
2. Edit the component to change text, images, or layout

### Destinations
Destinations are defined in the `destinations.tsx` component:
1. Open `client/src/components/sections/destinations.tsx`
2. Modify the destinations array with your own locations
3. Update the images in `client/src/assets` directory

### Services
To update the services offered:
1. Open `client/src/components/sections/services.tsx`
2. Modify the services array with your own services
3. Update the icons as needed

## Adding New Pages

1. Create a new page component in `client/src/pages/`
2. Add the new route in `client/src/App.tsx`
3. Update the navigation links in `client/src/components/layout/navbar.tsx`

Example for adding a new "Programs" page:
```tsx
// Create client/src/pages/programs-page.tsx
export default function ProgramsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold">Our Programs</h1>
      {/* Your content here */}
    </div>
  );
}

// Add to App.tsx in the Router function
<Route path="/programs" component={ProgramsPage} />

// Add to navbar.tsx in the navItems array
{ href: '/programs', label: 'Programs' },
```

## Modifying Components

The UI components are built using Shadcn UI and can be found in `client/src/components/ui/`.

To modify an existing component:
1. Locate the component in `client/src/components/ui/`
2. Make your changes while maintaining the component's functionality

## Authentication System

The authentication system uses Passport.js for session-based authentication:

1. User authentication logic is in `server/auth.ts`
2. Frontend auth hooks are in `client/src/hooks/use-auth.tsx`
3. Protected routes are handled by `client/src/lib/protected-route.tsx`

To customize authentication:
- Modify the login/register forms in `client/src/pages/auth-page.tsx`
- Update authentication logic in `server/auth.ts`
- Add additional user fields in `shared/schema.ts`

## Backend Customization

### API Routes
1. API routes are defined in `server/routes.ts`
2. Add new routes by following the existing pattern
3. Make sure to validate inputs using Zod schemas

### Data Storage
1. The application uses an in-memory storage by default
2. To switch to a database, modify the storage implementation in `server/storage.ts`
3. Update the data schemas in `shared/schema.ts`

---

For any additional customization needs, refer to the code documentation or contact our support team.

Happy customizing!