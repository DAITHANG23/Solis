"use client";
import { GET_ALL_CONCEPTS_KEY } from "@/constants/queryKeys";
import useTransQuery from "@/features/hooks/useTransQuery";
import { conceptsEndpoints } from "@/api/enpoints";
import usePaging from "@/features/hooks/usePaging";
import { useMemo } from "react";
import { Table } from "@/libs/shared/Table/Table";
import { cleanEmptyFields } from "@/utils/helper";

export const Concept = () => {
  const { pageIndex, pageSize, handlePageChange, handlePageSizeChange } = usePaging();

  const params = useMemo(() => {
    return {
      pageIndex,
      pageSize,
    };
  }, [pageSize, pageIndex]);

  const paramsConfig = cleanEmptyFields(params);
  const {
    data: conceptList,
    isLoading: isLoadingStudentsList,
    isFetching: isFetchingStudents,
  } = useTransQuery(
    [GET_ALL_CONCEPTS_KEY, pageIndex, pageSize],
    () => conceptsEndpoints.getConcepts(paramsConfig),
    {
      //   placeholderData: keepPreviousData,
      staleTime: 5 * 60 * 1000,
    },
  );

  console.log("conceptList:", conceptList?.data.data.data);
  const columns = [
    {
      id: "name",
      accessorKey: "name",
      header: "Name",
    },
    // {
    //   id: "description",
    //   accessorKey: "description",
    //   header: "Description",
    // },
    {
      id: "createdAt",
      accessorKey: "createdAt",
      header: "Created At",
    },
    {
      id: "updatedAt",
      accessorKey: "updatedAt",
      header: "Updated At",
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        data={conceptList?.data.data.data || []}
        pageSize={pageSize}
        pageIndex={pageIndex}
        loading={isLoadingStudentsList || isFetchingStudents}
        totalItems={conceptList?.data.results || 0}
        onChangePage={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        //   setSorting={setSorting}
        //   sorting={sorting}
        enabledSortBy
      />
    </div>
  );
};
