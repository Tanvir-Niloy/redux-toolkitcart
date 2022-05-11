import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";
import {calculateTotals} from './features/cart/cartSlice';
import Modal from "./components/Modal";

function App() {

  const dispatch = useDispatch();
  const {cartItems} = useSelector((store)=>store.cart);
  const {isOpen} = useSelector((store)=>store.modal);


  useEffect(() => {
    
    dispatch(calculateTotals())
  }, [cartItems,dispatch])
  
  return(
      <main>
        {
         isOpen && <Modal/>
        }
        <Navbar/>
        <CartContainer/>
      </main>
  )
}
export default App;
