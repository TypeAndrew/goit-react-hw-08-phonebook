import { Contacts } from '../../components/Contacts/Contacts';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';

//import { NotFound } from '../../components/NotFound/NotFound';
//import { PostsItem } from '../../components/Posts/PostsItem';
//import { PostsLoader } from '../../components/Posts/PostsLoader';
//import { STATUS } from '../../constants/status.constants';
//import { getPostsThunk } from '../../redux/posts/posts.thunk';

const ContactsPage = () => {
 

  return (
    <>
      <h1 style={{display: 'flex',
            justifyContent: 'center',
            borderStyle: 'outset',
            borderRadius: '10%',
            color: 'white',
            background: 'dodgerblue',}}>Phonebook </h1>
            <ContactForm   />
            <h2 style={{display: 'flex', justifyContent: 'center'}}>Contacts </h2>
            <Filter />
            <ul>
            < Contacts />
            </ul>
    </>
  );
};

export default ContactsPage;