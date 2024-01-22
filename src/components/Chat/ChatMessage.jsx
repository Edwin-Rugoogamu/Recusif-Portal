import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ data }) => (
  <div className="message mb-2">
    <strong>{data.id}:</strong> {data.message}
  </div>
);

ChatMessage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChatMessage;
