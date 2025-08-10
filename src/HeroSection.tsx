import { Typography, Avatar, Box, Grid, List, ListItem, ListItemText, Stack, useTheme } from "@mui/material";
import type { ReactElement } from 'react';
import { useTranslation } from "react-i18next";

import { heroPoints } from './constants';

interface HeroPortraitProps {
  small?: boolean; 
}

const defaultHeroPortraitProps = {
  small: false,
};

function HeroPortrait(props: HeroPortraitProps): ReactElement {
  const { small } = props;

  const { t } = useTranslation('hero');
  const theme = useTheme();
  
  const size = small ? theme.typography.h2.fontSize : '70%';

  return (
    <Avatar
      sx={{
        height: size,
        width: size,
      }}
      src="/assets/images/headshot.jpg"
    >
      {t('name')}
    </Avatar>
  );
}

HeroPortrait.defaultProps = defaultHeroPortraitProps;

function HeroSummary(): ReactElement {
  const { t } = useTranslation('hero');

  return (
    <>
      <Stack
        direction="row"
        display="flex"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Typography
          fontWeight="bold"
          gutterBottom
          variant="h2"
        >
          {t('name')}
        </Typography>
        <Box
          sx={{
            display: {
              md: 'none',
              xs: 'flex',
            },
            justifyContent: 'center',
          }}
        >
          <HeroPortrait small />
        </Box>
      </Stack>
      <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
        {t('summary')}
      </Typography>
      <List>
        {heroPoints.map(([tag, desc]) => (
          <ListItem
            key={tag}
            slotProps={{
              root: {
                'aria-describedby': `hero-point-desc-${tag}`,
                'aria-labelledby': `hero-point-${tag}`,
              },
            }}
          >
            <ListItemText
              primary={t(tag)}
              secondary={t(desc)}
              slotProps={{
                primary: {
                  id: `hero-point-${tag}`,
                },
                secondary: {
                  id: `hero-point-desc-${tag}`,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default function HeroSection() {
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
        sx={{
          display: {
            md: 'flex',
            sm: 'none',
          },
          justifyContent: 'center',
        }}
      >
        <HeroPortrait />
      </Grid>
    </Grid>
  );
}
