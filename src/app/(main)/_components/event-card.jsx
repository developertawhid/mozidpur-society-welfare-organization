import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event, upcoming }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <CalendarDays className="h-4 w-4" />
          {formatDate(event.date)}
        </CardDescription>
        {upcoming && event.time && (
          <CardDescription className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {event.time}
          </CardDescription>
        )}
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {event.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {event.description}
        </p>
      </CardContent>
      <CardFooter>
        {upcoming ? (
          <Button asChild className="w-full">
            <Link href={`/events/${event.id}`}>Register Now</Link>
          </Button>
        ) : (
          <Button variant="outline" asChild className="w-full">
            <Link href={`/events/${event.id}`}>View Details</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
