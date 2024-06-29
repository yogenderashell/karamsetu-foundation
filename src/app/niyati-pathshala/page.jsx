import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
export const metadata = {
  title: "Niyati Pathshala | Karamsetu Foundation",
  description: "Connect with us to support educational opportunities.",
};

const NiyatiPathshala = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Niyati Pathshala
                </h1>
                <p className="max-w-[600px] text-muted-primary-foreground md:text-xl">
                  Empowering underprivileged children through quality education.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-8 text-sm font-medium text-dark shadow transition-colors hover:bg-indigo-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Involved
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-primary text-primary-foreground px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Donate
                </Link>
              </div>
            </div>
            <AspectRatio ratio={1.2}>
              <Image
                src="/niyati-hero.jpeg"
                alt="NewContact"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Transforming Lives Through Education
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Niyati Pathshala has been providing free, quality education to
                underprivileged children in our community for over a decade. Our
                programs have helped thousands of students break the cycle of
                poverty and achieve their full potential.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 ">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/niyati-transform.jpeg"
                alt="transforms"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Free Education</h3>
                    <p className="text-muted-foreground">
                      We provide free tuition, books, and supplies to ensure all
                      children have access to quality education.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Nutritious Meals</h3>
                    <p className="text-muted-foreground">
                      Our students receive a nutritious meal every day to
                      support their physical and cognitive development.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Holistic Development</h3>
                    <p className="text-muted-foreground">
                      We focus on the overall well-being of our students,
                      providing counseling, extracurricular activities, and life
                      skills training.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Programs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Empowering Children Through Innovative Programs
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Niyati Pathshala offers a range of programs designed to provide
                comprehensive support and opportunities for underprivileged
                children in our community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Primary Education</h3>
                    <p className="text-muted-foreground">
                      Our core program provides free, quality primary education
                      to children from underprivileged backgrounds.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Vocational Training</h3>
                    <p className="text-muted-foreground">
                      We offer vocational training programs to help older
                      students develop practical skills and secure employment.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Scholarship Program</h3>
                    <p className="text-muted-foreground">
                      Our scholarship program provides financial assistance to
                      help talented students continue their education.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/niyati-programs.jpeg"
                alt="Niyati programs"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Get Involved
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Join Us in Transforming Lives
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                There are many ways you can support Niyati Pathshala and make a
                difference in the lives of underprivileged children. Whether you
                choose to volunteer, donate, or spread the word, your
                contribution can help us continue our mission of providing
                quality education and opportunities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/about"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-indigo-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Volunteer
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NiyatiPathshala;
