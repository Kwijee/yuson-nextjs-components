import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <ProfileCard
        name="Kwi Jung Han Yuson"
        age={20}
        description="I am a dedicated student with a passion for technology and problem solving, always eager to explore new opportunities for growth."
      />
      <SkillsList skills={["JavaScript", "React", "Next.js"]} />
      <Footer />
    </div>
  );
}
