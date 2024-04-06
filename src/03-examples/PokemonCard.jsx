import React from 'react';

export const PokemonCard = ({ id, name, sprites = [],descripcion,image }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      <p>
        {descripcion}
      </p>
      <div>
        {
            <img className="img-fluid" 
            style={{ maxWidth: "40vh", height: "auto" }} src={image} alt={name} />
        }
        {
            sprites.map(sprite =>(
             <img className="img-fluid" 
             style={{ maxWidth: "40vh", height: "auto" }} key={sprite.id} src={sprite.image} alt={name} />   
            ))
        }
        </div>
    </section>
  );
};
