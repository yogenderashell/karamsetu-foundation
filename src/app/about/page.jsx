import Link from "next/link";
export const metadata = {
  title: "About | Karamsetu Foundation",
  description: "Mission-driven team empowering communities through education.",
};

const About = () => {
  const TEAM = [
    {
      name: "Om Prakash",
      designation: "President ",
      imgUrl: "omprakash.jpeg",
    },
    {
      name: "Om Chauhan ( Babli  Chauhan )",
      designation: "Secretary",
      imgUrl: "omchauhan.jpeg",
    },
    {
      name: "Sumitra Devi",
      designation: "Treasurer",
      imgUrl: "sumitra.jpeg",
    },
    {
      name: "Sarita Devi",
      designation: "Coordinator",
      imgUrl: "sarita.png",
    },
  ];
  return (
    <main>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Empowering Education, Transforming Lives
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our mission is to provide quality education and support to
                    underserved communities, empowering individuals to reach
                    their full potential and create a better future.
                  </p>
                </div>
              </div>
              <img
                src="/about-1.jpeg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Core Values
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At the heart of our organization, these values guide our every
                  action and decision, shaping the positive impact we strive to
                  create.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-3">
                  <div className="inline-block rounded-lg bg-[#fef3c7] px-3 py-1 text-sm text-[#a16207]">
                    Empowerment
                  </div>
                  <h3 className="text-xl font-bold">Empowering Individuals</h3>
                  <p className="text-muted-foreground">
                    We believe in the inherent potential of every individual and
                    strive to empower them with the knowledge, skills, and
                    resources to transform their lives.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-3">
                  <div className="inline-block rounded-lg bg-[#dcfce7] px-3 py-1 text-sm text-[#065f46]">
                    Community
                  </div>
                  <h3 className="text-xl font-bold">Fostering Community</h3>
                  <p className="text-muted-foreground">
                    We cultivate a supportive and inclusive community,
                    encouraging collaboration, mutual understanding, and a
                    shared commitment to positive change.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-3">
                  <div className="inline-block rounded-lg bg-[#e0e7ff] px-3 py-1 text-sm text-[#4f46e5]">
                    Sustainability
                  </div>
                  <h3 className="text-xl font-bold">Sustainable Impact</h3>
                  <p className="text-muted-foreground">
                    We strive for long-term, sustainable impact, ensuring that
                    our programs and initiatives create lasting positive change
                    in the lives of those we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Impact
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from the individuals and communities we've had the
                  privilege of supporting, and learn how our programs have
                  transformed lives.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-2">
                  <div className="inline-block rounded-lg bg-[#d1fae5] px-3 py-1 text-sm text-[#065f46]">
                    Education
                  </div>
                  <h3 className="text-xl font-bold">
                    Empowering Through Education
                  </h3>
                  <p className="text-muted-foreground">
                    Our education programs have provided access to quality
                    learning opportunities for thousands of children and adults,
                    equipping them with the knowledge and skills to build a
                    brighter future.
                  </p>
                  <Link
                    href="/initiatives"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-indigo-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    More about Initiatives
                    <ArrowRightIcon className={"h-6 w-6 m-2"} />
                  </Link>
                </div>
              </div>
              <img
                src="/about-impact.jpeg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get Involved
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our mission and be a part of the positive change we're
                  creating. There are many ways you can get involved and support
                  our work.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-2">
                  <div className="inline-block rounded-lg bg-[#e0e7ff] px-3 py-1 text-sm text-[#4f46e5]">
                    Volunteer
                  </div>
                  <h3 className="text-xl font-bold">Volunteer with Us</h3>
                  <p className="text-muted-foreground">
                    Lend your time and talents to support our programs and
                    initiatives. Whether it's teaching, mentoring, or
                    administrative support, we have opportunities for volunteers
                    of all backgrounds and skills.
                  </p>
                  <Link
                    href="/initiatives"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-indigo-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-2">
                  <div className="inline-block rounded-lg bg-[#fef3c7] px-3 py-1 text-sm text-[#a16207]">
                    Donate
                  </div>
                  <h3 className="text-xl font-bold">Support Our Work</h3>
                  <p className="text-muted-foreground">
                    Your financial contributions make our programs and
                    initiatives possible. Every donation, no matter the size,
                    helps us continue to empower individuals and transform
                    communities.Your support fuels progress, hope, and
                    meaningful change.
                  </p>
                  <Link
                    href="/donate"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-indigo-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <WaypointsIcon className="mb-4 h-8 w-8 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                Our Mission
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Empowering communities through sustainable development
                initiatives that create lasting positive change.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <ViewIcon className="mb-4 h-8 w-8 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                Our Values
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Integrity, Compassion, Collaboration, and Sustainability guide
                our work.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <ImageIcon className="mb-4 h-8 w-8 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                Our Impact
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We've made a measurable difference in the lives of thousands of
                individuals and families.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:text-indigo-600 dark:hover:text-indigo-700"
                prefetch={false}
              >
                Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
                Our Team
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Meet the dedicated individuals who make our work possible. We
                also have over 100 volunteers who contribute to our mission.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800 sm:col-span-2 md:col-span-3 sm:flex">
                  <div className="flex-1">
                    <img
                      src={"/surender.jpeg"}
                      alt={"Surender Singh"}
                      width={200}
                      height={200}
                      className="mx-auto h-24 w-24 rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="mt-4 text-center sm:text-start text-xl font-bold text-gray-900 dark:text-gray-50">
                      {"Surender Singh"}
                    </h3>
                    <p className="mt-2 text-center sm:text-start text-gray-600 dark:text-gray-400">
                      {"Founder and Director"}
                    </p>
                  </div>
                </div>
                {TEAM.map((member) => (
                  <div
                    className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
                    key={member.name}
                  >
                    <img
                      src={member.imgUrl}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="mx-auto h-24 w-24 rounded-full"
                    />
                    <h3 className="mt-4 text-center text-xl font-bold text-gray-900 dark:text-gray-50">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                      {member.designation}
                    </p>
                  </div>
                ))}
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800 sm:col-span-2 md:col-span-2">
                  <img
                    src={"volunteers.png"}
                    alt={"volunteers"}
                    width={200}
                    height={200}
                    className="mx-auto h-24 w-24 rounded-full"
                  />
                  <h3 className="mt-4 text-center text-xl font-bold text-gray-900 dark:text-gray-50">
                    {"100+ Volunteers"}
                  </h3>
                  <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                    {"Family"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Visit Us
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                Find Us on the Map
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Come visit our office and learn more about our work. We're
                located in the heart of the city.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3516.4512371679884!2d76.6294!3d28.1936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d51fe475ed735%3A0xbcb6732424a1e362!2sNiyati%20Paathshala%20NGO!5e0!3m2!1sen!2sin!4v1718821566997!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="font-bold text-gray-900 dark:text-gray-50">
                  Karamsetu Foundation
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  Sarswati Vihar, Kalka Road, Rewari, Haryana, INDIA
                </div>
              </div>
              <div className="grid gap-2">
                <div className="font-bold text-gray-900 dark:text-gray-50">
                  Phone
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  +91 93060 98949, +91 93558 70920
                </div>
              </div>
              <div className="grid gap-2">
                <div className="font-bold text-gray-900 dark:text-gray-50">
                  Email
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  karamsetufoundation@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

function ViewIcon(props) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function WaypointsIcon(props) {
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
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="m10.2 6.3-3.9 3.9" />
      <circle cx="4.5" cy="12" r="2.5" />
      <path d="M7 12h10" />
      <circle cx="19.5" cy="12" r="2.5" />
      <path d="m13.8 17.7 3.9-3.9" />
      <circle cx="12" cy="19.5" r="2.5" />
    </svg>
  );
}

function ImageIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
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
