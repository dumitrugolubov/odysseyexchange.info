import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import Button from '~/components/ui/button/button';
import Section from '~/components/ui/section/section';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <Section background="gradient" class={styles.hero}>
      <div class={styles.content}>
        <div class={styles.text}>
          <h1 class={styles.title}>
            Первая криптобиржа для <span class={styles.highlight}>мемкоинов</span>
          </h1>
          <p class={styles.subtitle}>
            Торгуйте более чем 150 мемкоинами с нулевой комиссией
          </p>
          <div class={styles.cta}>
            <a href="https://ody.lol" target="_blank" rel="noopener">
              <Button>Начать торговлю</Button>
            </a>
            <Link href="/about">
              <Button variant="secondary">Узнать больше</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
});