
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, getFilter } from 'Redux/selectors';
import {  setContacts, deleteContacts } from 'Redux/sliceContacts';
import { setFilter } from 'Redux/sliceFilter';
export const App = () => {
  
   
  const contacts = useSelector(getContact)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch();
  
  const handleFilter = (evt) => {
     
    dispatch(setFilter(evt.target.value)) 

  }
  
  const handleDelete = (evt) => {
    
    dispatch(deleteContacts( evt.target.id )) 
      
  };  
   
  const handleSubmit = ( name  ,  number   ) => {
    
    dispatch(setContacts( { name: name.value, number: number.value }))
    
  }

  const getFilterValueOn = (element) => {
    
   return element.name.toLowerCase().includes(filter.toLowerCase())
  
  }

    
 
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
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
        {contacts.map(element =>
          getFilterValueOn(element) &&
          < Contacts key={element.name} element={element} onDelete={handleDelete}
           />)}
        </ul>
      
      </div>
      
    );

};


 
  
