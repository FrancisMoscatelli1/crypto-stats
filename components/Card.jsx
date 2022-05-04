import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 200px;
  &:hover {
    color: #0070f3;
    border-color: #0070f3;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;
const Symbol = styled(Title)`
  font-weight: normal;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;

const Porcentage = styled(Text)`
  color: ${(props) => {
    const porcentage = Number(props.children.slice(0, -1));
    if (porcentage > 0) return 'green';
    if (porcentage < 0) return 'red';
    return 'none';
  }};
`;

const Card = ({ id, name, symbol, priceUsd, changePercent24Hr }) => {
  const priceUsdParsed = `$ ${priceUsd.slice(0, 7).toString()}`;
  const change24hsParsed =
    changePercent24Hr > 0
      ? `+${parseFloat(changePercent24Hr).toFixed(2)}%`
      : `${parseFloat(changePercent24Hr).toFixed(2)}%`;
  return (
    <Link href={`/coin/${id}`}>
      <Container>
        <Title>{name}</Title>
        <Symbol>{symbol}</Symbol>
        <Text>{priceUsdParsed}</Text>
        <Porcentage>{change24hsParsed}</Porcentage>
      </Container>
    </Link>
  );
};

export default Card;
