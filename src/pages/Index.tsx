import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Typewriter from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Coffee, Boxes, Layers, Code2, Palette, Brain, Instagram, Linkedin } from "lucide-react";

const Index = () => {
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
      const { error } = await supabase.functions.invoke("send-contact", {
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

  const skills = [
    { label: "Java", icon: Coffee },
    { label: "OOP", icon: Boxes },
    { label: "DSA", icon: Layers },
    { label: "HTML", icon: Code2 },
    { label: "CSS", icon: Palette },
    { label: "Generative AI", icon: Brain },
  ];

  return (
    <Layout>
      <SEO
        title="Home | Kanad Bajpai Portfolio"
        description="Kanad Bajpai – Java Developer, Front-end Developer, AI Enthusiast. Explore projects, skills, and contact."
        canonical="/"
      />
      <section id="home" className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Kanad Bajpai | Computer Science Enthusiast
          </h1>
          <p className="text-xl text-muted-foreground">
            <Typewriter phrases={["Java Developer", "Front-end Developer", "AI Enthusiast"]} />
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            Welcome to my portfolio! Explore my projects, skills, and journey in tech.
          </p>
          <Button asChild variant="hero" size="xl" className="hover-scale">
            <a href="#projects">Explore Projects</a>
          </Button>
        </div>
        <div className="hidden lg:block">
          <div className="h-64 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 border" />
        </div>
      </section>

      <section id="about" className="grid md:grid-cols-2 gap-10 items-start mt-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">About Kanad Bajpai</h2>
          <p className="text-muted-foreground">
            I’m Kanad Bajpai, a second-year B.Tech student at IIT Bhilai, passionate about
            crafting innovative solutions in Java, front-end web development, and Generative AI.
            My goal is to build impactful tech in DevOps and AI, driven by curiosity and a love
            for problem-solving.
          </p>
          <p className="text-muted-foreground">
            When I’m not coding, I’m exploring new tech trends or enjoying campus life at IIT Bhilai.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/placeholder.svg"
            alt="Professional headshot placeholder for Kanad Bajpai"
            className="w-56 h-56 rounded-xl border object-contain"
            loading="lazy"
          />
        </div>
      </section>

      <section id="projects" className="mt-16 space-y-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="rounded-xl border p-6 bg-card/50">
          <p className="text-muted-foreground">Many exciting projects are coming soon. Stay tuned!</p>
        </div>
      </section>

      <section id="skills" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {skills.map(({ label, icon: Icon }) => (
            <Badge key={label} variant="accent" className="justify-center py-2 gap-2 hover-scale">
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </Badge>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-16 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Contact</h2>
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
          <h3 className="text-2xl font-semibold">Find me here</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.linkedin.com/in/kanadbajpai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-xl border p-5 bg-card hover:shadow-lg transition-shadow hover-scale"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">@kanadbajpai</p>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/kanad1902_b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="rounded-xl border p-5 bg-card hover:shadow-lg transition-shadow hover-scale"
            >
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-muted-foreground">@kanad1902_b</p>
                </div>
              </div>
            </a>
          </div>
        </aside>
      </section>
    </Layout>
  );
};

export default Index;
