import Link from "next/link";

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  const currentYear = getCurrentYear();
  return (
    <footer className="bg-gray-900 py-8 text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start md:items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <KeyIcon className="h-6 w-6 text-indigo-500" />
            <span className="text-lg font-bold text-gray-50">
              Karamsetu Foundation
            </span>
          </div>
          <div className="flex flex-col items-start gap-4 md:gap-12  md:flex-row  md:items-center">
            <div className="text-sm ">
              <p>Sarswati Vihar</p>
              <p>Kalka Road, Rewari - 12345</p>
              <p>Phone: +91 93060 98949</p>
              <p>Email: karamsetufoundation@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/niyatipaathshala17"
                className="text-indigo-500 hover:text-indigo-600"
                prefetch={false}
                target="_blank"
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-indigo-500 hover:text-indigo-600"
                prefetch={false}
                target="_blank"
              >
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/niyati_paathshala_ngo/"
                className="text-indigo-500 hover:text-indigo-600"
                prefetch={false}
                target="_blank"
              >
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/karamsetu-foundation-a88871254/"
                className="text-indigo-500 hover:text-indigo-600"
                prefetch={false}
                target="_blank"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@karamsetufoundation"
                className="text-indigo-500 hover:text-indigo-600"
                prefetch={false}
                target="_blank"
              >
                <YoutubeIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <p className="text-sm">
            &copy; {currentYear} Karamsetu Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function KeyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
