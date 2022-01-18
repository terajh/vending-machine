import { createContext, useReducer, useContext } from "react";
import { billList, itemList } from "../data";

const SELECTED_ITEM = "SELECTED_ITEM";
const SELECTED_NONE_ITEM = "SELECTED_NONE_ITEM";
const RETURN_CHANGE = "RETURN_CHANGE";
const SELECTED_BILL = "SELECTED_BILL";
const FINISH_SELECT = "FINISH_SELECT";
const TOGGLE_SELECT = "TOGGLE_SELECT";

// setting initial state
const initialState = {
  update: false,
  clickedBill: -1,
  change: 0,
  bills: billList,
  items: itemList,
  log: [],
};
// create context
const StateContext = createContext(undefined);
const DispatchContext = createContext(undefined);

// create reducer
const Reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SELECT:
      return {
        ...state,
        update: !state.update,
      };
    case SELECTED_ITEM:
      return {
        ...state,
        log: [action.log, ...state.log],
        change: action.change,
        items: action.items,
      };
    case SELECTED_NONE_ITEM:
      return {
        ...state,
        log: action.log,
      };
    case RETURN_CHANGE:
      return {
        ...state,
        change: 0,
        clickedBill: -1,
        log: [action.log, ...state.log],
        bills: action.bills,
      };
    case SELECTED_BILL:
      // deep copy
      const resBills = JSON.parse(JSON.stringify(state.bills));
      resBills[action.clickedIdx].count -= 1;
      return {
        ...state,
        change: action.change,
        clickedBill: action.clickedBill,
        log: [action.log, ...state.log],
        bills: resBills,
      };
    case FINISH_SELECT:
      return {
        ...state,
        change: 0,
        clickedBill: -1,
        log: ["잔돈 반환됨", ...state.log],
        bills: action.bills,
      };
    default:
      throw new Error("Unhandled action");
  }
};
// create Provider component (High order component)
export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export function useAppState() {
  const state = useContext(StateContext);
  if (!state) throw new Error("Provider is not found");
  return state;
}
export const useAppDispatch = () => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error("Provider is not found");
  return dispatch;
};
