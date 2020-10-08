# harvest-moon-phaser3-game

[Click Here to Play The Game!](https://mimikim.github.io/harvest-moon-phaser3-game/)

You are Jack. You inherited a large plot of land from your dead grandfather, which you have converted into a homestead to grow crops for the nearby town and provide a safe place for rescued farm animals to live.

You are getting ready for the upcoming festival and need to collect supplies for decorations and food. You will have 5 days to get everything together, with the festival happening on the 6th day. 

In order to get everything you need, you will need to travel into the mountains and caves each day to search for items, as different items will spawn randomly on each day. However, all the items you need **will** spawn over the course of 5 days, so don't worry.

Sometimes, you will need to run errands for townsfolk in order to get some items. You will also need to feed your animals daily. Helping townsfolk will increase their friendship and may influence what happens during the festival!

At the end of the game, you will be scored based on whether you completed your tasks, how happy your animals are, and how happy the townspeople are. Different events and dialogue may happen during the festival based on your score.

This is a pacifist game. You cannot use any animal products nor attack anyone. You will have the choice of being mean, but your score will be adversely affected with each mean action you choose. Your animals can be found roaming freely around the homestead, rather than trapped in cages. Helping out the forest spirits will give you useful boosts.

## Gameplay:

Using the Arrow Keys will move Jack around the map.

Pressing "SELECT" will bring up a list of tasks that need to be completed before the festival, as well as a list of your animals and their hungry/happy status. Animals will remain in their relative locations each day, so you don't have to worry about searching for them all over the map.

Pressing "SPACE BAR" next to an item or animal or person will initiate the proper action, whether that is picking up an item, harvesting a crop, feeding an animal, or talking to a person. No need to switch between equipped items like you would in the original game! Make sure you are facing the item you want to interact with.

## Game Notes:

Overview:

|      |   cliff    |      |
|------|------------|------|
|      |  mountain  |      |
| town | crossroads | farm |

Both the Mountain and Farm maps contain access to Underground Caves. There are 2 different Cave maps.

Herbs, flowers, and wild fruit will randomly spawn in the mountains and caves. Mushrooms only grow in the underground caves.

### Tasks

Your list of tasks when first starting the game:
- Collect 6 Berry of Wild Grapes
- Collect 6 Summer fruits
- Collect 10 Power berries
- Find the lost baby cow (helps locate the hidden cave on the farm map and opens up new dialog with animals)
- Collect 10 flowers of any kind (this will affect decorations during the festival)

Tasks you can get from townspeople:
- Release captive fish back into the mountain springs
- Pick a special flower from the mountain and deliver a love letter to Nina from a secret admirer
- Collect 4 mushrooms and 3 poison mushrooms for the Fortune Teller
- Collect food items (dumpling, croissant, riceball, and cake) from the townsfolk as a peace offering to the cave elves
- Deliver 10 potatoes, 10 turnips, 10 corn, and 10 tomatoes to Ellen so that she can cook a veggie meal

Special tasks from the forest spirits:
- Find and restore the Chicken Spirit statue (permanent walking speed boost)
- Convince the forest loggers to leave the mountains (your choice affects festival events)
- Plant seeds around the mountain where the elves are standing to help restore the forest (completion summons the Goddess, who will have her own task for you)

### Scores
Scores range from 0-100, 100 being perfect.

- Bad Ending: 0 - 25
- Okay Ending: 26 - 50
- Good Ending: 51 - 75
- Great Ending: 76 - 99
- Perfect Ending: 100

In order to get the perfect score, you need to:

- Complete all tasks, as listed above (5 tasks for 5 points each, 25 total points possible)
- Complete all townspeople tasks, as listed above (5 tasks for 5 points each, 25 total points possible)
- Feed and talk to your animals daily (1 points for each animal, per day. 8 animals for 5 days for 40 points)
    - 3 adult cows, 1 baby cows, 4 chickens
- Complete all forest spirit tasks successfully. (3 tasks for 3 points each, then 1 more point on completion after blessing from the Goddess)

## Developer Notes:

This game is my second time ever using the [Phaser 3](https://phaser.io/phaser3) game engine, the first time being for a Flash-to-HTML5 conversion project at work. I am making use of the [Phaser3 + Parcel Template](https://github.com/ourcade/phaser3-parcel-template) to bundle and build the game. I am using [Tiled](https://www.mapeditor.org/) to create each map.

If spinning up the game locally, clone this repo and run `npm install`. Make sure you have **Node.JS**, **npm**, and **Parcel** installed. If you don't, install those first.

Running `npm run start`. will spin up a development instance, and running `npm run build` will create a production-ready copy.

The production assets build into the `/docs/` folder so that it can be deployed via Github Pages. The URL path for the assets have been specifically set so that it works with this Github repo. When working locally, a folder called `/dist/` will be created. You can access this at: `http://localhost:8000/`

Since the production build is to be work with Github Pages, the asset url paths are all prefixed with this repo name.

This game concept has grown from a simple exercise to something more substantial, so I guess at some point I should figure out how to do save states...

### Final Thoughts:

So, obviously I love Harvest Moon because I have clearly spent an incredible amount of time turning these sprites into spritesheets.

The game music is all midi files from [Video Game Music Archive](https://www.vgmusic.com/).

Some character assets came from [The Spriters Resource](https://www.spriters-resource.com/snes/harvestmoon/), but many of them aren't proportioned equally, so I had to take time to re-draw the sprites to make sure each pixel in each sprite was the correct size. The backgrounds or other items, such as the food items, nature items, and misc, come from directly ripping them with an emulator. I use ZSNES.

The tilemaps are all my own work, spending hours in [Tiled](https://www.mapeditor.org/) to create each map and layer.

Please feel free to use these spritesheets in your own project! :slightly_smiling_face:
