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
  alone: require('../assets/alone.gif')
};

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
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="orange" bold>
            Papa, c'est quoi
          </Heading>
          <Heading size={2} fit caps lineHeight={1} textColor="white" margin="50px 0" bold>
             un développeur ?
          </Heading>
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
              Lead Front End Developer @ Yousign
            </Text>
          </Appear>
          <Appear fid="3">
            <Text size={1} fit caps lineHeight={1} textColor="yellow" margin="50px 0" bold>
              Freelance @ Ma boite à moi
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
        <Slide bgColor="red">
          <Heading size={1} fit caps lineHeight={1} textColor="white" bold>
            La vie après les cours.
          </Heading>

        </Slide>
        <Slide
          transition={['slide']}
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
          transition={['slide']}
          bgImage={gifs.alone.replace('/', '')}
          bgDarken={0.3}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="white">
              Non plus.
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
         
        </Slide>
      </Deck>
    );
  }
}
