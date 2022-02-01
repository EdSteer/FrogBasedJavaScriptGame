# SEI-project-1

# A Vanilla JavaScript game
Deployed here on Github Pages - FrogBasedJavaScriptGame
Project 1: A Frog Based JavaScript game
For the first project of my SEI course I created a version of the 80s classic arcade game Frogger. When I created the game, we had only been looking at JavaScript for two weeks and as a complete newbie this proved to be a much harder project than I initially imagined. Also, I wanted to make a game that my 4 year old son could play, so simplicity of design and functionality were paramount. 
Brief
Requirements
Render a game in the browser.
Be built on a grid without use of HTML canvas.
1 week timeframe.
Design logic for winning & visually display which player won.
Include separate HTML / CSS / JavaScript files
Deploy game online

 
Technologies Used
*HTML5
*CSS3
*JavaScript
*Git
*GitHub
 
 
Planning
Having got over the initial terror of the thought of building a JavaScript game so early into my coding journey, I decided to go with my favourite of the games suggested. I’ve loved frogger since playing the Atari version in the 1980s and thought that my understanding of the game’s architecture would help me with this project. 
Firstly, I set about pseudocoding the game and working out just how many separate parts of code I would need to have a fully functioning game. 
Process
I started with the grid as that was the simplest part of the game architecture. We were not able to use an HTML canvas and had to build the grid from vanilla JavaScript.
***GRID CODE***
 
I then moved on to the movement of the frog. The frog has a starting index, and is able to move using the arrow keys - I used the index position & width to increase and decrease the current index, which moved the frog with keydown event listeners. I added some logic so that the frog doesn’t fall off the grid.
***FROG MOVEMENT CODE***
 
 
Next came the adding and moving of obstacles. Obstacles start at a hard coded index point and then this index point is incremented until they reach the end of their respective rows. 
***OBSTACLE MOVEMENT CODE***
Adding the all important collisions between the frog and the obstacles up and running proved tricky. A “collision” needed to occur whenever the frog shared the same grid as a moving or static obstacle. If the frog collides with an obstacle, the player loses a life and the frog returns to the start position.
***COLLISION CODE***
Once I had the collisions sorted out I needed to add scoring and a timer. I wanted to give a score of 100 points (to a maximum of 300) every time the frog reaches a lily pad and then automatically move the frog back to it’s starting position.
***SCORE CODE***
I made a simple countdown timer that ends the game after 30 seconds.

***TIMER CODE***

 
Wins, fails and takeaways.
The main difficulty I had was the movement of the obstacles - this is something that I spent a lot of time on and tried different solutions. I had to rewrite the way I added the obstacles in the first place in order to be able to simplify the way the movement worked. I also had trouble with the collision logic and the time spent on that led to me having to discard some features. 
The wins were getting the main game logic working after I got over the obstacles moving block and then adding the collision code.
The purpose of this project was to cement the basic concepts of HTML/CSS, JavaScript and DOM manipulation. I feel that the week spent building the game helped me to get my head around JavaScript (to a degree) and going from examples in the class to “real world” usage of my knowledge was invaluable.
Also, getting dropped into the frying pan with minimal knowledge helped me understand how to approach problems and how to utilise the information and knowledge I had been given on the course.
There were many moments where the project came to a standstill and I had to learn how to reach out to ask for help. The knowledge imparted to me from my course instructors and TAs was the difference between getting a playable game finished in time or just handing in some images of a frog!
 
Future content
Add sound.
Extra levels.
Auto generated boards.
Two player mode on the same computer: players take turns, the first to lose more lives across a whole game loses.
High score board with localStorage.
 
