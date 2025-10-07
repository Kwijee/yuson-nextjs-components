import styles from './ProfileCard.module.css';

export default function ProfileCard({
  name = 'Kwi Jung Han Yuson',
  age = 20,
  description = '“I am a dedicated student with a passion for technology and problem-solving, always eager to explore new opportunities for growth.”'
}) {
  return (
    <div className={styles.card}>
      <img
        src="https://picsum.photos/300"
        alt={`${name} avatar`}
        className={styles.avatar}
      />

      <div className={styles.info}>
        <h2>{name}</h2>
        <p className={styles.age}><strong>Age:</strong> {age}</p>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
}

