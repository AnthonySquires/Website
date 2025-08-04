import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import SkillBucket from './SkillBucket';

const mockSkills = [
  { key: 'skill1', professional: true },
  { key: 'skill2', professional: false },
  { key: 'skill3', professional: true }
];

describe('SkillBucket', () => {
  it('should display all skills when professionalOnly is false', async () => {
    const { findByRole } = render(
       <SkillBucket
        skills={mockSkills}
        title="test-title"
        filter=""
        professionalOnly={false}
      />
    );
    
    // All skills should be visible
    const skill1 = await findByRole('listitem', { name: /skill one/ui });
    expect(skill1).toBeVisible();
    const skill2 = await findByRole('listitem', { name: /skill two/ui });
    expect(skill2).toBeVisible();
    const skill3 = await findByRole('listitem', { name: /skill three/ui });
    expect(skill3).toBeVisible();
  });

  it('should display only some skills when professionalOnly is true', async () => {
    const { findAllByRole, findByRole } = render(
       <SkillBucket
        skills={mockSkills}
        title="test-title"
        filter=""
        professionalOnly
      />
    );
    
    const skills = await findAllByRole('listitem');
    expect(skills).toHaveLength(2);

    const skill1 = await findByRole('listitem', { name: /skill one/ui });
    expect(skill1).toBeVisible();
    const skill3 = await findByRole('listitem', { name: /skill three/ui });
    expect(skill3).toBeVisible();
  });
});
