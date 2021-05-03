import { render } from '@testing-library/react';
import { withPagination } from './index';
import userEvent from '@testing-library/user-event';
import { Pagination } from '@material-ui/lab';

jest.mock('@material-ui/lab', () => ({
  Pagination: jest.fn()
}));

const data = [1, 2, 3, 4, 5, 6, 7, 8];
const ContentComponent = () => <div data-testid="content">Test</div>;

beforeEach(() => {
  Pagination.mockImplementation(jest.requireActual('@material-ui/lab').Pagination);
})

describe('Pagination component', () => {
  test('should wrap component with pagination', () => {
    Pagination.mockImplementation(() => <div data-testid="pagination">Pagination</div>);
    const Component = withPagination(ContentComponent, 2);
    const { getByTestId } = render(<Component data={data} />);

    expect(getByTestId('content')).toBeInTheDocument();
    expect(getByTestId('pagination')).toBeInTheDocument();
  });
  test('should be able to set perPage', () => {
    Pagination.mockImplementation(() => <div data-testid="pagination">Pagination</div>);
    const Component4PerPage = withPagination(ContentComponent, 4);
    render(<Component4PerPage data={data} />);
    expect(Pagination).toHaveBeenCalledWith(expect.objectContaining({
      count: Math.ceil(data.length / 4)
    }), expect.any(Object));

    const Component2PerPage = withPagination(ContentComponent, 2);
    render(<Component2PerPage data={data} />);
    expect(Pagination).toHaveBeenCalledWith(expect.objectContaining({
      count: Math.ceil(data.length / 2)
    }), expect.any(Object));
  });
  test('should render pages depends on data amount', () => {
    Pagination.mockImplementation(() => <div data-testid="pagination">Pagination</div>);
    const allData = [...data];
    const Component = withPagination(ContentComponent, 2);
    render(<Component data={allData} />);
    expect(Pagination).toHaveBeenCalledWith(expect.objectContaining({
      count: Math.ceil(allData.length / 2)
    }), expect.any(Object));

    const halfData = data.slice(0, Math.ceil(data.length / 2));
    const ComponentWithHalfData = withPagination(ContentComponent, 2);
    render(<ComponentWithHalfData data={halfData} />);
    expect(Pagination).toHaveBeenCalledWith(expect.objectContaining({
      count: Math.ceil(halfData.length / 2)
    }), expect.any(Object));
  });
  test('should be able to change page by page button', () => {
    Pagination.mockImplementation((props) => (
      <button data-testid="page" onClick={() => props.onChange({}, 3)}>page</button>
    ));

    const Component = withPagination(ContentComponent, 2);
    const { getByTestId } = render(<Component data={data} />);

    userEvent.click(getByTestId('page'), { button: 0 });

    expect(Pagination).toHaveBeenCalledWith(expect.objectContaining({
      page: 3
    }), expect.any(Object));
  });
});
