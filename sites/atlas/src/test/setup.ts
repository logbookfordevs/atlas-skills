import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

vi.stubGlobal('scrollTo', vi.fn());
vi.stubGlobal('localStorage', window.localStorage);
HTMLElement.prototype.scrollIntoView = vi.fn();
afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.dataset.theme = 'light';
});
