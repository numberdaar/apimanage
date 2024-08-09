import { create } from 'zustand';

const useStore = create((set) => ({
  cells: {},
  history: [],
  redoStack: [],
  
  editCell: (id, value) => set((state) => {
    const prevValue = state.cells[id];
    const newCells = { ...state.cells, [id]: value };

    return {
      cells: newCells,
      history: [...state.history, { id, prevValue }],
      redoStack: [],
    };
  }),
  
  undo: () => set((state) => {
    const lastAction = state.history.pop();
    if (!lastAction) return state; // No action to undo

    const { id, prevValue } = lastAction;
    const newCells = { ...state.cells, [id]: prevValue };
    const redoStack = [...state.redoStack, { id, prevValue: state.cells[id] }];

    return {
      cells: newCells,
      history: [...state.history],
      redoStack,
    };
  }),
  
  redo: () => set((state) => {
    const redoAction = state.redoStack.pop();
    if (!redoAction) return state; // No action to redo

    const { id, prevValue } = redoAction;
    const newCells = { ...state.cells, [id]: prevValue };
    const history = [...state.history, { id, prevValue }];

    return {
      cells: newCells,
      history,
      redoStack: [...state.redoStack],
    };
  }),
}));

export default useStore;
