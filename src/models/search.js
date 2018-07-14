export default {
  //Generate default state props for HOC to handle
  defaultState: { title: "" },

   //Generate validation on props for HOC to handle 
   /* No needed but HOC looking for validateSearchState and match with getSearchState
      so to know correctly on which parrent component should send ready state*/
  validateSearchState: () => {
    

  }
};
