// pages/index.js

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
        <Text>By the end of this course, you'll have a solid understanding of the fundamentals of accessible web design and how to apply them to your own websites.</Text>
      </PageContent>
    </Layout>
  );
}

export default HomePage;
