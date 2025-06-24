import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const options: ContactsControllerOptions = {
    action: "get",
    params: { id: 2 },
  };

  const asd = controller.processOptions(options);

  t.deepEqual({ id: 2, name: 'Paula' }, asd)
  
});
