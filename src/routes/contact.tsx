import { FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — Taza Cup" }, { name: "description", content: "Get in touch with Taza Cup about fruit cups, orders, and catering." },
    { property: "og:title", content: "Contact Us — Taza Cup" }, { property: "og:description", content: "Questions, catering, or a friendly hello — contact Taza Cup." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };
  return <div className="page-shell contact-page"><section className="contact-copy"><p className="eyebrow">Say hello</p><h1>Let’s talk<br/><em>fruit.</em></h1><p>Questions, catering ideas, or a note for the team? Send it our way.</p><dl><div><dt>Email</dt><dd>hello@tazacup.example</dd></div><div><dt>Phone</dt><dd>+1 (000) 000-0000</dd></div><div><dt>Hours</dt><dd>Daily · 10am–8pm</dd></div></dl><small>Contact details and opening hours are placeholders.</small></section>
    <form className="contact-form" onSubmit={submit}>{sent ? <div className="form-success"><Check/><h2>Message received.</h2><p>Thanks for reaching out. This demo form has not sent an email.</p><Button type="button" variant="line" onClick={() => setSent(false)}>Send another</Button></div> : <><label>Name<Input required placeholder="Your name" /></label><label>Email<Input required type="email" placeholder="you@example.com" /></label><label>What’s on your mind?<Textarea required rows={6} placeholder="Tell us a little more…" /></label><Button type="submit" variant="order" size="lg">Send message</Button></>}</form>
  </div>;
}