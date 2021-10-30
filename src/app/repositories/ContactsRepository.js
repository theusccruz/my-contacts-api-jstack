const { v4: uuidv4 } = require('uuid');

let contacts = [
  {
    id: uuidv4(),
    name: 'Matheus Costa',
    email: 'mail@teste.com.br',
    phone: '999338968',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'José Costa',
    email: 'mail@jose.com.br',
    phone: '999338888',
    category_id: uuidv4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(contacts.find((contact) => contact.id === id)));
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  create(contact) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuidv4(),
        ...contact,
      };

      contacts = [...contacts, newContact];
      resolve(newContact);
    });
  }

  remove(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactsRepository();
