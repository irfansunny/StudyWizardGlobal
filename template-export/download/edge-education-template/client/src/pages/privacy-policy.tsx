import { Link } from "wouter";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg prose-indigo mx-auto text-gray-600">
            <p className="lead">
              Last Updated: April 8, 2025
            </p>
            
            <h2>1. Introduction</h2>
            <p>
              Edge Education ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our website, including information:
            </p>
            <ul>
              <li>By which you may be personally identified, such as name, email address, telephone number ("personal information");</li>
              <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul>
              <li>To present our website and its contents to you;</li>
              <li>To provide you with information about our services;</li>
              <li>To fulfill any other purpose for which you provide it;</li>
              <li>To carry out our obligations and enforce our rights;</li>
              <li>In any other way we may describe when you provide the information;</li>
              <li>For any other purpose with your consent.</li>
            </ul>
            
            <h2>4. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
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