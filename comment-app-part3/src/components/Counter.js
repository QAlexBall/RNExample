import React from 'react'
import PropTypes from 'prop-types'
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => 
<div>
  <button onClick={ onIncrementAsync }>
    Increment after 1 second  
  </button>
  {' '}
  <button onClick={ onIncrement }>
    Increment
  </button>
  <button onClick={ onDecrement }>
    Decrementu
  </button>
  <hr />
  <div>
    Clicked: {value} times
  </div>
</div>

Counter.prototype = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

export default Counter 