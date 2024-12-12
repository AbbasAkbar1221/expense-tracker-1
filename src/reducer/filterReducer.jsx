export default function reducer(state, action){
    switch(action.type){
      case "SET_CATEGORY":{
        const {category} = action.payload;
  
        const updatedCategories = category === "All"? state.includes("All")? [] : ["All"]  : state.includes(category)
        ? state.filter((item) => item !== category)
        : [...state.filter((item) => item !== "All"), category]; // Remove "All" if another is selected
  
    return updatedCategories.length === 0 ? ["All"] : updatedCategories;
        
      }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }