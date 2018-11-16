export const createProject = (project) => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_PROJECT', project})
    }
}

//akcja w funkcji której zatrzymujemy wywołanie do pewnego czasu.