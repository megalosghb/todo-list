import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

export const Filtering = ({ showAll, setShowAll }) => {
  const handleChange = () => {
    setShowAll(!showAll);
  };

  return (
    <FormControlLabel
      control={<Switch checked={showAll} onChange={handleChange} />}
      label="Show All"
    />
  );
};
