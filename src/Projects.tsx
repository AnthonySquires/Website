import { Masonry } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Stack, Typography, useTheme } from "@mui/material";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import GitHubIcon from '@mui/icons-material/GitHub';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WebIcon from '@mui/icons-material/Web';

import projects from './assets/projects/projects.json';

type ProjectIconType = 'web' | 'light';

interface ProjectDescription {
  title: string;
  body: string;
  icon: ProjectIconType;
  professional: boolean;
  tags?: string[];
  githubUrl?: string;
}

interface ProjectIconProps {
  icon: ProjectIconType;
}

function ProjectIcon(props: ProjectIconProps): ReactElement {
  const { icon } = props;

  switch (icon) {
    case 'light':
      return <TipsAndUpdatesIcon />;
    case 'web':
      return <WebIcon />;
  }
}

interface ProjectCardProps {
  project: ProjectDescription;  
}

function ProjectCard(props: ProjectCardProps): ReactElement {
  const { project } = props;
  const {
    body,
    icon,
    githubUrl,
    title,
  } = project;

  const { t } = useTranslation('projects');

  const hasGithubUrl = githubUrl != undefined && githubUrl.length > 0;

  return (
    <Card>
      <CardHeader
        avatar={<ProjectIcon icon={icon} />}
        title={t(title)}
        slotProps={{
          title: {
            variant: 'h5'
          },
        }}
      />
      <CardContent>
        <Typography variant="body2">
          {t(body)}
        </Typography>
      </CardContent>
      {(hasGithubUrl) && (
        <CardActions>
          {hasGithubUrl && (
            <Button
              target="_blank"
              href={githubUrl}
              variant="contained"
            >
              <Stack
                alignItems="center"
                justifyContent="center"
                direction="row"
                spacing={2}
              >
                <GitHubIcon />
                <span>
                  {t('github-link')}
                </span>
              </Stack>
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}

export default function Projects(): ReactElement {
  const { t } = useTranslation('projects');

  const theme = useTheme();
  
  return (
    <Stack
      spacing={2}
    >
      <Typography variant="h4" sx={{ px: 4 }}>
        {t('header')}
      </Typography>
      <Box
        sx={{
          background: theme.palette.divider,
          borderTop: `1px solid ${theme.palette.grey[500]}`,
          py: 3,
          px: 4
        }}
      >
        <Masonry
          columns={{ xs: 1, sm: 2, md: 4, xl: 6 }}

        >
          {projects.map((project: ProjectDescription) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </Masonry>
      </Box>
    </Stack>
  );
}
