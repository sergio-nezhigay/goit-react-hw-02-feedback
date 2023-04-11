import React, { Component } from 'react';

import { Feedback, Section, Container } from 'components';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 10,
      neutral: 5,
      bad: 1,
    };
  }

  render() {
    return (
      <Section>
        <Container>
          <Feedback {...this.state} />
        </Container>
      </Section>
    );
  }
}
