import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 18px 30px;
  > div:first-child {
    margin-bottom: 11px;
  }
`;

const Row = styled.div`
  padding-top: 18px;
`;

const Block = ({ children, description, style, title }) => {
  const Wrapper = styled.div`
    margin-bottom: 35px;
    background: #ffffff;
    padding: 22px 28px 18px;
    border-radius: 2px;
    box-shadow: 0 2px 4px #e3e9f3;
    -webkit-font-smoothing: antialiased;
  `;

  const Sub = styled.div`
    padding-top: 0px;
    line-height: 18px;
    > p:first-child {
      margin-bottom: 1px;
      font-weight: 700;
      color: #333740;
      font-size: 1.8rem;
    }
    > p {
      color: #787e8f;
      font-size: 13px;
    }
  `;
  return (
    <div className="d-block">
      <Wrapper style={style}>
        <Sub>
          {!!title && (
            <p>
              {title}
            </p>
          )}
          {!!description && (
            <p>
              {description}
            </p>
          )}
        </Sub>
        {children}
      </Wrapper>
    </div>
  );
}

export {
  Container,
  Row,
  Block
};
