import React from 'react';
import PropTypes from 'prop-types';

import { Row, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const capitalize = name => name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>
      <Row>
        {Object.keys(options).map(buttonName => {
          return (
            <Button
              key={buttonName}
              onClick={() => onLeaveFeedback(buttonName)}
            >
              {capitalize(buttonName)}
            </Button>
          );
        })}
      </Row>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
