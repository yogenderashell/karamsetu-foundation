"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

const NewContact = () => {
  const { toast } = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast({
            description: "Message send succesfully",
          });
          form.current.reset();
        },
        (error) => {
          toast({
            varient: "destructive",
            title: "Something went wrong on our end",
            description: error.text,
          });
        }
      );
  };
  return (
    <main className="flex-1 bg-white dark:bg-gray-900 py-12">
      <section className="w-full py-12 md:py-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Contact Us
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                Get in Touch
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question or want to learn more about our work? Fill out
                the form below and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl grid py-12 md:grid-cols-2 gap-6">
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Contact No.</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your contact no."
                  name="user_phone"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  name="user_message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-indigo-500 text-white hover:bg-indigo-600">
                Submit
              </Button>
            </form>
            <div className="w-full">
              <AspectRatio ratio={1.5}>
                <Image
                  src="/contact.jpeg"
                  alt="NewContact"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewContact;
