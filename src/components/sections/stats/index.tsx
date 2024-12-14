import { component$ } from '@builder.io/qwik';
import Section from '~/components/ui/section/section';
import styles from './styles.module.css';

interface StatProps {
  value: string;
  label: string;
}

const stats: StatProps[] = [
  {
    value: '150+',
    label: 'Мемкоинов'
  },
  {
    value: '0%',
    label: 'Спот комиссия'
  },
  {
    value: '10%',
    label: 'Возврат'
  }
];

export default component$(() => {
  return (
    <Section background="purple">
      <div class={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label} class={styles.stat}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
});