import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/contacts/sliceFilter';
import { getFilter } from 'Redux/contacts/selectors';

export function Filter()  {
   
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);  
  
  const handleFilter = (evt) => {
     
    dispatch(setFilter(evt.target.value)) 

  }
  
  
    return (
      <label > Filter
          <input onChange={handleFilter}
          type="text"
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
   
    )
    
  } 

  Filter.propTypes = {
    handleSubmit: PropTypes.func,
}; 
