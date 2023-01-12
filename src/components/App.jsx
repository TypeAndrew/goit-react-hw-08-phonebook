
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';

export const App = () => {
  
  //state = {
  const [contacts, setContacts] = useState(
     [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  );
  const [filter, setFilter] = useState('');   
  

  const handleFilter= (evt) => {
      
    setFilter(evt.target.value);
    //this.getFilterValueOn();
  }
  
  const handleDelete = (evt) => {
    
    setContacts(prevState => {
      const newContacts = prevState.filter(el => el.name !== evt.target.id);
      return   newContacts ;
    });  
   }

  const handleSubmit = (name='', number='') => {
    
   
    const id = nanoid();
    
    const userExist = contacts.find(element => element.name === name);

    if (userExist !== undefined) {
        alert(`The ${name} is already in contacts`);
    } else {
        
      
        setContacts( [...contacts, {id: id, name: name, number: number }] ); 
       
    }
 
  }

  const getFilterValueOn = (element) => {
    
   return element.name.toLowerCase().includes(filter.toLowerCase())
  }

  useEffect(()=>{
    const valueStorage = localStorage.getItem("contacts");
    if (valueStorage !== null) {
      setContacts( JSON.parse(valueStorage));
    }
    console.log('mount');
  },[])

  useEffect((valueStorage) => {
   // if (prevState !== contacts.length) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log('edit');
  ////// }
  }, [contacts])
    
 
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


 
  
