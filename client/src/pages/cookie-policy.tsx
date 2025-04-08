import { Link } from "wouter";

export default function CookiePolicy() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-primary hover:text-primary/80 mb-8 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg prose-indigo mx-auto text-gray-600">
            <p className="lead">
              Last Updated: April 8, 2025
            </p>
            
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you.
            </p>
            
            <h2>2. How We Use Cookies</h2>
            <p>
              When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
            </p>
            <ul>
              <li>To enable certain functions of the website;</li>
              <li>To provide analytics;</li>
              <li>To store your preferences;</li>
              <li>To enable advertisements delivery, including behavioral advertising.</li>
            </ul>
            
            <h2>3. Types of Cookies We Use</h2>
            <ul>
              <li><strong>Essential cookies:</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.</li>
              <li><strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works.</li>
              <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
              <li><strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
            </ul>
            
            <h2>4. Contact Information</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us:
            </p>
            <p>
              <strong>Email:</strong> info@edgeeducation.com<br />
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}