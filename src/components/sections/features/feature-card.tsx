import { component$ } from '@builder.io/qwik';
import styles from './feature-card.module.css';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default component$<FeatureCardProps>(({ title, description, icon }) => {
  return (
    <div class={styles.feature}>
      <div class={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
});