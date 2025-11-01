import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/ `);
      console.log(data.results);
      setPokemons(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Box>
      {pokemons.map((pokemon) => {
        return (
          <Box
            display={"flex"}
            sx={{
              borderRadius: "10px",
              backgroundColor: "#9edef9",
              padding: "20px  50px ",
              margin: "30px 30px",
              width: "7%",
            }}
          >
            <img src={pokemon.url} />
            <Typography sx={{ marginLeft: "30px" }}>{pokemon.name}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
export default App;
