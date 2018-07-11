## How to clone and install. 
1) open command prompt and type: $ cd desktop.
2) git clone https://github.com/gpriyanshu/chat-app.git (if git is not install then install it from here. https://git-scm.com/downloads )
3) $ cd chat-app
4) now, $ npm install (if node.js and npm is not install then install it from here https://www.npmjs.com/get-npm)
5) $ npm install --save pusher-chatkit-server
6) $ npm install --save @pusher/chatkit
7) $ npm start
Note:  Dont type $.

This webpage is created with chatkit service which is provided by pusher. you can see it from https://pusher.com/chatkit . 
For documentation - https://docs.pusher.com/chatkit .

## What is Chatkit?
Chatkit is a hosted API that helps you build impressive chat features into your applications with less code. 
Features that are used in the web app are:

    1)Group chat
    2)Typing indicators
    3)Who's online" presence
    4)it's shows history upto 100 messages.
    
    
## This web app is divided into 5 small module :
1) UsernameForm :  This is part of front page where user has to submit their username to enter into chat room.


2) SendMessageForm : By use of SendMessageForm feature whatever text user will type it will send to Message list.

3) TypingIndicator : It shows , which user is typing. 

4) MessageList : It shows the history of messages.

5) WhosOnlineList : This shows who is online and it covers the left side of web page.


For managing the database,rooms and users we have to create a instance of Chatkit.
which will provide instance Locator and Secret Key by which we can handle the record of each user and rooms by using instance inspector.


