const defaultState = [
  { id: 1, name: 'Alex', age: 19 },
  { id: 2, name: 'Steven', age: 23 },
  { id: 3, name: 'Neena', age: 25 },
  { id: 4, name: 'John', age: 40 },
  { id: 5, name: 'Lui', age: 43 },
];

const DEL_FIRST_EMPL = 'DEL_FIRST_EMPL';
const DEL_LAST_EMPL = 'DEL_LAST_EMPL';
const ADD_NEW_EMPL = 'ADD_NEW_EMPL';
const DEL_EMPL_BY_ID = 'DEL_EMPL_BY_ID';
const CHANGE_AGE = 'CHANGE_AGE';
const RESET_AGE = 'DEFAULT_AGE';

export const emplReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DEL_FIRST_EMPL:
      // let copy = [...state]
      // copy.pop() to ze samoje tolko s pop
      return state.filter((elem, index) => index !== 0);
    case DEL_LAST_EMPL:
      return state.filter((elem, index) => index !== state.length - 1);
    case DEL_EMPL_BY_ID:
      return state.filter(elem => elem.id !== action.payload);
    case CHANGE_AGE:
      return state.map(elem => ({ ...elem, age: elem.age + action.payload }));
    // let copy = [...state];
    // for (let elem in copy) {
    //   copy[elem].age += 10;
    //   return copy;
    // } to ze samoje s ciklom
    case RESET_AGE:
      return state.map(elem => ({ ...elem, age: (elem.age = action.payload) }));

    case ADD_NEW_EMPL:
      const [name, age] = action.payload.split(' ');

      const findElem = state.findIndex(elem => elem.name === name);
      if (findElem !== -1) {
        return state.map((elem, index) => {
          if (index === findElem) {
            elem.age = isNaN(+age) ? 0 : +age;
          }
          return elem;
        });
      } else {
        const newEmpl = {
          id: Date.now(),
          name,
          age: isNaN(+age) ? 0 : +age,
        };
        return [...state, newEmpl];
      }

    default:
      return state;
  }
};

export const delFirstEmplAction = () => ({ type: DEL_FIRST_EMPL });
export const delLastEmplAction = () => ({ type: DEL_LAST_EMPL });
export const addNewEmplAction = payload => ({ type: ADD_NEW_EMPL, payload });
export const delEmplByIdAction = payload => ({ type: DEL_EMPL_BY_ID, payload });
export const changeAgeAction = payload => ({ type: CHANGE_AGE, payload });
export const resetAgeAction = payload => ({ type: RESET_AGE, payload });
