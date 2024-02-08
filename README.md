# Proyecto MERN 5

API de portfolios de la comunidad developer. Continiene los portfolios del README de ![Evavic44](https://github.com/Evavic44). ![Enlace al README](https://github.com/Evavic44/portfolio-ideas)

```javascript
const document = {
  _id: 'id_de_mongoDB',
  Author: 'autor_del_portfolio',
  Screenshot: 'imagen_del_portfolio',
  LiveURL: 'enlace_al_portfolio',
  Repo: 'repositorio_codigo_portfolio',
  TechStack: ['arrray', 'de', 'tecnologias', 'usadas'],
};
```

### Tener en cuenta:

1. No Todos los campos son requeridos, pero se agradece que se suban todos.
2. El campo Repo se comprende que esté vacío. No siempre es público el código.
3. La imagen del Screenshot admite un peso máximo de 1mb.
4. La imagen se sube como archivo. Esta se guardará en Cloudinary automáticamente.

## Endpoints:

https://localhost:4001/api

### MODELO PORTFOLIOS:

| HTTP Request | Endpoint       | Description                       | Protected |
| ------------ | -------------- | --------------------------------- | --------- |
| GET          | /portfolios    | Todos los portfolios registrados. | No        |
| GET          | /portfolios/id | Portfolio por su id.              | No        |
| POST         | /portfolios    | Crear un nuevo portfolio.         | Sí        |
| PUT          | /portfolios/id | Editar un portfolio.              | Sí        |
| DELETE       | /portfolios/id | Borrar un portfolio.              | Sí        |

### MODELO USERS:

| HTTP Request | Endpoint       | Description                     | Protected |
| ------------ | -------------- | ------------------------------- | --------- |
| GET          | /auth          | comprobar si tiene token válido | No        |
| POST         | /auth/login    | Login user                      | No        |
| POST         | /auth/register | Registrar user (crear).         | Sí        |

## Aclaraciones

- Si el endpoint es 'Protected' será necesario un estar registrado como User.
- Para acceder a los endpoints 'Protected' se usará un Bearer token.
- En el primer endpoint del Modelo Portfolios, agregando un Query Parameter "author" se puede filtrar por nombre de autor. En caso de estar separado por SPACE, se usará un '+' en el parámetro. Por ejemplo: 'http://localhost:4001/api/portfolios?filter=adRian+Anta' (no se discrimina entre mayúsculas y minúsculas).
- Para probar todos los endpoints se puede usar el User guest.

```javascript
{
  "userName": "guest",
  "password": "$sandstorm"
}
```

En caso de querer probar el proyecto en local, se deberá instalar lo siguiente.

```javascript
npm install mongoose express dotenv bcrypt jsonwebtoken express-rate-limit cors cloudinary multer multer-storage-cloudinary
```

### > Para cualquier duda puedes contartarme al email antaga04@gmail.com :)
