import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <a href="https://www.odyssey.exchange" target="_blank" rel="noopener" class={styles.anchor}>
          <span>Made with ♡ by Odyssey Exchange</span>
          <span class={styles.spacer}>|</span>
          <span>{new Date().getFullYear()}</span>
        </a>
      </div>
    </footer>
  );
});