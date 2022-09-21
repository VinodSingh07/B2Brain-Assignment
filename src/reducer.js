const reducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        hits: action.payload.hits,
        company: action.payload.company,
        slug: action.payload.slug,
      };
  }
  return state;
};
export default reducer;
