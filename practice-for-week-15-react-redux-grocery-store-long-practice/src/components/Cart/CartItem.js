import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, incrementCount, decrementCount, changeCount } from '../../store/cart'

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange= {e => {
            dispatch(changeCount(item.id, e.target.value));
          }}
        />
        <button 
          onClick={e => {
            dispatch(incrementCount(item.id));
          }}
          className="cart-item-button"
        >
          +
        </button>
        <button
          onClick={e => {
            dispatch(decrementCount(item.id));
          }}
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={e => {
            dispatch(removeItem(item.id));
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;