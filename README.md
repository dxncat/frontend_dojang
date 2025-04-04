# Descripción

Este es un proyecto estudiantil desarrollado para la universidad. El objetivo principal es aprender y aplicar conceptos de desarrollo web utilizando Next.js, Prisma y Docker. A través de este proyecto, se busca adquirir experiencia práctica en la creación y gestión de aplicaciones web modernas.

## Correr en dev


1. Clonar el repositorio.
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Primsa ```npx prisma migrate dev```
6. Ejecutar seed ```npm run seed```
7. Correr el proyecto ```npm run dev```

>[!NOTE]
Credenciales de administrador
correo: testadmin@test.com
contraseña: password

>[!NOTE]
Credenciales de usuario
correo: testuser@test.com
contraseña: password

## Correr en prod
