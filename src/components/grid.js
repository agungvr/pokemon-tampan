import styled from "styled-components";

function getWidthString(span) {
  if (!span) return;

  const width = (span / 12) * 100;
  // eslint-disable-next-line consistent-return
  return `width: ${width}%;`;
}

const Row = styled.div`
  display: ${({ display }) => display || null};
  flex-direction: ${({ direction }) => direction || null};
  align-items: ${({ align }) => align || null};
  justify-content: ${({ justify }) => justify || null};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  width: ${({ width }) => width || null};

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Column = styled.div`
  float: left;
  display: ${({ display }) => display || null};
  flex-direction: ${({ direction }) => direction || null};
  align-items: ${({ align }) => align || null};
  justify-content: ${({ justify }) => justify || null};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};

  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

  @media only screen and (min-width: 300px) {
    ${({ sm }) => sm && getWidthString(sm)}
  }

  @media only screen and (min-width: 768px) {
    ${({ md }) => md && getWidthString(md)}
  }

  @media only screen and (min-width: 992px) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`;

export { Column, Row };
