import { component$ } from '@builder.io/qwik';
import Button from '~/components/ui/button/button';
import Section from '~/components/ui/section/section';
import styles from './newsletter.module.css';

export default component$(() => {
  return (
    <Section background="gradient">
      <div class={styles.newsletter}>
        <h2>Будьте в курсе</h2>
        <p>Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления</p>
        <form class={styles.form}>
          <input type="email" placeholder="Ваш email" required />
          <Button>Подписаться</Button>
        </form>
      </div>
    </Section>
  );
});