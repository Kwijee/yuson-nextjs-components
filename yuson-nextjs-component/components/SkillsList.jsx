import styles from './SkillsList.module.css';

export default function SkillsList({ skills = ["JavaScript", "React", "Next.js"] }) {
  return (
    <section className={styles.skills}>
      <h3>Skills</h3>
      <ul>
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

