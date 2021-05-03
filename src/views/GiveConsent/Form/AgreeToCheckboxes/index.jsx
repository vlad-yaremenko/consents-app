import React from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

const Component = (props) => {
  const agreeToOptions = [{
    key: 'receive-newsletter',
    text: 'Receive newsletter'
  }, {
    key: 'be-shown-targeted-ads',
    text: 'Be shown targeted ads'
  }, {
    key: 'contribute-to-anonymous-visit-statistics',
    text: 'Contribute to anonymous visit statistics'
  }];

  // TODO: improve values, get it by id
  // Classifiers API should be set
  const handleChange = (e) => {
    const { checked, value } = e.target;

    const res = [...props.values];

    if (checked) {
      res.push(value);
    } else {
      res.splice(res.indexOf(value), 1);
    }

    props.onChange(res);
  };

  return (
    <FormControl>
      <FormLabel component="legend">I agree to:</FormLabel>

      <FormGroup>
        {agreeToOptions.map(i => (
          <FormControlLabel
            key={i.key}
            control={<Checkbox checked={props.values.includes(i.text)} onChange={handleChange} value={i.text} />}
            label={i.text}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};
Component.displayName = 'AgreeToCheckboxes';

export default Component;
