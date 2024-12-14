import { component$ } from '@builder.io/qwik';
import Section from '~/components/ui/section/section';
import styles from './social.module.css';

export default component$(() => {
  return (
    <Section>
      <div class={styles.social}>
        <h2>Для партнерства с биржей свяжитесь с менеджером</h2>
        <p>Следите за новостями и обновлениями в социальных сетях</p>
        <div class={styles.icons}>
          <a href="https://t.me/t_dmi3" target="_blank" rel="noopener">
            <span class={styles.icon}>📱</span>
            Telegram
          </a>
          <a href="https://x.com/t_dmi3" target="_blank" rel="noopener">
            <span class={styles.icon}>🐦</span>
            Twitter
          </a>
        </div>
      </div>
    </Section>
  );
});