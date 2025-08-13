import { useState } from "react";

const usePaging = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const [pageSize, setPageSize] = useState(20);

  const handlePageChange = (index: number) => {
    setPageIndex(index);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPageIndex(0);
  };

  return {
    pageIndex,
    pageSize,
    handlePageChange,
    handlePageSizeChange,
  };
};

export default usePaging;
