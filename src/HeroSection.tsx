import { Typography, Avatar, Grid, List, ListItem, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";

const points = [
  ['full-stack-tag', 'full-stack-desc'],
  ['problem-solving-tag', 'problem-solving-desc'],
  ['leadership-tag', 'leadership-desc'],
];

export default function HeroSection() {
  const { t } = useTranslation('hero');

  return (
    <Grid
      container
      spacing={4}
      sx={{
        py: 8,
        px: 4,
        minHeight: '80vh',
        alignItems: 'center',
      }}
    >
      <Grid size={{ xs: 12, md: 7 }}>
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
      </Grid>
      <Grid
        size={{ xs: 12, md: 5 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Avatar
          sx={{
            width: '70%',
            height: '70%',
          }}
          src="/assets/images/headshot.jpg"
        >
          {t('name')}
        </Avatar>
      </Grid>
    </Grid>
  );
}
