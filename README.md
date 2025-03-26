# AceTrainer v2

In AceTrainer v2, the concept will be fleshed out and new gameplay mechanics will be added to the main page, as well as an additional page handling persistent data: the Leaderboard. 

On the main trainer page, there will be three modes of play: Classic, Arcade, and Zen. In Classic mode, the user wil be given either a certain amount of seconds to click as many circles as they can; either 10, 30, or 60. In Arcade, there will be a timing window that gets tighter and tighter as the player clicks more circles; Play will halt when the user misses the timing window. Zen mode is the endless mode; no timing window, no time limit.

After a user is done playing 1 round of their chosen mode, they will be asked to submit their score in an arcade-like fashion, simply asking for a username. The username and the score attached to it will then be uploaded to a database, where it becomes persistent data for all users to see. 

## Persistent data

Type of Data: Leaderboard entry <br> 
Purpose: For tracking scores & the usernames attached to them<br> 
JSON Structure:<br> 
```js
leaderboardEntry {
   username: text-string,
   score: number,
   mode: text-string,
   timestamp: date
}
```

## Wireframe
Main page (mode select) <br>
![Main page wireframe](https://media.discordapp.net/attachments/1145631599329816676/1354452933084708955/modeSelect.png?ex=67e55817&is=67e40697&hm=d71e633442f965bcfb2a61ef916e18b8bb812d10712879ad4a7ab78870af8026&=&format=webp&quality=lossless&width=1423&height=800) <br>
Main page (game over) <br>
![Game over wireframe](https://media.discordapp.net/attachments/1145631599329816676/1354450699479547935/gameOver.png?ex=67e55603&is=67e40483&hm=86843b2bf108974b2fddf9c81f635f4b60cc540165144224dab34a7a336e5512&=&format=webp&quality=lossless&width=1423&height=800) <br>
Leaderboard <br>
![Leaderboard wireframe](https://media.discordapp.net/attachments/1145631599329816676/1354450699806576810/leaderboard.png?ex=67e55603&is=67e40483&hm=bf7a7054a31d10790644db695332bc1737908629f33e5aacf96e44f388aadf57&=&format=webp&quality=lossless&width=1423&height=800) <br>

# AceTrainer v1

AceTrainer is a small website meant to help first-person shooter (FPS) players train their aim. Inspired by websites such as [Aim Trainer](aimtrainer.io), it contains a homepage, the main aim training page where the actual client-side game is run, and an about page where the users can learn about us, the creators. :D

## Outline

![Outline](https://cdn.glitch.global/a9413874-f915-45a1-b999-184de4854695/Homepage.png?v=1731943452807)


## JS Implementation

The main JavaScript implementation will be on the webpage designated as "Aim Trainer" in the outline. As the name suggests, it will feature a game where users can play a point-and-click game to train their aim for shooter games.

## Wireframe
Homepage 
![Hompeage Wireframe](https://cdn.glitch.global/a9413874-f915-45a1-b999-184de4854695/homepagewireframe.png?v=1734624045670)
Aim Trainer 
![Aim Trainer Wireframe](https://cdn.glitch.global/a9413874-f915-45a1-b999-184de4854695/aimtrainerwireframe.png?v=1734624631551)
About Page
![About Page Wireframe](https://cdn.glitch.global/a9413874-f915-45a1-b999-184de4854695/aboutwireframe.png?v=1734624637725)


