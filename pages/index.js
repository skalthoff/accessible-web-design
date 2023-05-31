// pages/index.js

import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { PageContent, Title, Subtitle, Text, List, ListItem} from '../components/styledComponents';




const StartButton = styled.a`
  display: inline-block;
  background-color: #0070f3;
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  margin: 2rem auto;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0051a2;
  }
`;

function HomePage() {
  return (
    <Layout>
      <PageContent>
        <Title>Welcome to Accessible Web Design!</Title>
        <Text>Welcome to our website dedicated to teaching the fundamentals of accessible web design. Whether you're a beginner just starting out or a seasoned developer looking to improve your websites, you're in the right place.</Text>
        <Subtitle>What is Accessible Web Design?</Subtitle>
        <Text>Accessible web design is the practice of creating websites that are usable by as many people as possible, including those with disabilities. This includes ensuring that websites are functional and understandable with assistive technologies, such as screen readers or speech recognition software.</Text>
        <Subtitle>What You Will Learn</Subtitle>
        <Text>Here, you'll learn about key aspects of web accessibility, such as:</Text>
        <List>
          <ListItem>Color Contrast</ListItem>
          <ListItem>Keyboard Navigation</ListItem>
          <ListItem>Screen Reader Compatibility</ListItem>
          <ListItem>And much more...</ListItem>
        </List>
        <Subtitle>Ready to Start?</Subtitle>
        <Text>Are you ready to make the web a more accessible place? Click the button below to get started with your first lesson!</Text>
        <Link href="/first-lesson" passHref>
          <StartButton>Start Learning Now</StartButton>
        </Link>
      </PageContent>
    </Layout>
  );
}

export default HomePage;
