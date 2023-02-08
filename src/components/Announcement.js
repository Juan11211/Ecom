import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: beige;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>GET FREE SHIRT WHEN YOU FOLLLOW ON LINKEDIN</Container>;
};

export default Announcement;