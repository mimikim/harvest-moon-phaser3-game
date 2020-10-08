/**
 * object of animal dialog
 */

const dialogAnimals = {
  // finding the baby cow opens up additional dialog
  foundBabyCow: false,

  cow1: {
    default: [
      "Mooooo",
      "MOOOOOoooo...."
    ],
    additional: [
      "Thank you for finding my baby.",
      "I spotted a cave elf sneaking a peak at us! I think they like cows... :)",
      "Milk is for my baby. Thanks for not taking it from me."
    ]
  },
  cow2: {
    default: [
      "Moo....",
      "Moooo...????"
    ],
    additional: [
      "My favorite thing is to lie in the sun.",
      "Sometimes, the chickens like sit on my back. I don't mind it.",
      "This place is so much better than the dairy farm."
    ]
  },
  cow3: {
    default: [
      "Eum-maeeeeee."
    ],
    additional: [
      "I'm a Korean cow. Did you know that?",
      "The weather today is lovely. Please have a relaxing day!"
    ]
  },
  cowBaby: {
    default: [],
    additional: [
      "I'm hungry! Where's my mommy?",
      "The cave elves kept good care of me. Sometimes they come visit!"
    ]
  },

  chicken1: {
    default: [],
    additional: []
  },
  chicken2: {
    default: [],
    additional: []
  },
  chicken3: {
    default: [],
    additional: []
  },
  chicken4: {
    default: [],
    additional: []
  },
  chick1: {
    default: [],
    additional: []
  },
  chick2: {
    default: [],
    additional: []
  },
  chick3: {
    default: [],
    additional: []
  },

  dog: {
    default: [
      "Woof woof!",
      "Bark...",
      "Mung mung~",
    ],
    additional: [
      "I will protect the baby cow! Bark bark bark!",
      "The other day, I was exploring and found a cave elf. He ran away when he saw me.",
      "Bark bark bark bark, how come you can understand animals now...",
    ]
  },

  horse: {
    default: [
      "Neighhhh..."
    ],
    additional: [
      "My back feels better without a saddle..",
      "I ran so much the other day!"
    ]
  }

};

export default dialogAnimals;
