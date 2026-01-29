import { Breadcrumb } from "@/types";
import { Breadcrumbs, styled, Typography } from "@mui/material";
import { AppLink } from "../AppLink";

interface RenderBreadcrumbsProps {
  breadcrumbs: Array<Breadcrumb>;
}

export const StyledBreadcrumbsLink = styled(AppLink)(({ theme }) => ({
  color: theme.palette.common.link,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
}));
const RenderBreadcrumbs = (props: RenderBreadcrumbsProps) => {
  const { breadcrumbs } = props;
  return (
    <>
      <Typography variant='h5'>
        {breadcrumbs ? breadcrumbs[breadcrumbs?.length - 1]?.heading : ""}
      </Typography>
      <Breadcrumbs>
        {breadcrumbs?.map((item, index) => {
          return (
            <Typography key={item.url} variant='caption'>
              {index < breadcrumbs.length - 1 ? (
                <StyledBreadcrumbsLink href={item.url || "/"}>{item.name}</StyledBreadcrumbsLink>
              ) : (
                item.name
              )}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </>
  );
};

export default RenderBreadcrumbs;
