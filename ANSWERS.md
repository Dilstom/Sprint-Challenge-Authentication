<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
 - Middleware: In the application request-response Middleware functions have    access to the request, response (and passes data between them), and the next function. 
 - A Session is a way to persist data (authentication information) across requests so there is no need to re-enter credentials for clients while they browse an app.
 - JWT: is an industry standard for transferring data between two parties.
 JWTs are encoded as a JSON object and cryptographically signed using a secret with certain  algorithm.

2.  What does bcrypt do in order to prevent attacks?

 - It uses an algorithm that hashes the information multiple times (rounds)

3.  What are the three parts of the JSON Web Token?
 - The header - algorithm with the token type.
   The payload - includes data to store in the token.
   The signature - is a combination of the header (string encoded by base64) payload and a secret.