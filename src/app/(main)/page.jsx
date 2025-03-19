"use client";

import Glow from "@/components/common/glow";
import { SectionTitle } from "@/components/common/section-title";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  ArrowRightIcon,
  Award,
  CalendarDays,
  Users,
} from "lucide-react";
import Link from "next/link";
import EventCard from "./_components/event-card";

const categories = [
  {
    id: 1,
    title: "Design",
    thumbnail: "/assets/images/categories/design.jpg",
  },

  {
    id: 3,
    title: "Development",
    thumbnail: "/assets/images/categories/development.jpg",
  },
  {
    id: 4,
    title: "Marketing",
    thumbnail: "/assets/images/categories/marketing.jpg",
  },
  {
    id: 5,
    title: "IT & Software",
    thumbnail: "/assets/images/categories/it_software.jpg",
  },
];

const HomePage = () => {
  // Mock data for events
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Club Meetup",
      date: "2025-04-15",
      time: "18:00",
      location: "Main Hall",
      description:
        "Join us for our annual club meetup where we'll discuss our achievements and future plans.",
      image: "/assets/slider/image-1.jpg",
    },
    {
      id: 2,
      title: "Workshop: Introduction to Next.js",
      date: "2025-04-22",
      time: "14:00",
      location: "Tech Room",
      description:
        "Learn the basics of Next.js and how to build modern web applications.",
      image: "/assets/slider/image-2.jpg",
    },
    {
      id: 3,
      title: "Networking Event",
      date: "2025-05-05",
      time: "19:00",
      location: "Conference Center",
      description:
        "Connect with professionals and expand your network in this special event.",
      image: "/assets/slider/image-1.jpg",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Tech Conference 2024",
      date: "2024-11-10",
      location: "Convention Center",
      description:
        "Our annual tech conference with guest speakers from leading tech companies.",
      image: "/assets/slider/image-1.jpg",
    },
    {
      id: 5,
      title: "Hackathon",
      date: "2024-09-15",
      location: "Innovation Hub",
      description:
        "48-hour hackathon where members built amazing projects and competed for prizes.",
      image: "/assets/slider/image-2.jpg",
    },
    {
      id: 6,
      title: "Summer Retreat",
      date: "2024-07-20",
      location: "Mountain Resort",
      description:
        "Team building activities and workshops in a beautiful mountain setting.",
      image: "/assets/slider/image-1.jpg",
    },
  ];

  // Mock data for hero slider
  const heroSlides = [
    {
      id: 1,
      title: "Welcome to Our Club",
      description:
        "A community of passionate individuals working together to achieve greatness",
      image: "/assets/slider/image-1.jpg",
    },
    {
      id: 2,
      title: "Join Our Events",
      description:
        "Participate in our regular events and expand your knowledge and network",
      image: "/assets/slider/image-2.jpg",
    },
    {
      id: 3,
      title: "Become a Member",
      description:
        "Enjoy exclusive benefits and opportunities by becoming a member",
      image: "/assets/slider/image-1.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative h-[60vh] w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                    <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg md:text-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <Button size="lg" asChild>
                        <Link href="/register">Join Now</Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent text-white hover:bg-white hover:text-black"
                        asChild
                      >
                        <Link href="/about">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <CarouselPrevious className="relative translate-y-0 bg-white/20 hover:bg-white/40" />
            <CarouselNext className="relative translate-y-0 bg-white/20 hover:bg-white/40" />
          </div>
        </Carousel>
      </section>

      {/* About Section */}
      <section className="bg-muted py-16">
        <Glow>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                About Our Club
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We are a community of passionate individuals dedicated to
                learning, sharing knowledge, and building meaningful
                connections. Our club provides a platform for members to grow
                professionally and personally through various events, workshops,
                and networking opportunities.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="mb-4 rounded-full bg-primary p-3 text-primary-foreground">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Community</h3>
                  <p className="text-center text-muted-foreground">
                    Join a thriving community of like-minded individuals
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-4 rounded-full bg-primary p-3 text-primary-foreground">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Events</h3>
                  <p className="text-center text-muted-foreground">
                    Participate in regular events and workshops
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-4 rounded-full bg-primary p-3 text-primary-foreground">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Growth</h3>
                  <p className="text-center text-muted-foreground">
                    Develop your skills and advance your career
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Glow>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <Glow>
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <Link
                href="/events"
                className="flex items-center text-primary hover:underline"
              >
                View all events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} upcoming={true} />
              ))}
            </div>
          </div>
        </Glow>
      </section>

      {/* Past Events Section */}
      <section className="bg-muted py-16">
        <Glow>
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Past Events</h2>
              <Link
                href="/events/past"
                className="flex items-center text-primary hover:underline"
              >
                View all past events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} upcoming={false} />
              ))}
            </div>
          </div>
        </Glow>
      </section>

      {/* Membership CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Become a Member
            </h2>
            <p className="mb-8 text-lg">
              Join our club today and get access to exclusive events, resources,
              and a network of professionals. Membership is open to anyone who
              shares our passion and values.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/membership">Request Membership</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/membership/benefits">Learn About Benefits</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Thanks for Donate */}
      <section id="donate">
        <Glow>
          <div className="container space-y-6  py-8  md:py-12 lg:py-24">
            <div className="flex items-center justify-between">
              <SectionTitle>Thanks for Donate</SectionTitle>

              <Link
                href={"/donate"}
                className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
              >
                Browse All <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="mx-auto grid justify-center gap-4 grid-cols-2  md:grid-cols-3 2xl:grid-cols-4">
              {categories.map((category) => {
                return (
                  <Link
                    href="/@userid"
                    key={category.id}
                    className="relative overflow-hidden rounded-lg border bg-background p-2 hover:scale-105 transition-all duration-500 ease-in-out"
                  >
                    <div className="flex  flex-col gap-4 items-center justify-between rounded-md p-6">
                      <Avatar className="rounded-full overflow-hidden">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p className="flex justify-between w-full">
                        <span>2000৳</span>
                        <span>0 times</span>
                      </p>
                      <h3 className="font-bold">{category.title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Glow>
      </section>
    </>
  );
};
export default HomePage;
