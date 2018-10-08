import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Button } from '../lib';

const divStyle = {
  padding: '15px',
};

storiesOf('Achtbit/Atoms/Button', module)
  .add(
    'primary',
    withInfo(`
      <Button />
    `)(() => (
      <ThemeProvider theme="achtbit">
        <div className="base" style={divStyle}>
          <Button
            label="Primary Button"
            onClick={action('clicked')}
          />
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'secondary',
    withInfo(`
      <Button type="secondary"/>
    `)(() => (
      <ThemeProvider theme="achtbit">
        <div className="base" style={divStyle}>
          <Button
            label="Secondary Button"
            type="secondary"
            onClick={action('clicked')}
          />
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'call to action',
    withInfo(`
      <Button type="cta" />
    `)(() => (
      <ThemeProvider theme="achtbit">
        <div className="base" style={divStyle}>
          <Button
            type="cta"
            label="Action"
            onClick={action('clicked')}
          />
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'disabled',
    withInfo(`
      <Button />
    `)(() => (
      <ThemeProvider theme="achtbit">
        <div className="base" style={divStyle}>
          <Button
            label="disabled"
            disabled
            onClick={action('clicked')}
          />
        </div>
      </ThemeProvider>
    )),
  );
