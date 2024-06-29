import Script from "next/script";
import Payment from "@/components/component/payment";

export const metadata = {
  title: "Donate | Karamsetu Foundation",
  description: "Donate to empower education for underserved communities.",
};
const Donate = () => {
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <Payment />
    </>
  );
};

export default Donate;
