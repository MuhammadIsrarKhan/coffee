<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

"ILuvCoffee" is a REST API built using the [Nest](https://github.com/nestjs/nest) framework. It's a coffee shop application that allows managing coffee inventory with their flavors and ratings.

### Features
- Coffee management (CRUD operations)
- Flavor categorization
- Coffee ratings
- Data persistence with PostgreSQL
- Config validation with Joi
- API filtering and pagination
- Custom exception filters

## Project setup

```bash
# Install dependencies
$ npm install

# Set up the PostgreSQL database
# Create a .env file with the following variables:
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_USERNAME=postgres
# DATABASE_PASSWORD=pass123
# DATABASE_NAME=postgres
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

This application can be deployed using Docker. A `docker-compose.yml` file is included in the project root to simplify the deployment process.

```bash
# Build and start the containers
$ docker-compose up -d

# To stop the containers
$ docker-compose down
```

## API Documentation

Once the application is running, you can access the Swagger API documentation at:
```
http://localhost:3000/api
```

## Database Migrations

This project uses TypeORM migrations to manage database schema changes:

```bash
# Generate a new migration
$ npm run migration:generate -- CoffeeRefactor

# Run migrations
$ npm run migration:run

# Revert migrations
$ npm run migration:revert
```

## Project Structure

```
src/
├── app.module.ts         # Main application module
├── main.ts               # Application entry point
├── coffees/              # Coffee module and related files
│   ├── coffees.controller.ts
│   ├── coffees.module.ts
│   ├── coffees.service.ts
│   ├── dto/              # Data Transfer Objects
│   └── entities/         # TypeORM entities
├── coffee-rating/        # Coffee rating module
├── common/               # Shared components
│   ├── dto/              # Common DTOs
│   └── filters/          # Exception filters
│       └── http-exception/
└── events/               # Event tracking module
    └── entities/
```

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [TypeORM Documentation](https://typeorm.io/)
- [Docker Documentation](https://docs.docker.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## License

This project is [MIT licensed](LICENSE).
