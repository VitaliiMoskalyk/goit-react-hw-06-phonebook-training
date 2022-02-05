import Button from 'components/button/Button';
import * as actions from '../redux/counter/counter-actions';
import { connect } from 'react-redux';
import store from '../redux/store';

function Counter({ value, step, increment, decrement }) {
  console.log(store);
  return (
    <>
      <Button title={'Increment'} clickFn={() => increment(step)} step={step} />
      <p>{value}</p>
      <Button title={'Decrement'} clickFn={() => decrement(step)} step={step} />
    </>
  );
}
const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});
const mapDispatchToProps = dispatch => {
  return {
    increment: step => dispatch(actions.incrementAction(step)),
    decrement: step => dispatch(actions.decrementAction(step)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
