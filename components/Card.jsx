import Image from 'next/image';
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
    const porcentage = props.price;
    if (porcentage > 0) return 'green';
    if (porcentage < 0) return 'red';
    return 'none';
  }};
`;

const Card = ({
  id,
  symbol,
  name,
  image,
  current_price,
  price_change_percentage_24h,
}) => (
  <Link href={`/coin/${id}`} passHref>
    <Container>
      <Header>
        <Title>{name}</Title>
        <Image src={image} width={30} height={30} />
      </Header>
      <Symbol>{symbol.toUpperCase()}</Symbol>
      <Text>${current_price}</Text>
      <Porcentage price={price_change_percentage_24h}>
        {price_change_percentage_24h}%
      </Porcentage>
    </Container>
  </Link>
);

export default Card;
