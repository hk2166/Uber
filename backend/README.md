# User API Documentation

This document describes the available endpoints for user registration and login.

---

## User Registration Endpoint

### Endpoint

**POST** `/users/register`

### Description

This endpoint registers a new user. It validates the input, hashes the password, creates a new user in the database, and returns a JWT token upon successful registration.

### Request Body

Content-Type: `application/json`

#### Required Data Format

```json
{
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}
```

- **fullname.firstName**: String, required, at least 3 characters.
- **fullname.lastName**: String, optional, at least 3 characters if provided.
- **email**: String, required, must be a valid email and at least 6 characters.
- **password**: String, required, at least 6 characters.

### Responses

#### Successful Registration

- **Status Code:** `201 Created`
- **Response Example:**
  ```json
  {
    "user": {
      "_id": "userObjectId",
      "fullname": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john@example.com"
    },
    "token": "jwtTokenHere"
  }
  ```
  > **Note:** The password is not included in the response.

#### Error Responses

- **400 Bad Request**

  - Returned when validation fails (e.g., invalid email, too short first name or password).
  - **Response Example:**
    ```json
    {
      "errors": [
        { "msg": "Invalid email", "param": "email", "location": "body" },
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstName",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - Returned when an unexpected error occurs on the server (e.g., database connection issues, duplicate email, etc.).
  - **Response Example:**
    ```json
    {
      "message": "Registration failed"
    }
    ```

---

## User Login Endpoint

### Endpoint

**POST** `/users/login`

### Description

This endpoint logs in an existing user. It validates the provided email and password against the stored user data, and returns a JWT token and the user details upon successful authentication.

### Request Body

Content-Type: `application/json`

#### Required Data Format

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

- **email**: String, required, must be a valid email.
- **password**: String, required, at least 6 characters.

### Responses

#### Successful Login

- **Status Code:** `200 OK`
- **Response Example:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGUxNjc4OGYyMTZhMWI5OGZkMDJhMzciLCJpYXQiOjE3NTk2MDI3ODh9.eYMXuKDV9GGVr9QbhzFs5MnKXpiTAg-T9Nq1qKpFANo",
    "user": {
      "fullname": {
        "firstName": "Mark",
        "lastName": "Doe"
      },
      "_id": "68e16788f216a1b98fd02a37",
      "email": "Mark@example.com",
      "password": "$2b$10$Gud/IRY51DZbo/TZcPhLle9EO4vbhCKwy0.wojM6afAob8oJB32NK",
      "__v": 0
    }
  }
  ```
  > **Note:** The password is not included in the response.

#### Error Responses

- **400 Bad Request**

  - Returned when the provided email is not found.
  - **Response Example:**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **401 Unauthorized**
  - Returned when the password does not match.
  - **Response Example:**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

---

## User Profile Endpoint

### Endpoint

**GET** `/users/profile`

### Description

Retrieves the profile information of the authenticated user. Requires a valid JWT token.

### Authentication

Requires Bearer token in Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Responses

#### Successful Response

- **Status Code:** `200 OK`
- **Response Example:**
  ```json
  {
    "user": {
      "_id": "userObjectId",
      "fullname": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john@example.com",
      "socketId": "optionalSocketId"
    }
  }
  ```

#### Error Responses

- **400 Bad Request**

  - Returned when token is missing or invalid

  ```json
  {
    "message": "Invalid or missing auth token"
  }
  ```

- **401 Unauthorized**

  - Returned when token has been blacklisted

  ```json
  {
    "message": "Token has been blacklisted. Please login again."
  }
  ```

- **404 Not Found**
  - Returned when user associated with token is not found
  ```json
  {
    "message": "User not found"
  }
  ```

## User Logout Endpoint

### Endpoint

**GET** `/users/logout`

### Description

Logs out the user by clearing the authentication token cookie and blacklisting the current token.

### Authentication

Requires Bearer token in Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Responses

#### Successful Response

- **Status Code:** `200 OK`
- **Response Example:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Error Response

- **400 Bad Request**
  - Returned when token is missing
  ```json
  {
    "message": "Invalid or missing auth token"
  }
  ```

### Effects

- Clears the authentication cookie
- Adds the token to blacklist to prevent reuse
- Future requests with the same token will be rejected

---

## Security Notes

- All authenticated endpoints require a valid JWT token
- Tokens are automatically invalidated after logout
- Expired or invalid tokens will return appropriate error responses
- The JWT secret should be kept secure and never exposed in the codebase

Happy Coding!
