import { FormControlLabel, Grid, Stack, Switch, Typography } from "@mui/material";
import { useCallback, useState, type ReactElement } from "react";
import { useTranslation } from "react-i18next";

import SkillBucket from "./SkillBucket";

import frameworks from './assets/skills/frameworks.json';
import languages from './assets/skills/languages.json';
import tools from './assets/skills/tools.json';

export default function SkillBuckets(): ReactElement {
  const { t } = useTranslation('skills');

  const [professionalOnly, setProfessionalOnly] = useState(false);

  const handleProfessionalOnlyChange = useCallback((checked: boolean) => {
    setProfessionalOnly(checked);
  }, [setProfessionalOnly]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: 4,
        mb: 4,
      }}
    >
      <Grid size={12}>
          <Typography variant="h4">
            {t('header')}
          </Typography>
      </Grid>
      <Grid size={12}>
        <Stack direction="row">
          <FormControlLabel
            control={<Switch />}
            label={t('action-professional-only')}
            onChange={(ev) => handleProfessionalOnlyChange(ev.target.checked)}
            value={professionalOnly}
          />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <SkillBucket
          filter=""
          professionalOnly={professionalOnly}
          skills={languages}
          title="language-title"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <SkillBucket
          filter=""
          professionalOnly={professionalOnly}
          skills={frameworks}
          title="frameworks-title"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <SkillBucket
          filter=""
          professionalOnly={professionalOnly}
          skills={tools}
          title="tools-title"
        />
      </Grid>
    </Grid>
  );
}