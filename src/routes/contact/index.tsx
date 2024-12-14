import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Section from '~/components/ui/section/section';

export default component$(() => {
  return (
    <Section>
      <h1>Контакты</h1>
      <p>Свяжитесь с нами</p>
      
      <div>
        <h2>Контактная информация</h2>
        <ul>
          <li>Email: contact odyexchange@gmail.com</li>
          <li>Telegram: @t_dmi3</li>
          <li>Twitter: x.com/t_dmi3</li>
        </ul>
        
        <h2>Для партнеров</h2>
        <p>Для партнерства с биржей свяжитесь с менеджером через:</p>
        <ul>
          <li>Email: odyexchange@gmail.com</li>
          <li>Telegram: @t_dmi3</li>
        </ul>
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: 'Контакты | Odyssey Exchange',
  meta: [
    {
      name: 'description',
      content: 'Свяжитесь с командой Odyssey Exchange. Мы всегда на связи.',
    },
  ],
};