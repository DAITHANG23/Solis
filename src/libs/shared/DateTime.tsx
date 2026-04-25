import { NA } from "@/constants";
import { StyledComponentProps, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(advancedFormat);
dayjs.extend(timezone);

type DateTimeClassKey = "root" | "date" | "time";

export interface DateTimeProps extends StyledComponentProps<DateTimeClassKey> {
  value?: string | Date;
  showTime?: boolean;
  orientation?: "vertical" | "horizontal";
}

const useStyles = makeStyles<Theme, DateTimeProps>((theme) => ({
  root: ({ orientation }) => {
    return {
      display: orientation === "horizontal" ? "flex" : "inline-block",
      minWidth: orientation === "horizontal" ? 192 : "auto",
    };
  },
  date: {
    color: theme.palette.common.black,
  },
  time: {
    color: theme.palette.grey[800],
  },
}));

export const getDateTime = (date: string | number | Date) => {
  const dayjsDate = dayjs(date);

  if (!dayjsDate.isValid()) return null;

  const result = {
    date: dayjsDate.format("DD MMM YYYY"),
    time: dayjsDate.format("HH:mm (z)"),
  };
  return result;
};

export const DateTime = (props: DateTimeProps) => {
  const { value, showTime, orientation } = props;
  const classes = useStyles(props);

  if (!value) return <>{NA}</>;
  const dateTime = value ? getDateTime(value) : null;
  if (!dateTime) return null;

  return (
    <div className={classes.root}>
      <Typography className={classes.date} variant='bodyMB'>
        {dateTime.date}
      </Typography>
      {orientation === "horizontal" && <span>&nbsp;-&nbsp;</span>}
      {showTime && (
        <Typography className={classes.time} variant='caption'>
          {dateTime.time}
        </Typography>
      )}
    </div>
  );
};

DateTime.defaultProps = {
  showTime: true,
  orientation: "vertical",
} as DateTimeProps;
