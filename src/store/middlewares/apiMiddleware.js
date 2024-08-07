const apiMiddleware = (store) => (next) => async (action) => {
    if (action.type === 'API_CALL') {
      const { url, method, data, onSuccess, onError } = action.payload;
  
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          store.dispatch({ type: onSuccess, payload: result });
        } else {
          store.dispatch({ type: onError, payload: result });
        }
      } catch (error) {
        store.dispatch({ type: onError, payload: error });
      }
    } else {
      next(action);
    }
  };
  
  export default apiMiddleware;
  