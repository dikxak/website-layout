import { useState, useMemo } from 'react';

const usePagination = (appData, itemsPerPage = 20, currPage = 1) => {
  const [currentPage, setCurrentPage] = useState(currPage);

  const totalItems = appData.length;
  const totalPageCount = totalItems / itemsPerPage;

  const indexStart = (currentPage - 1) * itemsPerPage;
  const indexEnd = currentPage * itemsPerPage;

  const paginationChangeHandler = () => {
    if (currentPage === totalPageCount) return;
    setCurrentPage(prevPage => ++prevPage);
  };

  const slicedAppData = useMemo(
    () => appData.slice(indexStart, indexEnd),
    [appData, indexStart, indexEnd]
  );
  const indexRanges = [indexStart, indexEnd];

  return {
    paginationChangeHandler,
    slicedAppData: useMemo(() => slicedAppData, [slicedAppData]),
    indexRanges,
    currentPage,
    totalPageCount,
    setCurrentPage,
  };
};

export default usePagination;
