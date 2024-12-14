import { component$ } from '@builder.io/qwik';
import Section from '~/components/ui/section/section';
import StatCard from './stat-card';
import { stats } from '~/data/stats';
import styles from './stats.module.css';

export default component$(() => {
  return (
    <Section background="purple">
      <div class={styles.grid}>
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </Section>
  );
});