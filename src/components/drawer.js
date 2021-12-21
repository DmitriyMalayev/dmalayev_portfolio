import React, { Fragment } from "react";
import { Box } from "theme-ui";
import RcDrawer from "rc-drawer";

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className || ""}`.trim()}
        // .trim() Removes the leading and trailing white space and line terminator characters from a string.
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={"0.5s"}
        {...props}
      >
        {/* If there is a close button then we want to display the following block of code */}
        {closeButton && (
          <Box as="div" onClick={toggleHandler} sx={closeBtnStyle}>
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}>{children}</Box>
        {/* whatever we pass into our RcDrawer component it will be rendered as children */}
      </RcDrawer>
      <Box
        className="drawer__handler"
        style={{ display: "inline-block" }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </Box>
    </Fragment>
  );
}

Drawer.defaultProps = {
  width: "320px",
  placement: "left",
};
