const loggedInReducer=(state=false,action)=>{
    switch(action.type){
        case 'Sign-In':
            return !state
        case 'Sign-Out':
            return !state
        default:
            return state
    }
}
export default loggedInReducer