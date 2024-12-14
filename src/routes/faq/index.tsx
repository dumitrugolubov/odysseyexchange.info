import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Section from '~/components/ui/section/section';

export default component$(() => {
  return (
    <Section>
      <h1>Часто задаваемые вопросы</h1>
      
      <div>
        <h2>Общие вопросы</h2>
        <div>
          <h3>Как начать торговлю?</h3>
          <p>Зарегистрируйтесь, пройдите верификацию и пополните счет для начала торговли.</p>
        </div>
        
        <div>
          <h3>Какие комиссии на бирже?</h3>
          <p>Мы предлагаем 0% комиссию на спот торговлю и конкурентные комиссии на фьючерсах.</p>
        </div>
        
        <div>
          <h3>Как работает возврат 10%?</h3>
          <p>При ликвидации позиции вы получаете возврат 10% от комиссии.</p>
        </div>
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: 'FAQ | Odyssey Exchange',
  meta: [
    {
      name: 'description',
      content: 'Ответы на часто задаваемые вопросы о торговле на Odyssey Exchange',
    },
  ],
};