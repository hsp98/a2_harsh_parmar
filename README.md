# a2_harsh_parmar

#Assignment 2

Description: This project contains the user interface of the website MovieTime. No backend is implemented as per requirements of assignment 2. However, necessary validations are used. This gives the website a better feel.

Date Created: 09 June 2020
Last Modification Date: 14 June 2020

#Authors
Harsh Parmar (hr822264@dal.ca)

##Getting Started

###Prerequisites

Softwares:
Visual Studio Code(prefered) or any other IDE
Nodejs
Gitbash

Libraries:
express
create-react-app
react-bootstrap
google-maps-react
axios
path
react
react-datepicker
react-dom
react-router-dom
react-scripts
react-slick
slick-carousel
styled-components

###Installing
Following is a stepp by step process on how to get a development environment running on the local system.

Step 1: Download Node.js from https://nodejs.org/en/ and install the downloaded file.
Step 2: Create a github account on https://github.com.
Step 3: Open the downloaded local copy of assignment in Visual Studio Code and open its terminal.
Step 4: run the following commands:
	"npm install express"
	"npm install create-react-app"
	"npm install react-bootstrap
	"npm install google-maps-react"
	"npm install axios"
	"npm install path"
	"npm install react"
	"npm install react-datepicker"
	"npm install react-dom"
	"npm install react-router-dom"
	"npm install react-scripts"
	"npm install react-slick"
	"npm install slick-carousel"
	"npm install styled-components"

Step 5: After successful installation, run the following command to start the application:
	"npm start"
Step 6: Open web browser and go to http://localhost:5000/. Here, you will be able to view the application.

URL of deployed application along with its functions:

https://a2harshparmar.herokuapp.com: This is the landing page of the website. Landing page shows different tabs and  a list of up coming and now playing movies. I have used an api to get temporary data for website. I have used an API provided by https://www.themoviedb.org/ to fetch data to display on the landing page as well as on other pages as per requirement. On clicking filter button, a popup will appear with options like Language, Sort By, Genre and 2D/3D/4DX, etc. Date picker will let user select a date to find shows for that date.

https://a2harshparmar.herokuapp.com/profile: This page is the login page. If no email address and password is provided and clicked on login, an error message is displayed.
If an invalid email address or password is provided then an error will be displayed. Here invalid means that email address is not a valid email address or password is shorter then 8 characters.
This page also contains the registration form as well. Registration form also contains the similar error messages as login form. Upon filling the login or register form and hitting the login or register button, it will redirect you to landing page.

https://a2harshparmar.herokuapp.com/forgotpassword: You will reach to this page if you click on the Forgot Password link of Login page. Here user will be able to enter email address to reset password. Necessary validations are also placed on this form.

https://a2harshparmar.herokuapp.com/bookings: This page shows the list of ticket bookings a user has made. Each booking has the movie poster, booking details and map showing the location of theatre.

##Running the tests
There are no automated test for this system.

##Deployment
The application was deployed on heroku using a nodejs app. The application is live on https://a2harshparmar.herokuapp.com/.

##Built With
Nodejs - https://nodejs.org/en/ - The open source server environment.
React - https://reactjs.org/ - A javascript library for building user interfaces.
React-bootstrap - https://react-bootstrap.github.io/ - Bootstrap for react.
HTML5 - https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5 - For designing layout of the application and local storage.

References:

[1] "Node.js", Node.js. [Online]. Available: https://nodejs.org/en/. [Accessed: 13- Jun- 2020]
[2] "React – A JavaScript library for building user interfaces", Reactjs.org. [Online]. Available: https://reactjs.org/. [Accessed: 13- Jun- 2020]
[3] React-bootstrap.github.io. [Online]. Available: https://react-bootstrap.github.io/. [Accessed: 13- Jun- 2020]
[4] "Cloud Application Platform | Heroku", Heroku.com. [Online]. Available: https://www.heroku.com/. [Accessed: 13- Jun- 2020]
[5] "express", npm. [Online]. Available: https://www.npmjs.com/package/express. [Accessed: 13- Jun- 2020]
[6] "Create a New React App – React", Reactjs.org. [Online]. Available: https://reactjs.org/docs/create-a-new-react-app.html. [Accessed: 13- Jun- 2020]
[7] "google-maps-react", npm. [Online]. Available: https://www.npmjs.com/package/google-maps-react. [Accessed: 13- Jun- 2020]
[8] "axios", npm. [Online]. Available: https://www.npmjs.com/package/axios. [Accessed: 13- Jun- 2020]
[9] "path", npm. [Online]. Available: https://www.npmjs.com/package/path. [Accessed: 13- Jun- 2020]
[10] "react-datepicker", npm. [Online]. Available: https://www.npmjs.com/package/react-datepicker. [Accessed: 13- Jun- 2020]
[11] "react-router-dom", npm. [Online]. Available: https://www.npmjs.com/package/react-router-dom. [Accessed: 13- Jun- 2020]
[12] "react-scripts", npm. [Online]. Available: https://www.npmjs.com/package/react-scripts. [Accessed: 13- Jun- 2020]
[13] "react-slick", npm. [Online]. Available: https://www.npmjs.com/package/react-slick. [Accessed: 13- Jun- 2020]
[14] "slick-carousel", npm. [Online]. Available: https://www.npmjs.com/package/slick-carousel. [Accessed: 13- Jun- 2020]
[15] "styled-components", npm. [Online]. Available: https://www.npmjs.com/package/styled-components. [Accessed: 13- Jun- 2020]
[16] "The Movie Database (TMDb)", Themoviedb.org. [Online]. Available: https://www.themoviedb.org/. [Accessed: 13- Jun- 2020]
[17] V. Code, "Visual Studio Code - Code Editing. Redefined", Code.visualstudio.com. [Online]. Available: https://code.visualstudio.com/. [Accessed: 13- Jun- 2020]
[18] "Google Maps Platform  |  Google Developers", Google Developers. [Online]. Available: https://developers.google.com/maps/documentation. [Accessed: 13- Jun- 2020]
[19] "HTML5", MDN Web Docs. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5. [Accessed: 13- Jun- 2020]