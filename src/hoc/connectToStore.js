import React from 'react';
import { StoreConsumer } from '../context/storeContext';

const connectToStore = (mapStateToProps, mapDispatchToProps) => {
  mapStateToProps = mapStateToProps || (() => ({ }));
  mapDispatchToProps = mapDispatchToProps || ((dispatch) => ({ dispatch }));
  return Component => (props => (
    <StoreConsumer>
      {
        ({ dispatch, ...state }) => {
          return (
            <Component
              {...props}
              {...mapStateToProps(state)}
              {...mapDispatchToProps(dispatch)}
            />
          )
        }
      }
    </StoreConsumer>
  ));
}

export { connectToStore };