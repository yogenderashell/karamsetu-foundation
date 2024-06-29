"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const submitEmail = (e) => {
    e.preventDefault();
    toast({
      description: "Thankyou for registering.",
    });

    setEmail("");
  };

  return (
    <main>
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
                Welcome to Karamsetu Foundation
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Empowering communities through sustainable development
                initiatives.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/donate"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
                  prefetch={false}
                >
                  Donate Now
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-indigo-500 bg-white px-6 text-sm font-medium text-indigo-500 shadow-sm transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-indigo-600 dark:bg-gray-950 dark:text-indigo-600 dark:hover:bg-indigo-700/10 dark:focus:ring-indigo-700"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/front-image.jpg"
                alt="Karamsetu Foundation"
                width={600}
                height={400}
                className="rounded-lg text2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <GiftIcon className="mb-4 h-8 w-8 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                Sustainable Development
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We focus on long-term, sustainable solutions to empower
                communities.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <SchoolIcon className="mb-4 h-8 w-8 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                Education and Empowerment
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We provide educational opportunities and empower individuals to
                create positive change.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <GroupIcon className="mb-4 h-8 w-8 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                Community Engagement
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We collaborate with local communities to address their unique
                needs and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
                Our Impact
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Learn more about the positive impact we've made in communities
                around the world.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/initiatives"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
                  prefetch={false}
                >
                  Explore Our Initiatives
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-indigo-500 bg-white px-6 text-sm font-medium text-indigo-500 shadow-sm transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-indigo-600 dark:bg-gray-950 dark:text-indigo-600 dark:hover:bg-indigo-700/10 dark:focus:ring-indigo-700"
                  prefetch={false}
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/our-impact-1.jpeg"
                alt="Karamsetu Foundation Impact"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <VoteIcon className="mb-4 h-8 w-8 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                Volunteer Opportunities
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Join our team of dedicated volunteers and make a difference in
                your community.
              </p>
              <Link
                href="/initiatives#ma"
                className="mt-4 inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:text-indigo-600 dark:hover:text-indigo-700"
                prefetch={false}
              >
                Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <NewspaperIcon className="mb-4 h-8 w-8 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                Stay Updated
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Subscribe to our newsletter to receive the latest updates and
                news.
              </p>
              <form className="mt-4 flex gap-2" onSubmit={submitEmail}>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button
                  className={"bg-indigo-500 hover:bg-indigo-500/90  "}
                  onSubmit={submitEmail}
                >
                  Subscribe
                </Button>
              </form>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <GiftIcon className="mb-4 h-8 w-8 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                Donate to Our Cause
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Your donation can make a significant impact on the lives of
                those we serve.
              </p>
              <Link
                href="/donate"
                className="mt-4 inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:text-indigo-600 dark:hover:text-indigo-700"
                prefetch={false}
              >
                Donate Now <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Donate
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                Support Our Cause
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Your donation can make a significant impact in the lives of
                those we serve. Help us continue our mission of empowering
                communities and creating a more equitable future.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link
                  href="/donate"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700 whitespace-nowrap"
                  prefetch={false}
                >
                  Donate Now
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function VoteIcon(props) {
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
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function GiftIcon(props) {
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
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

function NewspaperIcon(props) {
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
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function SchoolIcon(props) {
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
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function GroupIcon(props) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}
