import { render, screen } from '@testing-library/react';
import App from './App';
import Nav from './component/Nav';
test('renders learn react link', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/this is app component/i);
  expect(linkElement).toBeInTheDocument();
});
