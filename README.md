# User Routes
**/users**
Lists all users from the database.
- Response
> {
"fullname": "Jonel David",
"birthday": "2002-06-24T16:00:00.000Z",
"age": 22,
"organisation_id": 1
},
>{
"fullname": "Davey Davis",
"birthday": "2001-12-31T16:00:00.000Z",
"age": 22,
"organisation_id": 2
},

**/getUser/:userId**
Retrieves a specific user from the database through their ID.
- Response
> {
        "fullname": "Anna Davis",
        "birthday": "2005-06-25",
        "age": 19
    }
    
**/addUser**
- Adds a user to the user table

**/updateUser/:userId**
- Updates a specific user through their ID





# Organisation Routes
**/organizations**
Lists all organizations 
- Response
>  {
        "id": 1,
        "name": "ICPEP"
    },
    {
        "id": 2,
        "name": "Council"
    },

**/getOrganization/:orgId**
Retrieves specific Organization through ID
- Response
> {
        "id": 2,
        "name": "Council"
    }
    
**/addOrganization**
Adds an organization 

**/updateOrganization/:orgId**
updates a specific organization

