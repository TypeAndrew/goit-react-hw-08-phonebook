
export const setContact = contact => {
  return {
    type: "contacts/contact",
    payload: contact,
  };
};