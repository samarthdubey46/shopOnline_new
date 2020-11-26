
const init_state = []

export const profile_reducer =(state = init_state, action) => {
	switch (action.type) {
		case "GET_CUSTOMER":
			return state
			break
		case "ADD_CUSTOMER":
			return [
				...state,
				action.payload
			]
			break
		case "Test":
			return state
			break
		case "DELETE_ALL":
			return []
			break
		default:
			return state
	}
}

