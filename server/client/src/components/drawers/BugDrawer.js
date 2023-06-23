/* 
Adapted from MUI's API documentation
*/
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import ClockBanner from "../design/ClockBanner"

const Expand = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function BugDrawer({ onSelectHour, onSelectMonth, onSubmit }) {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActions disableSpacing>
        <Typography>Bugs</Typography>
        <Expand
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </Expand>
      </CardActions>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <List
            component="div"
            disablePadding
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Currently Available" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
            <ClockBanner/>
            </ListItemButton>
            {/* <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Select By Time" />
            </ListItemButton> */}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BugDrawer;
