import { render } from '@testing-library/react';
import AgreeToCheckboxes from './index';
import userEvent from '@testing-library/user-event';

test('should render all options', () => {
  const { getByLabelText } = render(<AgreeToCheckboxes values={[]} />);

  expect(getByLabelText('Contribute to anonymous visit statistics')).toBeInTheDocument();
  expect(getByLabelText('Be shown targeted ads')).toBeInTheDocument();
  expect(getByLabelText('Receive newsletter')).toBeInTheDocument();
});
test('should be able to select value', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(<AgreeToCheckboxes values={[]} onChange={onChange} />);

  userEvent.click(getByLabelText('Contribute to anonymous visit statistics'));
  expect(onChange).toBeCalledWith(['Contribute to anonymous visit statistics']);

  userEvent.click(getByLabelText('Be shown targeted ads'));
  expect(onChange).toBeCalledWith(['Be shown targeted ads']);
});
test('should be able to set default values', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(<AgreeToCheckboxes values={['Contribute to anonymous visit statistics', 'Be shown targeted ads']} onChange={onChange} />);

  expect(getByLabelText('Contribute to anonymous visit statistics').checked).toBe(true);
  expect(getByLabelText('Be shown targeted ads').checked).toBe(true);
});
