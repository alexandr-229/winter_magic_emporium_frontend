'use client';

import React from 'react';
import { Pagination } from '@/components/large/Pagination';
import { Filters } from '@/components/large/Filters';
import { useCatalog } from './useCatalog';

const Catalog = () => {
  const {
    page,
    filters,
    setPage,
    setFilters,
  } = useCatalog();

  return (
    <div>
      <Filters filters={filters} onChangeFilters={setFilters} />
      <Pagination activePage={page} setActivePage={setPage} totalPages={12} />
    </div>
  );
};

export default Catalog;
