
## Documentation of the Route Endpoints
    
This document provides the documentation for the route endpoints of the API in the routes file which is located in the routes folder. The API has the following endpoints:
 

## Features
    
 - Create Person
 - Get Person
 - Update Person
 - Delete Person
 


## API Reference

#### Create Person

```http
  POST http://localhost:3000/api
```

This endpoint is used to create a person. It accepts the following parameters:

- name (string): The full name of the person.


```http
Request body:

  {
    "name": "Ikpia Emmanuel",
  }
```

```http
  Response body:

{
    "message": "person added successfully!",
    "status": {
        "name": "Ikpia Emmanuel",
        "_id": "65020eb0373824f53cdd1b76",
        "__v": 0
    }
}

  
```

#### Get Person

```http
  GET http://localhost:3000/api/user_id
```

This endpoint is used to fetch the detials of the person or any person in the database:

```http
  GET http://localhost:3000/api/65020eb0373824f53cdd1b76
```

```http
  Response body:

{
    "_id": "65020eb0373824f53cdd1b76",
    "name": "Ikpia Emmanuel",
    "__v": 0
}

```
#### Update Person

```http
  POST http://localhost:3000/api/user_id
```
This endpoint is used to update the person or any person in the database:

- name (string): The full name of the person you want to update it to.

```http
  POST http://localhost:3000/api/65020eb0373824f53cdd1b76

  Request body:

{
    "name": "Victor John"
}

```

```http
  Response body:

{
    "message": "person updated successfully!",
    "status": {
        "_id": "65020eb0373824f53cdd1b76",
        "name": "Victor John",
        "__v": 0
    }
}
```
#### Delete Person

```http
  DELETE http://localhost:3000/api/user_id
```
This endpoint is used to delete the person or any person in the database:

```http
DELETE http://localhost:3000/api/65020eb0373824f53cdd1b76

```

```http
Response body:

person with id 65020eb0373824f53cdd1b76 is now deleted

```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Ikpia/stage_2
```

Go to the project directory

```bash
  cd stage_2
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
    npm start

```

Start mongodb

```bash
    mongod

```

Test the endpoints

```bash
    Make sure to have postman installed

```


## Authors

- [Emmanuel](https://www.github.com/Ikpia)


## Tech Stack
**Server:** Node js, Express js, mongoose.

**Database:** Mongodb

**Testing Endpoints:** Postman

