import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Section from '~/components/ui/section/section';

export default component$(() => {
  return (
    <Section>
      <h1>Документация</h1>
      <p>Odyssey Exchange - https://ody.lol</p>
      <p>Подробные руководства и API документация</p>
      
      <div>
        <h2>Разделы</h2>
        <ul>
          <li>Руководство пользователя</li>
          <li>API документация</li>
          <li>Торговые правила</li>
          <li>Условия использования</li>
        </ul>
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: 'Документация | Odyssey Exchange',
  meta: [
    {
      name: 'description',
      content: 'Техническая документация и руководства по использованию Odyssey Exchange',
    },
  ],
};