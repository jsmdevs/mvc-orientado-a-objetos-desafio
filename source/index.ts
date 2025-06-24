import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  const minimist = require("minimist");
  const argvParse = minimist(argv);
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const params = { ...argvParse };

  delete params._; // minimist pone los argumentos sin flag en _
  delete params.action; // sacamos action para que quede solo params
  const contactsControllerOptions = {
    action: argvParse.action,
    params: params,
  };

  return contactsControllerOptions;
}

function main() {
  
  const contacsController = new ContactsController();
  
  const resulArgvParse = parseaParams(process.argv.slice(2)); // Se parsea los comando y argumentos ingresados por consola
  const resul = contacsController.processOptions(resulArgvParse); // Se procesan los comandos y argumentos
  console.log(resul);

}

main();
