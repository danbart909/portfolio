import React, { useState } from 'react'
import { Row, Col } from './helper'
import { Link } from '@mui/material'

export default function Projects() {
  const [tab, setTab] = useState('wrkr')

  const tabs = ['wrkr', 'happywife', 'pollbooth', 'turtlerace']
  const projects = {
    wrkr: {
      title: 'wrkr',
      liveLink: 'https://play.google.com/store/apps/details?id=com.wrkr&hl=en&gl=US',
      apple: 'https://apps.apple.com/us/app/wrkrs/id1612568158',
      github: null,
      // description: 'This is an app designed to connect youth with their community by meeting any needs its members may have. Homeowners, or anyone needing assistance with any work they might have, can post jobs that people can then apply to offer their assistance. All meetings occur outside the app itself - it simply provides preliminary information for a job to an inquiring public. Therefore, all financial matters are handled outside the app as well. People who post jobs will be able to set any price they are willing to pay for the work they need done, but any financial transactions must be handled independently among all involved parties.',
      description: 'wrkr description',
      technologies: 'React Native, Javascript, Expo'
    },
    happywife: {
      title: `Happy Wife Junk Service`,
      liveLink: "http://happywifejunk.com",
      apple: null,
      github: `https://github.com/danbart909/newhappywife`,
      description: 'This is the website for Happy Wife Junk Service, made with React. It has information about the areas they service, the kind of junk they remove, how they operate, pricing information, contact information, as well as a form to send the owners a direct email.',
      technologies: 'React, JavaScript, HTML, CSS'
    },
    pollbooth: {
      title: 'pollbooth',
      liveLink: "https://play.google.com/store/apps/details?id=com.pollbooth",
      apple: null,
      github: 'https://github.com/danbart909/voteapp',
      // description: 'PollBooth is an app on the Google Play store made using React Native and uses Expo for workflow management. It lets users find those who represent them in the federal and state government and give them a rating once a day. You can then search and view a graph of any representative on the Data page and see how others have rated them as well. Traditional political polls involve a sample size of thousands of people to represent a country of hundreds of millions, but this app provides a way for anyone to participate in unofficial political polls and view the results as they happen.',
      description: 'pollbooth description',
      technologies: 'React Native, JavaScript, Expo, postgresSQL, node.js, knex.js'
    },
    turtlerace: {
      title: 'Turtle Race!',
      liveLink: 'https://play.google.com/store/apps/details?id=com.turtlerace&hl=en&gl=US',
      apple: null,
      github: null,
      description: "Very simple app to kill some time with. Start with $50 and choose 1 of 4 turtles to wager on, then press Start. If you hit 0, you'll restart with $50.",
      technologies: 'React Native, JavaScript, Expo'
    }
  }

  const tabBar = () => {
    const html = []
    tabs.forEach(x => {
      html.push(
        <Row
          flex='1'
          justifyContent='center'
          alignItems='center'
          color='white'
          onClick={() => setTab(x)}
          border='1px solid'
        >
          {x}
        </Row>)
    })

    return html
  }

  return (
    <Col
      flex='2'
      m='0 0 0 3vw'
      border='2px solid blue'
    >
      <Row
        height='10%'
        width='100%'
        backgroundColor='black'
      >{tabBar()}</Row>
      <Row
        flex='1'
      >
        <Row
          flex='2'
          border='1px solid'
        >???</Row>
        <Col
          flex='1'
          border='1px solid'
        >
          <Row
            flex='1'
            justifyContent='center'
            alignItems='center'
            borderBottom='1px solid'
          >{projects[tab].title}</Row>
          <Row
            flex='2'
            p='1vw'
            borderBottom='1px solid'
          >{projects[tab].description}</Row>
          <Col
            flex='1'
            p='1vw'
            gap='1vw'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            borderBottom='1px solid'
          >
            <Row>Built Using:</Row>
            <Row>{projects[tab].technologies}</Row>
          </Col>
          <Col
            flex='1'
            p='1vw'
            justifyContent='space-evenly'
          >
            <Row
              justifyContent='space-evenly'
            >
              <Row>{tab === 'happywife' ? 'Web Link' : 'Play Store Link'}</Row>
              <Link href={projects[tab].liveLink} target='_blank'>
                <i
                  className={tab === 'happywife' ? 'fas fa-globe' : 'fas fa-play'}
                  role='link'
                />
              </Link>
            </Row>
            {projects[tab].github ? <Row
              justifyContent='space-evenly'
            >
              <Row>GitHub</Row>
              <Link href={projects[tab].github} target='_blank'>
                <i
                  className="fab fa-github"
                  role='link'
                />
              </Link>
            </Row> : null}
          </Col>
        </Col>
      </Row>
    </Col>
  );
}