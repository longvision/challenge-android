export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

// Ação REQUEST lançada pelo component => ação ouvida pela Saga => chamada à API => Ação SUCCESS => Será ouvido pelo Reducer

// Action creators

export const toggleCategory = selectedCategory => ({
  type: 'TOGGLE_CATEGORY',
  payload: { selectedCategory }
});

export const nextPage = ({ limit, offset }) => ({
  type: 'NEXT_PAGE',
  payload: {
    limit,
    offset
  }
});
export const prevPage = ({ limit, offset }) => ({
  type: 'PREV_PAGE',
  payload: {
    limit,
    offset
  }
});
