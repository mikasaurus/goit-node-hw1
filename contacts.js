import path from "path";
import fs from "fs/promises";

const contactsPath = path.resolve("./db/contacts.json");

export const contactList = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  console.table(contacts);
};

export const getContact = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const contact = contacts.find((item) => item.id === contactId);
  console.log(contact);
};

export const addContact = async (name, email, phone) => {
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

export const removeContact = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const removedContact = contacts.find(({ id }) => id !== contactId);
  console.log(removedContact);
};
