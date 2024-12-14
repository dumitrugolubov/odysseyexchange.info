import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Section from '~/components/ui/section/section';

export default component$(() => {
  return (
    <Section>
      <h1>Лаунчпад</h1>
      <p>Инвестируйте в новые мемкоины на ранних этапах</p>
      
      <div>
        <h2>Преимущества нашего лаунчпада</h2>
        <ul>
          <li>Тщательный отбор проектов</li>
          <li>Эксклюзивный доступ к новым токенам</li>
          <li>Прозрачный процесс распределения</li>
          <li>Поддержка после листинга</li>
        </ul>
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: 'Лаунчпад | Odyssey Exchange',
  meta: [
    {
      name: 'description',
      content: 'Инвестируйте в новые мемкоины на ранних этапах через лаунчпад Odyssey Exchange',
    },
  ],
};