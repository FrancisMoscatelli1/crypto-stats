import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Section = styled.div`
  margin: 1%;
  width: 48%;
  box-shadow: rgba(0, 0, 0, 0.2);
`;

const Pill = styled.small`
  color: ${(props) => {
    if (props.type === 'info') return 'rgba(0, 0, 0, 0.6)';
    if (props.type === 'percentage') return 'rgba(255, 255, 255)';
    return null;
  }};
  background-color: ${(props) => {
    if (props.type === 'info') return 'rgba(0, 0, 0, 0.1)';
    if (props.type === 'percentage') {
      if (props.trend === 'up') return '#16c784';
      if (props.trend === 'down') return '#ea3943';
      return 'rgba(0, 0, 0, 0.1)';
    }
    return 'rgba(0, 0, 0, 0.1)';
  }};
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  font-size: small;
`;

const Coin = ({
  name,
  symbol,
  market_cap_rank,
  market_data,
  // price_change_percentage_24h,
}) => (
  <div>
    <Link href="/">Coins</Link>
    <Container>
      <Section>
        <h2>
          {name}
          <Pill type="info">{symbol.toUpperCase()}</Pill>
        </h2>
        <Pill type="info">Rank {market_cap_rank}</Pill>
      </Section>
      <Section>
        <p>Price</p>
        <h2>
          ${market_data.current_price.usd}
          <Pill
            type="percentage"
            trend={market_data.price_change_percentage_24h > 0 ? 'up' : 'down'}
          >
            {market_data.price_change_percentage_24h}%
          </Pill>
        </h2>
      </Section>
      <Section>
        <p>Supply</p>
        <h2>${market_data.total_supply}</h2>
      </Section>
    </Container>
  </div>
);

export default Coin;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.id}`
  );
  const data = await response.json();
  return { props: data };
};
