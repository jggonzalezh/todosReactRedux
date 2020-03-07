const editFormVisible =  ( state = null , action) => {
    switch (action.type) {
        case 'TOGGLE_EDIT_FORM':
            return action.isVisible
        default:
            return state
    }
}

export default editFormVisible