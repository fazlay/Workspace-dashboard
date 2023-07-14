// import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, Drawer, Paper } from "@mui/material";
import styled from "styled-components";
import NavBar from "../components/navbar";
import { useState } from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import Sidebar from "../components/sidebar";
const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

// const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
`;

const Dashboard: React.FC<any> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const TabBar = styled.div`
    background-color: #5a5a5a;
    display: flex;
    border-radius: 5px 5px 0px 0px;
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
  `;

  return (
    <Root>
      <CssBaseline />
      {/* <GlobalStyle /> */}
      <Drawer
        open={drawerOpen}
        hideBackdrop
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "50px",
            borderRadius: "5px",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "grey.300",
            height: "100%",
          }}
        >
          <TabBar>
            <span>Select Element</span>
            <IconButton
              sx={{ position: "absolute", right: "0px", top: "0px" }}
              onClick={() => handleDrawerToggle()}
            >
              <CancelIcon />
            </IconButton>
          </TabBar>
          <Sidebar />
        </Box>
      </Drawer>
      <AppContent>
        <NavBar handleDrawerToggle={handleDrawerToggle} />

        <MainContent>
          {children}
          <Outlet />
        </MainContent>
        {/* <Footer /> */}
      </AppContent>
    </Root>
  );
};

export default Dashboard;
