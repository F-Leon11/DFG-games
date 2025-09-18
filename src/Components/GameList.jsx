import React from "react";
import { useCart } from "../Context/CartContext.jsx";
import "../Styles/GameList.css"; // Importamos los estilos

const games = [
  {
    id: 1,
    title: "Fortnite",
    image:
      "https://cdn2.unrealengine.com/fortnite-na-central-server-region-3-1920x1080-8e53d35d7d26.jpg",
    price: "Free",
  },
  {
    id: 2,
    title: "Rocket League",
    image:
      "https://media.graphassets.com/resize=fit:clip,height:720,width:1280/output=format:webp/3jpQ4ljjRcGCAfNdzVUG",
    price: "$19.99",
  },
  {
    id: 3,
    title: "Assassin's Creed Valhalla",
    image:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ZAlQrGYxXi8Bo8PuhJd5g/206c57ecb27e58b4555089c6c80d3db5/ACV_meta.png",
    price: "$59.99",
  },
  {
    id: 4,
    title: "Elden Ring",
    image:
      "https://assets.xboxservices.com/assets/1d/5b/1d5bc84f-2135-4e2f-8ca6-bb000d97db7f.jpg?n=Elden-Ring_GLP-Poster-Image-1084_1920x1080.jpg",
    price: "$59.99",
  },
  {
    id: 5,
    title: "God of War Ragnarök",
    image:
      "https://s.13.cl/sites/default/files/styles/manualcrop_850x475/public/esports/articulo/field-imagen/2021-09/portadagow.jpg.jpeg?itok=sOWPASiy",
    price: "$69.99",
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    image:
      "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/12aaa3b137a18e180bb92682e8f81674dcb7451f-1920x1080.jpg",
    price: "$49.99",
  },
];

const GameList = () => {
  const { addToCart } = useCart();

  return (
    <div className="game-list">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <img src={game.image} alt={game.title} className="game-image" />

          <div className="game-info">
            <h2>{game.title}</h2>

            {/* Badge verde si es gratis */}
            {game.price === "Free" ? (
              <p className="price free">{game.price}</p>
            ) : (
              <p className="price">{game.price}</p>
            )}

            <button
              className="add-button"
              onClick={() =>
                addToCart({
                  id: game.id,
                  title: game.title,
                  price: game.price,
                  quantity: 1,
                  image: game.image,
                })
              }
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
