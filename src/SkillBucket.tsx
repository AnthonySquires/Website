import { useMemo, type ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Masonry } from '@mui/lab';
import { Chip, Stack, Typography } from "@mui/material";

interface SkillChipProps {
  professional: boolean;
  text: string;
}

function SkillChip(props: SkillChipProps): ReactElement {
  const {
    professional,
    text,
  } = props;

  return (
    <Chip
      label={text}
      color={professional ? 'primary' : 'default'}
    />
  );
}

interface SkillItem {
  key: string;
  professional: boolean;
}

interface SkillBucketProps {
  skills: SkillItem[];
  title: string;

  filter: string;
  professionalOnly: boolean;
}

export default function SkillBucket(props: SkillBucketProps): ReactElement {
  const {
    skills,
    title,
    filter,
    professionalOnly,
  } = props;

  const { t } = useTranslation('skills');

  const translatedSkills = useMemo(() => (
    skills.map(({ key, professional }) => ({
      key,
      professional,
      text: t(key),
    }))
  ), [skills, t]);

  const filteredSkills = useMemo(() => (
    translatedSkills.filter(({ professional, text }) => (
      (!professionalOnly || professional) && (filter === '' || text.includes(filter))
    ))
  ), [translatedSkills, filter, professionalOnly]);

  return (
    <Stack>
      <Typography variant="subtitle1">
        {t(title)}
      </Typography>
      <Masonry columns={2}>
        {filteredSkills.length === 0 ? (
          <Typography variant="body2">
            {t('no-skills')}
          </Typography>
        ) : (
          filteredSkills.map(({ professional, text }) => (
            <SkillChip
              key={text}
              professional={professional}
              text={text}
            />
          ))
        )}
      </Masonry>
    </Stack>
  );
}
