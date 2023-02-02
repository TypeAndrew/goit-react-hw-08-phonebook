
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'Redux/selectors';
import { setContact, setContacts } from 'Redux/actions';

export const App = () => {
  
  ////state = {
  //const [contacts, setContacts] = useState(

  //const [filter, setFilter] = useState('');   
  const contact = useSelector(getContact)
  const dispatch = useDispatch();
  const handleFilter= (evt) => {
     dispatch(setContact({ ...contact, filter: evt.target.value })) 
    //setFilter(evt.target.value);
    //this.getFilterValueOn();//
  }
  
  const handleDelete = (evt) => {
    
    //setContacts(prevState => {
    //const newContacts = contact.contacts.filter(el => el.name !== evt.target.id);
     // const newContacts = prevState.filter(el => el.name !== evt.target.id);
      dispatch(setContacts( contact.contacts.filter(el => el.name !== evt.target.id))) 
      //return newContacts;
    };  
   

  const handleSubmit = ( name  ,  number   ) => {
    
   
    const id = nanoid();
    
    const userExist = contact.contacts.find(element => element.name === name.value);

    if (userExist !== undefined) {
        alert(`The ${name.value} is already in contacts`);
    } else {
        
      
        //setContacts( [...contacts, {id: id, name: name, number: number }] ); 
        dispatch(setContacts([...contact.contacts, {id: id, name: name.value, number: number.value }]))
    }
 
  }

  const getFilterValueOn = (element) => {
    
   return element.name.toLowerCase().includes(contact.filter.toLowerCase())
  }

  useEffect(()=>{
    const valueStorage = localStorage.getItem("contacts");
    if (valueStorage !== null) {
     // setContacts( JSON.parse(valueStorage));
      //dispatch(setContact([...contact.contacts, JSON.parse(valueStorage) ]))
    }
    console.log('mount');
  },[])

  useEffect((valueStorage) => {
   // if (prevState !== contacts.length) {
    localStorage.setItem("contacts", JSON.stringify(contact.contacts));
    console.log('edit');
  ////// }
  }, [contact.contacts])
    
 
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
        <Filter handleFilter={handleFilter} filter={contact.filter} />
        <ul>
        {contact.contacts.map(element =>
          getFilterValueOn(element) &&
          < Contacts key={element.name} element={element} onDelete={handleDelete}
           />)}
        </ul>
      
      </div>
      
    );

};


 
  
