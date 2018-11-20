export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Mic',
            authorLastName: 'Koz',
            authorId: 12345,
            createAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}

//akcja w funkcji której zatrzymujemy wywołanie do pewnego czasu.