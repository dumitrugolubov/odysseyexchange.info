import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Section from '~/components/ui/section/section';
import styles from './about.module.css';

export default component$(() => {
  return (
    <>
      <Section background="gradient" class={styles.hero}>
        <h1>О Odyssey Exchange</h1>
        <p class={styles.lead}>
          Мы создаем будущее торговли мемкоинами, делая его доступным для всех
        </p>
      </Section>

      <Section class={styles.mission}>
        <div class={styles.grid}>
          <div>
            <h2>Наша миссия</h2>
            <p>
              Odyssey Exchange стремится демократизировать торговлю мемкоинами, создавая
              безопасную и инновационную платформу, где каждый может стать частью
              растущего сообщества криптоэнтузиастов.
            </p>
          </div>
          <div class={styles.stats}>
            <div class={styles.stat}>
              <span>150+</span>
              <p>Мемкоинов</p>
            </div>
            <div class={styles.stat}>
              <span>0%</span>
              <p>Спот комиссия</p>
            </div>
            <div class={styles.stat}>
              <span>10%</span>
              <p>Возврат</p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="purple" class={styles.values}>
        <h2>Наши ценности</h2>
        <div class={styles.valuesGrid}>
          <div class={styles.value}>
            <span class={styles.icon}>🛡️</span>
            <h3>Безопасность</h3>
            <p>
              Мы используем передовые технологии защиты для обеспечения
              безопасности средств наших пользователей
            </p>
          </div>
          <div class={styles.value}>
            <span class={styles.icon}>⚡</span>
            <h3>Инновации</h3>
            <p>
              Постоянно развиваем платформу, внедряя новые технологии
              и улучшая пользовательский опыт
            </p>
          </div>
          <div class={styles.value}>
            <span class={styles.icon}>🤝</span>
            <h3>Сообщество</h3>
            <p>
              Поддерживаем активное сообщество трейдеров и создаем
              условия для его роста
            </p>
          </div>
          <div class={styles.value}>
            <span class={styles.icon}>💎</span>
            <h3>Прозрачность</h3>
            <p>
              Обеспечиваем полную прозрачность всех операций и
              открытую коммуникацию
            </p>
          </div>
        </div>
      </Section>

      <Section class={styles.features}>
        <h2>Почему мы особенные</h2>
        <div class={styles.featuresGrid}>
          <div class={styles.feature}>
            <h3>Специализация на мемкоинах</h3>
            <p>
              Мы первая биржа, которая фокусируется именно на мемкоинах,
              предоставляя широкий выбор токенов и специализированные инструменты
              для торговли
            </p>
          </div>
          <div class={styles.feature}>
            <h3>Выгодные условия</h3>
            <p>
              Нулевая комиссия на спот-торговлю, 10% возврат при ликвидации
              и низкие комиссии на фьючерсы делают торговлю максимально
              выгодной
            </p>
          </div>
          <div class={styles.feature}>
            <h3>Современная платформа</h3>
            <p>
              Используем передовые технологии для обеспечения высокой
              скорости работы и надежности платформы
            </p>
          </div>
        </div>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'О нас | Odyssey Exchange',
  meta: [
    {
      name: 'description',
      content: 'Узнайте больше о Odyssey Exchange - первой криптобирже для мемкоинов. Наша миссия, ценности и преимущества.',
    },
  ],
};