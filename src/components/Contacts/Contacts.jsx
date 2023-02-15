import PropTypes from 'prop-types';
import { useCallback, useEffect} from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { getContactsThunk, deleteContactsThunk } from 'Redux/contacts/thunkContacts';
import {  selectFilteredContacts } from 'Redux/contacts/selectors';

export function Contacts()  {

  const dispatch = useDispatch();
 
  const contacts = useSelector(selectFilteredContacts);
  
  

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleDelete = useCallback((evt) => {
        
    dispatch(deleteContactsThunk({ id:evt.target.id } )) 
        
  }, [dispatch]);  
    
  //replace funcion on selector
  /*const getFilterValueOn = (element) => {
      return element.name.toLowerCase().includes(filter.toLowerCase())
  }*/
  
  return (
    contacts.map(element => 
   // getFilterValueOn(element) && replace funcion on selector
    <li key={element.id}><div>{element.name}</div><div> {element.number}</div>
    <button onClick={handleDelete} id={element.id} type="button" >delete </button></li>
    )
  )
     
}
    
Contacts.propTypes = {
    element: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    }),
  onDelete: PropTypes.func,
};
