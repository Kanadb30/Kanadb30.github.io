import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!name || !email || !message) {
      toast({ title: "Missing fields", description: "Please fill out all fields." });
      return;
    }
    try {
      setLoading(true);
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: { name, email, message, to: "kanadb@iitbhilai.ac.in" },
      });
      if (error) throw error;
      toast({ title: "Message sent", description: "Thanks for reaching out!" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      console.error(err);
      toast({ title: "Error", description: err.message || "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact | Kanad Bajpai Portfolio"
        description="Contact Kanad Bajpai via email form."
        canonical="/contact"
      />
      <section className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Contact</h1>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message..." />
          </div>
          <Button variant="accent" onClick={handleSend} disabled={loading} className="w-full sm:w-auto">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
        <aside className="space-y-4">
          <h2 className="text-xl font-semibold">Also find me here</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="story-link" aria-label="LinkedIn profile">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="story-link" aria-label="Instagram profile">Instagram</a>
            </li>
          </ul>
        </aside>
      </section>
    </Layout>
  );
};

export default Contact;
