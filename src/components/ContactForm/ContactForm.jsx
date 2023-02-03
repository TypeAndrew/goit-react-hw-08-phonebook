import PropTypes from 'prop-types';
import { useSelector  } from "react-redux";
import { getContact } from '../../Redux/selectors';
export const ContactForm = (props) => {
    
    
    const contact = useSelector(getContact);     

    const onSubmit = (evt) =>{
        if (evt !==undefined) {
            evt.preventDefault();
        }
        const { name, number } = evt.target;
        const { handleSubmit } = props;
        handleSubmit(name,number);
    }


        return (
            <>
        
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Name</label>
            
               
                        <input 
                  
                            type="text"
                            name="name"
                            value={contact.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        
                        />
                    </div>
            
                    <div>
                        <label>Phone</label>
                        <input 
                
                            type="tel"
                            name="number"
                            value={contact.number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </div>
           
    
                    <button  type="submit">Add contact</button>
                </form>
            </>
        )
  
}    

ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
};
