# Shoee Authentication API Documentation

## Overview

This API provides endpoints for user authentication, including login and signup. It validates user input and returns detailed error messages for invalid requests.

**Base URL**: `https://api.example.com/api/auth`

## Authentication

- This API uses JSON Web Tokens (JWT) for authentication.
- After a successful login or signup, a token is returned. This token must be sent in the `Authorization` header for authenticated routes.

## Endpoints

### 1. POST `/login`

Log in an existing user.

### Request

- **Header:**
  - `Content-Type: application/json`
- **Body:**
  - ```
    {
        "email": "johndoe@example.com",
        "password": "password123"
    }
    ```
- **Response:**
    - **Success(`200 OK`):**
        ```
        {
            "user": {
                "username": "ahmedomar",
                "email": "ahmed.omar.alfarouq@gmail.com",
                "password": "$2b$10$TUEKHLhIlXDr0Br4nzPGtOJ/dfdieHlbY0bNvsDeN7H6AMwNWH4Nm",
                "role": "customer",
                "_id": "6795d7209d94ee53b1636895",
                "createdAt": "2025-01-26T06:33:04.502Z",
                "__v": 0
            },
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTVkNzIwOWQ5NGVlNTNiMTYzNjg5NSIsImlhdCI6MTczNzg3MzE4NCwiZXhwIjoxNzM3ODc2Nzg0fQ.rdj13SxfhKBndLOGg1ZgvezLMeF0TksQITVJQOE6lj4"
        }
        ```
    - **Errors:**
        - `400 Bad Request`: Invalid or missing fields
            ```
            {
                "errors": [
                    {
                    "type": "field",
                    "value": "<input_value>",
                    "msg": "<error_message>",
                    "path": "<field_name>",
                    "location": "body"
                    }
                ]
            }
            ```
        - `401, 403, 404, 409`:
            ```
            {
                "msg": "<Message>",
            }
            ```
         - `500 Internal Server Error`:
            ```
            {
                "msg": "Something went wrong",
                "error": "...",
            }
            ```
### 2. POST `/signup`
Register a new user.
### Request

- **Header:**
  - `Content-Type: application/json`
- **Body:**
  - ```
    {
        "username": "johndoe",
        "email": "johndoe@example.com",
        "password": "password123"
    }
    ```
- **Response:**
    - **Success(`201 Created`):**
        ```
        {
            "user": {
                "username": "ahmedomar",
                "email": "ahmed.omar.alfarouq@gmail.com",
                "password": "$2b$10$TUEKHLhIlXDr0Br4nzPGtOJ/dfdieHlbY0bNvsDeN7H6AMwNWH4Nm",
                "role": "customer",
                "_id": "6795d7209d94ee53b1636895",
                "createdAt": "2025-01-26T06:33:04.502Z",
                "__v": 0
            },
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTVkNzIwOWQ5NGVlNTNiMTYzNjg5NSIsImlhdCI6MTczNzg3MzE4NCwiZXhwIjoxNzM3ODc2Nzg0fQ.rdj13SxfhKBndLOGg1ZgvezLMeF0TksQITVJQOE6lj4"
        }
        ```
    - **Errors:**
        - `400 Bad Request`: Invalid or missing fields
            ```
            {
                "errors": [
                    {
                    "type": "field",
                    "value": "<input_value>",
                    "msg": "<error_message>",
                    "path": "<field_name>",
                    "location": "body"
                    }
                ]
            }
            ```
        - `409 Conflict`:
            ```
            {
                "msg": "User already exists",
            }
            ```
         - `500 Internal Server Error`:
            ```
            {
                "msg": "Something went wrong",
                "error": "...",
            }
            ```


## Validation Rules
### Login
- `email`: Must be a valid email address.
- `password`: Must be at least 8 characters long.
### Signup
- `username`: Must be alphanumeric and not empty.
- `email`: Must be a valid email address.
- `password`: Must be at least 8 characters long.

## Authentication
After successful login or signup, the API returns a JSON Web Token (JWT). This token must be sent in the Authorization header for protected endpoints.

### Header Example:
```
Authorization: Bearer <your_jwt_token>
```