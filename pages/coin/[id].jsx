import Link from 'next/link';

const Coin = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h1>coin {data.id}</h1>
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
};

export default Coin;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(`https://api.coincap.io/v2/assets/${params.id}`);
  const data = await response.json();
  return { props: data };
};
