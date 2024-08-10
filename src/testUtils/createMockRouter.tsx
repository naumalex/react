import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { vi } from 'vitest';

export function createMockRouter(
  router: Partial<AppRouterInstance>,
): AppRouterInstance {
  return {
    refresh: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    ...router,
  };
}
