import React, { useState } from 'react';
import { Pagination } from '@material-ui/lab';

export const withPagination = (WrappedComponent, perPage) => {
  const Component = (props) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState(props.data || []);
    const [pages, setPages] = useState(Math.floor(props.data.length / perPage));

    React.useEffect(() => {
      setData(props.data.slice((page - 1) * perPage).slice(0, perPage));
      setPages(Math.ceil(props.data.length / perPage));
    }, [props.data, page]);

    return (
      <>
        <WrappedComponent {...props} data={data} />

        <Pagination count={pages} page={page} onChange={(e, page) => setPage(page)} />
      </>
    );
  };
  Component.displayName = `WithPagination${WrappedComponent.displayName}`;

  return Component;
}
