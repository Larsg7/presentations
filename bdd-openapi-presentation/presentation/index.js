// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  List,
  ListItem,
  Notes,
  Slide,
  Text,
  CodePane,
  Fill,
  Layout,
  Appear,
  Table,
  TableRow,
  TableItem,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import { SPECS } from '../assets/openapi-spec';
import 'prismjs/components/prism-yaml';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#163144',
    tertiary: '#0093e5',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            BDD and OpenAPI
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Behavior driven development and the OpenAPI Spec
          </Text>
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              fontSize: '20px',
              textAlign: 'center',
              transform: 'translateX(-50%)',
            }}
          >
            Inheaden - Lars Gröber - 31/03/2019
          </div>
        </Slide>
        <Slide>
          <Heading size={2} caps>
            Goals
          </Heading>
          <List textAlign="center">
            <ListItem>Learn what BDD and OpenAPI is</ListItem>
            <ListItem>
              See BDD and OpenAPI in action <br />
              (live-demo!)
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2}>The project</Heading>
          <Text margin="30px 0 0" fit>
            Create a simple betting website/api.
          </Text>
          <Table margin="40px 0 0">
            <Appear>
              <TableRow>
                <TableItem bold textSize={this.textSize}>
                  Seeing all games
                </TableItem>
                <TableItem textSize={this.textSize}>
                  As a user I want to see all games which I can currently bet
                  on.
                </TableItem>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem bold textSize={this.textSize}>
                  Betting
                </TableItem>
                <TableItem textSize={this.textSize}>
                  As a user I want to be able to bet on one game.
                </TableItem>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem bold textSize={this.textSize}>
                  Profile
                </TableItem>
                <TableItem textSize={this.textSize}>
                  As a user I want to see my profile including my balance.
                </TableItem>
              </TableRow>
            </Appear>
          </Table>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            The problem
          </Heading>
          <Text size={2}>
            Understanding and communicating to the team what the customer wants
          </Text>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            One Solution
          </Heading>
          <Text size={2}>Behavior driven development</Text>
        </Slide>
        <Slide>
          <Heading textColor="secondary" size={3}>
            Defining Behaviors
          </Heading>
          <div
            style={{
              margin: '40px 0 0',
              textAlign: 'left',
              padding: '5px',
              border: '3px solid black',
            }}
          >
            <Text>
              <strong>Given</strong> that there are 5 games available.
            </Text>
            <Appear>
              <Text>
                <strong>When</strong> the client looks at all games.
              </Text>
            </Appear>
            <Appear>
              <Text>
                <strong>Then</strong> the client should see 5 games.
              </Text>
            </Appear>
          </div>
          <Notes>Also called Gherkin language</Notes>
        </Slide>
        <Slide>
          <Heading textColor="secondary" size={3}>
            Defining Behaviors II
          </Heading>
          <div
            style={{
              margin: '40px 0 0',
              textAlign: 'left',
              padding: '5px',
              border: '3px solid black',
            }}
          >
            <Text>
              <strong>Given</strong> that there is a game available with id 1.
            </Text>
            <Appear>
              <Text>
                <strong>And</strong> the client has a balance of 10.
              </Text>
            </Appear>
            <Appear>
              <Text>
                <strong>When</strong> the client bets 5 on game with id 1.
              </Text>
            </Appear>
            <Appear>
              <Text>
                <strong>Then</strong> the client should have a balance of 5.
              </Text>
            </Appear>
          </div>
        </Slide>
        <Slide>
          <Heading textColor="secondary" size={3}>
            Defining Behaviors III
          </Heading>
          <div
            style={{
              margin: '40px 0 0',
              textAlign: 'left',
              padding: '5px',
              border: '3px solid black',
            }}
          >
            <Text>
              <strong>Given</strong> that the client has bet 5 on game with id
              1.
            </Text>
            <Appear>
              <Text>
                <strong>And</strong> the client has a balance of 10.
              </Text>
            </Appear>
            <Appear>
              <Text>
                <strong>When</strong> the client won the bet.
              </Text>
            </Appear>
            <Appear>
              <Text>
                <strong>Then</strong> the client should have a balance of 20.
              </Text>
            </Appear>
          </div>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            OpenAPI
          </Heading>
          <Text textColor="primary">API documentation and generator</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            Get
          </Heading>
          <CodePane
            lang="yaml"
            source={SPECS[0]}
            style={{ fontSize: '20px', backgroundColor: 'white' }}
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            Post
          </Heading>
          <CodePane
            lang="yaml"
            source={SPECS[2]}
            style={{ fontSize: '20px' }}
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            Schemas
          </Heading>
          <Layout>
            <Fill>
              <CodePane
                lang="yaml"
                source={SPECS[3]}
                style={{ fontSize: '20px' }}
              />
            </Fill>
            <Fill>
              <CodePane
                lang="yaml"
                source={SPECS[4]}
                style={{ fontSize: '20px' }}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary">
          <Heading
            size={4}
            caps
            textColor="primary"
            style={{ marginBottom: '50px' }}
          >
            And more
          </Heading>
          <Text textColor="primary">Security Schemes</Text>
          <Text textColor="primary">Server Definitions</Text>
          <Text textColor="primary">...</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading>What now?</Heading>
          <Appear>
            <Text textColor="primary" size={2}>
              Convert to code!
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading>👨‍💻</Heading>
          <Heading
            size={4}
            textColor="primary"
            bold
            caps
            style={{ marginTop: '20px' }}
          >
            Demo
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>
            Workflow
          </Heading>
          <Appear>
            <Text style={{ marginTop: '100px' }}>Requirements</Text>
          </Appear>
          <Layout style={{ marginTop: '50px' }}>
            <Fill>
              <Appear>
                <Text>BDD statements</Text>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Text>OpenAPI Spec</Text>
              </Appear>
            </Fill>
          </Layout>
          <Layout style={{ marginTop: '50px' }}>
            <Fill>
              <Appear>
                <Text>Actual code</Text>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Text>Actual code</Text>
              </Appear>
            </Fill>
          </Layout>
          <Appear>
            <Text style={{ marginTop: '50px' }}>
              <strong>🎉 Profit! 🎉</strong>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading
            textColor="primary"
            style={{ fontFamily: 'Herculanum', fontSize: '150px' }}
          >
            Fin
          </Heading>
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              fontSize: '20px',
              textAlign: 'center',
              transform: 'translateX(-50%)',
              color: 'white',
            }}
          >
            Inheaden - Lars Gröber - 31/03/2019
          </div>
        </Slide>
      </Deck>
    );
  }
}
