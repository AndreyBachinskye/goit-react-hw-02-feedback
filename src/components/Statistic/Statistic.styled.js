import styled from 'styled-components';

const StatisticList = styled.ul`
  list-style: none;
  text-transform: capitalize;
  i {
    margin-bottom: 5px;
  }

  & li:last-child {
    text-transform: none;
  }
`;

export default StatisticList;