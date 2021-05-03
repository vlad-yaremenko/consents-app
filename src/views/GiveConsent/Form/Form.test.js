import { render, act } from '@testing-library/react';
import Form from './index';
import { Button } from '@components';
import userEvent from '@testing-library/user-event';

jest.mock('@components', () => ({
  Button: jest.fn()
}));

beforeEach(() => {
  Button.mockImplementation((props) => <button {...props}></button>);
});

test('should should require all values to be set', () => {
  const submit = jest.fn().mockRejectedValue();

  const { getByText } = render(<Form onSubmit={submit} />);

  act(() => {
    userEvent.click(getByText('Give consent'))
  });

  expect(submit).toHaveBeenCalledTimes(0);
});
test('should trigger submit with valid form', async () => {
  const submit = jest.fn().mockRejectedValue();

  const { getByPlaceholderText, getByText, getByLabelText } = render(<Form onSubmit={submit} />);

  await userEvent.type(getByPlaceholderText('Name'), 'User name');
  await userEvent.type(getByPlaceholderText('Email address'), 'email@email.com');
  await userEvent.click(getByLabelText('Contribute to anonymous visit statistics'));

  act(() => {
    userEvent.click(getByText('Give consent'))
  });

  expect(submit).toHaveBeenCalledWith({
    name: 'User name',
    email: 'email@email.com',
    agreeTo: ['Contribute to anonymous visit statistics']
  });
});
