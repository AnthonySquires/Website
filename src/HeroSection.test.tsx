import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import HeroSection from './HeroSection';
import { heroPoints } from './constants';

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

    await Promise.all(expectedTags.map(async (tagMatcher) => {
      const point = await findByRole('listitem', { name: tagMatcher });
      expect(point).toBeVisible();
    }));
  });
});
