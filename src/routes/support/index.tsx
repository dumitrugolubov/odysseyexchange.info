import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Section from '~/components/ui/section/section';

export default component$(() => {
  return (
    <Section>
      <h1>Поддержка</h1>
      <p>Мы здесь, чтобы помочь вам 24/7</p>
      
      <div>
        <h2>Способы связи</h2>
        <ul>
          <li>Email: support@odyssey.exchange</li>
          <li>Telegram: @odyssey_support</li>
          <li>Время ответа: до 1 часа</li>
        </ul>
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: 'Поддержка | Odyssey Exchange',
  meta: [
    {
      name: 'description',
      content: 'Служба поддержки Odyssey Exchange. Мы работаем 24/7, чтобы помочь вам.',
    },
  ],
};