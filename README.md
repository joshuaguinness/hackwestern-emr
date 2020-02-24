# Electronic Medical Record

![Logo](emr-pictures/logo.png)

Developed an accessible, voice-enabled electronic medical record system which stores patients’ medical records, allows patients to fill out medical forms using speech-to-text, and provide an electronic voice signature. Our theme while building it was accessibility, hence the voice control integration, simple and easy to understand UI, and big, bold colours.

This project was inspired by Leon's father's first-hand experience with a lack of electronic medical records and realizing the need for more accessible patient experience.

The Devpost can be found here: https://devpost.com/software/medisign

A demonstration video showing the text-to-speech functionality can be found here: https://youtu.be/CzdRG3rPEl0

## How It Is Built

The front end is built on react-native, while the backend is built in node.js using MongoDB Atlas as our database. The backend was deployed on a Heroku instance also. For our speed to text processing, we used the Google Cloud Platform. We also used Twilio for our SMS reminder component.

## App Screenshots

Login screen and patient record form

<img src="https://github.com/joshuaguinness/hackwestern-emr/blob/master/emr-pictures/login.jpg" width="417" height="597"> <img src="https://github.com/joshuaguinness/hackwestern-emr/blob/master/emr-pictures/form.jpg" width="417" height="597">

List of patients in the database and possible actions to perform with a patient record

<img src="https://github.com/joshuaguinness/hackwestern-emr/blob/master/emr-pictures/patients.jpg" width="417" height="597"> <img src="https://github.com/joshuaguinness/hackwestern-emr/blob/master/emr-pictures/actions.jpg" width="417" height="597">

## Challenges We Ran Into (And how we solved them!)

There are three distinct challenges that we ran into. The first was trying to get Twilio to function correctly within the app. We were trying to use it on the frontend but due to the nature of react native, and some node.js libraries that were being used, it was not working. We solved the problem by deploying to a Heroku serving and making REST calls.

A second challenge was trying to get the database queries to work from our backend. Although everything seems right it still did not work but to do attention to detail, and going over code multiple times, the mistake was spotted and corrected.

The third and likely biggest challenge we faced was getting the speech to text streaming input to co-operate. In the beginning, it did not stop recording at the correct times and would capture a lot of noise from the background. This problem was eventually solved by redoing it by following a tutorial online.
