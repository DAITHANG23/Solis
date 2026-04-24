"use client";
import { GET_ALL_CONCEPTS_KEY } from "@/constants/queryKeys";
import useTransQuery from "@/features/hooks/useTransQuery";
import { conceptsEndpoints } from "@/api/enpoints";
import usePaging from "@/features/hooks/usePaging";
import { useMemo } from "react";
import { Table } from "@/libs/shared/Table/Table";
import { cleanEmptyFields, getConceptTypeLabel } from "@/utils/helper";
import { ColumnDef } from "@tanstack/react-table";
import { IConcept } from "@/types/models/concept";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import { Ratings, DateTime } from "@/libs/shared/index";
import { keepPreviousData } from "@tanstack/react-query";

const restaurantsHasLargeLogos = ["Kichi-Kichi", "Hàng cuốn", "Hutong"];

const useStyles = makeStyles(() => ({
  searchContainer: {
    width: "300px !important",
  },
  textCell: {
    textAlign: "left",
  },
}));
export const Concept = () => {
  const classes = useStyles();
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
      placeholderData: keepPreviousData,
      staleTime: Number.POSITIVE_INFINITY,
    },
  );

  const columns: ColumnDef<IConcept>[] = useMemo(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              justifyContent: "start",
              alignItems: "center",
              paddingLeft: "16px",
            }}
            className={classes.textCell}
          >
            <Image
              src={row.original.logoUrl || ""}
              alt={row.original.name || ""}
              width={restaurantsHasLargeLogos.includes(row.original.name) ? 100 : 32}
              height={32}
              style={{ borderRadius: "8px" }}
            />

            <Typography variant='bodyS'>{row.original.name}</Typography>
          </Box>
        ),
      },
      {
        id: "conceptManager",
        accessorKey: "conceptManager",
        header: "Manager",
        cell: ({ row }) => (
          <Box
            sx={{ display: "flex", gap: "8px", justifyContent: "start", alignItems: "center" }}
            className={classes.textCell}
          >
            {/* <Image
              src={row.original.conceptManager?.avatarUrl || ""}
              alt={row.original.conceptManager?.fullName || ""}
              width={24}
              height={24}
            /> */}
            <Avatar>{row.original.conceptManager?.fullName}</Avatar>
            <Typography variant='bodySM'>{row.original.conceptManager?.fullName}</Typography>
          </Box>
        ),
      },
      {
        id: "totalProfit",
        accessorKey: "totalProfit",
        header: "Profit",
        size: 75,
      },
      {
        id: "type",
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => (
          <Typography variant='bodySM'>{getConceptTypeLabel(row.original.type)}</Typography>
        ),
        size: 100,
      },
      {
        id: "avgRatings",
        accessorKey: "avgRatings",
        header: "Rating",
        cell: ({ row }) => <Ratings rating={row.original.avgRatings} />,
        size: 75,
      },
      {
        id: "createdAt",
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => <DateTime value={row.original.createdAt} showTime />,
        size: 75,
      },
      {
        id: "updatedAt",
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: ({ row }) => <DateTime value={row.original.updatedAt} showTime />,
        size: 75,
      },
    ],
    [classes],
  );
  return (
    <div style={{ padding: "16px" }}>
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
