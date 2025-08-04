import { Typography, Avatar, Grid, List, ListItem, ListItemText } from "@mui/material";
import type { ReactElement } from 'react';
import { useTranslation } from "react-i18next";

const points = [
  ['full-stack-tag', 'full-stack-desc'],
  ['problem-solving-tag', 'problem-solving-desc'],
  ['leadership-tag', 'leadership-desc'],
];

function HeroSummary(): ReactElement {
  const { t } = useTranslation('hero');

  return (
    <>
      <Typography
        fontWeight="bold"
        gutterBottom
        variant="h2"
      >
        {t('name')}
      </Typography>
      <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
        {t('summary')}
      </Typography>
      <List>
        {points.map(([tag, desc]) => (
          <ListItem key={tag}>
            <ListItemText
              primary={t(tag)}
              secondary={t(desc)}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default function HeroSection() {
  const { t } = useTranslation('hero');

  return (
    <Grid
      container
      spacing={4}
      sx={{
        alignItems: 'center',
        minHeight: '80vh',
        px: 4,
        py: 8,
      }}
    >
      <Grid size={{ xs: 12, md: 7 }}> {/* eslint-disable-line sort-keys */}
        <HeroSummary />
      </Grid>
      <Grid
        size={{ xs: 12, md: 5 }}  // eslint-disable-line sort-keys
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Avatar
          sx={{
            height: '70%',
            width: '70%',
          }}
          src="/assets/images/headshot.jpg"
        >
          {t('name')}
        </Avatar>
      </Grid>
    </Grid>
  );
}
