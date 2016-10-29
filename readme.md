# Week 7 Assignment - Train Scheduler (Easier)

##### *Because that Rock Paper Scissors Game is Too Damn Hard*

### Overview
In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

-----

### Setup
* We'll leave that up to you -- however you like. Just make sure you're using Firebase to store data, GitHub to backup your project, and Heroku to host your finished site.

### Instructions
* Make sure that your app suits this basic spec:
	* When adding trains, administrators should be able to submit the following:
		* Train Name
		* Destination 
		* First Train Time -- in military time
		* Frequency -- in minutes

	* Code this app to calculate when the next train will arrive; this should be relative to the current time.

	* Users from many different machines must be able to view same train times.

  * Styling and theme are completely up to you. Get Creative!

### Example Site
![train homework](Train_Time_Image.png)

### Bonus (Extra Challenges)
* Consider updating your "minutes to arrival" and "next train time" text once every minute. This is significantly more challenging; only attempt this if you've completed the actual activity and committed it somewhere on GitHub for safekeeping (and maybe create a second GitHub repo).

* Try adding `update` and `remove` buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).

* As a final challenge, make it so that only users who log into the site with their Google or GitHub accounts can use your site. You'll need to read up on Firebase authentication for this bonus exercise.

-------
### One More Thing
If you have any questions about this project or about the material we covered, the instructor and your TAs are only a Slack message away.

**Good Luck!**

## Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.

# Week 7 Assignment - Rock Paper Scissors

##### *RPS? Again?! Whaaaat?!!*

### Overview
In this assignment, you'll indeed create another Rock Paper Scissors game. The catch? You're going to make this an online multiplayer game, all with the help of Firebase (and the rest of your web development repertoire)!

### Remember

* You will be fully capable of doing this homework by the end of Saturday's class.

### Some Notes Before you begin

* Whether you finish the game or not, you must hand in your code by 8/17 or 8/18 to avoid having your work marked incomplete. We don't expect every student to finish this assignment. Still, we do want to see you program this game as best you can.

### When Should You Be an Expert with the Concepts from This Homework?

By Week 9. Try your *absolute best* to finish this homework. Remember: you have two weeks to ace this exercise.

### Setup
1. Create a GitHub repo called `RPS-Multiplayer` and clone it to your computer.

2. Create a file inside of your `RPS-Multiplayer` folder called `index.html`. This is where your page's HTML will go.
  * Don't forget to include [jQuery](https://code.jquery.com/jquery-2.2.1.min.js) and [Firebase](https://cdn.firebase.com/js/client/2.4.1/firebase.js).

3. Inside `RPS-Multiplayer`, create your `assets` directory.
  * Create the folders and files you typically place in `assets` -- just like you had for the prior weeks' homework assignments.

### Instructions

* Create a game that suits this user story:
  * Only two users can play at the same time.

  * Both players pick either `rock`, `paper` or `scissors`. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.

  * The game will track each player's wins and losses.

  * Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.

  * Styling and theme are completely up to you. Get Creative!

-------

### Additional Practice and Support

* If you find your skills lacking in any of the subjects we taught you, look at your instructor's in class repository. 

  * Find the exercises that you did in class and redo them from scratch. It might seem redundant at first, but this will help edify the material.

  * You can also watch videos of this all of our past lectures--we've saved these to the repo.

* Like always, feel free to contact either your instructor or a TA if you'd like some one-on-one support. 
 
  **Good Luck!**

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.


