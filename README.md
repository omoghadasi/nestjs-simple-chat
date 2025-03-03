# Chat Application

A simple chat application with a RESTful API built using NestJS and MongoDB.

## Getting Started

### Run with Docker

To start the application using Docker, run the following command:

```sh
docker-compose up
```

This will spin up both the NestJS server and the MongoDB database.

## API Endpoints

### 1. Create User

#### Endpoint

```http
POST /users/new
```

#### Request Body:

```json
{
  "username": "ali",
  "email": "ali@gmail.com",
  "password": "ali123"
}
```

#### Response:

```json
{
  "username": "ali",
  "email": "ali@gmail.com",
  "password": "ali123",
  "_id": "67c5cc648dd90109e1dd1e54",
  "createdAt": "2025-03-03T15:36:04.315Z",
  "updatedAt": "2025-03-03T15:36:04.315Z",
  "__v": 0
}
```

### 2. Get All Users

#### Endpoint

```http
GET /users
```

#### Response:

```json
[
  {
    "_id": "67c5cc648dd90109e1dd1e54",
    "username": "ali",
    "email": "ali@gmail.com",
    "password": "ali123",
    "createdAt": "2025-03-03T15:36:04.315Z",
    "updatedAt": "2025-03-03T15:36:04.315Z",
    "__v": 0
  }
]
```

### 3. Create a Chat Room

#### Endpoint:

```http
POST /chatroom/new
```

#### Request Body:

```json
{
  "name": "General Chat"
}
```

#### Response:

```json
{
  "name": "General Chat",
  "_id": "67c5cd87397cc668a2c3dfa5",
  "createdAt": "2025-03-03T15:40:55.632Z",
  "updatedAt": "2025-03-03T15:40:55.632Z",
  "__v": 0
}
```

### 4. Send Messages in a Chat Room

#### Endpoint:

```http
POST /chatroom/:id/message/new
```

#### Request Body:

```json
{
  "sender": "67c5cc648dd90109e1dd1e54",
  "text": "Hello everyone!"
}
```

#### Response:

```json
{
  "chatRoom": "67c5cd87397cc668a2c3dfa5",
  "sender": "67c5cc648dd90109e1dd1e54",
  "text": "Hello everyone!",
  "_id": "67c5ce99397cc668a2c3dfa8",
  "createdAt": "2025-03-03T15:45:29.009Z",
  "updatedAt": "2025-03-03T15:45:29.009Z",
  "__v": 0
}
```

### 5. Retrieve The List Of Messages In A Chat Room

#### Endpoint:

```http
GET /chatroom/:id/messages
```

#### Response:

```json
[
  {
    "_id": "67c5cff6e7a66f9c4aabaa40",
    "chatRoom": "67c5cfd8e7a66f9c4aabaa3d",
    "sender": "67c5cc648dd90109e1dd1e54",
    "text": "Hello everyone!",
    "createdAt": "2025-03-03T15:51:18.882Z",
    "updatedAt": "2025-03-03T15:51:18.882Z",
    "__v": 0
  }
]
```

---

Now you are ready to use the chat application! 🚀
