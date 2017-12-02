// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Code,
  Cite,
  Deck,
  Heading,
  ListItem,
  Link,
  Quote,
  Slide,
  Image,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  white: "#ffffff",
  secondary: "#1F2022",
  skyblue: "#2980b9",
  quartenary: "#CECECE",
  blue: "#2c3e50",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  me: require('../assets/me.jpg'),
  react: require('../assets/react.png'),
  frontendpe: require('../assets/frontendpe.png'),
  things: require('../assets/things.jpg'),
  impDec: require('../assets/imp-dec.png'),
  impDecReact: require('../assets/imp-dec-react.png'),
  templating: require('../assets/templating.png'),
  multiLine: require('../assets/multi-line.png'),
  multiProperties: require('../assets/multi-properties.png'),
  cond1: require('../assets/cond1.png'),
  cond2: require('../assets/cond2.png'),
  cond3: require('../assets/cond3.png'),
  cond4: require('../assets/cond4.png'),
  loops: require('../assets/loops.png'),
  control1: require('../assets/control1.png'),
  control2: require('../assets/control2.png'),
  control3: require('../assets/control3.png'),
  subrender: require('../assets/subrender.png'),
  components: require('../assets/components.png'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="blue">
          <Image src={images.me} width="300" style={{'border-radius': '50%', border: '5px solid #fff'}} />
          <Text margin="10px 0 0" textColor="white" size={4} bold>
            Hi, I'm @paulrrdiaz
          </Text>
          <Text margin="30px 0 0" size={6}>
            <Link textColor="skyblue" href="https://twitter.com/paulrrdiaz" target="_blank">Twitter</Link>
            {" "}
            <Link textColor="skyblue" href="https://www.linkedin.com/in/paulrrdiaz/" target="_blank">Linkedin</Link>
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Image src={images.react} width="300"/>
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            React - The Good Parts
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Image src={images.frontendpe} width="150"/>
          <Heading margin="20px 0 0" size={3} lineHeight={1} textColor="white">Frontendpe</Heading>
          <Link margin="10px 0 0" size={6} textColor="white" href="https://www.facebook.com/groups/frontendpe/" target="_blank">Click me</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Image src={images.things} width="600"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="skyblue">
          <Heading size={3} textColor="white">Declarative 1<br />Imperative 0</Heading>
          <Text margin="20px 0 0" size={6} textColor="blue">Developers only describe what they want to achieve and there's no need to list all steps to make it work.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Image src={images.impDec} width="900"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Image src={images.impDecReact} width="900"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="skyblue">
          <Heading size={3} textColor="white">Open Mind</Heading>
          <Text margin="20px 0 0" size={6} textColor="blue">Logic and Templating in the same place. ;)</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Image src={images.templating} width="600"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="skyblue">
          <Heading size={3} textColor="white">Common patterns</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Multi-line</Heading>
          <Image src={images.multiLine} width="500"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Multi-properties</Heading>
          <Image src={images.multiProperties} width="600"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Conditionals</Heading>
          <Image src={images.cond1} width="600"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Conditionals</Heading>
          <Image src={images.cond2} width="600"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Conditionals</Heading>
          <Image src={images.cond3} width="700"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Conditionals</Heading>
          <Image src={images.cond4} width="800"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Loops</Heading>
          <Image src={images.loops} width="500"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Control Statements</Heading>
          <Image src={images.control1} width="500"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Control Statements</Heading>
          <Image src={images.control2} width="800"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Control Statements</Heading>
          <Image src={images.control3} width="700"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={6} textColor="white">Sub-rendering</Heading>
          <Image src={images.subrender} width="600"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="skyblue">
          <Heading size={3} textColor="white">Storybook</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="skyblue">
          <Heading size={3} textColor="white">Container and Presentational pattern</Heading>
          <Image src={images.components} width="600"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="skyblue">
          <Heading size={3} textColor="white">React 16</Heading>
          <Text size={6} textColor="blue">- Error Handling</Text>
          <Text size={6} textColor="blue">- Render Multiple elements</Text>
          <Text size={6} textColor="blue">- Render Elements outside the current Root</Text>
          <Text size={6} textColor="blue">- Define DOM attributes</Text>
          <Text size={6} textColor="blue">- Call setState with null to avoid triggering an update</Text>
        </Slide>
      </Deck>
    );
  }
}
