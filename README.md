Instructions
Download the project

git clone https://github.com/HugoGeneroso/ChallengeRocketChat

Install dependencies:
npm install

Start the project or run the unit tests
npm run start

To run the unit tests:
npm test

To test the api Endpoint as stated on the bonus list on number 3:
npm start

Then you just need to make a POST request localhost:3000/analyzeTasks (I have used postman) with the parameter inputString as the input for the string that is going to be treated.

Aditional Info
Thanks for the opportunity to be with you guys!

ChallengeRocketChat
Challenge
Defined goal is to build high-quality training data to fuel AI applications by having users executing tasks like audio to text transcription, image categorization, sentiment annotation, among others. To complete this exercise write a program in JavaScript or TypeScript that calculates the average time spent executing tasks, broken down by user and by country.

In the first line of the input you can find the number of users in the platform (N). The following N lines contain the ID and country code for each user. Please note that the id of the user is numerical. The line after the ID and the country code of all users contains the number of tasks executed in the platform (T); followed by T lines containing the ID of the task, the ID of the user that executed it and the time spent in the task, in seconds.

The program should generate the following output
The average time spent by users
The average time spent by country
Each output should be sorted ascending
Users and countries without any mention should be included in the output
The average output should be rounded to the second decimal place
Requirements
Your project should be able to be imported as an NPM package (do not publish it)
Your package should export a method named analyzeTasks
Your method should receive only a string and return another string
The input and output format must be one record per line as shown on samples below
Your code should be in a private repository on Github and shared with:
https://github.com/rodrigok
https://github.com/sampaiodiego
Bonus
Unit tests, they should run via npm test
CLI file importing your method and reading the input, async, from a given txt file and printing the result
Add the instructions to test the CLI in your repository’s README
API endpoint analyze/tasks to receive input as POST body and return the output
Add the instructions to test the API in your repository’s README
Have your API running at https://vercel.com (it’s free for personal usage)
Add the instructions to test the API in your repository’s README
Surprise us!
Sample of the input format
2
1 PT
2 US
3
1 1 10
2 1 5
3 2 10
Sample of the output format
1 7.50
2 10.00
PT 7.50
US 10.00
