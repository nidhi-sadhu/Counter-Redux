
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Component } from 'react';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'increase', amount: 5})}>Increase By 5</button>
      </div>
      <button onClick={() => dispatch({type: 'toggle'})}>{show ? 'Hide' : 'Show'}Toggle Counter</button>
    </main>
  );
};

export default Counter;


// CLASS BASED COMPONENT EXAMPLE
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler(){

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={() => this.toggleCounterHandler()}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// };

// const mapdispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   };
// };

// export default connect(mapStateToProps, mapdispatchToProps)(Counter); 
