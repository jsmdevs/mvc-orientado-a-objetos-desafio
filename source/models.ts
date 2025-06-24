// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
const path = require("path");
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
const jsonfile = require("jsonfile");
const find = require("lodash/find");

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  arrayContacs: Contact[] = [];

  constructor() {
    this.arrayContacs = [];
  }

  load() { // Carga los datos del archivo contacts.json
    const file = path.join(__dirname, "contacts.json");
    this.arrayContacs = jsonfile.readFileSync(file);
  }

  getAll() { // Obtiene todos los datos del array de contactos
    return this.arrayContacs;
  }

  addOne(contact) { // Añade un contacto al array
    this.arrayContacs.push(contact);
  }

  save() { // Guarda todo el array dentro del archivo contacts.json
    const file = path.join(__dirname, "contacts.json");
    jsonfile.writeFileSync(file, this.arrayContacs);
  }

  getOneById(id) { // Muestra un contacto del array buscado por el ID
    const found = find(this.arrayContacs, { id: id });
    const res = found ? found : this.getAll();
    return res;
  }
}

export { ContactsCollection };
