import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export function SiteFooter({ className }) {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Club Name</h3>
            <p className="text-sm text-muted-foreground">
              A community of passionate individuals working together to achieve
              greatness.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-muted-foreground hover:text-primary"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-muted-foreground hover:text-primary"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Membership</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/membership/benefits"
                  className="text-muted-foreground hover:text-primary"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/membership/apply"
                  className="text-muted-foreground hover:text-primary"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/membership/faq"
                  className="text-muted-foreground hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/membership/testimonials"
                  className="text-muted-foreground hover:text-primary"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>123 Club Street</p>
              <p>City, State 12345</p>
              <p>Email: info@clubname.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mojidpur Society of Welfare
            Organization. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
