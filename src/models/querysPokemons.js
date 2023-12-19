export const querys = {

    // CRUD

    //C
    PokemonInsertar:
    "exec sp_pokemon_insertar @nombre = @nombreValor, @tipo = @tipoValor",

    //READ SIMPLE
    getPokemons: 
    "select * from view_pokemons",

    //READ PARAMETRO
    getPokemonById:
    "exec sp_pokemon_by_id @id = @idValor",


    //UPDATE
    Pokemon_Actualizar:
    "exec sp_pokemon_actualizar @nombre = @nombreValor, @tipo = @tipoValor, @id = @idValor",
    

    //D
    Pokemon_Borrar:
    "exec sp_pokemon_borrar @id = @idValor",

};