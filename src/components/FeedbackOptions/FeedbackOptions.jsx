import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const firstLetterCaps = string =>
    string[0].toUpperCase() + string.substring(1);

  return (
    <>
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          className={s.button}
          onClick={onLeaveFeedback}
        >
          {firstLetterCaps(option)}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
