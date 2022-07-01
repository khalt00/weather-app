import Box from "@mui/material/Box";
import HeaderLower from "Components/Header/HeaderLower/HeaderLower";
import HeaderUpper from "Components/Header/HeaderUpper/HeaderUpper";
export interface DashboardProps {}

export const Dashboard = (props: DashboardProps) => {
  return (
    <>
      <HeaderUpper />
      <HeaderLower />
    </>
  );
};
