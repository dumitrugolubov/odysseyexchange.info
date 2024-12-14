import { component$, Slot } from '@builder.io/qwik';
import styles from './section.module.css';

interface SectionProps {
  class?: string;
  background?: 'dark' | 'gradient' | 'purple';
}

export default component$<SectionProps>(({ class: className, background = 'dark' }) => {
  return (
    <section 
      class={[
        styles.section,
        styles[`background-${background}`],
        className
      ].filter(Boolean).join(' ')}
    >
      <div class="container">
        <Slot />
      </div>
    </section>
  );
});