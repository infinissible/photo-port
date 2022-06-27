import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  // basline test
  it('renders', () => {
    render(<Nav />);
  });

  // snapshot test
  it('matches snaphot', () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', () => {
  it('inserts text into the links', () => {
    // Arrange
    const { getByTestId } = render(<Nav />);

    // Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});
