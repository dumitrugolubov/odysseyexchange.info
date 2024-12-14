import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Section from '~/components/ui/section/section';

export default component$(() => {
  return (
    <Section>
      <h1>Спот Торговля</h1>
      <p>Торгуйте криптовалютой с нулевой комиссией на спотовом рынке</p>
      
      <div>
        <h2>Преимущества спот торговли</h2>
        <ul>
          <li>0% комиссия на все торговые пары</li>
          <li>Мгновенное исполнение ордеров</li>
          <li>Широкий выбор мемкоинов</li>
          <li>Высокая ликвидность</li>
        </ul>
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: 'Спот Торговля | Odyssey Exchange',
  meta: [
    {
      name: 'description',
      content: 'Торгуйте криптовалютой с нулевой комиссией на спотовом рынке Odyssey Exchange',
    },
  ],
};