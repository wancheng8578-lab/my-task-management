import '@testing-library/jest-dom';

// ✅ Use globalThis for Vitest (not global)
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver = ResizeObserver;
