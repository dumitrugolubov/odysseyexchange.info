import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Section from '~/components/ui/section/section';

export default component$(() => {
  return (
    <Section>
      <h1>Фьючерсы</h1>
      <p>Торгуйте с кредитным плечом на крупнейшей платформе для мемкоинов</p>
      
      <div>
        <h2>Преимущества фьючерсной торговли</h2>
        <ul>
          <li>Низкие комиссии на фьючерсах</li>
          <li>Кредитное плечо до 777x</li>
          <li>Продвинутые типы ордеров</li>
          <li>Высокая ликвидность</li>
        </ul>
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: 'Фьючерсы | Odyssey Exchange',
  meta: [
    {
      name: 'description',
      content: 'Торгуйте фьючерсами на мемкоины с низкими комиссиями на Odyssey Exchange',
    },
  ],
};