import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const options = ["Подмосковье", "Moсква"];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          fontFamily: "Inter",
          color: "#1C1C1C",
          width: '150px'
        }}
        ref={anchorRef}
      >
        <Button
          style={{
            borderRadius: "20px",
            border: "none",
            height: "45px",
            fontFamily: "Inter",
            color: "#3E3E3E",
            fontWeight: "700",
            outline:'none',
            width: '150px'
          }}
          onClick={handleClick}
        >
          {options[selectedIndex]}
        </Button>
        <Button
          // size="small"
          style={{ border: "none", borderRadius: "35px" }}
          aria-controls={open ? "split-button-menu" : undefined}
          // aria-expanded={open ? "true" : undefined}
          // aria-label="select merge strategy"
          // aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      style={{
                       color: '#3E3E3E',fontFamily:'Proxima',fontSize: '1.25vw',fontWeight:'400',
                      }}
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
