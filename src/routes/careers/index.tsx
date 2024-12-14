import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Section from '~/components/ui/section/section';

export default component$(() => {
  return (
    <Section>
      <h1>Карьера</h1>
      <p>Присоединяйтесь к команде Odyssey Exchange</p>
      
      <div>
        <h2>Открытые позиции</h2>
        <ul>
          <li>Разработчик Blockchain</li>
          <li>Frontend Developer</li>
          <li>DevOps Engineer</li>
          <li>Product Manager</li>
        </ul>
        
        <h2>Преимущества работы у нас</h2>
        <ul>
          <li>Удаленная работа</li>
          <li>Конкурентная зарплата</li>
          <li>Профессиональный рост</li>
          <li>Дружная команда</li>
        </ul>
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: 'Карьера | Odyssey Exchange',
  meta: [
    {
      name: 'description',
      content: 'Присоединяйтесь к команде Odyssey Exchange. Откройте для себя новые карьерные возможности.',
    },
  ],
};