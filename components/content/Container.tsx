import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function Container(props: Props) {
  return (
    <>
      <Wrapper>
        <ContentWrapper>{props.children}</ContentWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100dvh;
`;

const ContentWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 40px 20px;
`;
