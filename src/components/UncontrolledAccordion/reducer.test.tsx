import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("TOGGLE-COLLAPSED", () => {
    const startState: StateType = {collapsed: false}
    const endState = reducer(startState, {type: TOGGLE_COLLAPSED})

    expect(endState.collapsed).toBeTruthy();
})