import { render } from '@testing-library/react';
import Table from './index';

const data = [{
  id: 1,
  name: 'Name 1',
  email: 'email1@email.com',
  agreeTo: ['test 11', 'test 12']
}, {
  id: 2,
  name: 'Name 2',
  email: 'email2@email.com',
  agreeTo: ['test 21', 'test 22']
}];
test('should render data', () => {
  const { getByText } = render(<Table data={data} />);

  data.forEach(i => {
    expect(getByText(i.name)).toBeInTheDocument();
    expect(getByText(i.email)).toBeInTheDocument();
    expect(getByText(i.agreeTo.join(', '))).toBeInTheDocument();
  })
})
