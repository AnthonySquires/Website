import '@testing-library/jest-dom';
import i18n from './i18n';

// Add test-specific translations
i18n.addResourceBundle('en', 'skills', {
  'skill1': 'Skill One',
  'skill2': 'Skill Two',
  'skill3': 'Skill Three',
  'test-title': 'Test Title',
  'no-skills': 'No skills found'
}, true, true);
