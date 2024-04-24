A web application built on a vue-nest scaffolding. The application has an API backend built on Nest.js and a web UI frontend built on Vue.js. Nest.js and Vue.js are JavaScript frameworks.
# The Backend
The backend is an API which serves requests for a realtor application. The user may create accounts and search for realty listings, and create new listings.
## The API Endpoints
The endpoints for the API are:  
 - **POST /auth/signup/{userType}**  
Sign up a user of a designated user type.  
 - **POST /auth/signin**  
Sign in a user with username and password.  
 - **POST /auth/key**  
Generate a product key to authorize API requests.  
 - **GET /home**  
Get a list of homes.  
 - **POST /home**  
Create a new home listing.  
 - **GET /home/{id}**  
Get a specific home.  
 - **PUT /home/{id}**  
Update a specific home.  
 - **DELETE /home/{id}**  
Delete a specific home.
