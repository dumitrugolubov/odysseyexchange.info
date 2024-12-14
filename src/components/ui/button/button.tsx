import { component$, Slot } from '@builder.io/qwik';
import styles from './button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  class?: string;
}

export default component$<ButtonProps>(({ variant = 'primary', class: className }) => {
  return (
    <button 
      class={[
        styles.button,
        styles[`button-${variant}`],
        className
      ].filter(Boolean).join(' ')}
    >
      <Slot />
    </button>
  );
});