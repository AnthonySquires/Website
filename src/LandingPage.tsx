import { AppBar, Toolbar, Typography, useScrollTrigger, Slide } from '@mui/material';
import type { ReactElement } from 'react';
import HeroSection from './HeroSection';
import { useTranslation } from 'react-i18next';
import SkillBuckets from './SkillBuckets';
import Projects from './Projects';

interface HideOnScrollProps {
  children: ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 400, // Adjust this value based on when you want the AppBar to appear
  });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

export default function LandingPage(): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Typography
              fontWeight="800"
              variant="h4"
            >
              {t('name')}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> {/* This spacer prevents content from jumping under the AppBar when it appears */}
      <HeroSection />
      <SkillBuckets />
      <Projects />
    </>
  );
}
