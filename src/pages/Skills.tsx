import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

const skills = ["Java", "OOP", "DSA", "HTML", "CSS", "Generative AI"];

const Skills = () => {
  return (
    <Layout>
      <SEO
        title="Skills | Kanad Bajpai Portfolio"
        description="Skills: Java, OOP, DSA, HTML, CSS, Generative AI."
        canonical="/skills"
      />
      <section>
        <h1 className="text-3xl font-bold mb-6">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {skills.map((s) => (
            <Badge key={s} variant="accent" className="justify-center py-2">
              {s}
            </Badge>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
