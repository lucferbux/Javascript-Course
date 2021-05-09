# Creación de Objetos

## Lenguaje Prototipado

Javascript es un lenguaje orientado a objetos basado en la herencia de prototipos.

En la **herencia clásica**, el programador escribe una clase, que define a un objeto. Múltiples objeots pueden instanciarse de la clase, así que tienes código en un sitio que describe múltiples objetos en el programa. Las clases pueden organizarse en una categoría.

Dentro de la **herencia prototipada**, los objetos **heredan directamente** de otros objeots. Se elimina el concepto de clase, si quieres un objeto, simplemente escribe un objeto.
Se permite la reusabilidad, por lo que los objetos pueden estar relacionados en una jerarquía. En Javascript, todo objeto tiene un link con otro objeto padre. Así si se pide una propiedad, Javascript irá preguntando a todos los padres hasta que dé con esa propiedad.