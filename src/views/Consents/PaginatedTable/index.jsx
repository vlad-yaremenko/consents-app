import { withPagination } from '@components/Pagination';
import Table from '../Table';

const Component = (props) => {
  const perPage = 2;
  return withPagination(Table, perPage)(props);
}

export default Component;
