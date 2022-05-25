# Bucles e Iteración

> Iteración en JavaScript

Hay situaciones en las que es necesario que un bloque de instrucciones se ejecute una cantidad determinada de veces, bien sea para iterar entre múltiples elementos, crear nuevas secuencias...

Para eso existen declaraciones de bucle. En JavaScript existen varios mecanismos para implementar la repetición de código, variando donde se coloca la evaluación.

![Example of Loops](/meta/0_13_loops.png)

## For

El bucle **for** es muy parecido a los bucles en **C** o **Java**. Un bucle for se repite hasta que se alcanza una evaluación en **false**. La sintaxis principal es:

```pseudocode
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
```

El flujo que sigue es el siguiente:

1. La expresión inicial **initialExpression** se ejecuta si existe. Esta expresión inicia un contador, además esta expresión puede declarar variables.
2. La expresión **conditionExpression** es evaluada, si el valor es **true** se ejecuta el bloque de código, si no, el bucle termina.
3. El bloque **statement** se ejecuta.
4. Si existe, se ejecuta **incrementedExpression**
5. Se vuelve al **paso 2**

```javascript
for (let i = 0; i < 10; i++) {
    if (i%2 == 0) {
      console.log("Es par")
    } else {
        console.log("No es par")
    }
}
```

### For In

Existe otro tipo de bucle que itera sobre una propiedad enumerable o las claves de un objetos, esta sintaxis es muy útil para recorrer iterables.

```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
```

## While

Mediante el bucle **while** podemos repetir un conjunto de instrucciones mientras se cumpla una condición, la sintaxis es muy sencilla:

```pseudocode
while (condition)
  statement
```

En el momento en que la condición es **false** el bucle se interrumpe dejando de ejecutar la instrucción.
**Hay que tener mucho cuidado de no crear bucles infinitos si se está creando un contador**

```javascript
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(x);
}

// Bucle infinito cuidado ya que la n vale 2
while (n > 2) {
  n++;
  x += n;
  console.log(x);
}
```

## Do...While

El bucle **do..while** es parecido al anterior, solo que primero ejecuta el código y luego evalúa la condición. Es muy útil si queremos asegurarnos de que la expresión se ejecute al menos una vez.

```pseudocode
do
  statement
while (condition);
```

```javascript
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## Switch

Una sentencia `switch` puede sustituir a múltiples comprobaciones `if`. Ofrece una forma más descriptiva de comparar un valor con múltiples variantes.

```pseudocode
switch (condition)
 case 1
  break
 case 2
  break
 default
```

El funcionamiento es el siguiente, evaluará la condición que presentemos dentro de la *keyword* `switch` e irá comprobando con todos los casos de forma descendente hasta dar con el correcto o ejecutar el `default`.

```javascript
let i = 3;
switch (a) {
  case 2:
    console.log( 'Too small' );
    break;
  case 3:
    console.log( 'Exactly!' );
    break;
  case 4:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}
```

Podremos además agrupar sentencias para realizar una misma acción en múltiples casos.

```javascript
switch(navigator.language) {
  case "en-US":
  case "en-GB":
  case "en-AU":
    console.log('Idioma inglés');
    break;
  case "es-ES":
  case "es-AR":
  case "es-CL":
  case "es-CO":
  case "es-CR":
  case "es-DO":
    console.log('Idioma español');
  default:
    console.log('No se identificó idioma')
}
```
