import { component$ } from '@builder.io/qwik';
import Section from '~/components/ui/section/section';
import FeatureCard from './feature-card';
import { features } from '~/data/features';
import styles from './features.module.css';

export default component$(() => {
  return (
    <Section>
      <h2 class={styles.title}>Наши преимущества</h2>
      <div class={styles.grid}>
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
});