import { LoadingMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from '../03-examples/PokemonCard';
import { useCounter, useFetch } from '../hooks';


export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://dragonball-api.com/api/characters/${counter}`
  );
  const handleClick = () => {
    counter > 1 && decrement(1);
  };


  return (
    <>
      <h1>Información de DBS</h1>
      <hr />
      <button className="btn btn-primary mt-2" onClick={handleClick}>
        &lt;
      </button>

      <button className="btn btn-primary mt-2" onClick={() => increment(1)}>
      &gt;
      </button>
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data?.id}
          name={data?.name}
          sprites={
            data?.transformations
          }
          image={
            data?.image
          }
          descripcion={
            data?.description
          }
        />
      )}


    </>
  );
};
