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

const gifs = {
  developer: require('../assets/developer.gif'),
  team: require('../assets/team.gif'),
  alone: require('../assets/alone.gif'),
  speak: require('../assets/speak.gif'),
  what: require('../assets/what.gif'),
  proto: require('../assets/proto.jpg'),
  proto2: require('../assets/proto2.jpg'),
  umlUseCase: require('../assets/umlUseCase.png'),
  logoYousign: require('../assets/logoYousign.png'),
  brainstorming: require('../assets/brainstorming.jpg'),
  kanban: require('../assets/kanban.jpg'),
  kanban2: require('../assets/kanban2.png'),
};
preloader(gifs);

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
          <Text textSize="1.0em" textColor="white" margin="40px 0px 0px">
            Licences 3 Informatique, Université de Caen 2018
          </Text>
          <Text textSize="1em" textColor="yellow" margin="40px 0px 0px">
            @Clebiez - clement.lebiez@gmail.com
          </Text>
         </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fill caps lineHeight={1} textColor="orange" bold>
            Clément Le Biez
          </Heading>
          <Appear fid="1">
            <Text size={1} fill caps lineHeight={1} textColor="yellow" margin="50px 0" bold>
              Lead Front End Developer
            </Text>
          </Appear>
          <Appear fid="2">
            <Image src={gifs.logoYousign.replace('/', '')} />
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="orange" bold>
            Auto entrepreneur
          </Heading>
          <Appear fid="1">
            <Text size={1} caps lineHeight={1} textColor="yellow" margin="50px 0" bold>
              Conférencier
            </Text>
          </Appear>
          <Appear fid="1">
            <Text size={1} fill caps lineHeight={1} textColor="white" margin="50px 0" bold>
              Passionné d'entrepreunariat
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="orange" bold>
            Auto entrepreneur
          </Heading>
          <Appear fid="1">
            <Text size={1} caps lineHeight={1} textColor="yellow" margin="50px 0" bold>
              Conférencier
            </Text>
          </Appear>
          <Appear fid="1">
            <Text size={1} fill caps lineHeight={1} textColor="white" margin="50px 0" bold>
              Passionné d'entrepreunariat
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
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
        <Slide>
          <Appear fid="1">
            <Heading size={3} textColor="orange">
              40% de Développement
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={3} textColor="white">
              60% de Communication
            </Heading>
          </Appear>
        </Slide>
        <Slide
          bgImage={gifs.team.replace('/', '')}
          bgDarken={0.2}
        >
          <Appear fid="1">
            <Heading size={1} fit caps lineHeight={1} textColor="white" bold>
              Tu as une équipe.
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Text textColor="white" caps bold fill margin="30px">Project Manager</Text>
          <Text textColor="yellow" caps bold fill margin="30px">UI/UX Designer</Text>
          <Text textColor="white" caps bold fill margin="30px">Back end developer</Text>
          <Text textColor="yellow" caps bold fill margin="30px">Front end developer</Text>
          <Text textColor="white" caps bold fill margin="30px">Commerciaux</Text>
          <Text textColor="yellow" caps bold fill margin="30px">Support Tech</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit caps>
            Lancement d'un projet / d'une feature
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading fit caps>
            Préparation Technique
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit caps>
            Développement
          </Heading>
        </Slide>
        <Slide
          bgImage={gifs.developer.replace('/', '')}
        />
        <Slide bgColor="primary">
          <Heading fit caps textColor="white">
            Débriefing
          </Heading>
        </Slide>
        <Slide
          bgImage={gifs.speak.replace('/', '')}/>
        <Slide bgColor="primary">
          <Heading size={3} textColor="orange" bold caps>
            Préparation Technique
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>
                  Comprendre le besoin
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>
                  Choisir la meilleure solution
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>
                  Recherche & Développement
              </ListItem>
            </Appear>
          </List>
          <Appear fid="4">
              <Heading size={4} textColor="orange" fill bold caps>
                  Anéantir les incertitudes
              </Heading>
            </Appear>
        </Slide>
        <Slide bgColor="white">
          <Image display="block" src={gifs.umlUseCase.replace('/', '')} />>
        </Slide>
        <Slide bgImage={gifs.proto.replace('/', '')} bgDarken="0.3">
          <Appear fid="1">
            <Heading textColor="white" fit caps bold>
              Prototyping
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="white">
          <Image display="block" src={gifs.proto2.replace('/', '')} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="white" bold caps>
            Intérêt du prototype
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem caps bold textColor="yellow">Impliquer le client dès le début</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="white" caps bold>Valider le besoin</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="yellow" caps bold>Valider la vision du produit</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem caps bold textColor="white">Prémices de design</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Link textColor="white" bold caps href="google.com">Exemple d'un prototype</Link>
        </Slide>
        <Slide bgImage={gifs.brainstorming.replace('/', '')}
          bgDarken="0.4"
        >
          <Appear fid="1">
            <Heading textColor="white" fit caps bold>
              Brainstorming
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="white">
          <Image display="block" src={gifs.kanban.replace('/', '')} />
        </Slide>
        <Slide bgColor="white">
          <Image display="block" src={gifs.kanban2.replace('/', '')} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="white" bold caps>
            Intérêt du brainstorming
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="yellow" bold caps>
                  Favoriser l'emergence de solutions
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="white" bold caps>
                  Pour choisir la meilleure d'entre elle
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="yellow" bold caps>
                  Prévoir les problèmes
              </ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem textColor="white" bold caps>
                  Être prêt pour le développement
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} fit caps textColor="orange">
            Qualités d'un bon développeur
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Fait de la veille</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Sait vulgariser</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Sait se remettre en question</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem textColor="yellow" bold caps>Est passionné</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="orange" bold>
            @Clebiez - clement.lebiez@gmail.com
          </Heading>
          <Text textSize="1.0em" textColor="white" margin="40px 0px 0px">
            Licences 3 Informatique, Université de Caen 2018
          </Text>
        </Slide>
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
