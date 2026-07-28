import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import logo from "@/assets/blueguava-logo.jpeg.asset.json";

export const Route = createFileRoute("/thanks")({
  component: ThanksPage,
  head: () => ({
    meta: [
      { title: "Message Sent — BlueGuava" },
      {
        name: "description",
        content: "Thanks for contacting BlueGuava. Our team will review your message and respond shortly.",
      },
      { property: "og:title", content: "Message Sent — BlueGuava" },
      {
        property: "og:description",
        content: "Thanks for contacting BlueGuava. Our team will review your message and respond shortly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/thanks" }],
  }),
});

function ThanksPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero px-6 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-brand-1/30 blur-3xl animate-float-orb" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-leaf-1/20 blur-3xl animate-float-orb" />
      </div>
      <section className="relative w-full max-w-xl text-center">
        <img src={logo.url} alt="BlueGuava" className="mx-auto h-16 w-16 rounded-2xl object-cover shadow-brand" />
        <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-leaf text-white shadow-brand">
          <CheckCircle2 size={32} />
        </div>
        <h1 className="mt-6 text-4xl font-bold text-brand-5 md:text-5xl">Message received</h1>
        <p className="mx-auto mt-4 max-w-md text-brand-5/70">
          Thank you for reaching out to BlueGuava. Our team will review your details and get back to you shortly.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-deep px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-brand transition-transform hover:scale-105"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
      </section>
    </main>
  );
}