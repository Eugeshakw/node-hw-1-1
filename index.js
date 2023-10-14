import * as contactsService from './contacts.js'
import { Command } from 'commander';

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');
// gfgf
program.parse(process.argv);

const argv = program.opts();

export const invokeAction = async ({ action, id, name, email, phone }) => {
    switch(action){
        case 'list':
            const getAllContacts = await contactsService.listContacts();
            return console.log(getAllContacts);
        case 'get':
            const getIdContacts = await contactsService.getContactById(id)
            return console.log(getIdContacts); 
        case 'add':
            const getAddContact = await contactsService.addContact(name, email, phone)   
            return console.log(getAddContact);
        case 'remove':
            const deleteContact = await contactsService.removeContact(id)   
            return console.log(deleteContact); 
               
       default: console.log('Uknown action');

    }

}


invokeAction({action: "remove", id: "nvXNE8XXiGF6-74UevVWW"});


