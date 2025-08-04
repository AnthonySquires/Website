import { Masonry } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Stack, Typography, useTheme } from "@mui/material";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import GitHubIcon from '@mui/icons-material/GitHub';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WebIcon from '@mui/icons-material/Web';

import rawProjects from './assets/projects/projects.json';

type ProjectIconType = 'web' | 'light';

interface ProjectDescription {
  title: string;
  body: string;
  icon: ProjectIconType;
  professional: boolean;
  tags?: string[];
  githubUrl?: string;
}

const projects: ProjectDescription[] = rawProjects as ProjectDescription[];

interface ProjectIconProps {
  icon: ProjectIconType;
}

function ProjectIcon(props: ProjectIconProps): ReactElement | null {
  const { icon } = props;

  switch (icon) {
    case 'light':
      return <TipsAndUpdatesIcon />;
    case 'web':
      return <WebIcon />;
    default:
      console.error('encountered unknown icon: ', icon);  // eslint-disable-line no-console
      return null;
  }
}

interface ProjectCardActionsProps {
  project: ProjectDescription;
}

function ProjectCardActions(props: ProjectCardActionsProps): ReactElement | null {
  const { project } = props;
  const {
    githubUrl,
  } = project;

  const { t } = useTranslation('projects');

  const hasGithubUrl = githubUrl !== undefined && githubUrl.length > 0;

  if (!hasGithubUrl) {
    return null;
  }

  return (
    <CardActions>
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
    </CardActions>
  );
}

interface ProjectCardProps {
  project: ProjectDescription;  
}

function ProjectCard(props: ProjectCardProps): ReactElement {
  const { project } = props;
  const {
    body,
    icon,
    title,
  } = project;

  const { t } = useTranslation('projects');

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
      <ProjectCardActions project={project} />
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
          borderTop: `1px solid ${theme.palette.grey[500]}`,  // eslint-disable-line no-magic-numbers
          px: 4,
          py: 3,
        }}
      >
        <Masonry
          columns={{ xs: 1, sm: 2, md: 4, xl: 6 }}  // eslint-disable-line sort-keys
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
