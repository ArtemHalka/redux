// rootReducer - функция, которая меняет состояние приложения (state), в зависимости от action'а
export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, {type: "__INIT__"});
  const subscribers = [];

  return {
    // action === {type: 'INCREMENT'}
    // Отправка action'а в reducer для изменения state
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    // callback - ф-ия, которая вызывается после изменения state
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}
