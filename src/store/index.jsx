
import { configureStore } from "@reduxjs/toolkit";
import isLoaderSlice from "./slices/isloader.slice";
import categoriesSlice from "./slices/categories.slice";
import productsSlice from "./slices/products.slice";
import buscarSlice from "./slices/buscar.slice"; 
import offCanbasSlice from "./slices/offcanbas.slice";
import cartdSlice from "./slices/cartd.slice";
import viajeCompletadoSlice from "./slices/viajecompletado.slice";
import alertSlice from "./slices/alert.slice";

export default configureStore({

    reducer:{
      Loader:isLoaderSlice,
      Categories: categoriesSlice,
      Products:productsSlice,
      Busqueda: buscarSlice,
      Propiedad:offCanbasSlice,
      cartd:cartdSlice,
      ReservaCompletada:viajeCompletadoSlice,
      AlertSlice:alertSlice
    }
}
)