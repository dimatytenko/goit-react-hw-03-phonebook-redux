import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';

function Filter({ value, onChange }) {
  return (
    <div className="filter">
      <label className="filter__label">Find contacts by name</label>
      <input
        className="filter__input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsAction.filter(event.currentTarget.value)),
});

Filter.propTypes = {
  value: PropTypes.string,
  onhChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
