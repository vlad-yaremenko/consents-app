import { render } from '@testing-library/react';
import Consents from './index';
import { fetchAll } from '@store/consents';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));
jest.mock('./PaginatedTable', () => () => <div data-testid="paginated-table">PaginatedTable</div>)
jest.mock('@store/consents', () => ({
  fetchAll: jest.fn()
}))

describe('Consents view', () => {
  test('should render table with pagination', () => {
    const mockedDispatch = jest.fn().mockReturnValue({ abort: jest.fn() });
    useDispatch.mockReturnValue(mockedDispatch);

    const { getByTestId } = render(<Consents />);

    expect(getByTestId('paginated-table')).toBeInTheDocument();
  });
  test('should initiate fetch data from the API', () => {
    const mockedDispatch = jest.fn().mockReturnValue({ abort: jest.fn() });
    useDispatch.mockReturnValue(mockedDispatch);
    fetchAll.mockReturnValue({ type: 'FETCH_ALL ' });

    render(<Consents />);

    expect(mockedDispatch).toHaveBeenCalledWith(fetchAll());
  });
});
