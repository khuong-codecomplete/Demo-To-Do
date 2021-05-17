const initialState = {
    list: [],
    activeId: null,
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newList = [...state.list];
            newList.push(action.payload)

            return {
                ...state,
                list: newList
            };
        }

        case 'SET_ACTIVE_TODO': {
            const newActiveId = action.payload.id;

            return {
                ...state,
                activeId: newActiveId,
            };
        }

        default:
            return state;
    }
}

export default todoReducer;