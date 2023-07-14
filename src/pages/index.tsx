import styled from "styled-components";
import PieChartExample from "../components/pieChart";

const DashboardPage = () => {
  const HeaderText = styled.h3`
    text-align: center;
    text-size: 80px;
  `;
  return (
    <div>
      <HeaderText>Dashboard</HeaderText>
      <PieChartExample />
    </div>
  );
};

export default DashboardPage;
