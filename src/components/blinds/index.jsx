import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import './styles.scss';

const Blinds = props => {
  const [ blindsOff, hideBlinds ] = useState(false);
  const removeBlinds = () => hideBlinds(true);

  useEffect(() => window.addEventListener('load', removeBlinds), []);

  return (
    <div className={clsx("Blinds-container", blindsOff && "transparent")} />
  );
};

export default Blinds;
