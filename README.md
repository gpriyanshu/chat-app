# How to clone and install.
1) open command prompt and type: cd desktop.
2) git clone https://github.com/gpriyanshu/chat-app.git (if git is not install then install it from here. https://git-scm.com/downloads )
3) cd chat-app
4) now, npm install (if node.js and npm is not install then install it from here https://www.npmjs.com/get-npm)
5) npm install --save pusher-chatkit-server
6) npm install --save @pusher/chatkit
7) npm start

This webpage is created with chatkit service which is provided by pusher. you can see it from https://pusher.com/chatkit . 
For documentation - https://docs.pusher.com/chatkit .
This is a very simple web page. where user can come and chat together in a group. It has a feature like when multiple  user are online at then they can easily identify who is online another feature is when user is typing then another can easily identify who is online.
## What is Chatkit?
Chatkit is a hosted API that helps you build impressive chat features into your applications with less code. 
Features that are used in the web app are:

    1)Group chat
    2)Typing indicators
    3)Who's online" presence
    4)it's shows history upto 100 messages.
    
    
## this web app is divided into module is divided into 5 small module :
1) UsernameForm :  This is part of front page where user has to submit their username to enter into chat room.


2) SendMessageForm :

3) TypingIndicator :

4) MessageList :

5)WhosOnlineList :



