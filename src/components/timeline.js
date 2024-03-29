/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  timelineText
} from './layout.module.css'

// const YellowTimelineDot = styled(TimelineDot)({
//   color: 'rgb(255,240,185)'
// });
// const YellowTimelineConnector = styled(TimelineConnector)({
//   color: 'rgb(255,240,185)'
// });

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(78,103,145)',
      contrastText: 'rgb(78,103,145)',
    }
  },
  typography: {
    fontFamily: [
      '"Barlow Condensed"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const ProjectTimeline = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Timeline
        sx={{
          display: `inline-block`,
          maxWidth: `400px`,
          paddingTop: `7.5rem`,
          marginLeft: `-2rem`,
          marginRight: `1rem`,
          verticalAlign: `top`
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{backgroundColor: 'rgb(78,103,145)'}}/>
            <TimelineConnector sx={{backgroundColor: 'rgb(78,103,145)'}}/>
          </TimelineSeparator>
          <TimelineContent>
            <Link to="/" className={timelineText}>Portfolio</Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Feb 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot sx={{backgroundColor: 'rgb(78,103,145)'}}/>
            <TimelineConnector sx={{backgroundColor: 'rgb(78,103,145)'}}/>
          </TimelineSeparator>
          <TimelineContent>
          <Link to="/projects/2023-Feb" className={timelineText}>To-Do App</Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jun 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{backgroundColor: 'rgb(78,103,145)'}}/>
            <TimelineConnector sx={{backgroundColor: 'rgb(78,103,145)'}}/>
          </TimelineSeparator>
          <TimelineContent>
            <Link to="/projects/2022-Jun-Aug" className={timelineText}>TYCA Internship</Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jan 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{backgroundColor: 'rgb(78,103,145)'}}/>
            <TimelineConnector sx={{backgroundColor: 'rgb(78,103,145)'}}/>
          </TimelineSeparator>
          <TimelineContent>
            <Link to="/projects/2022-Jan" className={timelineText}>TTP Bootcamp</Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jul 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{backgroundColor: 'rgb(78,103,145)'}}/>
            <TimelineConnector sx={{backgroundColor: 'rgb(78,103,145)'}}/>
          </TimelineSeparator>
          <TimelineContent>
          <Link to="/projects/2021-Jul-Aug" className={timelineText}>Unadat Internship</Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jan 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{backgroundColor: 'rgb(78,103,145)'}}/>
          </TimelineSeparator>
          <TimelineContent>
            EverUp SWE Certification
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </ThemeProvider>
  )
}

ProjectTimeline.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectTimeline
