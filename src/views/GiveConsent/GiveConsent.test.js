import { render } from '@testing-library/react';
import GiveConsent from './index';
import Form from './Form';
import { add } from '@store/consents';
import { useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));
jest.mock('./Form', () => jest.fn());
jest.mock('@store/consents', () => ({
  add: jest.fn()
}))

test('should render Form', () => {
  Form.mockImplementation(() => <div data-testid="form">Form</div>);
  const { getByTestId } = render(<GiveConsent />);

  expect(getByTestId('form')).toBeInTheDocument();
});
test('should trigger addConsents on form submit', () => {
  Form.mockImplementation((props) => (
    <button data-testid="form-btn" onClick={props.onSubmit}>Button</button>
  ));
  const mockedDispatch = jest.fn();
  useDispatch.mockReturnValue(mockedDispatch);
  add.mockReturnValue({ type: 'ADD' });

  const { getByTestId } = render(<GiveConsent />);

  userEvent.click(getByTestId('form-btn'), { button: 0 });

  expect(mockedDispatch).toHaveBeenCalledWith(add());
});
