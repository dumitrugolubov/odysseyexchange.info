import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/sections/hero/hero';
import Features from '~/components/sections/features/features';
import Stats from '~/components/sections/stats';
import Social from '~/components/sections/social/social';
import Newsletter from '~/components/sections/newsletter/newsletter';

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Social />
      <Newsletter />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Odyssey Exchange - Первая криптобиржа для мемкоинов | 0% комиссия',
  meta: [
    {
      name: 'description',
      content: 'Odyssey Exchange - первая криптобиржа для мемкоинов с нулевой комиссией на спот торговлю. Более 150 мемкоинов, 10% возврат за ликвидации и низкие комиссии на фьючерсах.',
    },
    {
      name: 'keywords',
      content: 'криптобиржа, мемкоины, торговля криптовалютой, нулевая комиссия, спот торговля, фьючерсы, лаунчпад, doge, shib, pepe',
    },
    {
      property: 'og:title',
      content: 'Odyssey Exchange - Первая криптобиржа для мемкоинов',
    },
    {
      property: 'og:description',
      content: 'Торгуйте мемкоинами с нулевой комиссией. Более 150 токенов, возврат 10% за ликвидации.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://odysseyexchange.info',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Odyssey Exchange - Первая криптобиржа для мемкоинов',
    },
    {
      name: 'twitter:description',
      content: 'Торгуйте мемкоинами с нулевой комиссией. Более 150 токенов, возврат 10% за ликвидации.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://odysseyexchange.info',
    },
  ],
};