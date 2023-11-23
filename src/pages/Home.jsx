import { styled } from "styled-components";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const P = styled.p`
  font-size: 2rem;
  width: 50%;
  color: var(--color-grey-500);
`;

function Home() {
  const navigate = useNavigate();
  return (
    <StyledHome>
      <Heading as="h1">Welcome</Heading>
      <P>
        You can monitor the values of many currencies between each other and
        convert the amount you want.
      </P>
      <Button onClick={() => navigate("/market")} size="large">
        Go To Market <HiArrowRight />
      </Button>
    </StyledHome>
  );
}

export default Home;
