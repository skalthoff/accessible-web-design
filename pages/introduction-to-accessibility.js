// pages/introduction-to-accessibility.js

import Layout from '../components/Layout';
import { PageContent, Title, Subtitle, Text } from '../components/styledComponents';

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
