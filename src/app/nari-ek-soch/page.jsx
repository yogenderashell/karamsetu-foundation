import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const metadata = {
  title: "Nari - Ek Soch | Karamsetu Foundation",
  description: "Connect with us to support educational opportunities.",
};

const Nari = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Nari: Ek Soch
                </h1>
                <p className="max-w-[600px] text-muted-primary-foreground md:text-xl">
                  Empowering women through education, advocacy, and community
                  support.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/about"
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
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/nari-hero.jpg"
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
                Empowering Women, Transforming Communities
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nari: Ek Soch has been providing educational opportunities,
                advocacy, and community support to empower women in our region
                for over a decade. Our programs have helped thousands of women
                break the cycle of gender inequality and achieve their full
                potential.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/nari-empower.jpg"
                alt="NewContact"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Literacy and Education
                    </h3>
                    <p className="text-muted-foreground">
                      We provide free literacy classes, vocational training, and
                      scholarships to help women gain the skills and knowledge
                      they need to succeed.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Advocacy and Support</h3>
                    <p className="text-muted-foreground">
                      Our programs advocate for women's rights and provide
                      counseling, legal aid, and community support to help women
                      overcome social and economic barriers.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Economic Empowerment</h3>
                    <p className="text-muted-foreground">
                      We offer microfinance, entrepreneurship training, and job
                      placement assistance to help women achieve financial
                      independence and security.
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
                Empowering Women Through Innovative Programs
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nari: Ek Soch offers a range of programs designed to provide
                comprehensive support and opportunities for women in our
                community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Literacy and Education
                    </h3>
                    <p className="text-muted-foreground">
                      Our literacy classes and vocational training programs help
                      women develop the skills they need to achieve economic
                      independence.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Advocacy and Support</h3>
                    <p className="text-muted-foreground">
                      We provide legal aid, counseling, and community support to
                      help women overcome social and economic barriers and
                      assert their rights.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Entrepreneurship and Microfinance
                    </h3>
                    <p className="text-muted-foreground">
                      Our microfinance and entrepreneurship programs help women
                      start and grow their own businesses, achieving financial
                      independence.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/nari-programs.jpeg"
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
                Get Involved
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Join Us in Empowering Women
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                There are many ways you can support Nari: Ek Soch and make a
                difference in the lives of women in our community. Whether you
                choose to volunteer, donate, or spread the word, your
                contribution can help us continue our mission of providing
                education, advocacy, and economic opportunities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/initiatives"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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

export default Nari;
