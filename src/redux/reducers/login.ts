const initialState = {
  login: '',
  password: ''
};

export const login = (state = initialState, action: { type: string; value: string }) => {
  switch (action.type) {
    case 'LOGIN': return {
      ...state,
      login: action.value
    }
    case 'PASWORD': return {
      ...state,
      password: action.value
    }
    default: return state;
  }
};
