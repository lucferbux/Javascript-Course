# Gitflow
> Como actualizar cambios de un fork

## Overview

En esta sección extra vamos a explicar como realizar un fork del proyecto, como clonarlo, y como actualizarlo si surge un cambio. Tenéis también los detalles [en la propia página de GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

## Creación del Fork

Para crear el *fork*, simplemente tenemos que [dirigirnos al proyecto](https://github.com/lucferbux/Javascript-Course) y realizar los siguientes pasos:

1. En **GitHub**, pulsar el botón de la esquina superior derecha que pone `fork` y en la siguiente pantalla clickar en el botón `Crear fork`.
![GitHub Fork](/meta/1_1_github_fork.png)
2. En **GitHub**, en el **proyecto forkeado**, pulsar el botón `Code` y copiar la url en **SSH**, tiene que ser parecido a `git@github.com:<your-username>/Javascript-Course.git`.
![GitHub Clone](/meta/1_2_github_clone.png)
3. Ahora en tu ordenador, en la ruta donde quieras clonar el proyecto, ejecuta `git clone git@github.com:<your-username>/Javascript-Course.git`.

Con esto ya puedes acceder a tu proyecto y empezar a trabajar.

## Sincronizar cambios

Hay dos formas de sincronizar tu fork con el proyecto principal, una bastante sencillita mediante **GitHub** y la otra, un poco más compleja, mediante **Git**.

### GitHub

1. Dirígete a tu **proyecto forkeado**.
2. Si hay cambios en el repositorio, haz click en el icono `Fetch upstream`.
![Fetch Upstream](/meta/1_3_github_fetch_upstream.png)
3. Ahora en tu máquina, ejecuta lo siguiente:

```bash
> git switch main
> git fetch origin
> git pull origin main
```

Con eso tendrás todos los cambios en nuestro fork.

### CLI

En esta ocasión usaremos solo la cli.

```bash
> git remote add upstream git@github.com:Siem-Project/Javascript-Course.git
> git fetch upstream
> git merge upstream/master
```

Y con esto tendremos todos los cambios sincronizados con nuestro fork.
