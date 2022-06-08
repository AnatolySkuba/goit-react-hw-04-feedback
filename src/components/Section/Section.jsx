import PropTypes from 'prop-types';

export default function Section({ children }) {
  return (
    <section>
      <h2>Please leave feedback</h2>
      {children}
    </section>
  );
}

Section.propTypes = { children: PropTypes.arrayOf(PropTypes.object) };
