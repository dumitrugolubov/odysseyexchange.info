import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#41d1ff"/>
          <stop offset="100%" stop-color="#bd34fe"/>
        </linearGradient>
      </defs>
      <path d="M256 64C150.4 64 64 150.4 64 256s86.4 192 192 192 192-86.4 192-192S361.6 64 256 64zm0 320c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128-57.6 128-128 128z" fill="url(#gradient)"/>
    </svg>
  );
});