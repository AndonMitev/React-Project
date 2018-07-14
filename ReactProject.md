## My React app

Simple system where authenticated users are alowed to create, read, update and delete Posts or comments

## Unauthenticated users are allowed to:

- Register
- Login

## Authenticated users are allowed to:

- Read all posts
- Search posts
- Create posts
- Edit their own posts
- Delete their own posts
- Update their user profile
- Create comments
- Delete comments

## Authenticated and authorized users as admin are allowed to:

- Read all posts
- Search posts
- Create posts
- Edit all posts
- Delete all posts
- Edit all profiles
- Delete all profiles
- Create comments
- Delete all comments

## Project structure

### Components

- Common folder which includes all small components and some of the forms
- HomePage - register and login view
- AllPostsPage - list of all posts, search form
- CreatePostPage - creating new post view
- DetailsPostPage - more details about selected post
- EditPostPage - Creator || Admin are allowed to edit existing post
- ProfilePage - Info about every user and posts he created it
- EditUserPage - Creator || Admin are allowed to edit user profile

### hoc

- withFormManager - High ordered component take care for all of the forms
- withLoading - High ordered component take care for recieving any data

### models

- userLogin - Initial default state for login form also validations on it
- userRegister - Initial default state for register form also validations on it
- search - Initial default state for search form
- post - Initial default state for post form also validations on it
- comments - Initial default state for comments form also validations on it

### services

- userServices - CRUD on users
- postServices - CRUD on posts
- commentServices - CRUD on comments

## GitHub Repo Link: [Repo Link](https://github.com/AndonMitev/React-Project/).

- run npm install to install all of the packages

## Uploaded Web Site Link: [Uploaded version link](https://pensive-aryabhata-683f7c.netlify.com/).
