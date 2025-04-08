# Edge Education - Study Abroad Consultancy Template

A comprehensive template for study abroad consultancy websites, featuring a modern design, responsive layout, and complete functionality for student inquiries and registrations.

![Edge Education](./assets/edge-education-logo.png)

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Modern UI**: Clean and professional interface using React and Tailwind CSS
- **Authentication System**: Secure login and registration functionality
- **Student Registration**: Complete forms for collecting student information
- **Interactive Destinations**: Detailed information about study destinations
- **Lead Generation**: Forms to capture potential student inquiries
- **Admin Dashboard**: Protected admin area to manage student data
- **SEO-Friendly**: Structured for optimal search engine visibility

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

1. **Download the template** from the download page
2. **Extract the files** to your desired location
3. **Run the setup script** included in the download package:

```sh
# For Unix-based systems (Linux, macOS)
./setup.sh

# For Windows systems
# Double-click the setup.bat file or run it from Command Prompt
```

4. **Start the development server**:

```sh
cd edge-education-template
npm run dev
```

5. **Access the website** at `http://localhost:5000`

## Documentation

### Customization

For detailed instructions on customizing the template to fit your needs, refer to the [Customization Guide](CUSTOMIZATION.md).

### WordPress Implementation

If you prefer a WordPress-based solution, we've included a comprehensive guide on implementing this design in WordPress. See the [WordPress Integration Guide](WORDPRESS_INTEGRATION.md).

## Project Structure

```
edge-education-template/
├── client/                # Frontend React application
│   ├── src/
│   │   ├── assets/        # Images, icons, and other static assets
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and shared code
│   │   ├── pages/         # Page components
│   │   └── ...
├── server/                # Backend Express server
│   ├── auth.ts            # Authentication logic
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage implementation
├── shared/                # Shared code between client and server
│   └── schema.ts          # Database schema definitions
├── package.json           # Project dependencies and scripts
└── ... config files
```

## Technology Stack

- **Frontend**:
  - React with TypeScript
  - Tailwind CSS for styling
  - Shadcn UI components
  - React Query for data fetching
  - React Hook Form for form handling

- **Backend**:
  - Express.js
  - Passport.js for authentication
  - In-memory storage (can be extended to use a database)

## License

This template is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For questions or support regarding this template, please contact us at support@edge-education.com.

---

© 2025 Edge Education Template. All Rights Reserved.