import { Link } from "wouter";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          
          <div className="prose prose-lg prose-indigo mx-auto text-gray-600">
            <p className="lead">
              Last Updated: April 8, 2025
            </p>
            
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and Edge Education, concerning your access to and use of our website. You agree that by accessing the website, you have read, understood, and agree to be bound by all of these Terms of Service.
            </p>
            
            <h2>2. Services</h2>
            <p>
              Edge Education provides study abroad consultancy services, including but not limited to educational counseling, university admissions assistance, scholarship guidance, visa processing support, and documentation assistance.
            </p>
            
            <h2>3. User Representations</h2>
            <p>
              By using the website, you represent and warrant that:
            </p>
            <ul>
              <li>All registration information you submit will be true, accurate, current, and complete;</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service;</li>
              <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the website.</li>
            </ul>
            
            <h2>4. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website, even if we have been advised of the possibility of such damages.
            </p>
            
            <h2>5. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:
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