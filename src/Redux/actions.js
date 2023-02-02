
export const setContact = contact => {
  return {
    type: "CONTACT",
    payload: contact,
  };
};

export const setContacts = contacts => {
  return {
    type: "CONTACTS",
    payload: contacts,
  };
};