https://rexrainbow.github.io/phaser3-rex-notes/docs/site/
https://photonstorm.github.io/phaser3-docs/
http://labs.phaser.io/

1 pixel is 5x5

dialog box tabs:

- 1) Animal Status : whether you've fed and talked to your animal today
- 2) Tasks : list of active tasks
- 3) Completed Tasks : list of completed tasks

Phaser scene object properties:

- MAP: contains Map object

- ANIMS: stores animations, maybe split this and put into each sprite obj
    - animationAction: stores action animation to play on SPACE press
    - pressedCursor: // keeps track of what cursor was pressed previously

- PLAYER / Jack

- SPRITES: stores all sprites including Jack/Player
    - NPCs
        - Townsfolk:
            - Ann
            - Ellen
            - Nina
            - Eve
            - FortuneTeller
            - Florist
            - Mayor
            - MayorsWife
            - RestaurantOwner
        - MountainMen:
            - woodsman1
            - woodsman2
            - woodsman3
        - CaveElves
            - caveElf1
            - caveElf2
            - caveElf3
            - caveElf4
            - caveElf5
        - ForestSpirits
            - forestSpirit
            - Goddess

        - Animals
            - cow1
            - cow2
            - cow3
            - cowBaby
            - chicken1
            - chicken2
            - chicken3
            - chicken4
            - chick1
            - chick2
            - chick3
            - dog
            - horse

- BTNS: stores all interactable buttons
    - taskBtn
    - taskBtnInactive
    - statusBtn
    - statusBtnInactive
    - closeBtn
    - scrollBtn

- MODAL: everything that manages the box
    - mask
    - maskBox
    - textbox
    - box

- UTILITY: managers and loaders
    - BoxManager
    - ImageLoader
    - ObjectLoader

