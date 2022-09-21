// context creation
// provider
// useContext hook

import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
let API = "https://staging.staging.b2brain.com/search/autocomplete_org_all/";

const initialState = {
  company: "B2Brain", // Company name
  slug: "credibase-inc", // Company unique ID
  logo: "https://cbandrey2static.s3.amazonaws.com/media/logos/credibase-inc_20200323155513",
  website: "b2brain.com", // Company website
  query: "css",
  hits: [],
};

const AppContext = React.createContext();
// to create provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET",
        payload: {
          hits: data.hits,
          hits: data.company,
          hits: data.slug,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(`${API}company=${state.company}$slug=${state.slug}`);
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
//custom hook creation
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
