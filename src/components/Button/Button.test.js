import { render } from '@testing-library/react';
import LocalButton from './index';
import { Button } from '@material-ui/core';

jest.mock('@material-ui/core', () => ({
  Button: jest.fn()
}));

test('should render material button with static props', () => {
  Button.mockImplementation(() => <div data-testid="button"></div>);
  const { getByTestId } = render(<LocalButton>Test</LocalButton>);

  expect(getByTestId('button')).toBeInTheDocument();
  expect(Button).toHaveBeenCalledWith(
    {
      children: 'Test',
      variant: 'contained',
      color: 'primary'
    },
    expect.any(Object)
  )
});
