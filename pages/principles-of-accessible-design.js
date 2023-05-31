// pages/principles-of-accessible-design.js

import Layout from '../components/Layout';
import { PageContent, Title, Subtitle, Text } from '../components/styledComponents';

function PrinciplesOfAccessibleDesign() {
  return (
    <Layout>
      <PageContent>
        <Title>Principles of Accessible Design</Title>
        <Subtitle>Overview of POUR Principles</Subtitle>
        <Text>The POUR principles are a key part of the Web Content Accessibility Guidelines (WCAG), a set of guidelines that aim to make web content more accessible to people with disabilities. POUR is an acronym that stands for Perceivable, Operable, Understandable, and Robust.</Text>
        <Subtitle>Perceivable</Subtitle>
        <Text>This means that users must be able to perceive the information being presented. It can't be invisible to all of their senses. This includes providing text alternatives for non-text content, providing captions and other alternatives for multimedia, creating content that can be presented in different ways, and making it easier for users to see and hear content.</Text>
        <Subtitle>Operable</Subtitle>
        <Text>This means that users must be able to operate the interface. The interface cannot require interaction that a user cannot perform. This includes making all functionality available from a keyboard, giving users enough time to read and use content, not designing content in a way that is known to cause seizures, and providing ways to help users navigate, find content, and determine where they are.</Text>
        <Subtitle>Understandable</Subtitle>
        <Text>This means that users must be able to understand the information and the operation of the interface. The content or operation cannot be beyond their understanding. This includes making text readable and understandable, making content appear and operate in predictable ways, and helping users avoid and correct mistakes.</Text>
        <Subtitle>Robust</Subtitle>
        <Text>This means that users must be able to access the content as technologies advance. As technologies and user agents evolve, the content should remain accessible. This includes maximizing compatibility with current and future user tools.</Text>
      </PageContent>
    </Layout>
  );
}

export default PrinciplesOfAccessibleDesign;
