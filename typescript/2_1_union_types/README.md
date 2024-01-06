# Manipulación de tipos

## Union types

TypeScript permite construir nuevos tipos en base a los ya existentes mediante una serie de operadores. Ahora que sabemos construir tipos, vamos a ver como podemos **combinarlos** para conseguir nuevas funcionalidades.

Un `union type` está formado por dos o más tipos, representando valores que pueden cualquier otro tipo, cada uno de estos tipos son los *union's member*.

```typescript
function printPhoneNumber(phoneNumber: number | string) {
  console.log("Your phone number is " + phoneNumber);
}

printPhoneNumber(612389238);
printPhoneNumber("637839489");
// printPhoneNumber({ phone: 613892348}); // Error
```

## Type Aliases

Ahora que conocemos los union types, podemos usarlos cuando queramos, pero hay **una característica muy útil** de TypeScript para no tener que ir escribiendo siempre las uniones. Suponemos que queremos un argumento que tenga de tipos `number | string | boolean`. Cada vez que queramos comprobar este tipo único, deberíamos escribir esta cadena, pudiendo llevar a errores si olvidamos algún tipo.

Es por ello que podemos definir alias para identificar estos union types con un nombre característico que le queramos dar.

```typescript
type ID = number | string | boolean

let myID: ID = "23789s";
let myOtherId: ID = 213432423;
```

Podemos crear también type aliases compuestos, de diferentes anotaciones de tipos, siendo así que podamos crear definiciones enteras de un tipo.

```typescript
type Mail = {
  header: string;
  body: string;
  timestamp: number;
}

function printMail(mail: Mail) {
  console.log(`${mail.header} - ${mail.timestamp}`);
  console.log(`---------------------------------`);
  console.log(`${mail.body}`);
}
```

## Type Assertions

Hay ocasiones en las que tenemos que hacer una conversión de un tipo, bien porque tenía un valor de **any**, bien porque la librería no tiene tipos definidos o que el elemento es genérico, esto por ejemplo en manipulación del DOM es muy común. Es por ello que existen las **type assertions** que permiten hacer un **cast** del tipo de un elemento.

```typescript
const myCanvas = document.getElementById("container") as HTMLDivElement;
```
