import React from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
/* 
Styling for tooltip from https://mui.com/material-ui/react-tooltip/ 
*/
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}));

export default function ToolTip({ message, wrapObj }) {
  return (
    <div>
      <LightTooltip title={message}>{wrapObj}</LightTooltip>
    </div>
  );
}
