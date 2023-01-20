import { ACTIONSTYPES } from "../constants/actionstypes"

const initialState = {
  theme: "white",
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONSTYPES.SET_COLOR:
      return { ...state, theme: action.payload }
    default:
      return state
  }
}
