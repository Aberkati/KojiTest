# Réponses des questions du Test technique:

## 1-

I Will use Redux for managing the state,I usually use it when my app grows to the scale where managing app state becomes a hassle; and I start looking out for making it easy and simple.

## 2-

The needed pages are :
For Authentication : Signup,Login,Forgot Password (recover Password along with token on URL)

Admin Dashboard : Add/Edit Template,List Templates,Create/Edit User,List User
User Pages : List of his generated documents,Document Details,Generate Document(Form)

## 3-

For the navigation I will go for React-router-dom, which is a library to manage routes in a React web application, because we will have a different route, for example :
for Authentication : /login , /signup, /forgotPassword
for admin : /admin/templates, /admin/templates/add(or edit), /admin/users,/admin/users/add
for Users : /documents, /documents/:id, /documents/:id/generate

## 4-

The minimum api requests that we will need :
Athentication : POST to send data to server
Admin : POST&PUT requests for templates, GET for getting the list of Templates, POST/PUT requests to manage users, GET request to get users lists
User : GET request to have a list of generated templates(the same for details with /documents/:id), POST request for the input fields

## 5-

For managing the executions of api requests and their payloads : i'm gonna use Async/Await along with axios, which is a powerful library to manage the HTTP Requests

## 6-

For Authentication, when I get the token from the backend, I will stock it on Localstorage for example, and when i refresh i can check the localstorage before being redirected to /login.
And to manage users : I can Check for the IsAdmin variable provided by the backend, if I'm a admin, i will have an access to the /admin routes, else i will <Redirect to="/"/> or Home page of the users.

7- For the Dark Mode, it very easy to to it, on the App.tsx file I can add a State variable like this for example : const [theme, setTheme] = useState('light');
And a Toogle button (Light/Dark), when I change the toogle, the state change and the css classes change, so we can chage the mode like this.
(<div className={`App-${theme}`}> the css class change on the jsx of the App render, and I can create a App-light css class and App-dark)
