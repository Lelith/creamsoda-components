import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardHealine from './CardHeadline';
import CardMeta from './CardMeta';
import CardButton from './CardButton';

require(`./Card.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Card = (props) => {
  const {
    as,
    className,
    children,
    ...other
  } = props;

  const cardClasses = classNames(
    'card',
    className,
  );

  const ElementType = (as && as !== Card.defaultProps.as) ? as : Card.defaultProps.as;

  return (
    <ElementType className={cardClasses} {...other}>
      {children}
    </ElementType>
  );
};

Card.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  as: 'div',
  className: '',
  children: undefined,
};

Card.Button = CardButton;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Headline = CardHealine;
Card.Meta = CardMeta;

export default Card;
