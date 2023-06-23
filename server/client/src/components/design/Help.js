/* 
Adapted from MUI's React component library. 
*/

import React, { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ToolTip from "./ToolTip";

function Help() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <ToolTip
        message="Click for Website Information!"
        wrapObj={
          <IconButton onClick={handleOpen}>
            <HelpIcon />
          </IconButton>
        }
      />

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            How to use:
          </Typography>
          <Typography
            Typography
            id="modal-modal-description"
            sx={{ mt: 4 }}
          >
            <ul>
              Once you create an account, you can see all of Animal Crossing New
              Horizon's bugs that are available by the current time.
            </ul>
            <ul>
              If you prefer, you can change the date or time to see the bugs
              available at a specific time!
            </ul>
            <ul>
              On the favorites page, you can add bugs to your favorites, or see
              all of your already saved favorites!
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Help;
