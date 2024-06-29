"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Thankyou = () => {
  const router = useRouter();
  const [orderInfo, setOrderInfo] = useState({
    orderId: "not found",
    name: "not found",
    email: "not found",
  });

  const getOrderInfo = () => {
    const orderId = localStorage.getItem("orderId") || "not found";
    const name = localStorage.getItem("cust_name") || "not found";
    const email = localStorage.getItem("cust_email") || "not found";

    setOrderInfo({ orderId, name, email });

    if (orderId === "not found") {
      router.push("/");
    }

    setTimeout(() => {
      localStorage.removeItem("orderId");
      localStorage.removeItem("cust_name");
      localStorage.removeItem("cust_email");
    }, 3000);
  };

  useEffect(() => {
    getOrderInfo();
  }, []);

  function capitalizeInitials(sentence) {
    const words = sentence.split(" ");
    const capitalizedSentence = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return capitalizedSentence;
  }
  return (
    <section className="bg-white py-10 dark:bg-gray-900 border-2 min-h-[calc(100vh-328px)] md:min-h-[calc(100vh-208px)] ">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center space-y-9">
        <CircleCheckIcon className="mb-8 h-16 w-16 text-green-500" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Thank you for your donation!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Your contribution makes a real difference in the lives of those we
          serve.
        </p>
        <div className="flex flex-col space-y-2 justify-center items-center">
          <span className=" font-medium">
            Name :{" "}
            <span className=" font-normal text-slate-800">
              {capitalizeInitials(orderInfo.name)}
            </span>
          </span>
          <span className=" font-medium">
            Email : <span className=" font-normal text-slate-800">{orderInfo.email}</span>
          </span>
          <span className=" font-medium">
            Order ID :{" "}
            <span className=" font-normal text-slate-800">{orderInfo.orderId}</span>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
            prefetch={false}
          >
            Return to Home
          </Link>
          <Link
            href="/initiatives"
            className="inline-flex h-10 items-center justify-center rounded-md border border-indigo-500 bg-white px-6 text-sm font-medium text-indigo-500 shadow-sm transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-indigo-600 dark:bg-gray-950 dark:text-indigo-600 dark:hover:bg-indigo-700/10 dark:focus:ring-indigo-700"
            prefetch={false}
          >
            Explore Our Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
