import search  from "../state/search";

function SearchReducer(state=search,action){
    let temp={...state}
    if(action.type==="endSearchUser"){
        temp.searchUser=action.value
    }
    if(action.type==="closeSearch"){
        temp.isSearch=false
    }
    if(action.type==="searchGetUser"){
        temp.userData=action.data
    }
    return temp
}

export default SearchReducer