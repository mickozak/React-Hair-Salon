const initState = {
    projects: [
        {id: 1, title: 'One', content: 'Lorem ipsum one...'},
        {id: 2, title: 'Two', content: 'Lorem ipsum two...'},
        {id: 3, title: 'Three', content: 'Lorem ipsum three...'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('Create Project Err',action.err)
            return state
        default:
            return state
    }
    return state
}

export default projectReducer