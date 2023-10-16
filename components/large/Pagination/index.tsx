import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './styles.module.css';
import { Props } from './types';

export const Pagination = ({
  totalPages,
  activePage,
  setActivePage,
  ...props
}: Props) => {
  if (!totalPages || totalPages === 1) {
    return null;
  }

  return (
    <div {...props}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => setActivePage(event.selected)}
        pageRangeDisplayed={1}
        pageCount={totalPages}
        containerClassName={styles.wrapper}
        nextLinkClassName={styles.arrow}
        previousLinkClassName={styles.arrow}
        pageLinkClassName={styles.button}
        activeLinkClassName={styles.active}
      />
    </div>
  );
};
