# Findan

Fidan is a project that let you share a education and sports lesson for people around the world to learned, whether you're teacher or someone
who just want to learn, this platform welcome all background!

## Functions
- able to create a new posts
- read -- able to display the information from mySQL
- Update post
- Delete posts
- Login
- logout
- Register

## Database schema

![lab_blank01_i3ensf](https://github.com/3hiroha/Findan/assets/97663526/3677d0a8-386e-41fe-83eb-369bd0e6a16f)


## To run the frontend and backend in developing mode 
cd api to run the backend.
```
    npm i
    npm start
```
cd client/findan to run the frontend.
```
    npm i
    npm run dev
```

## API endpoints

#### URL

`router.post("/register", register);`


#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username|
|email|String|email|
|password|String| password|


Example
```
   {
     "username" : "test",
     "email" : "test@gmail.com",
     "password" : "123"
   }


```


#### Success
Success


###### Status Code

` 200`  Register success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username|
|email|String|email|
|password|String| password|


Example
```
   {
     "username" : "test",
     "email" : "test@gmail.com",
     "password" : "123"
   }


```




## API endpoints

#### URL

`router.post("/login", login, );`


#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username|
|password|String| password|


Example
```
   {
     "username" : "test",
     "password" : "123"
   }


```


#### Success
Login success


###### Status Code

` 200`  login success

| Parameter | Type | Description |
|----------|:-------------:|:------|

|username|String| username| 
|password|String| password| 

Example
```
{
   "id" : "1",
   "username":"test",
   "email":"test@gmail.com",
   "password":"123"
}

```
## API endpoints
#### URL

`router.post("/logout", logout);`


#### Success
Response


###### Status Code

` 200`  logout success



## API endpoints

#### URL

`router.get("/", getPosts )`


#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|title|String|title for post|
|desc|String| desc for post|
|img|String|img for post|
|cat|String|categories for post|

Example
```
   {
     "title" : "test",
     "desc" : "desc ffff",
     "img" : "test.png",
     "cat" : "education"
   }


```

#### Success
Response


###### Status Code

` 200`  login success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|title|String| title|
|desc|String| desc|
|img|String| img|
|cat|String|categories|

Example
```
{
   "title" : "test",
     "desc" : "desc ffff",
     "img" : "test.png",
     "cat" : "education",
     "date": "date",
     "uid" : "uid"
}

```
## API endpoints
#### URL
`router.get("/:id", getPost)`


#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|title|String|title for post|
|desc|String| desc for post|
|img|String|img for post|
|cat|String|categories for post|

Example
```
   {
     "title" : "test",
     "desc" : "desc ffff",
     "img" : "test.png",
     "cat" : "education"
   }


```


#### Success
showpost success


###### Status Code

` 200`  showpost success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|title|String| title|
|desc|String| desc|
|img|String| img|
|cat|String|categories|

Example
```
{
   "title" : "test",
     "desc" : "desc ffff",
     "img" : "test.png",
     "cat" : "education",
     "date": "date",
     "uid" : "uid"
}

```

## API endpoints
#### URL

`router.post("/", addPost )`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|title|String|title for post|
|desc|String| desc for post|
|img|String|img for post|
|cat|String|categories for post|

Example
```
   {
     "title" : "test",
     "desc" : "desc ffff",
     "img" : "test.png",
     "cat" : "education"
   }


```

#### Success

addpost success
###### Status Code

` 200`  addpost success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|title|String| title|
|desc|String| desc|
|img|String| img|
|cat|String|categories|

Example
```
{
   "title" : "test",
     "desc" : "desc ffff",
     "img" : "test.png",
     "cat" : "education",
     "date": "date",
     "uid" : "uid"
}

```




## API endpoints
#### URL

`router.delete("/:id", deletePost )`

#### Success
Post has been deleted!


###### Status Code

` 200`  Post has been deleted!


#### URL

`router.put("/:id", updatePost)`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|title|String|title for post|
|desc|String| desc for post|
|img|String|img for post|
|cat|String|categories for post|

Example
```
   {
     "title" : "test",
     "desc" : "desc ffff",
     "img" : "test.png",
     "cat" : "education"
   }


```


#### Success
update post success!


###### Status Code

` 200`  update success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|title|String| title|
|desc|String| desc|
|img|String| img|
|cat|String|categories|

Example
```
{
   "title" : "test",
     "desc" : "desc ffff",
     "img" : "test.png",
     "cat" : "education",
     "date": "date",
     "uid" : "uid"
}

```


