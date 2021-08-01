type ActionsType =
  ReturnType<typeof appAction.setAppError> |
  ReturnType<typeof appAction.setAppStatus>

export type StatusType = 'idle' | 'loading' | 'success' | 'unsuccessful'
let initializeState = {
  status: 'idle',
  error: '',
} as InitialStateType
const SET_STATUS = 'LAO/APP/SET_STATUS';
const SET_ERROR = 'LAO/APP/SET_ERROR'
export type InitialStateType = {
  status: StatusType
  error: string
}

export const appReducer = (state: InitialStateType = initializeState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_STATUS:
      return {...state, status: action.status}
    case SET_ERROR:
      return {...state, error: action.error}
    default:
      return state;
  }
};

export const appAction = {
  setAppStatus: (status: StatusType) => ({type: SET_STATUS, status} as const),
  setAppError: (error: string) => ({type: SET_ERROR, error} as const)
}
