import { render } from '@testing-library/react';
import PaginatedTable from './index';
import { withPagination } from '@components/Pagination';
import Table from '../Table';

jest.mock('../Table', () => jest.fn());
jest.mock('@components/Pagination', () => ({
  withPagination: jest.fn()
}));

beforeEach(() => {
  Table.mockImplementation(() => <table data-testid="table"></table>);
  withPagination.mockImplementation((component) => (props) => <div data-testid="pagination">{component(props)}</div>);
});

afterEach(() => {
  jest.resetAllMocks();
});

test('should render table wrapped by pagination', () => {
  const { container, getByTestId } = render(<PaginatedTable />);

  expect(getByTestId('table')).toBeInTheDocument();
  expect(getByTestId('pagination')).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});

test('should set per page', () => {
  render(<PaginatedTable />);

  const PER_PAGE = 2;
  expect(withPagination).toHaveBeenCalledWith(expect.anything(), PER_PAGE);
});
