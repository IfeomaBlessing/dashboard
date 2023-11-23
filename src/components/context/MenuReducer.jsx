


const MenuReducer =(state, action)=>{
    switch(action.type){
        case 'toggleMenu': return{
             menuBar :!state.menuBar
        }
        case 'toggleImage': return{
            showWrap :!state.showWrap
       }
        default:
            return state;
    }
   
}

export default MenuReducer;