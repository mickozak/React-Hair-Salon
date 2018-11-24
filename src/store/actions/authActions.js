export const signIn = (credentials) => {
    return (dispatch, getstate, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR',err})
        })
    }
}

//musimy przekazac email i pass

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
     const firebase = getFirebase()

     firebase.auth().signOut().then(()=>{
         dispatch({type: 'SIGNOUT_SUCCESS'})
     })
    }
}