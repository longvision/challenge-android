// ActionTypes
export const SET_PRODUCT_REQUEST = 'SET_PRODUCT_REQUEST';
export const SET_PRODUCT_SUCCESS = 'SET_PRODUCT_SUCCESS';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';

// Ação REQUEST lançada pelo component => ação ouvida pela Saga => chamada à API => Ação SUCCESS => Será ouvido pelo Reducer

// Action creators

export const toggleProduct = selectedProduct => ({
  type: 'TOGGLE_PRODUCT',
  payload: { selectedProduct }
});

// export const nextProducts = nextProducts => ({
//   type: 'NEXT_PRODUCTS',
//   payload: { nextProducts }
// });

// export const loadProductSuccess = data => ({
//   type: 'SET_PRODUCT_SUCCESS',
//   payload: { data }
// });
