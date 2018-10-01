import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const CardHealine = (props) => {
  const {
    as,
    className,
    children,
    ...other
  } = props;

  const ElementType = (as && as !== CardHealine.defaultProps.as) ? as : CardHealine.defaultProps.as;

  const cardHeadlineClasses = classNames(
    'card__headline',
    className,
  );

  return (
    <ElementType className={cardHeadlineClasses} {...other}>
      {children}
    </ElementType>
  );
};


CardHealine.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

CardHealine.defaultProps = {
  as: 'div',
  className: '',
  children: undefined,
};

export default CardHealine;
