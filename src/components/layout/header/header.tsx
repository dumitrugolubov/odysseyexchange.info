import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import Button from '~/components/ui/button/button';
import Logo from '~/components/ui/logo/logo';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.container].join(' ')}>
        <Link href="/" class={styles.logo}>
          <Logo />
          <span>Odyssey Exchange</span>
        </Link>
        
        <nav class={styles.nav}>
          <a href="https://ody.lol" target="_blank" rel="noopener">Рынки</a>
          <a href="https://ody.lol" target="_blank" rel="noopener">Торговля</a>
          <Link href="/launchpad">Лаунчпад</Link>
        </nav>

        <div class={styles.actions}>
          <a href="https://ody.lol" target="_blank" rel="noopener">
            <Button variant="secondary">Войти</Button>
          </a>
          <a href="https://ody.lol" target="_blank" rel="noopener">
            <Button>Регистрация</Button>
          </a>
        </div>
      </div>
    </header>
  );
});