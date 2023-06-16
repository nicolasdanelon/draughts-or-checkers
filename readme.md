# Damas

## Instalación

Para poder jugar a este juego de damas hay que tener instalado pnpm:

```bash
npx pnpm i -g pnpm@latest
```

una vez instalado `pnpm` se lo puede usar para instalar dependencias del este proyecto padre:

```bash
pnpm install
```

Luego podemos instalar las dependencias de cada proyecto. Todas juntas o en forma separada

Todas las dependencias juntas usando `concurrently` 😈:

```bash
pnpm run install-all-dependencies
```

Dependencias de back:

```bash
pnpm run install-deps-server
```

Dependencias del front:

```bash
pnpm run install-deps-front
```

Finalmente podemos correr los dos proyectos con el siguiente comando:

```bash
pnpm run dev
```

## Test

Para correr los tests del front hay que seguir los siguientes comandos:

```bash
cd front && pnpm run test
```
