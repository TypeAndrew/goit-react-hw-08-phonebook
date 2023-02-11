
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'Redux/selectors';
//import {  deleteContacts } from 'Redux/sliceContacts';
import { setFilter } from 'Redux/sliceFilter';
import { getContactsThunk, postContactsThunk, deleteContactsThunk } from 'Redux/thunkContacts';
import { useCallback, useEffect } from 'react';
export const App = () => {
  
   
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);


  const handleFilter = (evt) => {
     
    dispatch(setFilter(evt.target.value)) 

  }
  
  const handleDelete = useCallback((evt) => {
    
    dispatch(deleteContactsThunk({ id:evt.target.id } )) 
     dispatch(getContactsThunk());
    
  },[dispatch]);  
   
  const handleSubmit = useCallback(( name  ,  number   ) => {
    
    dispatch(postContactsThunk({ name: name.value, number: number.value }))
    
     
  } ,[dispatch])

  const getFilterValueOn = (element) => {
    console.log(element);
  
      return element.name.toLowerCase().includes(filter.toLowerCase())
      
 
  
  }

    
 
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
         // justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
          listStyleType: 'none'
        }}
      >
   
        <h1>Phonebook </h1>
        <ContactForm  handleSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter handleFilter={handleFilter} filter={filter} />
        <ul>
        {contacts?.map(element =>
          getFilterValueOn(element) &&
          < Contacts key={element.id} element={element} onDelete={handleDelete}
           />)}
        </ul>
      
      </div>
      
    );

};


 
  
