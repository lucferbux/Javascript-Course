# Motor, Call Stack y Event Loop

> Como funciona JavaScript por dentro

![Call Stack](/meta/0_10_callstack.png)

JavaScript es un lenguaje de programación mono-hilo, no bloqueante, asíncrono y concurrente. Al decir esto muchos os habréis quedado igual que estabais, es por eso que vamos a repasar cada uno de los conceptos:

1. **Mono-hilo:** Significa que usa un solo hilo para ejecutar las tareas. Pensad en un restaurante, puede tener un solo camarero para tomar la comanda y repartir la comida (mono-hilo) o varios camareros (multi-hilo), JavaScript solo tendría un hilo, por lo que va procesando los eventos **de uno a uno**.

2. **No bloqueante:** Las tareas pueden dejar paso a otras tareas para no bloquear la ejecución. Siguiendo la analogía de un camarero, si en la mesa 1 le han dado la comanda, este la transmite al chef, y en vez de esperar a que se cocine y devolverlo a la mesa 1, podrá ir a las demás mesas pidiendo las comandas hasta que el chef le indique que la comida está preparada.

3. **Asíncrono:** Introduce un concepto llamado callbacks que permite que una tarea se ejecute en segundo plano y vuelva a llamar a evento una vez que esté preparado. Al hacerlo, se añadirá en la cola de llamadas y esperará su turno de ejecución, **NO se ejecuta inmediatamente ya que todos los evnetos tienen que esperar su turno de ejecución**

``` javascript
    let comanda1 = tomarComanda(mesa1);
    chef.prepararComida(comanda, plato => realizarPedido(plato));
    let comanda2 = tomarComanda(mesa2);
```

![Asynchronous](/meta/0_11_asynchronous_callback.png)

4. **Concurrente:** JavaScript **solo puede hacer una cosa a la vez**, pero no así el navegador, es por eso por lo que hablábamos de las **WebAPIs**, (en Node serían las llamadas al sistema). No todas las ejecuciones pasan por el **Call Stack**, es por ello que existe la Task Queue (o Callback Queue), donde se almacenarán las llamadas de ejecuciones de las **WebAPIs** y el **Event Loop** que su tarea será

![Event Loop](/meta/0_12_event_loop.gif)

## Motor y Runtime

El **JavaScript runtime** se refiere donde está ejecutandose JavaScript en cada momento, esto lo acabamos de hablar, si estamos ejecutando JavaScript en un navegador chrome, [v8](https://v8.dev/) será el motor que ejecute JavaScript, si es en Safari, será [Chakra](https://developer.apple.com/documentation/javascriptcore) y así con los distintos navegadores. Si por el contrario estamos utilizando [Node](https://nodejs.org/en/), como bien indica en su página principal, ejecutaremos el motor **v8** esta vez fuera del navegador, con sus propias [APIs](https://nodejs.org/docs/latest-v15.x/api/).

Ya hemos hablado un poco de la terminología de JavaScript, pero vamos a volver a enumerar los elementos que componen su stack de ejecución para asegurar que hemos entendido su funcionamiento

### Memory Heap

Parte de la memoria donde se almacenan las variables y sus valores. Vamos a hablar de esto en el [apartado siguiente](/beginner/3_variables/README.md).

### Call Stack

Mecanismo del interprete de JavaScript que mantiene el orden de ejecución y va llamando a las diferentes funciones en cola. El funcionamiento sería el siguiente:

* Cuando un script llama a una función, el interprete lo añade al **Call Stack** y empieza a ejecutar la función.
* Cualquier llamada que se haga dentro de esta función (otros métodos, otras funciones), se irá añadiendo al Call Stack con una estrategia FIFO.
* Cuando la función terina de ejecutarse, el interprete la elimina del stack y reanuda la ejecución donde lo había dejado dentro del script.
* Si el stack sobrepasa la memoria que tenía asignada (por ejemplo cuando se hacen llamadas recursivas infinitas), se produce un **stack overflow**
### Web Api

Funcionalidad que aporta el navegador para realizar determinadas tareas como eventos DOM, peticiones http, *setTimeout*...

### Callback Queue / Task Queue

Pila donde se almacenarán las llamadas de callback de las funciones implementadas por el **web api**. Es similar al Call Stack pero para estas funciones especiales.
### Event Loop

Su trabajo principal es mirar tanto al **Call Stack** y al **task queue** y poner las funciones del **task queue** en el **Call Stack** cuando este está vacío.
