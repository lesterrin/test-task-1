const initialState = {
    isLogin: false
}

const reducer = (state = initialState,action)=>{
    switch (action.type){
        case 'LOG_IN':
            return {
                isLogin: true
            }
    }
    return state;
}

export default reducer;
