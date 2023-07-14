import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditNoteIcon from "@mui/icons-material/EditNote";
import WifiIcon from "@mui/icons-material/Wifi";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Container = styled.div`
  background-color: grey.300;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const WorkSpace = styled.div`
  width: 400px;
  overflow-x: scroll;
  white-space: nowrap;
  overflow-x: hidden;
`;
const DivButton = styled(Button)`
  padding: 5px;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
interface NavBarProps {
  handleDrawerToggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ handleDrawerToggle }) => {
  const contentWrapper = React.useRef(null);
  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  return (
    <Container>
      <IconButton sx={{ zIndex: 1 }} onClick={() => handleDrawerToggle()}>
        <MenuIcon />
      </IconButton>
      <FlexDiv>
        <IconButton
          onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, -10);
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <WorkSpace ref={contentWrapper}>
          <DivButton variant="contained" sx={{ mx: 1 }}>
            Work Space -1
          </DivButton>
          <DivButton variant="contained" sx={{ mx: 1 }}>
            Work Space -2
          </DivButton>
          <DivButton variant="contained" sx={{ mx: 1 }}>
            Work Space -3
          </DivButton>
          <DivButton variant="contained" sx={{ mx: 1 }}>
            Work Space -4
          </DivButton>
        </WorkSpace>
        <IconButton
          onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, 10);
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </FlexDiv>
      <div>
        <IconButton>
          <EditNoteIcon />
        </IconButton>
        <IconButton>
          <WifiIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </Container>
  );
};

export default NavBar;
