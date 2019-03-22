# NodeTestAPI

What you will need.

node version 10.14.2+

npm version 6.4.1+

1. Download or clone git repository.
2. Open terminal and change directory to root project folder. 
3. npm install
4. node server.js

Follow directions to run the web App.

Once the Node/Express API is being served to localhost:8080. You can send a post request to 

http://localhost:8080/api/banana/budget

With the following request body

{
	"startDate": "2-22-2019",
	"numberOfDays": 200
}

Most valid date formats are accepted, example: "2-22-2019", "2019-2-22", "February 22, 2019".
Number of days must be between 1 and 3650 days.

Now even YOU can budget for bananas at Bob's very specific grocery store...TODAY!

# NodeTestAPI
