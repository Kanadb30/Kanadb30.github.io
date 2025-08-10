import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
const placeholder = "/placeholder.svg";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About | Kanad Bajpai Portfolio"
        description="About Kanad Bajpai – B.Tech CSE at IIT Bhilai, passionate about Java, Front-end, and Generative AI."
        canonical="/about"
      />
      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">About Kanad Bajpai</h1>
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
            src={placeholder}
            alt="Professional headshot placeholder for Kanad Bajpai"
            className="w-56 h-56 rounded-xl border object-contain"
          />
        </div>
      </section>
    </Layout>
  );
};

export default About;
