import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';
  
const contactsPath = path.resolve('db', 'contacts.json');
 console.log(contactsPath);


 const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const  listContacts = async () => {

    const data = await fs.readFile(contactsPath)

    return JSON.parse(data)
}

export const getContactById = async (id) => {
  
  const contactList = await listContacts()
  const contacts = await contactList.find((contact) => contact.id === id)
  return contacts || null

  
  
}

export const removeContact = async (id) => {

  const allContacts = await listContacts()
  const index = allContacts.findIndex(item => item.id === id)
  if (index !== -1) {
   return null
  }
  
  const [result] = allContacts.splice(index, 1);

  await updateContacts(allContacts);
  return result;
}


export const addContact = async (name, email, phone) => {

  const allContacts = await listContacts() 
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone
  }
  allContacts.push(newContact)

  await updateContacts(allContacts)
  return newContact;
}