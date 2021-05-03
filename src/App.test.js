import { render } from '@testing-library/react';
import App from './App';
import DefaultLayout from '@layouts/Default';
import Routes from './Routes';

jest.mock('@layouts/Default', () => {
  return jest.fn()
});
jest.mock('./Routes', () => {
  return jest.fn();
})

beforeEach(() => {
  DefaultLayout.mockImplementation(({ children }) => <div data-testid="default-layout">{children}</div>);
  Routes.mockImplementation(() => <p data-testid="routes">Routes</p>);
});

afterEach(() => {
  jest.resetAllMocks();
});

test('should render DefaultLayout with routes', () => {
  const { container, getByTestId } = render(<App />);

  expect(getByTestId('default-layout')).toBeInTheDocument();
  expect(getByTestId('routes')).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
