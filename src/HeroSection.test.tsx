import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import HeroSection, { heroPoints } from './HeroSection';

describe('Hero Section', () => {
  it('show display my name', async () => {
    const { findByRole } = render(
      <HeroSection />
    );

    const heading = await findByRole('heading', { name: /anthony squires/ui });
    expect(heading).toBeVisible();
  });

  it('shows each hero point', async () => {
    const { findByRole, findAllByRole } = render(
      <HeroSection />
    );

    const allPoints = await findAllByRole('listitem');
    expect(allPoints).toHaveLength(heroPoints.length);

    const expectedTags = [
      /full-stack development/ui,
      /problem solving/ui,
      /leadership/ui,
    ];

    for (const tagMatcher of expectedTags) {
      const point = await findByRole('listitem', { name: tagMatcher });
      expect(point).toBeVisible();
    }
  });
});
