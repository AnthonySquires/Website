import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import HeroSection from './HeroSection';

describe('Hero Section', () => {
  it('show display my name', async () => {
    const { findByRole } = render(
      <HeroSection />
    );

    const heading = await findByRole('heading', { name: /anthony squires/i });
    expect(heading).toBeVisible();
  });
});
