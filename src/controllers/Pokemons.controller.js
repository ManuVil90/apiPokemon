import { getConnection, querys, sql } from "../models/index.js";

//Create
export const PokemonInsertar = async (request, result) => {

    const { nombre } = request.body;
    const { tipo } = request.body;

    try {

        const pool = await getConnection();

        const resultPokemon = await pool
        .request()
        .input("nombreValor", sql.NVarChar , nombre)
        .input("tipoValor", sql.NVarChar, tipo)
        .query(querys.PokemonInsertar);

        return result.json(
            {
                "respuesta": "Pokemon creado correctamente",
                nombre,
                tipo
            }
        )
        
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }

}

//RS

export const getPokemons = async (request, result) => {

    try {

        const pool = await getConnection();

        const resultPokemons = await pool
        .request()
        .query(querys.getPokemons);

        result.json(resultPokemons.recordset)
  
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }

}

//Read Parametros

export const getPokemonById = async (request, result) => {

    try {

        //console.log("\n valor recibido en la URL: " + request.params.idRecibido + "\n");

        const pool = await getConnection();

        const resultPokemons = await pool
        .request()
        .input("idValor", request.params.idRecibido)
        .query(querys.getPokemonById);

        return result.json(resultPokemons.recordset[0]);
        
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }


}

//U

export const Pokemon_Actualizar = async (request, result) => {

    const { nombre } = request.body; 
    const { tipo } = request.body;
    
    // console.log('nombre: ' + nombre);
    // console.log('tipos: ' + tipos);
    // console.log('idRecibido: ' + request.params.idRecibido);
    
    
    try {
    
      const pool = await getConnection();
      const resultPokemon = await pool
        .request()
        .input("nombreValor", sql.VarChar, nombre)
        .input("tipoValor", sql.VarChar, tipo)
        .input("idValor", request.params.idRecibido)
        .query(querys.Pokemon_Actualizar);
    
        //request.params.idRecibido
    
        //console.log('resultPokemon: ' +  JSON.stringify(resultPokemon) );
    
      result.json({ 
        "respuesta": "Pokemon actualizado correctamente",
        tipo,
         nombre });
    
    } catch (error) {
    
      result.status(500);
      result.send(error.message);
      
    }
    
    }

//D

export const Pokemon_Borrar_By_Id = async (request, result) =>{

    try {

        const pool =  await getConnection();

        const resultPokemonBorrado =  await pool
            .request()
            .input("idValor", request.params.idRecibido )
            .query(querys.Pokemon_Borrar);

        if(resultPokemonBorrado.rowsAffected[0] === 0){
            return result.sendStatus(400);
        }else{
            return result.sendStatus(200);
        }
        
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }


}