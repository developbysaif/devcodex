import PageHero from "@/components/PageHero";
import Team from "@/components/Team";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <PageHero 
        title="Our Team" 
        subtitle="Meet the experts behind DevCodeX. A dedicated team of developers, designers, and strategists committed to your success."
        backgroundImage="/team-about.png"
      />
      <Team />
    </main>
  );
}
