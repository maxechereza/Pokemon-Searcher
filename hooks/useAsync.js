import { useReducer, useCallback } from "react";
import { statusEnum } from "../shared/statusEnum";
import { useSafeDispatch } from "./useSafeDispatch";

function asyncReducer(state, action) {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        data: null,
        status: statusEnum.idle,
        error: null,
      };
    case "pending":
      return {
        ...state,
        data: null,
        status: statusEnum.pending,
        error: null,
      };
    case "resolved":
      return {
        ...state,
        data: action.payload,
        status: statusEnum.resolved,
        error: null,
      };
    case "rejected":
      return {
        ...state,
        data: null,
        status: statusEnum.rejected,
        error: action.payload.message,
      };
    default:
      throw new Error(
        `The action entered does not match against any valid option: ${action.type}`
      );
  }
}

export function useAsync(initialState) {
  const [state, unsafeDispatch] = useReducer(asyncReducer, {
    data: null,
    status: statusEnum.idle,
    error: null,
    ...initialState,
  });

  //avoid executing dispatch if the component gets unmounted
  const dispatch = useSafeDispatch(unsafeDispatch);

  const run = useCallback(
    (promise) => {
      dispatch({ type: statusEnum.pending });
      promise.then(
        (data) => {
          dispatch({ type: statusEnum.resolved, payload: data });
        },
        (error) => {
          dispatch({ type: statusEnum.rejected, payload: error });
        }
      );
    },
    [dispatch]
  );

  return { ...state, run };
}
