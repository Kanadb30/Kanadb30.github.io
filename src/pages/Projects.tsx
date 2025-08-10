import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Projects = () => {
  return (
    <Layout>
      <SEO
        title="Projects | Kanad Bajpai Portfolio"
        description="Projects by Kanad Bajpai – Java, Front-end, and AI. New projects coming soon."
        canonical="/projects"
      />
      <section className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">Many projects coming soon.</p>
      </section>
    </Layout>
  );
};

export default Projects;
