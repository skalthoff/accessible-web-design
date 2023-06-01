// pages/accessibility-guidelines-wcag.js

import Layout from '../components/Layout';
import { PageContent, Title, Subtitle, Text, List, ListItem} from '../components/styledComponents';

function AccessibilityGuidelinesWCAG() {
  return (
    <Layout>
      <PageContent>
        <Title>Accessibility Guidelines (WCAG)</Title>
        <Subtitle>Brief Explanation of Web Content Accessibility Guidelines</Subtitle>
        <Text>The Web Content Accessibility Guidelines (WCAG) are a set of recommendations for making web content more accessible to people with disabilities. They are published by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C), the main international standards organization for the internet.</Text>
        <Text>WCAG guidelines are organized into three levels of conformance in order to meet the needs of different groups and different situations: </Text>
        <List>
          <ListItem>Level A: The most basic web accessibility features. </ListItem>
          <ListItem>Level AA: Deals with the most common barriers for disabled users. </ListItem>
          <ListItem>Level AAA: The highest (and most complex) level of web accessibility. </ListItem>
        </List>
        <Text>Under each principle of the WCAG, there are testable success criteria. These criteria are rated at one of the three levels of conformance. The criteria at Level A are the highest priority and must be met by all web content.</Text>
      </PageContent>
    </Layout>
  );
}

export default AccessibilityGuidelinesWCAG;
