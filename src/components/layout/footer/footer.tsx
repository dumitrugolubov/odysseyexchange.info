import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { SITE_CONFIG } from '~/config/site';
import styles from './footer.module.css';

export default component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class={styles.footer}>
      <div class={["container", styles.container].join(' ')}>
        <div class={styles.brand}>
          <h3>{SITE_CONFIG.name}</h3>
          <p>{SITE_CONFIG.description}</p>
        </div>

        <div class={styles.links}>
          <div class={styles.column}>
            <h4>Продукты</h4>
            <Link href="/spot">Спот</Link>
            <Link href="/futures">Фьючерсы</Link>
            <Link href="/launchpad">Лаунчпад</Link>
          </div>

          <div class={styles.column}>
            <h4>Поддержка</h4>
            <Link href="/faq">FAQ</Link>
            <Link href="/support">Поддержка</Link>
            <Link href="/docs">Документация</Link>
          </div>

          <div class={styles.column}>
            <h4>Компания</h4>
            <Link href="/about">О нас</Link>
            <Link href="/careers">Карьера</Link>
            <Link href="/contact">Контакты</Link>
          </div>
        </div>
      </div>

      <div class={styles.bottom}>
        <div class="container">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. Все права защищены Grimace.</p>
        </div>
      </div>
    </footer>
  );
});