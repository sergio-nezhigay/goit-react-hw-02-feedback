import React from 'react';
import PropTypes from 'prop-types';

import { Title, Row, Button, Info, List, Item } from './Feedback.styled';

export const Feedback = ({ good = 0, bad = 0, neutral = 0 }) => {
  console.log('🚀 ~ file: Feedback.jsx:7 ~ Feedback ~ props:', good);
  return (
    <>
      <Title>Please, leave your feedback...</Title>
      <Row>
        <Button>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button>
      </Row>
      <Title>Statistics</Title>
      <List>
        <Item>
          <Info>Good: 3</Info>
        </Item>
        <Item>
          <Info>Neutral: 2</Info>
        </Item>
        <Item>
          <Info>Bad: 3</Info>
        </Item>
      </List>
    </>
  );
};

Feedback.propTypes = {};
