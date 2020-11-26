import AppState from '../include/AppState';
import Action from '../include/Action';


const initialState: AppState = {
}

export default function appStateReducer(state: AppState = initialState, action: Action) {
  switch (action.type) {
    default: return state;
  }
}
