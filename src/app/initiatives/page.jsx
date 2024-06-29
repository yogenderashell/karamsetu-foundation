import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const metadata = {
  title: "Initiatives | Karamsetu Foundation",
  description:
    "Explore impactful educational programs and community initiatives.",
};

const Initiatives = () => {
  return (
    <main className="flex-1 bg-white dark:bg-gray-900">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Initiatives
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                Empowering Communities
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Karamsetu Foundation offers a range of programs to support and
                empower individuals and communities in need.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/ini-3.jpeg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last brightness-75"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <div className="flex">
                      <h3 className="text-xl font-bold">
                        Education - Niyati Paathshala{" "}
                        <Link
                          className=" font-semibold text-xs text-indigo-500"
                          href={"/niyati-pathshala"}
                        >
                          Learn more
                          <ArrowIcon className=" inline w-3 h-3" />
                        </Link>
                      </h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Providing access to quality education for underprivileged
                      children.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex">
                      <h3 className="text-xl font-bold">
                        Women Empowerment - Nari : Ek Soch{" "}
                        <Link
                          className=" font-semibold text-xs text-indigo-500"
                          href={"/nari-ek-soch"}
                        >
                          Learn more
                          <ArrowIcon className=" inline w-3 h-3" />
                        </Link>
                      </h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Promoting gender equality and empowering women to become
                      leaders in their communities.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex">
                      <h3 className="text-xl font-bold">
                        Environmental Conservation - Bhoomi{" "}
                        <Link
                          className=" font-semibold text-xs text-indigo-500"
                          href={"/bhoomi"}
                        >
                          Learn more
                          <ArrowIcon className=" inline w-3 h-3" />
                        </Link>
                      </h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Implementing sustainable initiatives to protect the
                      environment and promote eco-friendly practices.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/ini-2.jpeg"
              width="550"
              height="310"
              alt="Image"
              className=" brightness-75 mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Youth Empowerment Programs - Yuva
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Promoting access to quality education and resources for
                      underprivileged children and adults.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Fight for Hunger - Bhog
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Raising awareness to combat hunger: distributing food and
                      promoting zero waste practices.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Livelihood - Hunar</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Empowering individuals with skills and resources to become
                      self-reliant.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Impact
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                Transforming Lives
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Karamsetu Foundation has made a significant impact in the lives
                of individuals and communities across the country.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/ini-1.jpeg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Improved Access to Education
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Provided scholarships and educational resources to over
                      10,000 underprivileged children.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Strengthened Healthcare Services
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Spreading awareness regarding physical and mental health
                      among marginalized society.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Empowered Livelihoods</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Providing skill training to individuals of marginalized
                      community
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="ma"
        className="w-full pt-12 md:pt-24 lg:pt-32 pb-3 md:pb-6 lg:pb-8"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Get Involved
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                Join Us in Making a Difference
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                There are many ways you can contribute to our mission and help
                us create a more equitable and sustainable future.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/ini-4.jpeg"
                alt="NewContact"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Volunteer</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Join our team of dedicated volunteers and contribute your
                      time and skills to our initiatives.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Donate</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Your financial contributions can help us expand our reach
                      and create lasting change.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Partner</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Collaborate with us as a corporate partner or community
                      organization to amplify our impact.
                    </p>
                  </div>
                </li>
              </ul>
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
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700 whitespace-nowrap"
                  prefetch={false}
                >
                  Donate Now
                </Link>
                <Link
                  href="#"
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
      <section className="w-full pb-12 md:pb-24 lg:pb-32 pt-3 md:pt-6 lg:pt-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Supporters
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                Partnering for Change
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are grateful for the support of our partners and donors who
                share our vision for a more just and equitable world.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max" />
        </div>
      </section>
    </main>
  );
};

export default Initiatives;

const ArrowIcon = ({ className }) => (
  <svg
    width="8x"
    className={className}
    height="8px"
    viewBox="0 0 24 24"
    fill="#none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="#6366f1"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
