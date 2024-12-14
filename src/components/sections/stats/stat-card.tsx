import { component$ } from '@builder.io/qwik';
import styles from './stat-card.module.css';

export interface StatCardProps {
  value: string;
  label: string;
}

export default component$<StatCardProps>(({ value, label }) => {
  return (
    <div class={styles.stat}>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
});