import PropTypes from 'prop-types';

export default function Notification({ text }) {
  return <p>{text}</p>;
}

Notification.prototype = {
  text: PropTypes.string.isRequired,
};
