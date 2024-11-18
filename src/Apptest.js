import { render, screen } from '@testing-library/react';
import App from './app';  // Corrected the import to match the filename

test('renders form title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Simple Form/i);  // Match the form title
  expect(titleElement).toBeInTheDocument();
});
