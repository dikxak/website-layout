import { useState, useEffect } from 'react';

const usePagination = () => {
  const [appData, setAppData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = appData.length;
  const itemsPerPage = 20;
  const totalPageCount = totalItems / itemsPerPage;

  const indexStart = (currentPage - 1) * itemsPerPage;
  const indexEnd = currentPage * itemsPerPage;

  useEffect(() => {
    const generatedData = [];
    for (let i = 1; i <= 100; i++) {
      generatedData.push(`Item-${i}`);
    }

    setAppData(generatedData);
  }, []);

  const paginationChangeHandler = () => {
    if (currentPage === totalPageCount) return;

    setCurrentPage(prevPage => ++prevPage);
  };

  const slicedAppData = appData.slice(indexStart, indexEnd);
  const indexRanges = [indexStart, indexEnd];

  return {
    paginationChangeHandler,
    slicedAppData,
    indexRanges,
  };
};

export default usePagination;
