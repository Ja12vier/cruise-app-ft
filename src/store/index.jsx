
import { configureStore } from "@reduxjs/toolkit";
import  isLoaderSlice from "./slice/isloader.slice";
import categoriesSlice from "./slice/categories.slice";
import productsSlice from "./slice/products.slice";
import buscarSlice from "./slice/buscar.slice"; 
import offCanbasSlice from "./slice/offCanbas.slice";
import cartdSlice from "./slice/cartd.slice";
import viajeCompletadoSlice from "./slice/viajeCompletado.slice";
import alertSlice from "./slice/alert.slice";

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