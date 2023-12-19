import { Router } from "express";

import { getPokemons, getPokemonById, PokemonInsertar, Pokemon_Actualizar, Pokemon_Borrar_By_Id } from "../controllers/Pokemons.controller.js";

const router = Router();

//CRUD

//C
router.post("/pokemons/PokemonInsertar", PokemonInsertar);

//RS
router.get("/pokemons/getPokemons", getPokemons);

//R
router.get("/pokemons/getPokemonById/:idRecibido", getPokemonById);

//U
router.put("/pokemons/PokemonActualizar/:idRecibido", Pokemon_Actualizar);

//D
router.delete("/pokemons/Pokemon_Borrar_By_Id/:idRecibido", Pokemon_Borrar_By_Id);

export default router;