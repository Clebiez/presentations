import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from '../../../src';

import preloader from '../../../src/utils/preloader';

import createTheme from '../../../src/themes/default';

import Interactive from '../assets/interactive';

require('normalize.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
};

const gifs = {
  developer: require('../assets/developer.gif'),
  team: require('../assets/team.gif'),
  alone: require('../assets/alone.gif'),
  speak: require('../assets/speak.gif'),
  what: require('../assets/what.gif')
};

const samples = {
  blabla: `
  for (let lot in backlog.lots) {
    alert('BLA BLA BLA BLA BLA');
  }`
}

preloader(images);

const theme = createTheme({
  primary: '#00695c',
  secondary: '#0d47a1',
  red: '#b71c1c',
  orange: '#ffb74d',
  yellow: '#fff176'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="orange" bold>
            C'est quoi un développeur ?
          </Heading>
          <Text fill caps lineHeight={1} textColor="white" margin="50px 0" bold>
             Retour d'expérience
          </Text>
          <Text textSize="1.0em" textColor="white" margin="40px 0px 0px">
            @ Licences 3 Informatique, Université de Caen 2018
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Appear fid="1">
            <Heading size={1} fit caps lineHeight={1} textColor="orange" bold>
              Clément Le Biez
            </Heading>
          </Appear>
          <Appear fid="2">
            <Text size={1} fit caps lineHeight={1} textColor="white" margin="50px 0" bold>
              Lead Front End Developer
            </Text>
          </Appear>
          <Appear fid="3">
            <Text size={1} fit caps lineHeight={1} textColor="yellow" margin="50px 0" bold>
              Auto entrepreneur
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="red">
          <Appear fid="1">
            <Heading size={1} fit caps lineHeight={1} textColor="white" bold>
              DUT Informatique
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} fit caps lineHeight={1} textColor="yellow" bold>
              L3 Pro ATC Webmestre
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} fit caps lineHeight={1} textColor="white" bold>
              Master DNR2I
            </Heading>
          </Appear>
        </Slide>
        <Slide
          bgImage={gifs.developer.replace('/', '')}
          bgDarken={0.1}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="white">
              Non.
            </Heading>
          </Appear>
        </Slide>
        <Slide
          bgImage={gifs.alone.replace('/', '')}
          bgDarken={0.3}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="white">
              Non plus.
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Text fit lineHeight={1} textColor="white" caps bold>
            Un Client c'est quelqu'un qui...
          </Text>
          <List textColor="white" bold caps>
            <Appear fid="1">
              <ListItem>ne sait pas dev.</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem  textColor="yellow">te paye.</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>s'attend à un résultat.</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem  textColor="yellow">a très peur que ça foire.</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="red">
          <Text fit lineHeight={1} textColor="white" caps bold>
            Un Chef de projet c'est quelqu'un qui...
          </Text>
          <List textColor="white" bold caps>
            <Appear fid="1">
              <ListItem>ne sait pas dev.</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem  textColor="yellow">te paye.</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>s'attend à un résultat.</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem  textColor="yellow">a très peur que ça foire.</ListItem>
            </Appear>
          </List>
          <Appear fid="5">
            <Text bold caps fit textColor="white" bold>Tu as une équipe.</Text>
          </Appear>
        </Slide>
        <Slide
          bgImage={gifs.team.replace('/', '')}
          bgDarken={0.2}
        >
          <Appear fid="1">
            <Heading size={1} fit caps lineHeight={1} textColor="orange" bold>
              Tu as une équipe.
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="red">
          <Heading fit caps>
            Lancement d'un projet
          </Heading>
        </Slide>
        <Slide
          bgImage={gifs.speak.replace('/', '')}/>
        <Slide bgColor="primary">
          <Heading fit caps>
            Architecture
          </Heading>
        </Slide>
        <Slide
          bgImage={gifs.speak.replace('/', '')}/>
        <Slide bgColor="secondary">
          <Heading fit caps>
            Développement du lot 1
          </Heading>
        </Slide>
        <Slide
          bgImage={gifs.speak.replace('/', '')}/>
        <Slide bgColor="secondary">
          <Heading fit caps>
            Développement du lot 2
          </Heading>
        </Slide>
        <Slide
          bgImage={gifs.speak.replace('/', '')}/>
        <Slide bgColor="secondary">
          <Heading fit caps>
            Développement du lot 3
          </Heading>
        </Slide>
        <Slide
          bgImage={gifs.speak.replace('/', '')}/>
      </Deck>
    );
  }
}

// Différence Client VS Chef de projet V

// Architecture

// L'argent, ça rend accroc

// Pédagogie

// Déroulement du projet

// Finalité

// Résumé
