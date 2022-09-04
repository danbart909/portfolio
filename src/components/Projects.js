import React, { useState } from 'react'
import { Row, Col } from './helper'
import { Link } from '@mui/material'
import wrkr1 from '../images/wrkr1.jpg'
import wrkr2 from '../images/wrkr2.jpg'
import happywife1 from '../images/happywife1.jpg'
import turtlerace1 from '../images/turtlerace1.jpg'
import turtlerace2 from '../images/turtlerace2.jpg'
import pollbooth1 from '../images/pollbooth1.jpg'
import pollbooth2 from '../images/pollbooth2.jpg'

export default function Projects() {
  const [tab, setTab] = useState('wrkr')

  const tabs = ['wrkr', 'happywife', 'pollbooth', 'turtlerace']
  const projects = {
    wrkr: {
      title: 'wrkr',
      liveLink: 'https://play.google.com/store/apps/details?id=com.wrkr&hl=en&gl=US',
      apple: 'https://apps.apple.com/us/app/wrkrs/id1612568158',
      github: null,
      description: 'This is an app designed to connect youth with their community by meeting any needs its members may have. Homeowners, or anyone needing assistance with any work they might have, can post jobs that people can then apply to offer their assistance.',
      technologies: 'React Native, Javascript, Expo',
      img1: wrkr1,
      img2: wrkr2
    },
    happywife: {
      title: `Happy Wife Junk Service`,
      liveLink: "http://happywifejunk.com",
      apple: null,
      github: `https://github.com/danbart909/newhappywife`,
      description: 'This is the website for Happy Wife Junk Service. It has information about the areas they service, the kind of junk they remove, how they operate, pricing information, contact information, as well as a form to send the owners a direct email.',
      technologies: 'React, JavaScript, HTML, CSS',
      img1: happywife1,
      img2: null
    },
    pollbooth: {
      title: 'pollbooth',
      liveLink: "https://play.google.com/store/apps/details?id=com.pollbooth",
      apple: null,
      github: 'https://github.com/danbart909/voteapp',
      description: 'PollBooth lets users find those who represent them in the federal and state government and allows a rating once a day. You can then search and view a graph of any representative on the Data page and see how others have rated them as well.',
      technologies: 'React Native, JavaScript, Expo, postgresSQL, node.js, knex.js',
      img1: pollbooth1,
      img2: pollbooth2
    },
    turtlerace: {
      title: 'Turtle Race!',
      liveLink: 'https://play.google.com/store/apps/details?id=com.turtlerace&hl=en&gl=US',
      apple: null,
      github: null,
      description: "Very simple game to kill some time with. Start with $50 and choose 1 of 4 turtles to wager on, then press Start. If you hit 0, you'll restart with $50.",
      technologies: 'React Native, JavaScript, Expo',
      img1: turtlerace1,
      img2: turtlerace2
    }
  }

  const tabBar = () => {
    const html = []
    const style1 = {
      backgroundColor: 'black',
      color: 'white'
    }
    tabs.forEach(x => {
      html.push(
        <Row
          flex='1'
          justifyContent='center'
          alignItems='center'
          onClick={() => setTab(x)}
          border='1px solid'
          style={tab === x ? style1 : null}
        >
          {x === 'happywife' ? 'Happy Wife' :
          x === 'turtlerace' ? 'Turtle Race!' : x}
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
        backgroundColor='white'
      >{tabBar()}</Row>
      <Row
        flex='1'
      >
        <Row
          flex='2'
          alignItems='center'
          justifyContent='space-evenly'
          border='1px solid'
        >
          { tab === 'happywife' ?
          <Row
            component='img'
            src={projects[tab].img1}
            width='100%'
          /> :
          <>
            <Row
              component='img'
              src={projects[tab].img1}
              height='30vw'
            />
            <Row
              component='img'
              src={projects[tab].img2}
              height='30vw'
            />
          </> }
        </Row>
        <Col
          flex='1'
          border='1px solid'
        >
          <Row
            flex='1'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
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