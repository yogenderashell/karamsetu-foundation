"use client";
import { useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

function Payment() {
  const { toast } = useToast();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("0");
  const [currency, setCurrency] = useState("INR");
  const [loading, setLoading] = useState(false);
  const handleSharing = (id, name, email) => {
    localStorage.setItem("orderId", id);
    localStorage.setItem("cust_name", name);
    localStorage.setItem("cust_email", email);
    router.push("/thankyou");
  };
  const createOrderId = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.message,
      });
      console.error("There was a problem with your fetch operation:", error);
    }
  };
  const processPayment = async (e) => {
    e.preventDefault();
    try {
      const orderId = await createOrderId();
      const options = {
        key: process.env.key_id,
        amount: parseFloat(amount) * 100,
        currency: currency,
        name: "Karamsetu Foundation",
        description: "A trust you can trust.",
        order_id: orderId,
        handler: async function (response) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch("/api/verify", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
          const res = await result.json();
          if (res.isOk) {
            handleSharing(orderId, name, email);
          } else {
            toast({
              title: "Uh oh! Something went wrong",
              description: "There was a problem in processing.",
            });
          }
        },
        prefill: {
          name: name,
          email: email,
        },
        theme: {
          color: "#6366f1",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        toast({
          title: "Uh oh! Something went wrong",
          description: response.error.description,
        });
      });
      paymentObject.open();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Check your mobile data or try again!",
      });
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
              Donate to Karamsetu Foundation
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Your donation will help us continue our mission of empowering
              communities through sustainable development initiatives.
            </p>
            <form
              className="flex flex-col gap-6 w-full"
              onSubmit={processPayment}
            >
              <div className="space-y-1">
                <Label>Full name</Label>
                <Input
                  type="text"
                  required
                  value={name}
                  placeholder="Your full name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="user@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label>Amount(&gt;50)</Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    step="1"
                    min={50}
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <Button
                className=" bg-indigo-500 hover:bg-indigo-700"
                type="submit"
              >
                Pay
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
              About Karamsetu Foundation
            </h2>
            <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-bold">PAN No.:</span> AAKCK7944G
              </p>
              <p>
                <span className="font-bold">Registered Number:</span>{" "}
                U88900HR2024NPL118547
              </p>
              <p>
                <span className="font-bold">Mobile No.:</span> 9306098949,
                9355870920
              </p>
              <p>
                <span className="font-bold">NGO Darpan Unique ID:</span>{" "}
                HR/2024/0392067
              </p>
              <p>
                <span className="font-bold">
                  80 G Unique Registration number:
                </span>{" "}
                AAKCK7944GF20241
              </p>
              <p>
                <span className="font-bold">
                  12 A Unique Registration number:
                </span>{" "}
                AAKCK7944GE20231
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
