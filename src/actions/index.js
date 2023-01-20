import { ACTIONSTYPES } from "../constants/actionstypes"

export const handleSetColor = (payload) => ({
  payload,
  type: ACTIONSTYPES.SET_COLOR,
})
