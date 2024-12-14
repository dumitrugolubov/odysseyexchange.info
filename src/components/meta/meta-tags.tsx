import { component$ } from '@builder.io/qwik';

export const MetaTags = component$(() => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Russian" />
      <meta name="author" content="Odyssey Exchange" />
      <meta name="theme-color" content="#151934" />
    </>
  );
});