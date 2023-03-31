import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '.';


const person = {
  name: 'Ivan',
  gender: 'Male',
  birthyear: '1992',
  height: '182',
  mass: '70',
  hair: 'brown',
  eye: 'green',
  skin: 'black',
};

test('should render', () => {
  render(<Card peopleData={person} />);
  const card = screen.getByLabelText('card');
  const tags = screen.getByLabelText('tags');
  const params = screen.getByLabelText('params');
  expect(card).toBeInTheDocument();
  expect(tags).toBeInTheDocument();
  expect(params).toBeInTheDocument();
});
