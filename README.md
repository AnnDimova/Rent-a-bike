# Overview

Bike rental is an application that allows users to post and rent bikes for specific time period.

The project consists of 2 main modules:

- Server (SoftUni Practice Server)
- SPA built with React

# Run app locally

In order to run the SoftUni Practice Server, go to the `server` folder and run the following command:

```
node server.js
```

After the server is running, the front end app can be initiated from the root folder:

```
npm install
npm run start
```

# Main functionalities

### Unauthenticated user

- View all listings
- View detailed information about individual listings
- Search by name and filter by type
- Register/Login

### Authenticated user

- View all listings
- View detailed information about individual listings
- Search by name and filter by type
- Create listing
- Edit/Delete own listings
- View sent and received quotes
- Get quotes for other users' listings
- Approve/Reject quotes for user's own listings

# Architecture overview
The application code is devided into the following logical chunks:

- App.js - app initialization and routes 
- Components - consists of all UI components 
- Constants
- Contexts - AuthContext (User Authentication)
- Hooks - consists of custom hook for using the local storage
- routeGuards - guard that ensures that the user has access to particular views
- Services - used for API requests and validation logic
- Utils - reusable common utilities


# Main views

### Home page

On the home page the recently added bikes are shown.
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Home%20page.png?raw=true)

### Bikes page

Shows a catalog of all listings (if there are any) with the posibility to search bikes by name and by type.
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Bikes%20page.png?raw=true)
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Bikes%20page%20two.png?raw=true)

### Login and Register pages

Login and register functionalities with input validation and error handling.

![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Login%20page.png?raw=true)
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Register%20page.png?raw=true)

### Details page for logged in users

Logged users can get quotes for listed bikes by choosing specific time period (time period is validated).
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Pick%20period.png?raw=true)

### Details page for owner of the listing

Logged in user that is owner of the listing can access edit and delete buttons through the details page.
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Details%20page.png?raw=true)
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Delete%20listing.png?raw=true)

### Create page

Allows users to create their own listing. Form inputs are beign validated.
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Create%20Listing.png?raw=true)

### Edit page

Owner of the current listing can edit the information about it. Form inputs are beign validated.
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Edit%20listing.png?raw=true)

### My profile page

Every user has a my profile page, where they can see basic user information and information about the quotes concerning the current user (quotes that he made and quotes that were made for his listings). The quotes are separated into two tables, where you have the option to accept or reject a quote.
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/My%20profile.png?raw=true)

### Error page

When you enter invalid route.
![image](https://github.com/AnnDimova/Rent-a-bike/blob/master/Screenshots/Error.png?raw=true)