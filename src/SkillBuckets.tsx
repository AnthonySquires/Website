import { FormControlLabel, Grid, Stack, Switch, Typography } from "@mui/material";
import { useCallback, useState, type ReactElement } from "react";
import { useTranslation } from "react-i18next";

import SkillBucket from "./SkillBucket";

import frameworks from './assets/skills/frameworks.json';
import languages from './assets/skills/languages.json';
import tools from './assets/skills/tools.json';

interface SkillBucketsRowProps {
  professionalOnly: boolean;
}

function SkillBucketsRow(props: SkillBucketsRowProps): ReactElement {
  const {
    professionalOnly,
  } = props;

  return (
    <>
      <Grid
        size={{ xs: 12, md: 4 }} // eslint-disable-line sort-keys
      > 
        <SkillBucket
          filter=""
          professionalOnly={professionalOnly}
          skills={languages}
          title="language-title"
        />
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }} // eslint-disable-line sort-keys
      >
        <SkillBucket
          filter=""
          professionalOnly={professionalOnly}
          skills={frameworks}
          title="frameworks-title"
        />
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }} // eslint-disable-line sort-keys
      >
        <SkillBucket
          filter=""
          professionalOnly={professionalOnly}
          skills={tools}
          title="tools-title"
        />
      </Grid>
    </>
  );
}

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
        mb: 4,
        px: 4,
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
            control={(
              <Switch
                checked={professionalOnly}
                onChange={(ev) => { handleProfessionalOnlyChange(ev.target.checked) }}
              />
            )}
            label={t('action-professional-only')}
          />
        </Stack>
      </Grid>
      <SkillBucketsRow
        professionalOnly={professionalOnly}
      />
    </Grid>
  );
}