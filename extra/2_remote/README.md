# Múltiples repositorios remotos
> Controlar tu proyecto con repositorio en upstream

## Overview

Como extra a la [sección anterior](../1_gitflow/README.md), vamos a explicar como crear una Pull Request en tu propio repositorio dentro de un **fork**.

## Creación del Fork

Al haber creado un fork, vamos a tener tres entornos diferenciados que tendremos que tener en cuenta:

1. **Upstream**: O el proyecto inicial, en el caso de este proyecto, será el [repositorio del profesor](https://github.com/lucferbux/Javascript-Course).
2. **Origin**: En este caso el fork remoto que habéis creado, tendrá el formato `github/your-username/Javascript-Course`.
3. **Local**: Es el repositorio en vuestro ordenador, es la carpeta a la que accederéis después de hacer `git clone` en vuestra máquina.

## Mandar cambios a tu fork

Una vez clonado tu fork, y al haber hecho `git clone` de tu repositorio, deberías encontrar un entorno similar a este ejecutando el siguiente comando en tu proyecto:

```bash
> git remote -v
origin  git@github.com/<your-username>/Javascript-Course.git (fetch)
origin  git@github.com/<your-username>/Javascript-Course.git (push)
```

Si por error has clonado el repositorio principal (`https://github.com/lucferbux/Javascript-Course.git`), dirígete a la siguiente sección.

Por el contrario, si tienes el entorno creado correctamente, vamos a agregar el repositorio principal con lo siguiente:

```bash
> git remote add upstream git@github.com/lucferbux/Javascript-Course.git
> git fetch upstream
remote: Enumerating objects: 86, done.
remote: Counting objects: 100% (86/86), done.
remote: Compressing objects: 100% (55/55), done.
remote: Total 86 (delta 34), reused 79 (delta 31), pack-reused 0
Unpacking objects: 100% (86/86), 1.50 MiB | 14.11 MiB/s, done.
... (more)
```

Con esto habremos añadido el repositorio principal por si queremos sincronizar cambios con nuestro fork. Para añadir nuevos cambios y crear un pull request en vuestro fork solo tendréis que hacer:

```bash
> git fetch origin # sincronizar con el repositorio remoto
> git checkout -b <name_branch> origin/main # crear una nueva rama basada en la rama main del remoto
# realizar los cambios que queráis
> git add . # Añadir todos los cambios
> git commit -m "your message" # Crear commit
> git push origin <name_branch> # Enviar los cambios al repositorio remoto
``` 

## Arreglar haber clonado upstream

Si desde un principio has clonado el repositorio principal`, hay una forma sencilla de arreglar el entorno para dejarlo en el estado que hemos comentado antes:

1. Crear un fork del repositorio desde GitHub.
2. Copiar la url de vuestro fork que aparece al pulsar el botón verde de `<> Clone`.
3. Ahora en vuestro proyecto en local, ejecutar lo siguiente.

```bash
> git remote rename origin upstream # cambiar el nombre del remote a upstream
> git remote add origin git@github.com/<your-username>/Javascript-Course.git # añadir como origin la url de tu fork que acabas de copiar
> git fetch origin
> git branch --set-upstream-to origin/main # cambia el track de la rama en local a origin/main
```

Ahora el entorno debe estar bien configurado, ahora podemos repetir la operación anterior para crear una pull request en tu fork:

```bash
> git fetch origin # sincronizar con el repositorio remoto
> git checkout -b <name_branch> origin/main # crear una nueva rama basada en la rama main del remoto
# realizar los cambios que queráis
> git add . # Añadir todos los cambios
> git commit -m "your message" # Crear commit
> git push origin <name_branch> # Enviar los cambios al repositorio remoto
``` 
