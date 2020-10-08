// list of all Tasks

let tasks = {
  // daily talking/feeding your animals
  animalTasksValue: 1,
  animalTasks: {
    cow1: {
      feed: false,
      talk: false
    },
    cow2: {
      feed: false,
      talk: false
    },
    cow3: {
      feed: false,
      talk: false
    },
    cowBaby: {
      feed: false,
      talk: false
    },
    chicken1: {
      feed: false,
      talk: false
    },
    chicken2: {
      feed: false,
      talk: false
    },
    chicken3: {
      feed: false,
      talk: false
    },
    chicken4: {
      feed: false,
      talk: false
    },
  },

  // default tasks you start out with
  defaultTasksValue: 5,
  defaultTasks: [
    {
      instruction: 'Collect 6 Berry of Wild Grapes',
      complete: false,
      data: {}, // for tracking things
    },
    {
      instruction: 'Collect 6 Summer fruits',
      complete: false,
      data: {}, // for tracking things
    },
    {
      instruction: 'Collect 10 Power berries',
      complete: false,
      data: {}, // for tracking things
    },
    {
      // (helps locate the hidden cave on the farm map and opens up new dialog with animals)
      instruction: 'Find the lost baby cow',
      complete: false,
      data: {}, // for tracking things
    },
    {
      // (this will affect decorations during the festival)
      instruction: 'Collect 10 flowers of any kind',
      complete: false,
      data: {}, // for tracking things
    },
  ],

  // townspeople tasks
  townTasksValue: 5,
  townTasks: [
    {
      instruction: 'Release captive fish back into the mountain springs',
      complete: false,
      data: {}, // for tracking things
    },
    {
      instruction: 'Pick a special flower from the mountain and deliver a love letter to Nina from a secret admirer',
      complete: false,
      data: {}, // for tracking things
    },
    {
      instruction: 'Collect 4 mushrooms and 3 poison mushrooms for the Fortune Teller',
      complete: false,
      data: {}, // for tracking things
    },
    {
      // (dumpling, croissant, riceball, and cake)
      instruction: 'Collect food items from the townsfolk as a peace offering to the cave elves',
      complete: false,
      data: {}, // for tracking things
    },
    {
      instruction: 'Deliver 10 potatoes, 10 turnips, 10 corn, and 10 tomatoes to Ellen so that she can cook a veggie meal',
      complete: false,
      data: {}, // for tracking things
    },
  ],

  // forest spirits tasks, these can start after finding the baby cow
  forestTasksValue: 3,
  forestTasks: [
    {
      // (permanent walking speed boost)
      instruction: 'Find and restore the Chicken Spirit statue',
      complete: false,
      data: {}, // for tracking things
    },
    {
      // (your choice affects festival events)
      instruction: 'Convince the forest loggers to leave the mountains',
      complete: false,
      data: {}, // for tracking things
    },
    {
      // (completion summons the Goddess who )
      instruction: 'Plant seeds around the mountain where the elves are standing to help restore the forest',
      complete: false,
      data: {}, // for tracking things
    },
  ],

};

export default tasks;
