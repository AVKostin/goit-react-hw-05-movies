import { Outlet } from "react-router-dom";
import {Main} from "./MainLayout.module";
import { ScrollToTop } from "react-to-top";
import AppHeader from "../AppHeader";

const MainLayout = () => (
  <div>
    <AppHeader />
    <Main>
      <Outlet />
    </Main>
    <ScrollToTop
      bgColor="#FF0000"
      strokeEmptyColor="#00FF00"
      strokeWidth={5}
      symbolSize={25}
      symbol="&#9650;"
      size={55}
    />
  </div>
);

export default MainLayout;
