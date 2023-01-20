import React from 'react';
import { render, screen } from '@testing-library/react';
import AppContainer from './App';

test('renders app correctly', ()=> {
  render(<AppContainer/>)
})
