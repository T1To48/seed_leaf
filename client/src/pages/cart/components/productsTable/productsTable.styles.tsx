import styled from "styled-components";

export const StyledProductsTable = styled.table`
  width: 80%;
  margin: 4rem auto 8rem;
  border-collapse: collapse;
  & thead {
    border-bottom: 1px solid ${({ theme }) => theme.color.accent};
  }

  & th:first-child {
    text-align: left;
  }
  & th:nth-child(2) {
  }
  & th:last-child {
    text-align: right;
  }
  & th {
    font-size: ${({ theme }) => theme.fontSize.small.desktop};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    padding-bottom: 1rem;
  }
  & td {
    width: 30%;
  }

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 90%;
    & th:first-child {
      padding-left: 2rem;
    }
    & th:last-child {
      text-align: center;
    }
  }
`;
