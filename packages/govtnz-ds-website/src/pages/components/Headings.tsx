// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '@govtnz/ds/build/css/H2.css';
import H1 from '@govtnz/ds/build/react-ts/H1.tsx';
import '@govtnz/ds/build/css/H1.css';
import H3 from '@govtnz/ds/build/react-ts/H3.tsx';
import '@govtnz/ds/build/css/H3.css';
import H4 from '@govtnz/ds/build/react-ts/H4.tsx';
import '@govtnz/ds/build/css/H4.css';
import H5 from '@govtnz/ds/build/react-ts/H5.tsx';
import '@govtnz/ds/build/css/H5.css';
import H6 from '@govtnz/ds/build/react-ts/H6.tsx';
import '@govtnz/ds/build/css/H6.css';
import CaptionXl from '@govtnz/ds/build/react-ts/CaptionXl.tsx';
import '@govtnz/ds/build/css/CaptionXl.css';
import CaptionL from '@govtnz/ds/build/react-ts/CaptionL.tsx';
import '@govtnz/ds/build/css/CaptionL.css';
import CaptionM from '@govtnz/ds/build/react-ts/CaptionM.tsx';
import '@govtnz/ds/build/css/CaptionM.css';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '@govtnz/ds/build/css/P.css';
import components__Headings from '../../commons/examples/components__Headings';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><p>Headings are structural parts of your page, ranging from 1 (most important) to 6 (least important), and are used by screen readers to understand the relationship between parts of your page. They are for headings, but they also denote the hierarchy of your page.</p>
<p>There are the conventional <Link to="/components/H1/">H1</Link>, <Link to="/components/H2/">H2</Link>, <Link to="/components/H3/">H3</Link>, <Link to="/components/H4/">H4</Link>, <Link to="/components/H5/">H5</Link>, and <Link to="/components/H6/">H6</Link>. Before headings you may optionally use Captions such as <Link to="/components/CaptionXl/">Caption XL</Link>, <Link to="/components/CaptionL/">Caption L</Link>, and <Link to="/components/CaptionM/">Caption M</Link>.</p>
<H2 {...onChangeGenerator(H2)} styleSize="large" id="how-to-use">How to use</H2>
<p>First choose a heading level based on the structure of your page, and then choose the appropriate font size for your design as the font size can be chosen independently, but do not conflate these decisions as they are strictly unrelated.</p>
<p>All these heading elements support sizes, either as classes of &quot;g-heading-xl&quot;, &quot;g-heading-l&quot;, &quot;g-heading-m&quot;, and &quot;g-heading-s&quot;, or their equivalent template variable.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Example of Headings</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Headings[0]} >
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <H1 {...onChangeGenerator(H1)} styleSize="xlarge">g-heading-xl</H1>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <H2 {...onChangeGenerator(H2)} styleSize="large">g-heading-l</H2>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <H3 {...onChangeGenerator(H3)} styleSize="medium">g-heading-m</H3>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <H4 {...onChangeGenerator(H4)} styleSize="small">g-heading-s</H4>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <H5 {...onChangeGenerator(H5)} styleSize="xsmall">g-heading-xs</H5>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <H6 {...onChangeGenerator(H6)} styleSize="xxsmall">g-heading-xxs</H6>
        </ExampleSection>
    </Example>
</ExampleContainer>

<h2 id="captions-before-headings">Captions before headings</h2>
<p>Captions can be either <em>before</em> or <em>inside</em> headings.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Example of before headings</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Headings[1]} >
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <CaptionXl {...onChangeGenerator(CaptionXl)}>caption-xl</CaptionXl>
            <H1 {...onChangeGenerator(H1)} styleSize="xlarge">g-heading-xl</H1>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <CaptionL {...onChangeGenerator(CaptionL)}>caption-l</CaptionL>
            <H2 {...onChangeGenerator(H2)} styleSize="large">g-heading-l</H2>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <CaptionM {...onChangeGenerator(CaptionM)}>caption-m</CaptionM>
            <H2 {...onChangeGenerator(H2)} styleSize="medium">g-heading-m</H2>
        </ExampleSection>
    </Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Example of caption inside heading</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Headings[2]} >
        <H1 {...onChangeGenerator(H1)} styleSize="xlarge">
            <CaptionXl {...onChangeGenerator(CaptionXl)}>caption-xl</CaptionXl>
            g-heading-xl
        </H1>
    </Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
<ExampleHeading {...onChangeGenerator(ExampleHeading)}>Example of Paragraph Sizes</ExampleHeading>
<Example {...onChangeGenerator(Example)} code={components__Headings[3]} >
    <ExampleSection {...onChangeGenerator(ExampleSection)}>
    <P styleSize="large">g-body-l</P>
    </ExampleSection>
    <ExampleSection {...onChangeGenerator(ExampleSection)}>
    <P styleSize="medium">g-body-m</P>
    </ExampleSection>
    <ExampleSection {...onChangeGenerator(ExampleSection)}>
    <P styleSize="small">g-body-s</P>
    </ExampleSection>
</Example>
</ExampleContainer>

<h2 id="credit">Credit</h2>
<p>Original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Headings"}
      id={"Headings"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
