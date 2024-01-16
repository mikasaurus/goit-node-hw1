const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");

const contactList = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  console.table(contacts);
};

const getContact = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const contact = contacts.find((item) => item.id === contactId);
  console.log(contact);
};

const addContact = async (name, email, phone) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const newContact = {
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  console.log(newContact);
};

const removeContact = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const removedContact = contacts.find(({ id }) => id !== contactId);
  console.log(removedContact);
};

module.exports = {
  contactList,
  getContact,
  addContact,
  removeContact,
};
