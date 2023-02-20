import { render } from '@testing-library/react';
import Footer from '../index';

describe('Footer', () => {
  it('should render successfully', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});