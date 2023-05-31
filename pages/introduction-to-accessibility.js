// pages/introduction-to-accessibility.js

import styled from 'styled-components';
import Layout from '../components/Layout';

const PageContent = styled.div`
  padding: 1rem;
  max-width: 900px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
`;

const Subtitle = styled.h2`
  color: #666;
  font-size: 2rem;
  margin-top: 2rem;
`;

const Text = styled.p`
  color: #333;
  line-height: 1.6;
  font-size: 1.1rem;
`;

function IntroductionToAccessibility() {
  return (
    <Layout>
      <PageContent>
        <Title>Introduction to Accessibility</Title>
        <Subtitle>Definition of Web Accessibility</Subtitle>
        <Text>Web accessibility is the practice of making websites usable by as many people as possible, including those with disabilities. This includes ensuring that websites are functional and understandable with assistive technologies, such as screen readers or speech recognition software.</Text>
        <Subtitle>Importance of Accessibility</Subtitle>
        <Text>Web accessibility is important because the internet is a fundamental resource in many aspects of life: education, employment, government, commerce, health care, recreation, and more. It's essential that the web is accessible to everyone, to provide equal access and equal opportunity to people with disabilities.</Text>
      </PageContent>
    </Layout>
  );
}

export default IntroductionToAccessibility;
