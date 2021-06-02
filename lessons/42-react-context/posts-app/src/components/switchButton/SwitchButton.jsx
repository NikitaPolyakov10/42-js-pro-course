import React, { useCallback, useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeContext } from '../../App';

export default function SwitchButton() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);


  const toggleChecked = useCallback(() => {
    toggleDarkMode(!darkMode);
  }, [toggleDarkMode, darkMode]);

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch color="primary" checked={darkMode} onChange={toggleChecked} />}
        label={'Dark mode'}
      />
    </FormGroup>
  );
}