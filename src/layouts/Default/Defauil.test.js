import { render } from '@testing-library/react';
import Default from './index';
import Nav from './Navigation';

jest.mock('./Navigation', () => jest.fn());

test('should render navigation', () => {
  Nav.mockImplementation(() => <div data-testid="nav">Nav</div>);
  const { getByTestId } = render(<Default><div>Test</div></Default>);

  expect(getByTestId('nav')).toBeInTheDocument();
});
test('should render routes', () => {
  Nav.mockImplementation(() => <div>Nav</div>);
  const { getByTestId } = render(<Default><div data-testid="routes">Test</div></Default>);

  expect(getByTestId('routes')).toBeInTheDocument();
});
