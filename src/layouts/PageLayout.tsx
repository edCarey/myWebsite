import { Box } from "@mui/system";
import React from "react";
import theme from "../theme";

interface PageLayoutProps {
  children: React.ReactNode;
  isFixed?: Boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  isFixed = false,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: theme.globals.backgroundColor,
        minHeight: "100vh",
        width: "100%",
        paddingTop: isFixed ? "2vh" : theme.spacing(2),
        ...(isFixed && { position: "fixed" }),
      }}
    >
      {children}
    </Box>
  );
};

export default PageLayout;
