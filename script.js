const monsters = [
  {
    Name: "Wraith",
    Type: "undead",
    HP: 67,
    AC: 13,
    Challenge: "5",
    Speed: ["0 ft.", "fly 60 ft. (hover)"],
    Abilities: {
      Str: 6,
      Dex: 16,
      Con: 16,
      Int: 12,
      Wis: 14,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["necrotic", "poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Traits: [
      {
        Name: "Incorporeal Movement",
        Content:
          "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Life Drain",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
        Usage: "",
      },
      {
        Name: "Create Specter",
        Content:
          "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Veteran",
    Type: "humanoid",
    HP: 58,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 13,
      Con: 14,
      Int: 10,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: [],
    Challenge: "3",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
        Usage: "",
      },
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Heavy Crossbow",
        Content:
          "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Ancient Black Dragon",
    Type: "dragon",
    HP: 367,
    AC: 22,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 27,
      Dex: 14,
      Con: 25,
      Int: 16,
      Wis: 15,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 9,
      },
      {
        Name: "Con",
        Modifier: 14,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 11,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 16,
      },
      {
        Name: "Stealth",
        Modifier: 9,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "21",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 20 ft ., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Acid Breath (Recharge 5-6)",
        Content:
          "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "chaotic evil",
  },
  {
    Name: "Kuo-Toa Monitor",
    Type: "humanoid",
    HP: 65,
    AC: 13,
    Speed: ["33 ft.", "swim 30 ft."],
    Abilities: {
      Str: 14,
      Dex: 10,
      Con: 14,
      Int: 12,
      Wis: 14,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Religion",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The kuo-toa can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Otherwordly Perception",
        Content:
          "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving.",
        Usage: "",
      },
      {
        Name: "Slippery",
        Content:
          "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Unarmored Defense",
        Content: "The kuo-toa adds its Wisdom modifier to its armor class.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The kuo-toa makes one bite attack and two unarmed strikes.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Unarmed Strike",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage plus 3 (1d6) lightning damage, and the target can't take reactions until the end of the kuo-toa's next turn.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Rat",
    Type: "beast",
    HP: 1,
    AC: 10,
    Speed: ["20 ft."],
    Abilities: {
      Str: 2,
      Dex: 11,
      Con: 9,
      Int: 2,
      Wis: 10,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 30 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Flumph",
    Type: "aberration",
    HP: 7,
    AC: 12,
    Speed: ["5 ft.", "fly 30 ft."],
    Abilities: {
      Str: 6,
      Dex: 15,
      Con: 10,
      Int: 14,
      Wis: 14,
      Cha: 11,
    },
    DamageVulnerabilities: ["psychic"],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 4,
      },
      {
        Name: "History",
        Modifier: 4,
      },
      {
        Name: "Religion",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Advanced Telepathy",
        Content:
          "The flumph can perceive the content of any telepathic communication used within 60 feet of it, and it can't be surprised by creatures with any form of telepathy.",
        Usage: "",
      },
      {
        Name: "Prone Deficiency",
        Content:
          "If the flumph is knocked prone, roll a die. On an odd result, the flumph lands upside-down and is incapacitated. At the end of each of its turns, the flumph can make a DC 10 Dexterity saving throw, righting itself and ending the incapacitated condition if it succeeds.",
        Usage: "",
      },
      {
        Name: "Telepathic Shroud",
        Content:
          "The flumph is immune to any effect that would sense its emotions or read its thoughts, as well as all divination spells.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Tendrils",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage plus 2 (1d4) acid damage. At the end of each of its turns, the target must make a DC 10 Constitution saving throw, taking 2 (1d4) acid damage on a failure or ending the recurring acid damage on a success. A lesser restoration spell cast on the target also ends the recurring acid damage.",
        Usage: "",
      },
      {
        Name: "Stench Spray (1/Day)",
        Content:
          "Each creature in a 15-foot cone originating from the flumph must succeed on a DC 10 Dexterity saving throw or be coated in a foul-smelling liquid. A coated creature exudes a horrible stench for 1d4 hours. The coated creature is poisoned as long as the stench lasts, and other creatures are poisoned while with in 5 feet of the coated creature. A creature can remove the stench on itself by using a short rest to bathe in water, alcohol, or vinegar.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "lawful good",
  },
  {
    Name: "Giant Vulture",
    Type: "beast",
    HP: 22,
    AC: 10,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 15,
      Dex: 10,
      Con: 15,
      Int: 6,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "1",
    Traits: [
      {
        Name: "Keen Sight and Smell",
        Content:
          "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The vulture makes two attacks: one with its beak and one with its talons.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Talons",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "neutral evil",
  },
  {
    Name: "Iymrith, Ancient Blue Dragon",
    Type: "dragon",
    HP: 481,
    AC: 22,
    Speed: ["40 ft.", "burrow 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 29,
      Dex: 10,
      Con: 27,
      Int: 18,
      Wis: 17,
      Cha: 21,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 15,
      },
      {
        Name: "Wis",
        Modifier: 10,
      },
      {
        Name: "Cha",
        Modifier: 12,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 17,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "23",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "Iymrith's innate spellcasting ability is Charisma (spell save DC 20).  Iymrith's stone shape can create a living gargoyle instead of altering the stone as described in the spell description. She can innately cast the following spells, requiring no material components: nn1/day: counterspell, detect magic, ice storm, stone shape, teleport",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Lightning Breath (Recharge 5-6)",
        Content:
          "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "Iymrith magically polymorphs into a female storm giant or back into her true form. She reverts to her true form if she dies. Any equipment she is wearing or carrying is absorbed or borne by the new form (the dragon's choice).nIn storm giant form, Iymrith retains her alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Her statistics are otherwise replaced by those of the new form.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "G",
    Alignment: "lawful evil",
  },
  {
    Name: "Aboleth",
    Type: "aberration",
    HP: 135,
    AC: 17,
    Speed: ["10 ft.", "swim 40 ft."],
    Abilities: {
      Str: 21,
      Dex: 9,
      Con: 15,
      Int: 18,
      Wis: 15,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Int",
        Modifier: 8,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "History",
        Modifier: 12,
      },
      {
        Name: "Perception",
        Modifier: 10,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "10",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The aboleth can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Mucous Cloud",
        Content:
          "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
        Usage: "",
      },
      {
        Name: "Probing Telepathy",
        Content:
          "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The aboleth makes three tentacle attacks.",
        Usage: "",
      },
      {
        Name: "Tentacle",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Enslave (3/day)",
        Content:
          "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The aboleth makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Swipe",
        Content: "The aboleth makes one tail attack.",
        Usage: "",
      },
      {
        Name: "Psychic Drain (Costs 2 Actions)",
        Content:
          "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
        Usage: "",
      },
    ],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Djinni",
    Type: "elemental",
    HP: 161,
    AC: 17,
    Speed: ["30 ft.", "fly 90 ft."],
    Abilities: {
      Str: 21,
      Dex: 15,
      Con: 22,
      Int: 15,
      Wis: 16,
      Cha: 20,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning", "thunder"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "11",
    Traits: [
      {
        Name: "Elemental Demise",
        Content:
          "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no material components: nnAt will: detect evil and good, detect magic, thunderwave 3/day each: create food and water (can create wine instead of water), tongues, wind walkn1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift",
        Usage: "",
      },
      {
        Name: "Variant: Genie Powers",
        Content:
          "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.nnDisguises.nSome genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.nWishes.nThe genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.nTo be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The djinni makes three scimitar attacks.",
        Usage: "",
      },
      {
        Name: "Scimitar",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice).",
        Usage: "",
      },
      {
        Name: "Create Whirlwind",
        Content:
          "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.nA creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic good",
  },
  {
    Name: "Mezzoloth",
    Type: "fiend",
    HP: 75,
    AC: 18,
    Speed: ["40 ft."],
    Abilities: {
      Str: 18,
      Dex: 11,
      Con: 16,
      Int: 7,
      Wis: 10,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["acid", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The mezzoloth's innate spellcasting ability is Charisma (spell save DC 11). The mezzoloth can innately cast the following spells, requiring no material components: nn2/day each: darkness, dispel magicn1/day: cloudkill",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The mezzoloth has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The mezzoloth's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The mezzoloth makes two attacks: one with its claws and one with its trident.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Trident",
        Content:
          "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage when held with two claws and used to make a melee attack.",
        Usage: "",
      },
      {
        Name: "Teleport",
        Content:
          "The mezzoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Yugoloth (1/Day)",
        Content:
          "The yugoloth attempts a magical summoning.nA mezzoloth has a 30 percent chance of summoning one mezzoloth.nA summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, does as it pleases, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Goristro",
    Type: "demon",
    HP: 310,
    AC: 19,
    Speed: ["40 ft."],
    Abilities: {
      Str: 25,
      Dex: 11,
      Con: 15,
      Int: 6,
      Wis: 13,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Str",
        Modifier: 13,
      },
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 13,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "17",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the goristro moves at least 15 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38 (7d10) piercing damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be pushed up to 20 feet away and knocked prone.",
        Usage: "",
      },
      {
        Name: "Labyrinthine Recall",
        Content: "The goristro can perfectly recall any path it has traveled.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The goristro has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Siege Monster",
        Content: "The goristro deals double damage to objects and structures.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The goristro makes three attacks: two with its fists and one with its hoof.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Hoof",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (3d10 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Gore",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 45 (7d10 + 7) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "chaotic evil",
  },
  {
    Name: "Young Red Shadow Dragon",
    Type: "dragon",
    HP: 178,
    AC: 18,
    Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 23,
      Dex: 10,
      Con: 21,
      Int: 14,
      Wis: 11,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["necrotic"],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Con",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 8,
      },
      {
        Name: "Stealth",
        Modifier: 8,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "13",
    Traits: [
      {
        Name: "Living Shadow",
        Content:
          "While in dim light or darkness, the dragon has resistance to damage that isn't force, psychic, or radiant.",
        Usage: "",
      },
      {
        Name: "Shadow Stealth",
        Content:
          "While in dim light or darkness, the dragon can take the Hide action as a bonus action.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the dragon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) necrotic damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Shadow Breath (Recharge 5-6)",
        Content:
          "The dragon exhales shadowy fire in a 30-foot cone. Each creature in that area must make a DC 18 Dexterity saving throw, taking 56 (16d6) necrotic damage on a failed save, or half as much damage on a successful one. A humanoid reduced to 0 hit points by this damage dies, and an undead shadow rises from its corpse and acts immediately after the dragon in the initiative count. The shadow is under the dragon's control.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Spined Devil",
    Type: "devil",
    HP: 22,
    AC: 13,
    Speed: ["20 ft.", "fly 40 ft."],
    Abilities: {
      Str: 10,
      Dex: 15,
      Con: 12,
      Int: 11,
      Wis: 14,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the devil's darkvision.",
        Usage: "",
      },
      {
        Name: "Flyby",
        Content:
          "The devil doesn't provoke an opportunity attack when it flies out of an enemy's reach.",
        Usage: "",
      },
      {
        Name: "Limited Spines",
        Content:
          "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The devil has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Fork",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Tail Spine",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 20/80 ft ., one target. Hit: 4 (1d4 + 2) piercing damage plus 3 (1d6) fire damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "lawful evil",
  },
  {
    Name: "Zombie",
    Type: "undead",
    HP: 22,
    AC: 8,
    Speed: ["20 ft."],
    Abilities: {
      Str: 13,
      Dex: 6,
      Con: 16,
      Int: 3,
      Wis: 6,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Wis",
        Modifier: 0,
      },
    ],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Undead Fortitude",
        Content:
          "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "neutral evil",
  },
  {
    Name: "Swarm of Quippers",
    Type: "swarm",
    HP: 28,
    AC: 13,
    Speed: ["0 ft.", "swim 40 ft."],
    Abilities: {
      Str: 13,
      Dex: 16,
      Con: 9,
      Int: 1,
      Wis: 7,
      Cha: 2,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Blood Frenzy",
        Content:
          "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
        Usage: "",
      },
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
      {
        Name: "Water Breathing",
        Content: "The swarm can breathe only underwater.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Riding Horse",
    Type: "beast",
    HP: 13,
    AC: 10,
    Speed: ["60 ft."],
    Abilities: {
      Str: 16,
      Dex: 10,
      Con: 12,
      Int: 2,
      Wis: 11,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Tiger",
    Type: "beast",
    HP: 37,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 17,
      Dex: 15,
      Con: 14,
      Int: 3,
      Wis: 12,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Pounce",
        Content:
          "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Fly",
    Type: "beast",
    HP: 19,
    AC: 11,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 14,
      Dex: 13,
      Con: 13,
      Int: 2,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "0",
    Traits: [],
    Actions: [],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Merrow",
    Type: "monstrosity",
    HP: 45,
    AC: 13,
    Speed: ["10 ft.", "swim 40 ft."],
    Abilities: {
      Str: 18,
      Dex: 10,
      Con: 15,
      Int: 8,
      Wis: 10,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The merrow can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The merrow makes two attacks: one with its bite and one with its claws or harpoon.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Harpoon",
        Content:
          "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Lich",
    Type: "undead",
    HP: 135,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 16,
      Con: 16,
      Int: 20,
      Wis: 14,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold", "lightning", "necrotic"],
    DamageImmunities: [
      "poison",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned",
    ],
    Saves: [
      {
        Name: "Con",
        Modifier: 10,
      },
      {
        Name: "Int",
        Modifier: 12,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 18,
      },
      {
        Name: "History",
        Modifier: 12,
      },
      {
        Name: "Insight",
        Modifier: 9,
      },
      {
        Name: "Perception",
        Modifier: 9,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "21",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the lich fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Rejuvenation",
        Content:
          "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared: nn• Cantrips (at will): mage hand, prestidigitation, ray of frostn• 1st level (4 slots): detect magic, magic missile, shield, thunderwaven• 2nd level (3 slots): detect thoughts, invisibility, Melf's acid arrow, mirror imagen• 3rd level (3 slots): animate dead, counterspell, dispel magic, fireballn• 4th level (3 slots): blight, dimension doorn• 5th level (3 slots): cloudkill, scryingn• 6th level (1 slot): disintegrate, globe of invulnerabilityn• 7th level (1 slot): finger of death, plane shiftn• 8th level (1 slot): dominate monster, power word stunn• 9th level (1 slot): power word kill",
        Usage: "",
      },
      {
        Name: "Turn Resistance",
        Content:
          "The lich has advantage on saving throws against any effect that turns undead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Paralyzing Touch",
        Content:
          "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Cantrip",
        Content: "The lich casts a cantrip.",
        Usage: "",
      },
      {
        Name: "Paralyzing Touch (Costs 2 Actions)",
        Content: "The lich uses its Paralyzing Touch.",
        Usage: "",
      },
      {
        Name: "Frightening Gaze (Costs 2 Actions)",
        Content:
          "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Disrupt Life (Costs 3 Actions)",
        Content:
          "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Size: "Medium",
    Alignment: "any evil alignment",
  },
  {
    Name: "Manes",
    Type: "demon",
    HP: 9,
    AC: 9,
    Speed: ["20 ft."],
    Abilities: {
      Str: 10,
      Dex: 9,
      Con: 13,
      Int: 3,
      Wis: 8,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold", "fire", "lightning"],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["charmed", "frightened", "poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/8",
    Traits: [],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "chaotic evil",
  },
  {
    Name: "Cave Bear",
    Type: "beast",
    HP: 42,
    AC: 12,
    Speed: ["40 ft.", "swim 30 ft."],
    Abilities: {
      Str: 20,
      Dex: 10,
      Con: 16,
      Int: 2,
      Wis: 13,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The bear makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Octopus",
    Type: "beast",
    HP: 52,
    AC: 11,
    Speed: ["10 ft.", "swim 60 ft."],
    Abilities: {
      Str: 17,
      Dex: 13,
      Con: 13,
      Int: 4,
      Wis: 10,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Hold Breath",
        Content:
          "While out of water, the octopus can hold its breath for 1 hour.",
        Usage: "",
      },
      {
        Name: "Underwater Camouflage",
        Content:
          "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
        Usage: "",
      },
      {
        Name: "Water Breathing",
        Content: "The octopus can breathe only underwater.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Tentacles",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target.",
        Usage: "",
      },
      {
        Name: "Ink Cloud (Recharges after a Short or Long Rest)",
        Content:
          "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Orog",
    Type: "humanoid",
    HP: 42,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 12,
      Con: 18,
      Int: 12,
      Wis: 11,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Intimidation",
        Modifier: 5,
      },
      {
        Name: "Survival",
        Modifier: 2,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Aggressive",
        Content:
          "As a bonus action, the orog can move up to its speed toward a hostile creature that it can see.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The orog makes two greataxe attacks.",
        Usage: "",
      },
      {
        Name: "Greataxe",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 7 (1d6 + 4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Giant Badger",
    Type: "beast",
    HP: 13,
    AC: 10,
    Speed: ["30 ft.", "burrow 10 ft."],
    Abilities: {
      Str: 13,
      Dex: 10,
      Con: 15,
      Int: 2,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 30 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The badger has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The badger makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Erinyes",
    Type: "devil",
    HP: 153,
    AC: 18,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 18,
      Dex: 16,
      Con: 18,
      Int: 14,
      Wis: 14,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 8,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "12",
    Traits: [
      {
        Name: "Hellish Weapons",
        Content:
          "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks).",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The erinyes has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The erinyes makes three attacks",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.",
        Usage: "",
      },
      {
        Name: "Variant: Rope of Entanglement",
        Content:
          "Some erinyes carry a rope of entanglement (detailed in the Dungeon Master's Guide). When such an erinyes uses its Multiattack, the erinyes can use the rope in place of two of the attacks.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Parry",
        Content:
          "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Adult Green Dragon",
    Type: "dragon",
    HP: 207,
    AC: 19,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 23,
      Dex: 12,
      Con: 21,
      Int: 18,
      Wis: 15,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 10,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 8,
      },
      {
        Name: "Insight",
        Modifier: 7,
      },
      {
        Name: "Perception",
        Modifier: 12,
      },
      {
        Name: "Persuasion",
        Modifier: 8,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "15",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours .",
        Usage: "",
      },
      {
        Name: "Poison Breath (Recharge 5-6)",
        Content:
          "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "lawful evil",
  },
  {
    Name: "Boar",
    Type: "beast",
    HP: 11,
    AC: 11,
    Speed: ["40 ft."],
    Abilities: {
      Str: 13,
      Dex: 11,
      Con: 12,
      Int: 2,
      Wis: 9,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Relentless (Recharges after a Short or Long Rest)",
        Content:
          "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Tusk",
        Content:
          "Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Goblin",
    Type: "humanoid",
    HP: 7,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 8,
      Dex: 14,
      Con: 10,
      Int: 10,
      Wis: 8,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Nimble Escape",
        Content:
          "The goblin can take the Disengage or Hide action as a bonus action on each of its turns.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Scimitar",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Shortbow",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "neutral evil",
  },
  {
    Name: "Acolyte",
    Type: "humanoid",
    HP: 9,
    AC: 10,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 10,
      Con: 10,
      Int: 10,
      Wis: 14,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Medicine",
        Modifier: 4,
      },
      {
        Name: "Religion",
        Modifier: 2,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Spellcasting",
        Content:
          "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared: nn• Cantrips (at will): light, sacred flame, thaumaturgyn• 1st level (3 slots): bless, cure wounds, sanctuary",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Club",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Cyclops",
    Type: "giant",
    HP: 138,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 22,
      Dex: 11,
      Con: 20,
      Int: 8,
      Wis: 6,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "6",
    Traits: [
      {
        Name: "Poor Depth Perception",
        Content:
          "The cyclops has disadvantage on any attack roll against a target more than 30 ft. away.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The cyclops makes two greatclub attacks.",
        Usage: "",
      },
      {
        Name: "Greatclub",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +9 to hit, range 30/120 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Dust Mephit",
    Type: "elemental",
    HP: 17,
    AC: 12,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 5,
      Dex: 14,
      Con: 10,
      Int: 9,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: ["fire"],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Death Burst",
        Content:
          "When the mephit dies, it explodes in a burst of dust. Each creature within 5 ft. of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting (1/Day)",
        Content:
          "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Blinding Breath (Recharge 6)",
        Content:
          "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Mephits (1/Day)",
        Content:
          "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "neutral evil",
  },
  {
    Name: "Salamander",
    Type: "elemental",
    HP: 90,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 14,
      Con: 15,
      Int: 11,
      Wis: 10,
      Cha: 12,
    },
    DamageVulnerabilities: ["cold"],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Heated Body",
        Content:
          "A creature that touches the salamander or hits it with a melee attack while within 5 ft. of it takes 7 (2d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Heated Weapons",
        Content:
          "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack).",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The salamander makes two attacks: one with its spear and one with its tail.",
        Usage: "",
      },
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20 ft./60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "neutral evil",
  },
  {
    Name: "Gas Spore",
    Type: "plant",
    HP: 1,
    AC: 5,
    Speed: ["0 ft.", "fly 10 ft. (hover)"],
    Abilities: {
      Str: 5,
      Dex: 1,
      Con: 3,
      Int: 1,
      Wis: 1,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "blinded",
      "deafened",
      "frightened",
      "paralyzed",
      "poisoned",
      "prone",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 30 ft. (blind beyond this radius)"],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Death Burst",
        Content:
          "The gas spore explodes when it drops to 0 hit points. Each creature within 20 feet of it must succeed on a DC 15 Constitution saving throw or take 10 (3d6) poison damage and become infected with a disease on a failed save. Creatures immune to the poisoned condition are immune to this disease.nSpores invade an infected creature's system, killing the creature in a number of hours equal to 1d12+the creature's Constitution score, unless the disease is removed. In half that time, the creature becomes poisoned for the rest of the duration. After the creature dies, it sprouts 2d4 Tiny gas spores that grow to full size in 7 days.",
        Usage: "",
      },
      {
        Name: "Eerie Resemblance",
        Content:
          "The gas spore resembles a beholder. A creature that can see the gas spore can discern its true nature with a successful DC 15 Intelligence (Nature) check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Touch",
        Content:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 poison damage, and the creature must succeed on a DC 10 Constitution saving throw or become infected with the disease described in the Death Burst trait.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Weasel",
    Type: "beast",
    HP: 1,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 3,
      Dex: 16,
      Con: 8,
      Int: 2,
      Wis: 12,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Gibbering Mouther",
    Type: "aberration",
    HP: 67,
    AC: 9,
    Speed: ["10 ft.", "swim 10 ft."],
    Abilities: {
      Str: 10,
      Dex: 8,
      Con: 16,
      Int: 3,
      Wis: 10,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["prone"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Aberrant Ground",
        Content:
          "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn.",
        Usage: "",
      },
      {
        Name: "Gibbering",
        Content:
          "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle.",
        Usage: "",
      },
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther.",
        Usage: "",
      },
      {
        Name: "Blinding Spittle (Recharge 5-6)",
        Content:
          "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral",
  },
  {
    Name: "Green Dragon Wyrmling",
    Type: "dragon",
    HP: 38,
    AC: 17,
    Speed: ["30 ft.", "fly 60 ft.", "swim 30 ft."],
    Abilities: {
      Str: 15,
      Dex: 12,
      Con: 13,
      Int: 14,
      Wis: 11,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 3,
      },
      {
        Name: "Con",
        Modifier: 3,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 3,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Poison Breath (Recharge 5-6)",
        Content:
          "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Scarecrow",
    Type: "construct",
    HP: 36,
    AC: 11,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 13,
      Con: 11,
      Int: 10,
      Wis: 10,
      Cha: 13,
    },
    DamageVulnerabilities: ["fire"],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The scarecrow makes two claw attacks.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage. If the target is a creature, it must succeed on a DC 11 Wisdom saving throw or be frightened until the end of the scarecrow's next turn.",
        Usage: "",
      },
      {
        Name: "Terrifying Glare",
        Content:
          "The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn. The frightened target is paralyzed.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Rakshasa",
    Type: "fiend",
    HP: 110,
    AC: 16,
    Speed: ["40 ft."],
    Abilities: {
      Str: 14,
      Dex: 17,
      Con: 18,
      Int: 13,
      Wis: 16,
      Cha: 20,
    },
    DamageVulnerabilities: [
      "piercing from magic weapons wielded by good creatures",
    ],
    DamageResistances: [],
    DamageImmunities: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 10,
      },
      {
        Name: "Insight",
        Modifier: 8,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "13",
    Traits: [
      {
        Name: "Limited Magic Immunity",
        Content:
          "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components: nnAt will: detect thoughts, disguise self, mage hand, minor illusionn3/day each: charm person, detect magic, invisibility, major image, suggestionn1/day each: dominate person, fly, plane shift, true seeing",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The rakshasa makes two claw attacks",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Big Xorn",
    Type: "elemental",
    HP: 103,
    AC: 19,
    Speed: ["20 ft.", "burrow 20 ft."],
    Abilities: {
      Str: 17,
      Dex: 10,
      Con: 22,
      Int: 11,
      Wis: 10,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "piercing and slashing from nonmagical weapons that aren't adamantine",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
    Challenge: "8",
    Traits: [
      {
        Name: "Earth Glide",
        Content:
          "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through.",
        Usage: "",
      },
      {
        Name: "Stone Camouflage",
        Content:
          "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
        Usage: "",
      },
      {
        Name: "Treasure Sense",
        Content:
          "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 ft. of it.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The xorn makes three claw attacks and one bite attack.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "neutral",
  },
  {
    Name: "Abominable Yeti",
    Type: "monstrosity",
    HP: 137,
    AC: 15,
    Speed: ["40 ft.", "climb 40 ft."],
    Abilities: {
      Str: 24,
      Dex: 10,
      Con: 22,
      Int: 9,
      Wis: 13,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "9",
    Traits: [
      {
        Name: "Fear of Fire",
        Content:
          "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.",
        Usage: "",
      },
      {
        Name: "Keen Smell",
        Content:
          "The yeti has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Snow Camouflage",
        Content:
          "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain. ",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The yeti can use its Chilling Gaze and makes two claw attacks.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage plus 7 (2d6) cold damage.",
        Usage: "",
      },
      {
        Name: "Chilling Gaze",
        Content:
          "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 18 Constitution saving throw against this magic or take 21 (6d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to this yeti's gaze for 1 hour.",
        Usage: "",
      },
      {
        Name: "Cold Breath (Recharge 6)",
        Content:
          "The yeti exhales a 30-foot cone of frigid air. Each creature in that area must make a DC 18 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "chaotic evil",
  },
  {
    Name: "Balor",
    Type: "demon",
    HP: 262,
    AC: 19,
    Speed: ["40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 26,
      Dex: 15,
      Con: 22,
      Int: 20,
      Wis: 16,
      Cha: 22,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Str",
        Modifier: 14,
      },
      {
        Name: "Con",
        Modifier: 12,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 12,
      },
    ],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "19",
    Traits: [
      {
        Name: "Death Throes",
        Content:
          "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons.",
        Usage: "",
      },
      {
        Name: "Fire Aura",
        Content:
          "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The balor has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The balor's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The balor makes two attacks: one with its longsword and one with its whip.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.",
        Usage: "",
      },
      {
        Name: "Whip",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor.",
        Usage: "",
      },
      {
        Name: "Teleport",
        Content:
          "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Demon (1/Day)",
        Content:
          "The demon chooses what to summon and attempts a magical summoning.nA balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "chaotic evil",
  },
  {
    Name: "Ancient Bronze Dragon",
    Type: "dragon",
    HP: 444,
    AC: 22,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 29,
      Dex: 10,
      Con: 27,
      Int: 18,
      Wis: 17,
      Cha: 21,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 15,
      },
      {
        Name: "Wis",
        Modifier: 10,
      },
      {
        Name: "Cha",
        Modifier: 12,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 10,
      },
      {
        Name: "Perception",
        Modifier: 17,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "22",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nLightning Breath. The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "lawful good",
  },
  {
    Name: "Piercer",
    Type: "monstrosity",
    HP: 22,
    AC: 15,
    Speed: ["5 ft.", "climb 5 ft."],
    Abilities: {
      Str: 10,
      Dex: 13,
      Con: 16,
      Int: 1,
      Wis: 7,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the piercer remains motionless on the ceiling, it is indistinguishable from a normal stalactite.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The piercer can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Drop",
        Content:
          "Melee Weapon Attack: +3 to hit, one creature directly underneath the piercer. Hit: 3 (1d6) piercing damage per 10 feet fallen, up to 21 (6d6). Miss: The piercer takes half the normal falling damage for the distance fallen.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Adult Silver Dragon",
    Type: "dragon",
    HP: 243,
    AC: 19,
    Speed: ["40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 27,
      Dex: 10,
      Con: 25,
      Int: 16,
      Wis: 13,
      Cha: 21,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 12,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 10,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 8,
      },
      {
        Name: "History",
        Modifier: 8,
      },
      {
        Name: "Perception",
        Modifier: 11,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "16",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nCold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.nParalyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "lawful good",
  },
  {
    Name: "Adult Bronze Dragon",
    Type: "dragon",
    HP: 212,
    AC: 19,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 25,
      Dex: 10,
      Con: 23,
      Int: 16,
      Wis: 15,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 11,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 7,
      },
      {
        Name: "Perception",
        Modifier: 12,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "15",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nLightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "lawful good",
  },
  {
    Name: "Nycaloth",
    Type: "fiend",
    HP: 123,
    AC: 18,
    Speed: ["40 ft.", "fly 60 ft."],
    Abilities: {
      Str: 20,
      Dex: 11,
      Con: 19,
      Int: 12,
      Wis: 10,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["acid", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Intimidation",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 60 ft."],
    Challenge: "9",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The nycaloth's innate spellcasting ability is Charisma. The nycaloth can innately cast the following spells, requiring no material components: nnAt will: darkness, detect magic, dispel magic, invisibility (self only), mirror image",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The nycaloth has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The nycaloth's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The nycaloth makes two melee attacks, or it makes one melee attack and teleports before or after the attack.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or take 5 (2d4) slashing damage at the start of each of its turns due to a fiendish wound. Each time the nycaloth hits the wounded target with this attack, the damage dealt by the wound increases by 5 (2d4). Any creature can take an action to stanch the wound with a successful DC 13 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
        Usage: "",
      },
      {
        Name: "Greataxe",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) slashing damage.",
        Usage: "",
      },
      {
        Name: "Teleport",
        Content:
          "The nycaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Yugoloth (1/Day)",
        Content:
          "The yugoloth chooses what to summon and attempts a magical summoning.nA nycaloth has a 50 percent chance of summoning 1d4 mezzoloths or one nycaloth.nA summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, does as it pleases, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral evil",
  },
  {
    Name: "Pentadrone",
    Type: "construct",
    HP: 32,
    AC: 16,
    Speed: ["40 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 12,
      Int: 10,
      Wis: 10,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Axiomatic Mind",
        Content:
          "The pentadrone can't be compelled to act in a manner contrary to its nature or its instructions.",
        Usage: "",
      },
      {
        Name: "Disintegration",
        Content:
          "If the pentadrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The pentadrone makes five arm attacks.",
        Usage: "",
      },
      {
        Name: "Arm",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Paralysis Gas (Recharge 5-6)",
        Content:
          "The pentadrone exhales a 30-foot cone of gas. Each creature in that area must succeed on a DC 11 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "construct",
  },
  {
    Name: "Flesh Golem",
    Type: "construct",
    HP: 93,
    AC: 9,
    Speed: ["30 ft."],
    Abilities: {
      Str: 19,
      Dex: 9,
      Con: 18,
      Int: 6,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "lightning",
      "poison",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't adamantine",
    ],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Berserk",
        Content:
          "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.nThe golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again.",
        Usage: "",
      },
      {
        Name: "Aversion of Fire",
        Content:
          "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.",
        Usage: "",
      },
      {
        Name: "Immutable Form",
        Content:
          "The golem is immune to any spell or effect that would alter its form.",
        Usage: "",
      },
      {
        Name: "Lightning Absorption",
        Content:
          "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The golem has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The golem's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The golem makes two slam attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral",
  },
  {
    Name: "Assassin",
    Type: "humanoid",
    HP: 78,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 16,
      Con: 14,
      Int: 13,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["poison"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Int",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Acrobatics",
        Modifier: 6,
      },
      {
        Name: "Deception",
        Modifier: 3,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 9,
      },
    ],
    Senses: [],
    Challenge: "8",
    Traits: [
      {
        Name: "Assassinate",
        Content:
          "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit.",
        Usage: "",
      },
      {
        Name: "Evasion",
        Content:
          "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
        Usage: "",
      },
      {
        Name: "Sneak Attack (1/Turn)",
        Content:
          "The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The assassin makes two shortsword attacks.",
        Usage: "",
      },
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Light Crossbow",
        Content:
          "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any non-good alignment",
  },
  {
    Name: "Merfolk",
    Type: "humanoid",
    HP: 11,
    AC: 11,
    Speed: ["10 ft.", "swim 40 ft."],
    Abilities: {
      Str: 10,
      Dex: 13,
      Con: 12,
      Int: 11,
      Wis: 11,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: [],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The merfolk can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral",
  },
  {
    Name: "Lamia",
    Type: "monstrosity",
    HP: 97,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 13,
      Con: 15,
      Int: 14,
      Wis: 15,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 7,
      },
      {
        Name: "Insight",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components. At will: disguise self (any humanoid form), major image 3/day each: charm person, mirror image, scrying, suggestion 1/day: geas",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Dagger",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Intoxicating Touch",
        Content:
          "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Grick",
    Type: "monstrosity",
    HP: 27,
    AC: 14,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 14,
      Dex: 14,
      Con: 11,
      Int: 3,
      Wis: 14,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing damage from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Stone Camouflage",
        Content:
          "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target.",
        Usage: "",
      },
      {
        Name: "Tentacles",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral",
  },
  {
    Name: "Violet Fungus",
    Type: "plant",
    HP: 18,
    AC: 5,
    Speed: ["5 ft."],
    Abilities: {
      Str: 3,
      Dex: 1,
      Con: 10,
      Int: 1,
      Wis: 3,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["blinded", "deafened", "frightened"],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 30 ft. (blind beyond this radius)"],
    Challenge: "1/4",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The fungus makes 1d4 Rotting Touch attacks.",
        Usage: "",
      },
      {
        Name: "Rotting Touch",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Will-o'-Wisp",
    Type: "undead",
    HP: 22,
    AC: 19,
    Speed: ["0 ft.", "fly 50 ft. (hover)"],
    Abilities: {
      Str: 1,
      Dex: 28,
      Con: 10,
      Int: 13,
      Wis: 14,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "acid",
      "cold",
      "fire",
      "necrotic",
      "thunder",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["lightning", "poison"],
    ConditionImmunities: [
      "exhaustion",
      "grappled",
      "paralyzed",
      "poisoned",
      "prone",
      "restrained",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Consume Life",
        Content:
          "As a bonus action, the will-o'-wisp can target one creature it can see within 5 ft. of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points.",
        Usage: "",
      },
      {
        Name: "Ephemeral",
        Content: "The will-o'-wisp can't wear or carry anything.",
        Usage: "",
      },
      {
        Name: "Incorporeal Movement",
        Content:
          "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
        Usage: "",
      },
      {
        Name: "Variable Illumination",
        Content:
          "The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of ft. equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Shock",
        Content:
          "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning damage.",
        Usage: "",
      },
      {
        Name: "Invisibility",
        Content:
          "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell).",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "chaotic evil",
  },
  {
    Name: "Needle Blight",
    Type: "plant",
    HP: 11,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 12,
      Dex: 12,
      Con: 13,
      Int: 4,
      Wis: 8,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["blinded", "deafened"],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) piercing damage.",
        Usage: "",
      },
      {
        Name: "Needles",
        Content:
          "Ranged Weapon Attack: +3 to hit, range 30/60 ft., one target. Hit: 8 (2d6 + 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Peryton",
    Type: "monstrosity",
    HP: 33,
    AC: 13,
    Speed: ["20 ft.", "fly 60 ft."],
    Abilities: {
      Str: 16,
      Dex: 12,
      Con: 13,
      Int: 9,
      Wis: 12,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Dive Attack",
        Content:
          "If the peryton is flying and dives at least 30 ft. straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8) damage to the target.",
        Usage: "",
      },
      {
        Name: "Flyby",
        Content:
          "The peryton doesn't provoke an opportunity attack when it flies out of an enemy's reach.",
        Usage: "",
      },
      {
        Name: "Keen Sight and Smell",
        Content:
          "The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The peryton makes one gore attack and one talon attack.",
        Usage: "",
      },
      {
        Name: "Gore",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Talons",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Aarakocra",
    Type: "humanoid",
    HP: 13,
    AC: 12,
    Speed: ["20 ft.", "fly 50 ft."],
    Abilities: {
      Str: 10,
      Dex: 14,
      Con: 10,
      Int: 11,
      Wis: 12,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Dive Attack",
        Content:
          "If the aarakocra is flying and dives at least 30 ft. straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Talon",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Summon Air Elemental",
        Content:
          "Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral good",
  },
  {
    Name: "Monodrone",
    Type: "construct",
    HP: 5,
    AC: 15,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 10,
      Dex: 13,
      Con: 12,
      Int: 4,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Axiomatic Mind",
        Content:
          "The monodrone can't be compelled to act in a manner contrary to its nature or its instructions.",
        Usage: "",
      },
      {
        Name: "Disintegration",
        Content:
          "If the monodrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Dagger",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 4 (1d6) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "construct",
  },
  {
    Name: "Winged Kobold",
    Type: "humanoid",
    HP: 7,
    AC: 13,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 7,
      Dex: 16,
      Con: 9,
      Int: 8,
      Wis: 7,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Dagger",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Dropped Rock",
        Content:
          "Ranged Weapon Attack: +5 to hit, one target directly below the kobold. Hit: 6 (1d6 + 3) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "lawful evil",
  },
  {
    Name: "Mind Flayer",
    Type: "aberration",
    HP: 71,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 12,
      Con: 12,
      Int: 19,
      Wis: 17,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Int",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 7,
      },
      {
        Name: "Deception",
        Modifier: 6,
      },
      {
        Name: "Insight",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Persuasion",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "7",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The mind flayer has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting (Psionics)",
        Content:
          "The mind flayer's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components: nnAt will: detect thoughts, levitaten1/day each: dominate monster, plane shift (self only)",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Tentacles",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10 + 4) psychic damage. If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends.",
        Usage: "",
      },
      {
        Name: "Extract Brain",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit: The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain.",
        Usage: "",
      },
      {
        Name: "Mind Blast (Recharge 5-6)",
        Content:
          "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8 + 4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Imp",
    Type: "devil",
    HP: 10,
    AC: 13,
    Speed: ["20 ft.", "fly 40 ft."],
    Abilities: {
      Str: 6,
      Dex: 17,
      Con: 13,
      Int: 11,
      Wis: 12,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold; bludgeoning",
      "piercing",
      "and slashing from nonmagical/nonsilver weapons",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 4,
      },
      {
        Name: "Insight",
        Modifier: 3,
      },
      {
        Name: "Persuasion",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the imp's darkvision.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The imp has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Variant: Familiar",
        Content:
          "The imp can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the imp is within 10 feet of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the imp can end its service as a familiar, ending the telepathic bond.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Sting (Bite in Beast Form)",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft ., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Invisibility",
        Content:
          "The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "lawful evil",
  },
  {
    Name: "Young White Dragon",
    Type: "dragon",
    HP: 133,
    AC: 17,
    Speed: ["40 ft.", "burrow 20 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 18,
      Dex: 10,
      Con: 18,
      Int: 6,
      Wis: 11,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 3,
      },
      {
        Name: "Con",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 3,
      },
      {
        Name: "Cha",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "Ice Walk",
        Content:
          "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Cold Breath (Recharge 5-6)",
        Content:
          "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Awakened Tree",
    Type: "plant",
    HP: 59,
    AC: 13,
    Speed: ["20 ft."],
    Abilities: {
      Str: 19,
      Dex: 6,
      Con: 15,
      Int: 10,
      Wis: 10,
      Cha: 7,
    },
    DamageVulnerabilities: ["fire"],
    DamageResistances: ["bludgeoning", "piercing"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the tree remains motionless, it is indistinguishable from a normal tree.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Werewolf",
    Type: "humanoid",
    HP: 58,
    AC: 11,
    Speed: ["30 ft. (40 ft. in wolf form)"],
    Abilities: {
      Str: 15,
      Dex: 13,
      Con: 14,
      Int: 10,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "bludgeoning",
      "piercing",
      "and slashing damage from nonmagical weapons that aren't silvered",
    ],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "3",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack (Humanoid or Hybrid Form Only)",
        Content:
          "The werewolf makes two attacks: one with its bite and one with its claws or spear.",
        Usage: "",
      },
      {
        Name: "Bite (Wolf or Hybrid Form Only)",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy.",
        Usage: "",
      },
      {
        Name: "Claws (Hybrid Form Only)",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Spear (Humanoid Form Only)",
        Content:
          "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Ettercap",
    Type: "monstrosity",
    HP: 44,
    AC: 13,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 14,
      Dex: 15,
      Con: 13,
      Int: 7,
      Wis: 12,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
      {
        Name: "Survival",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Spider Climb",
        Content:
          "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Web Sense",
        Content:
          "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web.",
        Usage: "",
      },
      {
        Name: "Web Walker",
        Content:
          "The ettercap ignores movement restrictions caused by webbing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The ettercap makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Web (Recharge 5-6)",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to fire damage and immune to bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Variant: Web Garrote",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one Medium or Small creature against which the ettercap has advantage on the attack roll. Hit: 4 (1d4 + 2) bludgeoning damage, and the target is grappled (escape DC 12). Until this grapple ends, the target can't breathe, and the ettercap has advantage on attack rolls against it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Troglodyte",
    Type: "humanoid",
    HP: 13,
    AC: 11,
    Speed: ["30 ft."],
    Abilities: {
      Str: 14,
      Dex: 10,
      Con: 14,
      Int: 6,
      Wis: 10,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Chameleon Skin",
        Content:
          "The troglodyte has advantage on Dexterity (Stealth) checks made to hide.",
        Usage: "",
      },
      {
        Name: "Stench",
        Content:
          "Any creature other than a troglodyte that starts its turn within 5 ft. of the troglodyte must succeed on a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the troglodyte has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The troglodyte makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Elephant",
    Type: "beast",
    HP: 76,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 22,
      Dex: 9,
      Con: 17,
      Int: 3,
      Wis: 11,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "4",
    Traits: [
      {
        Name: "Trampling Charge",
        Content:
          "If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Gore",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Stomp",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Fire Elemental",
    Type: "elemental",
    HP: 102,
    AC: 13,
    Speed: ["50 ft."],
    Abilities: {
      Str: 10,
      Dex: 17,
      Con: 16,
      Int: 6,
      Wis: 10,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Fire Form",
        Content:
          "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns.",
        Usage: "",
      },
      {
        Name: "Illumination",
        Content:
          "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 ft..",
        Usage: "",
      },
      {
        Name: "Water Susceptibility",
        Content:
          "For every 5 ft. the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The elemental makes two touch attacks.",
        Usage: "",
      },
      {
        Name: "Touch",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "neutral",
  },
  {
    Name: "Eagle",
    Type: "beast",
    HP: 3,
    AC: 12,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 6,
      Dex: 15,
      Con: 10,
      Int: 2,
      Wis: 14,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Keen Sight",
        Content:
          "The eagle has advantage on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Talons",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Jackal",
    Type: "beast",
    HP: 3,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 8,
      Dex: 15,
      Con: 11,
      Int: 3,
      Wis: 12,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Green Hag",
    Type: "fey",
    HP: 82,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 12,
      Con: 16,
      Int: 13,
      Wis: 14,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 3,
      },
      {
        Name: "Deception",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The hag can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components: nnAt will: dancing lights, minor illusion, vicious mockery",
        Usage: "",
      },
      {
        Name: "Mimicry",
        Content:
          "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.",
        Usage: "",
      },
      {
        Name: "Hag Coven",
        Content:
          "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
        Usage: "",
      },
      {
        Name: "Shared Spellcasting (Coven Only)",
        Content:
          "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves: nn• 1st level (4 slots): identify, ray of sicknessn• 2nd level (3 slots): hold person, locate objectn• 3rd level (3 slots): bestow curse, counterspell, lightning boltn• 4th level (3 slots): phantasmal killer, polymorphn• 5th level (2 slots): contact other plane, scryingn• 6th level (1 slot): eye bitennFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
        Usage: "",
      },
      {
        Name: "Hag Eye (Coven Only)",
        Content:
          "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Illusory Appearance",
        Content:
          "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised.",
        Usage: "",
      },
      {
        Name: "Invisible Passage",
        Content:
          "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "neutral evil",
  },
  {
    Name: "Gray Slaad",
    Type: "aberration",
    HP: 127,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 17,
      Dex: 17,
      Con: 16,
      Int: 13,
      Wis: 8,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 6,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 60 ft."],
    Challenge: "9",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The slaad's innate spellcasting ability is Charisma (spell save DC 14). The slaad can innately cast the following spells, requiring no material components: nnAt will: detect magic, detect thoughts, invisibility (self only), mage hand, major imagen2/day each: fear, fly, fireball, tonguesn1/day: plane shift (self only)",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The slaad has advantage on saving throws against spells and other magical effects",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The slaad's weapon attacks are magical.",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point.",
        Usage: "",
      },
      {
        Name: "Variant: Control Gem",
        Content:
          "Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.nCertain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.nA greater restoration spell cast on the slaad destroys the gem without harming the slaad.nSomeone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The slaad makes three attacks: one with its bite and two with its claws or greatsword.",
        Usage: "",
      },
      {
        Name: "Bite (Slaad Form Only)",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws (Slaad Form Only)",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Displacer Beast",
    Type: "monstrosity",
    HP: 85,
    AC: 13,
    Speed: ["40 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 6,
      Wis: 12,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Avoidance",
        Content:
          "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails .",
        Usage: "",
      },
      {
        Name: "Displacement",
        Content:
          "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The displacer beast makes two attacks with its tentacles.",
        Usage: "",
      },
      {
        Name: "Tentacle",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 3 (1d6) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Rhinoceros",
    Type: "beast",
    HP: 45,
    AC: 11,
    Speed: ["40 ft."],
    Abilities: {
      Str: 21,
      Dex: 8,
      Con: 15,
      Int: 2,
      Wis: 12,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Gore",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Sea Horse",
    Type: "beast",
    HP: 16,
    AC: 13,
    Speed: ["0 ft.", "swim 40 ft."],
    Abilities: {
      Str: 12,
      Dex: 15,
      Con: 11,
      Int: 2,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Water Breathing",
        Content: "The sea horse can breathe only underwater.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Ram",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Shark",
    Type: "beast",
    HP: 126,
    AC: 13,
    Speed: ["swim 50 ft."],
    Abilities: {
      Str: 23,
      Dex: 11,
      Con: 21,
      Int: 1,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Blood Frenzy",
        Content:
          "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
        Usage: "",
      },
      {
        Name: "Water Breathing",
        Content: "The shark can breathe only underwater.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Warhorse Skeleton",
    Type: "undead",
    HP: 22,
    AC: 13,
    Speed: ["60 ft."],
    Abilities: {
      Str: 18,
      Dex: 12,
      Con: 15,
      Int: 2,
      Wis: 8,
      Cha: 5,
    },
    DamageVulnerabilities: ["bludgeoning"],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["exhaustion", "poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [],
    Actions: [
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Swarm of Spiders",
    Type: "swarm",
    HP: 22,
    AC: 12,
    Speed: ["20 ft.", "climb 20 ft."],
    Abilities: {
      Str: 3,
      Dex: 13,
      Con: 10,
      Int: 1,
      Wis: 7,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Web Sense",
        Content:
          "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web.",
        Usage: "",
      },
      {
        Name: "Web Walker",
        Content: "The swarm ignores movement restrictions caused by webbing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Azer",
    Type: "elemental",
    HP: 39,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 17,
      Dex: 12,
      Con: 15,
      Int: 12,
      Wis: 13,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Con",
        Modifier: 4,
      },
    ],
    Skills: [],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Heated Body",
        Content:
          "A creature that touches the azer or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage.",
        Usage: "",
      },
      {
        Name: "Heated Weapons",
        Content:
          "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack).",
        Usage: "",
      },
      {
        Name: "Illumination",
        Content:
          "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 ft..",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Warhammer",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "lawful neutral",
  },
  {
    Name: "Awakened Shrub",
    Type: "plant",
    HP: 10,
    AC: 9,
    Speed: ["20 ft."],
    Abilities: {
      Str: 3,
      Dex: 8,
      Con: 11,
      Int: 10,
      Wis: 10,
      Cha: 6,
    },
    DamageVulnerabilities: ["fire"],
    DamageResistances: ["piercing"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the shrub remains motionless, it is indistinguishable from a normal shrub.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Rake",
        Content:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Crawling Claw",
    Type: "undead",
    HP: 2,
    AC: 12,
    Speed: ["20 ft.", "climb 20 ft."],
    Abilities: {
      Str: 13,
      Dex: 14,
      Con: 11,
      Int: 5,
      Wis: 10,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 30 ft. (blind beyond this radius)"],
    Challenge: "0",
    Traits: [
      {
        Name: "Turn Immunity",
        Content: "The claw is immune to effects that turn undead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning or slashing damage (claw's choice) .",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "neutral evil",
  },
  {
    Name: "Fire Snake",
    Type: "elemental",
    HP: 22,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 12,
      Dex: 14,
      Con: 11,
      Int: 7,
      Wis: 10,
      Cha: 8,
    },
    DamageVulnerabilities: ["cold"],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Heated Body",
        Content:
          "A creature that touches the snake or hits it with a melee attack while within 5 ft. of it takes 3 (1d6) fire damage.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The snake makes two attacks: one with its bite and one with its tail.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage plus 3 (1d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage plus 3 (1d6) fire damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "neutral evil",
  },
  {
    Name: "Camel",
    Type: "beast",
    HP: 15,
    AC: 9,
    Speed: ["50 ft."],
    Abilities: {
      Str: 16,
      Dex: 8,
      Con: 14,
      Int: 2,
      Wis: 8,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/8",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Four-Armed Gargoyle",
    Type: "elemental",
    HP: 147,
    AC: 17,
    Speed: ["30 ft.", "Fly 60 ft."],
    Abilities: {
      Str: 19,
      Dex: 11,
      Con: 20,
      Int: 6,
      Wis: 11,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning, piercing, and slashing damage from nonmagical attacks not made with adamantine weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["exhaustion", "petrified", "poisoned"],
    Saves: [
      {
        Name: "Wis",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft.", "passive Perception 14"],
    Challenge: "10",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The gargoyle makes five attacks: one with its bite and four with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Behir",
    Type: "monstrosity",
    HP: 168,
    AC: 17,
    Speed: ["50 ft.", "climb 40 ft."],
    Abilities: {
      Str: 23,
      Dex: 16,
      Con: 18,
      Int: 7,
      Wis: 14,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 90 ft."],
    Challenge: "11",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The behir makes two attacks: one with its bite and one to constrict.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Constrict",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.",
        Usage: "",
      },
      {
        Name: "Lightning Breath (Recharge 5-6)",
        Content:
          "The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Swallow",
        Content:
          "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "neutral evil",
  },
  {
    Name: "Lizard King/Queen",
    Type: "humanoid",
    HP: 78,
    AC: 15,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 17,
      Dex: 12,
      Con: 15,
      Int: 11,
      Wis: 11,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["frightened"],
    Saves: [
      {
        Name: "Con",
        Modifier: 4,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
      {
        Name: "Survival",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Hold Breath",
        Content: "The lizardfolk can hold its breath for 15 minutes.",
        Usage: "",
      },
      {
        Name: "Skewer",
        Content:
          "Once per turn, when the lizardfolk makes a melee attack with its trident and hits, the target takes an extra 10 (3d6) damage, and the lizardfolk gains temporary hit points equal to the extra damage dealt.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The lizardfolk makes two attacks: one with its bite and one with its claws or trident or two melee attacks with its trident.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Trident",
        Content:
          "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Stone Golem",
    Type: "construct",
    HP: 178,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 22,
      Dex: 9,
      Con: 20,
      Int: 3,
      Wis: 11,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "poison",
      "psychic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't adamantine",
    ],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "10",
    Traits: [
      {
        Name: "Immutable Form",
        Content:
          "The golem is immune to any spell or effect that would alter its form.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The golem has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The golem's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The golem makes two slam attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Slow (Recharge 5-6)",
        Content:
          "The golem targets one or more creatures it can see within 10 ft. of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Young Brass Dragon",
    Type: "dragon",
    HP: 110,
    AC: 17,
    Speed: ["40 ft.", "burrow 20 ft.", "fly 80 ft."],
    Abilities: {
      Str: 19,
      Dex: 10,
      Con: 17,
      Int: 12,
      Wis: 11,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 3,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 3,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Persuasion",
        Modifier: 5,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "6",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nFire Breath. The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one.nSleep Breath. The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic good",
  },
  {
    Name: "Giant Poisonous Snake",
    Type: "beast",
    HP: 11,
    AC: 14,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 10,
      Dex: 18,
      Con: 13,
      Int: 2,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 10 ft."],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Kenku",
    Type: "humanoid",
    HP: 13,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 16,
      Con: 10,
      Int: 11,
      Wis: 10,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Ambusher",
        Content:
          "In the first round of a combat, the kenku has advantage on attack rolls against any creature it surprised",
        Usage: "",
      },
      {
        Name: "Mimicry",
        Content:
          "The kenku can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Shortbow",
        Content:
          "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Young Black Dragon",
    Type: "dragon",
    HP: 127,
    AC: 18,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 19,
      Dex: 14,
      Con: 17,
      Int: 12,
      Wis: 11,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 3,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "7",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Acid Breath (Recharge 5-6)",
        Content:
          "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Death Dog",
    Type: "monstrosity",
    HP: 39,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 14,
      Int: 3,
      Wis: 13,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Two-Headed",
        Content:
          "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The dog makes two bite attacks.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Poisonous Snake",
    Type: "beast",
    HP: 2,
    AC: 13,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 2,
      Dex: 16,
      Con: 11,
      Int: 1,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "1/8",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Quaggoth",
    Type: "humanoid",
    HP: 45,
    AC: 13,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 17,
      Dex: 12,
      Con: 16,
      Int: 6,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Wounded Fury",
        Content:
          "While it has 10 hit points or fewer, the quaggoth has advantage on attack rolls. In addition, it deals an extra 7 (2d6) damage to any target it hits with a melee attack.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The quaggoth makes two claw attacks.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Yestabrod",
    Type: "monstrosity",
    HP: 75,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 12,
      Dex: 10,
      Con: 14,
      Int: 13,
      Wis: 15,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Legendary Resistance (1/Day)",
        Content:
          "If Yestabrod fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (3d4 + 1) bludgeoning damage plus 7 (3d4) poison damage.",
        Usage: "",
      },
      {
        Name: "Caustic Spores (1/Day)",
        Content:
          "Yestabrod releases spores in a 30-foot cone. Each creature in that area must succeed on a DC 12 Dexterity saving throw ortake 1d6 acid damage at the start of each of Yestbrod's turns. A creature can repeat the saving throw at the end of each of its turn, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Infestation Spores (1/Day)",
        Content:
          "Yestabrod releases spores that burst out in a cloud that fills a 10-foot-radius sphere centered on it, and the cloud lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 12 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of indefinite madness (determined by rolling on the Madness of Zuggtmoy table in appendix D) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfecte, and it must be repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the 'Myconids' entry in the Monster Manual).",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "",
        Content:
          "Yestabrod can take 2 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Yestabrod regains spent legendary actions at the start of its turn.",
        Usage: "",
      },
      {
        Name: "Corpse Burst",
        Content:
          "Gore, offal, and acid erupt from a corpse within 20 feet of Yestabrod. Creatures within 10 feet of the corpse must succeed on a DC 12 Dexterity saving throw or take 7 (2d6) acid damage.",
        Usage: "",
      },
      {
        Name: "Foul Absorption",
        Content:
          "Yestabrod absorbs putrescence from a corpse within 5 feet of it, regaining 1d8 + 2 hit points",
        Usage: "",
      },
    ],
    Size: "L",
    Alignment: "chaotic evil",
  },
  {
    Name: "Mimic",
    Type: "monstrosity",
    HP: 58,
    AC: 12,
    Speed: ["15 ft."],
    Abilities: {
      Str: 17,
      Dex: 12,
      Con: 15,
      Int: 5,
      Wis: 13,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid"],
    ConditionImmunities: ["prone"],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn 't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Adhesive (Object Form Only)",
        Content:
          "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage.",
        Usage: "",
      },
      {
        Name: "False Appearance (Object Form Only)",
        Content:
          "While the mimic remains motionless, it is indistinguishable from an ordinary object.",
        Usage: "",
      },
      {
        Name: "Grappler",
        Content:
          "The mimic has advantage on attack rolls against any creature grappled by it.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Pseudopod",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral",
  },
  {
    Name: "Pegasus",
    Type: "celestial",
    HP: 59,
    AC: 12,
    Speed: ["60 ft.", "fly 90 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 10,
      Wis: 15,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 3,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [],
    Actions: [
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "chaotic good",
  },
  {
    Name: "Doppelganger",
    Type: "monstrosity",
    HP: 52,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 18,
      Con: 14,
      Int: 11,
      Wis: 12,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["charmed"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 6,
      },
      {
        Name: "Insight",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Ambusher",
        Content:
          "In the first round of a combat, the doppelganger has advantage on attack rolls against any creature it surprised",
        Usage: "",
      },
      {
        Name: "Surprise Attack",
        Content:
          "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The doppelganger makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Read Thoughts",
        Content:
          "The doppelganger magically reads the surface thoughts of one creature within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Bugbear Chief",
    Type: "humanoid",
    HP: 65,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 17,
      Dex: 14,
      Con: 14,
      Int: 11,
      Wis: 12,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Intimidation",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
      {
        Name: "Survival",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Brute",
        Content:
          "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).",
        Usage: "",
      },
      {
        Name: "Surprise Attack",
        Content:
          "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.",
        Usage: "",
      },
      {
        Name: "Heart of Hruggek",
        Content:
          "The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The bugbear makes two melee attacks",
        Usage: "",
      },
      {
        Name: "Morningstar",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6 + 3) piercing damage in melee or 5 (1d6 + 3) piercing damage at range.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Cat",
    Type: "beast",
    HP: 2,
    AC: 12,
    Speed: ["40 ft.", "climb 30 ft."],
    Abilities: {
      Str: 3,
      Dex: 15,
      Con: 10,
      Int: 3,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The cat has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Gnoll",
    Type: "humanoid",
    HP: 22,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 14,
      Dex: 12,
      Con: 11,
      Int: 6,
      Wis: 10,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Rampage",
        Content:
          "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Steam Mephit",
    Type: "elemental",
    HP: 21,
    AC: 10,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 5,
      Dex: 11,
      Con: 10,
      Int: 11,
      Wis: 10,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Death Burst",
        Content:
          "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 ft. of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting (1/Day)",
        Content:
          "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) slashing damage plus 2 (1d4) fire damage.",
        Usage: "",
      },
      {
        Name: "Steam Breath (Recharge 6)",
        Content:
          "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Mephits (1/Day)",
        Content:
          "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "neutral evil",
  },
  {
    Name: "Sahuagin Priestess",
    Type: "humanoid",
    HP: 33,
    AC: 12,
    Speed: ["30 ft.", "swim 40 ft."],
    Abilities: {
      Str: 13,
      Dex: 11,
      Con: 12,
      Int: 12,
      Wis: 14,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Religion",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Blood Frenzy",
        Content:
          "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
        Usage: "",
      },
      {
        Name: "Limited Amphibiousness",
        Content:
          "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.",
        Usage: "",
      },
      {
        Name: "Shark Telepathy",
        Content:
          "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The sahuagin is a 6th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). She has the following cleric spells prepared: nn• Cantrips (at will): guidance, thaumaturgyn• 1st level (4 slots): bless, detect magic, guiding boltn• 2nd level (3 slots): hold person, spiritual weapon (trident)n• 3rd level (3 slots): mass healing word, tongues",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The sahuagin makes two melee attacks: one with her bite and one with her claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Kuo-Toa Archpriest",
    Type: "humanoid",
    HP: 97,
    AC: 13,
    Speed: ["31 ft.", "swim 30 ft."],
    Abilities: {
      Str: 16,
      Dex: 14,
      Con: 16,
      Int: 13,
      Wis: 16,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 9,
      },
      {
        Name: "Religion",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The kuo-toa can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Otherwordly Perception",
        Content:
          "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving.",
        Usage: "",
      },
      {
        Name: "Slippery",
        Content:
          "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The kuo-toa is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The kuo-toa has the following cleric spells prepared: nn• Cantrips (at will): guidance, sacred flame, thaumaturgyn• 1st level (4 slots): detect magic, sanctuary, shield of faithn• 2nd level (3 slots): hold person, spiritual weaponn• 3rd level (3 slots): spirit guardians, tonguesn• 4th level (3 slots): control water, divinationn• 5th level (2 slots): mass cure wounds, scrying",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The kuo-toa makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Scepter",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 14 (4d6) lightning damage.",
        Usage: "",
      },
      {
        Name: "Unarmed Strike",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Knight",
    Type: "humanoid",
    HP: 52,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 11,
      Con: 14,
      Int: 11,
      Wis: 11,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 4,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
    ],
    Skills: [],
    Senses: [],
    Challenge: "3",
    Traits: [
      {
        Name: "Brave",
        Content:
          "The knight has advantage on saving throws against being frightened.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The knight makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Heavy Crossbow",
        Content:
          "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.",
        Usage: "",
      },
      {
        Name: "Leadership (Recharges after a Short or Long Rest)",
        Content:
          "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Parry",
        Content:
          "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Chamberlain of Zuggtmoy",
    Type: "plant",
    HP: 45,
    AC: 13,
    Speed: ["20 ft."],
    Abilities: {
      Str: 17,
      Dex: 7,
      Con: 14,
      Int: 11,
      Wis: 8,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Mushroom Portal",
        Content:
          "The chamberlain counts as a mushroom for the Fungus Stride feature of the bridesmaid of Zuggtmoy.",
        Usage: "",
      },
      {
        Name: "Poison Spores",
        Content:
          "Whenever the chamberlain takes damage, it releases a cloud of spores. Creatures within 5 feet of the chamberlain when this happens must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on a success.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Hallucination Spores",
        Content:
          "The bridesmaid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target is incapacitated. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Multiattack",
        Content: "The chamberlain makes two slam attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Infestation Spores (1/Day)",
        Content:
          "The chanberlain releases spores that burst out in a cloud that fills a 10-foot-radius sphere centered on it, and the cloud lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 12 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of indefinite madness (determined by rolling on the Madness of Zuggtmoy table in appendix D) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must be repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the 'Myconids' entry in the Monster Manual).",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "chaotic evil",
  },
  {
    Name: "Storm Giant",
    Type: "giant",
    HP: 230,
    AC: 16,
    Speed: ["50 ft.", "swim 50 ft."],
    Abilities: {
      Str: 29,
      Dex: 14,
      Con: 20,
      Int: 16,
      Wis: 18,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold"],
    DamageImmunities: ["lightning", "thunder"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Str",
        Modifier: 14,
      },
      {
        Name: "Con",
        Modifier: 10,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 8,
      },
      {
        Name: "Athletics",
        Modifier: 14,
      },
      {
        Name: "History",
        Modifier: 8,
      },
      {
        Name: "Perception",
        Modifier: 9,
      },
    ],
    Senses: [],
    Challenge: "13",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The giant can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components: nnAt will: detect magic, feather fall, levitate, lightn3/day each: control weather, water breathing",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The giant makes two greatsword attacks.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6 + 9) slashing damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12 + 9) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Lightning Strike (Recharge 5-6)",
        Content:
          "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "chaotic good",
  },
  {
    Name: "Ghast",
    Type: "undead",
    HP: 36,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 17,
      Con: 10,
      Int: 11,
      Wis: 10,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["necrotic"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Stench",
        Content:
          "Any creature that starts its turn within 5 ft. of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours.",
        Usage: "",
      },
      {
        Name: "Turn Defiance",
        Content:
          "The ghast and any ghouls within 30 ft. of it have advantage on saving throws against effects that turn undead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "chaotic evil",
  },
  {
    Name: "Faerie Dragon (Yellow)",
    Type: "dragon",
    HP: 14,
    AC: 15,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 3,
      Dex: 20,
      Con: 13,
      Int: 14,
      Wis: 12,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "The Colors of Age",
        Content:
          "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.nnRed — 5 years or lessnOrange — 6-10 yearsnYellow — 11-20 yearsnGreen — 21-30 yearsnBlue — 31-40 yearsnIndigo — 41-50 yearsnViolet — 51 years or morenA green or older faerie dragon's CR increases to 2.",
        Usage: "",
      },
      {
        Name: "Superior Invisibility",
        Content:
          "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.",
        Usage: "",
      },
      {
        Name: "Limited Telepathy",
        Content:
          "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The faerie dragon has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.nn1/day each: color spray, dancing lights, mage hand, minor illusion, mirror image",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        Usage: "",
      },
      {
        Name: "Euphoria Breath (Recharge 5-6)",
        Content:
          "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:n1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.n5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "chaotic good",
  },
  {
    Name: "Giant Crab",
    Type: "beast",
    HP: 13,
    AC: 15,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 13,
      Dex: 15,
      Con: 11,
      Int: 1,
      Wis: 9,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 30 ft."],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The crab can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Raven",
    Type: "beast",
    HP: 1,
    AC: 12,
    Speed: ["10 ft.", "fly 50 ft."],
    Abilities: {
      Str: 2,
      Dex: 14,
      Con: 8,
      Int: 2,
      Wis: 12,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Mimicry",
        Content:
          "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Copper Dragon Wyrmling",
    Type: "dragon",
    HP: 22,
    AC: 16,
    Speed: ["30 ft.", "climb 30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 15,
      Dex: 12,
      Con: 13,
      Int: 14,
      Wis: 11,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 3,
      },
      {
        Name: "Con",
        Modifier: 3,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 3,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "1",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nAcid Breath. The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one.nSlowing Breath. The dragon exhales gas in a 1 5-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic good",
  },
  {
    Name: "Drannin Splithelm",
    Type: "humanoid",
    HP: 93,
    AC: 18,
    Speed: ["25 ft."],
    Abilities: {
      Str: 19,
      Dex: 10,
      Con: 18,
      Int: 11,
      Wis: 8,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold", "poison"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 7,
      },
      {
        Name: "Intimidation",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "7",
    Traits: [
      {
        Name: "Action Surge (Recharges after a Short or Long Rest)",
        Content: "Drannin takes an additional action on his turn.",
        Usage: "",
      },
      {
        Name: "Brute",
        Content:
          "A melee weapon deals one extra die of its damage when Drannin hits with it (included in the attack).",
        Usage: "",
      },
      {
        Name: "Dwarven Resilience",
        Content: "Drannin has advantage on saving throws against poison.",
        Usage: "",
      },
      {
        Name: "Indomitable (Recharges after a Short or Long Rest)",
        Content:
          "Drannin can reroll a saving throw that he fails. He must use the new roll.",
        Usage: "",
      },
      {
        Name: "Second  Wind (Recharges after a Short or Long Rest)",
        Content:
          "Drannin can use a bonus action to regain 16 (1d10 + 11) hit points.",
        Usage: "",
      },
      {
        Name: "Special Equipment",
        Content:
          "Drannin wears a control amulet for his shield guardian (see the Monster Manual) and a ring of cold resistance. He also carries a potion of frost giant strength.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "Drannin makes three attacks with his greataxe.",
        Usage: "",
      },
      {
        Name: "Greataxe",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "neutral evil",
  },
  {
    Name: "Ogre Zombie",
    Type: "undead",
    HP: 85,
    AC: 8,
    Speed: ["30 ft."],
    Abilities: {
      Str: 19,
      Dex: 6,
      Con: 18,
      Int: 3,
      Wis: 6,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Wis",
        Modifier: 0,
      },
    ],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Undead Fortitude",
        Content:
          "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Morningstar",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral evil",
  },
  {
    Name: "Beholder Zombie",
    Type: "undead",
    HP: 93,
    AC: 15,
    Speed: ["0 ft.", "fly 20 ft. (hover)"],
    Abilities: {
      Str: 10,
      Dex: 8,
      Con: 16,
      Int: 3,
      Wis: 8,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned", "prone"],
    Saves: [
      {
        Name: "Wis",
        Modifier: 2,
      },
    ],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Undead Fortitude",
        Content:
          "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Eye Ray",
        Content:
          "The zombie uses a random magical eye ray, choosing a target that it can see within 60 feet of it.n1. Paralyzing Ray. The targeted creature must succeed on a DC 14 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.n2. Fear Ray. The targeted creature must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.n3. Enervation Ray. The targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.n4. Disintegration Ray. If the target is a creature, it must succeed on a DC 14 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.nIf the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger nonmagical object or creation of magical force, this ray disintegrates a 10-foot cube of it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral evil",
  },
  {
    Name: "Giant Constrictor Snake",
    Type: "beast",
    HP: 60,
    AC: 12,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 19,
      Dex: 14,
      Con: 12,
      Int: 1,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 10 ft."],
    Challenge: "2",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Constrict",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Red Slaad",
    Type: "aberration",
    HP: 93,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 12,
      Con: 16,
      Int: 6,
      Wis: 6,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 1,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The slaad has advantage on saving throws against spells and other magical effects",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point.",
        Usage: "",
      },
      {
        Name: "Variant: Control Gem",
        Content:
          "Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.nCertain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.nA greater restoration spell cast on the slaad destroys the gem without harming the slaad.nSomeone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The slaad makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target.nHit: 8 (2d4 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be infected with a disease — a minuscule slaad egg.nA humanoid host can carry only one slaad egg to term at a time. Over three months, the egg moves to the chest cavity, gestates, and forms a slaad tadpole. In the 24-hour period before giving birth, the host starts to feel unwell, its speed is halved, and it has disadvantage on attack rolls, ability checks, and saving throws. At birth, the tadpole chews its way through vital organs and out of the host's chest in 1 round, killing the host in the process.nIf the disease is cured before the tadpole's emergence, the unborn slaad is disintegrated.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Lizardfolk",
    Type: "humanoid",
    HP: 22,
    AC: 15,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 15,
      Dex: 10,
      Con: 13,
      Int: 7,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
      {
        Name: "Survival",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Hold Breath",
        Content: "The lizardfolk can hold its breath for 15 minutes.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The lizardfolk makes two melee attacks, each one with a different weapon.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Heavy Club",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Spiked Shield",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral",
  },
  {
    Name: "Sahuagin",
    Type: "humanoid",
    HP: 22,
    AC: 12,
    Speed: ["30 ft.", "swim 40 ft."],
    Abilities: {
      Str: 13,
      Dex: 11,
      Con: 12,
      Int: 12,
      Wis: 13,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Blood Frenzy",
        Content:
          "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
        Usage: "",
      },
      {
        Name: "Limited Amphibiousness",
        Content:
          "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.",
        Usage: "",
      },
      {
        Name: "Shark Telepathy",
        Content:
          "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage.",
        Usage: "",
      },
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Scout",
    Type: "humanoid",
    HP: 16,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 14,
      Con: 12,
      Int: 11,
      Wis: 13,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Nature",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 5,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
      {
        Name: "Survival",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Keen Hearing and Sight",
        Content:
          "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The scout makes two melee attacks or two ranged attacks.",
        Usage: "",
      },
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Tyrannosaurus Rex",
    Type: "dinosaur",
    HP: 136,
    AC: 13,
    Speed: ["50 ft."],
    Abilities: {
      Str: 25,
      Dex: 10,
      Con: 19,
      Int: 2,
      Wis: 12,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "8",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "unaligned",
  },
  {
    Name: "Hill Giant",
    Type: "giant",
    HP: 105,
    AC: 13,
    Speed: ["40 ft."],
    Abilities: {
      Str: 21,
      Dex: 8,
      Con: 19,
      Int: 5,
      Wis: 9,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: [],
    Challenge: "5",
    Traits: [],
    Actions: [
      {
        Name: "Squash",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one Medium or Smaller creature. Hit: 26 (6d6 + 5) bludgeoning damage, the giant lands prone in the target's space, and the target is grappled (escape DC 15). Until this grapple ends, the target is prone. The grapple ends early if the giant stands up.",
        Usage: "",
      },
      {
        Name: "Multiattack",
        Content: "The giant makes two greatclub attacks.",
        Usage: "",
      },
      {
        Name: "Greatclub",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8 + 5) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21 (3d10 + 5) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "chaotic evil",
  },
  {
    Name: "Remorhaz",
    Type: "monstrosity",
    HP: 195,
    AC: 17,
    Speed: ["30 ft.", "burrow 20 ft."],
    Abilities: {
      Str: 24,
      Dex: 13,
      Con: 21,
      Int: 4,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold", "fire"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
    Challenge: "11",
    Traits: [
      {
        Name: "Heated Body",
        Content:
          "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target.",
        Usage: "",
      },
      {
        Name: "Swallow",
        Content:
          "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.nIf the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "unaligned",
  },
  {
    Name: "Panther",
    Type: "beast",
    HP: 13,
    AC: 12,
    Speed: ["50 ft.", "climb 40 ft."],
    Abilities: {
      Str: 14,
      Dex: 15,
      Con: 10,
      Int: 3,
      Wis: 14,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The panther has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Pounce",
        Content:
          "If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Dao",
    Type: "elemental",
    HP: 187,
    AC: 18,
    Speed: ["30 ft.", "burrow 30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 23,
      Dex: 12,
      Con: 24,
      Int: 12,
      Wis: 13,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["petrified"],
    Saves: [
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 5,
      },
      {
        Name: "Cha",
        Modifier: 6,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "11",
    Traits: [
      {
        Name: "Earth Glide",
        Content:
          "The dao can burrow through nonmagical, unworked earth and stone. While doing so, the dao doesn't disturb the material it moves through.",
        Usage: "",
      },
      {
        Name: "Elemental Demise",
        Content:
          "If the dao dies, its body disintegrates into crystalline powder, leaving behind only equipment the dao was wearing or carrying.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The dao's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It can innately cast the following spells, requiring no material components: nAt will: detect evil and good, detect magic, stone shapen3/day each: passwall, move earth, tonguesn1/day each: conjure elemental (earth elemental only), gaseous form, invisibility, phantasmal killer, plane shift, wall of stone",
        Usage: "",
      },
      {
        Name: "Sure-Footed",
        Content:
          "The dao has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
        Usage: "",
      },
      {
        Name: "Variant: Genie Powers",
        Content:
          "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.nnDisguises.nSome genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.nWishes.nThe genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.nTo be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The Dao makes two fist attacks or two maul attacks.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Maul",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 20 (4d6 + 6) bludgeoning damage. If the target is a Huge or smaller creature, it must succeed on a DC 18 Strength check or be knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral evil",
  },
  {
    Name: "Galeb Duhr",
    Type: "elemental",
    HP: 85,
    AC: 16,
    Speed: ["15 ft. (30 ft. when rolling", "60 ft. rolling downhill)"],
    Abilities: {
      Str: 20,
      Dex: 14,
      Con: 20,
      Int: 11,
      Wis: 12,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["exhaustion", "paralyzed", "poisoned", "petrified"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the galeb duhr remains motionless, it is indistinguishable from a normal boulder.",
        Usage: "",
      },
      {
        Name: "Rolling Charge",
        Content:
          "If the galeb duhr rolls at least 20 ft. straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft ., one target. Hit: 12 (2d6 + 5) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Animate Boulders (1/Day)",
        Content:
          "The galeb duhr magically animates up to two boulders it can see within 60 ft. of it. A boulder has statistics like those of a galeb duhr, except it has Intelligence 1 and Charisma 1, it can't be charmed or frightened, and it lacks this action option. A boulder remains animated as long as the galeb duhr maintains concentration, up to 1 minute (as if concentrating on a spell) .",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "neutral",
  },
  {
    Name: "Manticore",
    Type: "monstrosity",
    HP: 68,
    AC: 14,
    Speed: ["30 ft.", "fly 50 ft."],
    Abilities: {
      Str: 17,
      Dex: 16,
      Con: 17,
      Int: 7,
      Wis: 12,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Tail Spike Regrowth",
        Content:
          "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail Spike",
        Content:
          "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Magmin",
    Type: "elemental",
    HP: 9,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 7,
      Dex: 15,
      Con: 12,
      Int: 8,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Death Burst",
        Content:
          "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.",
        Usage: "",
      },
      {
        Name: "Ignited Illumination",
        Content:
          "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 ft.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Touch",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the creature takes 3 (1d6) fire damage at the end of each of its turns.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Ancient Blue Dragon",
    Type: "dragon",
    HP: 481,
    AC: 22,
    Speed: ["40 ft.", "burrow 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 29,
      Dex: 10,
      Con: 27,
      Int: 18,
      Wis: 17,
      Cha: 21,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 15,
      },
      {
        Name: "Wis",
        Modifier: 10,
      },
      {
        Name: "Cha",
        Modifier: 12,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 17,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "23",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Lightning Breath (Recharge 5-6)",
        Content:
          "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "lawful evil",
  },
  {
    Name: "Silver Dragon Wyrmling",
    Type: "dragon",
    HP: 45,
    AC: 17,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 19,
      Dex: 10,
      Con: 17,
      Int: 12,
      Wis: 11,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 2,
      },
      {
        Name: "Con",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "2",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nCold Breath. The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.nParalyzing Breath. The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful good",
  },
  {
    Name: "Giant Elk",
    Type: "beast",
    HP: 42,
    AC: 15,
    Speed: ["60 ft."],
    Abilities: {
      Str: 19,
      Dex: 16,
      Con: 14,
      Int: 7,
      Wis: 14,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Ram",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Lemure",
    Type: "devil",
    HP: 13,
    AC: 7,
    Speed: ["15 ft."],
    Abilities: {
      Str: 10,
      Dex: 5,
      Con: 11,
      Int: 1,
      Wis: 11,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold"],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["charmed", "frightened", "poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the lemure's darkvision.",
        Usage: "",
      },
      {
        Name: "Hellish Rejuvenation",
        Content:
          "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Thug",
    Type: "humanoid",
    HP: 32,
    AC: 11,
    Speed: ["30 ft."],
    Abilities: {
      Str: 15,
      Dex: 11,
      Con: 14,
      Int: 10,
      Wis: 10,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Intimidation",
        Modifier: 2,
      },
    ],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Pack Tactics",
        Content:
          "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The thug makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Mace",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Heavy Crossbow",
        Content:
          "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any non-good alignment",
  },
  {
    Name: "Crocodile",
    Type: "beast",
    HP: 19,
    AC: 12,
    Speed: ["20 ft.", "swim 20 ft."],
    Abilities: {
      Str: 15,
      Dex: 10,
      Con: 13,
      Int: 2,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Hold Breath",
        Content: "The crocodile can hold its breath for 15 minutes.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Adult Blue Dracolich",
    Type: "undead",
    HP: 225,
    AC: 19,
    Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft."],
    Abilities: {
      Str: 25,
      Dex: 10,
      Con: 23,
      Int: 16,
      Wis: 15,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["necrotic"],
    DamageImmunities: ["lightning", "poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned",
    ],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 11,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 12,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "17",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dracolich fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The dracolich has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Lightning Breath (Recharge 5-6)",
        Content:
          "The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dracolich makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dracolich makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dracolich beats its tattered wings. Each creature within 10 ft. of the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "lawful evil",
  },
  {
    Name: "Kobold",
    Type: "humanoid",
    HP: 5,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 7,
      Dex: 15,
      Con: 9,
      Int: 8,
      Wis: 7,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Dagger",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Sling",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "lawful evil",
  },
  {
    Name: "Hydra",
    Type: "monstrosity",
    HP: 172,
    AC: 15,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 20,
      Dex: 12,
      Con: 20,
      Int: 2,
      Wis: 10,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "8",
    Traits: [
      {
        Name: "Hold Breath",
        Content: "The hydra can hold its breath for 1 hour.",
        Usage: "",
      },
      {
        Name: "Multiple Heads",
        Content:
          "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.nWhenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.nAt the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way.",
        Usage: "",
      },
      {
        Name: "Reactive Heads",
        Content:
          "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks.",
        Usage: "",
      },
      {
        Name: "Wakeful",
        Content: "While the hydra sleeps, at least one of its heads is awake.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The hydra makes as many bite attacks as it has heads.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "unaligned",
  },
  {
    Name: "Ape",
    Type: "beast",
    HP: 19,
    AC: 12,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 16,
      Dex: 14,
      Con: 14,
      Int: 6,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "1/2",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The ape makes two fist attacks.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Arcanaloth",
    Type: "fiend",
    HP: 104,
    AC: 17,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 17,
      Dex: 12,
      Con: 14,
      Int: 20,
      Wis: 16,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["acid", "poison"],
    ConditionImmunities: ["charmed", "poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Int",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 13,
      },
      {
        Name: "Deception",
        Modifier: 9,
      },
      {
        Name: "Insight",
        Modifier: 9,
      },
      {
        Name: "Perception",
        Modifier: 7,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "12",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The arcanaloth's innate spellcasting ability is Charisma (spell save DC 15). The arcanaloth can innately cast the following spells, requiring no material components: nnAt will: alter self, darkness, heat metal, invisibility (self only), magic missile",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The arcanaloth has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The arcanaloth's weapon attacks are magical.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The arcanaloth is a 16th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The arcanaloth has the following wizard spells prepared: nn• Cantrips (at will): fire bolt, mage hand, minor illusion, prestidigitationn• 1st level (4 slots): detect magic, identify, shield, Tenser's floating diskn• 2nd level (3 slots): detect thoughts, mirror image, phantasmal force, suggestionn• 3rd level (3 slots): counterspell, fear, fireballn• 4th level (3 slots): banishment, dimension doorn• 5th level (2 slots): contact other plane, hold monstern• 6th level (1 slot): chain lightningn• 7th level (1 slot): finger of deathn• 8th level (1 slot): mind blank",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) slashing damage. The target must make a DC 14 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Teleport",
        Content:
          "The arcanaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Yugoloth (1/Day)",
        Content:
          "The yugoloth attempts a magical summoning.nAn arcanaloth has a 40 percent chance of summoning one arcanaloth.nA summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, does as it pleases, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Magma Mephit",
    Type: "elemental",
    HP: 22,
    AC: 11,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 8,
      Dex: 12,
      Con: 12,
      Int: 7,
      Wis: 10,
      Cha: 10,
    },
    DamageVulnerabilities: ["cold"],
    DamageResistances: [],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Death Burst",
        Content:
          "When the mephit dies, it explodes in a burst of lava. Each creature within 5 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting (1/Day)",
        Content:
          "The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft ., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage.",
        Usage: "",
      },
      {
        Name: "Fire Breath (Recharge 6)",
        Content:
          "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Mephits (1/Day)",
        Content:
          "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "neutral evil",
  },
  {
    Name: "Purple Worm",
    Type: "monstrosity",
    HP: 247,
    AC: 18,
    Speed: ["50 ft.", "burrow 30 ft."],
    Abilities: {
      Str: 28,
      Dex: 7,
      Con: 22,
      Int: 1,
      Wis: 8,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 11,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
    ],
    Skills: [],
    Senses: ["blindsight 30 ft.", "tremorsense 60 ft."],
    Challenge: "15",
    Traits: [
      {
        Name: "Tunneler",
        Content:
          "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The worm makes two attacks: one with its bite and one with its stinger.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.nIf the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone.",
        Usage: "",
      },
      {
        Name: "Tail Stinger",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Gargantuan",
    Alignment: "unaligned",
  },
  {
    Name: "Githyanki Warrior",
    Type: "humanoid",
    HP: 49,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 12,
      Int: 13,
      Wis: 13,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 3,
      },
      {
        Name: "Int",
        Modifier: 3,
      },
      {
        Name: "Wis",
        Modifier: 3,
      },
    ],
    Skills: [],
    Senses: [],
    Challenge: "3",
    Traits: [
      {
        Name: "Innate Spellcasting (Psionics)",
        Content:
          "The githyanki's innate spellcasting ability is Intelligence. It can innately cast the following spells, requiring no components: nnAt will: mage hand (the hand is invisible)n3/day each: jump, misty step, nondetection (self only)",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The githyanki makes two greatsword attacks.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage plus 7 (2d6) psychic damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Mummy Lord",
    Type: "undead",
    HP: 97,
    AC: 17,
    Speed: ["20 ft."],
    Abilities: {
      Str: 18,
      Dex: 10,
      Con: 17,
      Int: 11,
      Wis: 18,
      Cha: 16,
    },
    DamageVulnerabilities: ["bludgeoning"],
    DamageResistances: [],
    DamageImmunities: [
      "necrotic",
      "poison",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned",
    ],
    Saves: [
      {
        Name: "Con",
        Modifier: 8,
      },
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "History",
        Modifier: 5,
      },
      {
        Name: "Religion",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "15",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The mummy lord has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Rejuvenation",
        Content:
          "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared: nn• Cantrips (at will): sacred flame, thaumaturgyn• 1st level (4 slots): command, guiding bolt, shield of faithn• 2nd level (3 slots): hold person, silence, spiritual weaponn• 3rd level (3 slots): animate dead, dispel magicn• 4th level (3 slots): divination, guardian of faithn• 5th level (2 slots): contagion, insect plaguen• 6th level (1 slot): harm",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The mummy can use its Dreadful Glare and makes one attack with its rotting fist.",
        Usage: "",
      },
      {
        Name: "Rotting Fist",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
        Usage: "",
      },
      {
        Name: "Dreadful Glare",
        Content:
          "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Attack",
        Content:
          "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare.",
        Usage: "",
      },
      {
        Name: "Blinding Dust",
        Content:
          "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn.",
        Usage: "",
      },
      {
        Name: "Blasphemous Word (Costs 2 Actions)",
        Content:
          "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn.",
        Usage: "",
      },
      {
        Name: "Channel Negative Energy (Costs 2 Actions)",
        Content:
          "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn.",
        Usage: "",
      },
      {
        Name: "Whirlwind of Sand (Costs 2 Actions)",
        Content:
          "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession.",
        Usage: "",
      },
    ],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Worg",
    Type: "monstrosity",
    HP: 26,
    AC: 13,
    Speed: ["50 ft."],
    Abilities: {
      Str: 16,
      Dex: 13,
      Con: 13,
      Int: 7,
      Wis: 11,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral evil",
  },
  {
    Name: "Octopus",
    Type: "beast",
    HP: 3,
    AC: 12,
    Speed: ["5 ft.", "swim 30 ft."],
    Abilities: {
      Str: 4,
      Dex: 15,
      Con: 11,
      Int: 3,
      Wis: 10,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 30 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Hold Breath",
        Content:
          "While out of water, the octopus can hold its breath for 30 minutes.",
        Usage: "",
      },
      {
        Name: "Underwater Camouflage",
        Content:
          "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
        Usage: "",
      },
      {
        Name: "Water Breathing",
        Content: "The octopus can breathe only underwater.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Tentacles",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target.",
        Usage: "",
      },
      {
        Name: "Ink Cloud (Recharges after a Short or Long Rest)",
        Content:
          "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Water Elemental",
    Type: "elemental",
    HP: 114,
    AC: 14,
    Speed: ["30 ft.", "swim 90 ft."],
    Abilities: {
      Str: 18,
      Dex: 14,
      Con: 18,
      Int: 5,
      Wis: 10,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "acid; bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Water Form",
        Content:
          "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.",
        Usage: "",
      },
      {
        Name: "Freeze",
        Content:
          "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 ft. until the end of its next turn.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The elemental makes two slam attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Whelm (Recharge 4-6)",
        Content:
          "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.nThe elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "neutral",
  },
  {
    Name: "Yochlol",
    Type: "demon",
    HP: 136,
    AC: 15,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 18,
      Int: 13,
      Wis: 15,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 10,
      },
      {
        Name: "Insight",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "10",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The yochlol can use its action to polymorph into a form that resembles a female drow or giant spider, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The yochlol has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The yochlol can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The yochlol's spellcasting ability is Charisma (spell save DC 14). The yochlol can innately cast the following spells, requiring no material components: nAt will: detect thoughts, webn1/day: dominate person",
        Usage: "",
      },
      {
        Name: "Web Walker",
        Content: "The yochlol ignores movement restrictions caused by webbing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The yochlol makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Slam (Bite in Spider Form)",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft. (10 ft. in demon form), one target. Hit: 5 (1d6 + 2) bludgeoning (piercing in spider form) damage plus 21 (6d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Mist Form",
        Content:
          "The yochlol transforms into toxic mist or reverts to its true form. Any equipment it is wearing or carrying is also transformed. It reverts to its true form if it dies.nWhile in mist form, the yochlol is incapacitated and can't speak. It has a flying speed of 30 feet, can hover, and can pass through any space that isn't airtight. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to nonmagical damage.nWhile in mist form, the yochlol can enter a creature's space and stop there. Each time that creature starts its turn with the yochlol in its space, the creature must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target is incapacitated.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Demon (1/Day)",
        Content:
          "The demon chooses what to summon and attempts a magical summoning.nA yochlol has a 50 percent chance of summoning one yochlol.nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Vampire Spawn",
    Type: "undead",
    HP: 82,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 16,
      Con: 16,
      Int: 11,
      Wis: 10,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "necrotic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 3,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Regeneration",
        Content:
          "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Vampire Weaknesses",
        Content:
          "The vampire has the following flaws: nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.nHarmed by Running Water. The vampire takes 20 acid damage when it ends its turn in running water.nStake to the Heart. The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place.nSunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The vampire makes two attacks, only one of which can be a bite attack.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13).",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Shrieker",
    Type: "plant",
    HP: 13,
    AC: 5,
    Speed: ["0 ft."],
    Abilities: {
      Str: 1,
      Dex: 1,
      Con: 10,
      Int: 1,
      Wis: 3,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["blinded", "deafened", "frightened"],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 30 ft. (blind beyond this radius)"],
    Challenge: "0",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Shriek",
        Content:
          "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Cloud Giant",
    Type: "giant",
    HP: 200,
    AC: 14,
    Speed: ["40 ft."],
    Abilities: {
      Str: 27,
      Dex: 10,
      Con: 22,
      Int: 12,
      Wis: 16,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 10,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 7,
      },
      {
        Name: "Perception",
        Modifier: 7,
      },
    ],
    Senses: [],
    Challenge: "9",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The giant has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components: nnAt will: detect magic, fog cloud, lightn3/day each: feather fall, fly, misty step, telekinesisn1/day each: control weather, gaseous form",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Fling",
        Content:
          "The giant tries to throw a Small or Medium creature within 10 feet of it. The target must succeed on a DC 20 Dexterity saving throw or be hurled up to 60 feet horizontally in a direction of the giant's choice and land prone, taking 1d8 bludgeoning damage for every 10 feet it was thrown.",
        Usage: "",
      },
      {
        Name: "Wind Aura",
        Content:
          "A magical aura of wind surrounds the giant. The aura is a 10-foot-radius sphere that lasts as long as the giant maintains concentration on it (as if concentrating on a spell). While the aura is in effect, the giant gains a +2 bonus to its AC against ranged weapon attacks, and all open flames within the aura are extinguished unless they are magical.",
        Usage: "",
      },
      {
        Name: "Multiattack",
        Content: "The giant makes two morningstar attacks.",
        Usage: "",
      },
      {
        Name: "Morningstar",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) piercing damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10 + 8) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "neutral good (50%) or neutral evil (50%)",
  },
  {
    Name: "Nightmare",
    Type: "fiend",
    HP: 68,
    AC: 13,
    Speed: ["60 ft.", "fly 90 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 10,
      Wis: 13,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "3",
    Traits: [
      {
        Name: "Confer Fire Resistance",
        Content:
          "The nightmare can grant resistance to fire damage to anyone riding it.",
        Usage: "",
      },
      {
        Name: "Illumination",
        Content:
          "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Ethereal Stride",
        Content:
          "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral evil",
  },
  {
    Name: "Giant Wolf Spider",
    Type: "beast",
    HP: 11,
    AC: 13,
    Speed: ["40 ft.", "climb 40 ft."],
    Abilities: {
      Str: 12,
      Dex: 16,
      Con: 13,
      Int: 3,
      Wis: 12,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Spider Climb",
        Content:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Web Sense",
        Content:
          "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
        Usage: "",
      },
      {
        Name: "Web Walker",
        Content: "The spider ignores movement restrictions caused by webbing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Ape",
    Type: "beast",
    HP: 157,
    AC: 12,
    Speed: ["40 ft.", "climb 40 ft."],
    Abilities: {
      Str: 23,
      Dex: 14,
      Con: 18,
      Int: 7,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 9,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "7",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The ape makes two fist attacks.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "unaligned",
  },
  {
    Name: "Fomorian",
    Type: "giant",
    HP: 149,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 23,
      Dex: 10,
      Con: 20,
      Int: 9,
      Wis: 14,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 8,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "8",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The fomorian attacks twice with its greatclub or makes one greatclub attack and uses Evil Eye once.",
        Usage: "",
      },
      {
        Name: "Greatclub",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Evil Eye",
        Content:
          "The fomorian magically forces a creature it can see within 60 feet of it to make a DC 14 Charisma saving throw. The creature takes 27 (6d8) psychic damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Curse of the Evil Eye (Recharges after a Short or Long Rest)",
        Content:
          "With a stare, the fomorian uses Evil Eye, but on a failed save, the creature is also cursed with magical deformities. While deformed, the creature has its speed halved and has disadvantage on ability checks, saving throws, and attacks based on Strength or Dexterity.nThe transformed creature can repeat the saving throw whenever it finishes a long rest, ending the effect on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "chaotic evil",
  },
  {
    Name: "Drow",
    Type: "humanoid",
    HP: 13,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 14,
      Con: 10,
      Int: 11,
      Wis: 11,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Fey Ancestry",
        Content:
          "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The drow's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components: nAt will: dancing lightsn1/day each: darkness, faerie fire",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Hand Crossbow",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Earth Elemental",
    Type: "elemental",
    HP: 126,
    AC: 17,
    Speed: ["30 ft.", "burrow 30 ft."],
    Abilities: {
      Str: 20,
      Dex: 8,
      Con: 20,
      Int: 5,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: ["thunder"],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "exhaustion",
      "paralyzed",
      "petrified",
      "poisoned",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Earth Glide",
        Content:
          "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through.",
        Usage: "",
      },
      {
        Name: "Siege Monster",
        Content: "The elemental deals double damage to objects and structures.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The elemental makes two slam attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "neutral",
  },
  {
    Name: "Young Silver Dragon",
    Type: "dragon",
    HP: 168,
    AC: 18,
    Speed: ["40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 23,
      Dex: 10,
      Con: 21,
      Int: 14,
      Wis: 11,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Con",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 6,
      },
      {
        Name: "History",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 8,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "9",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nCold Breath. The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.nParalyzing Breath. The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful good",
  },
  {
    Name: "Cambion",
    Type: "fiend",
    HP: 82,
    AC: 19,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 18,
      Dex: 18,
      Con: 16,
      Int: 14,
      Wis: 12,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "poison",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Str",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Cha",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 6,
      },
      {
        Name: "Intimidation",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Fiendish Blessing",
        Content: "The AC of the cambion includes its Charisma bonus.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The cambion's spellcasting ability is Charisma (spell save DC 14). The cambion can innately cast the following spells, requiring no material components: n3/day each: alter self, command, detect magicn1/day: plane shift (self only)",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The cambion makes two melee attacks or uses its Fire Ray twice.",
        Usage: "",
      },
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft ., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Fire Ray",
        Content:
          "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10 (3d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Fiendish Charm",
        Content:
          "One humanoid the cambion can see within 30 ft. of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any evil alignment",
  },
  {
    Name: "Cockatrice",
    Type: "monstrosity",
    HP: 27,
    AC: 11,
    Speed: ["20 ft.", "fly 40 ft."],
    Abilities: {
      Str: 6,
      Dex: 12,
      Con: 12,
      Int: 2,
      Wis: 13,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "unaligned",
  },
  {
    Name: "Helmed Horror",
    Type: "construct",
    HP: 60,
    AC: 20,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 18,
      Dex: 13,
      Con: 16,
      Int: 10,
      Wis: 10,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't adamantine",
    ],
    DamageImmunities: ["force", "necrotic", "poison"],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
      "stunned",
    ],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "4",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The helmed horror has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Spell Immunity",
        Content:
          "The helmed horror is immune to three spells chosen by its creator. Typical immunities include fireball, heat metal, and lightning bolt.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The helmed horror makes two longsword attacks.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Slaad Tadpole",
    Type: "aberration",
    HP: 10,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 7,
      Dex: 15,
      Con: 10,
      Int: 3,
      Wis: 5,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The slaad has advantage on saving throws against spells and other magical effects",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Faerie Dragon (Green)",
    Type: "dragon",
    HP: 14,
    AC: 15,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 3,
      Dex: 20,
      Con: 13,
      Int: 14,
      Wis: 12,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "The Colors of Age",
        Content:
          "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.nnRed — 5 years or lessnOrange — 6-10 yearsnYellow — 11-20 yearsnGreen — 21-30 yearsnBlue — 31-40 yearsnIndigo — 41-50 yearsnViolet — 51 years or morenA green or older faerie dragon's CR increases to 2.",
        Usage: "",
      },
      {
        Name: "Superior Invisibility",
        Content:
          "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.",
        Usage: "",
      },
      {
        Name: "Limited Telepathy",
        Content:
          "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The faerie dragon has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.nn1/day each: color spray, dancing lights, mage hand, minor illusion, mirror image, suggestion",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        Usage: "",
      },
      {
        Name: "Euphoria Breath (Recharge 5-6)",
        Content:
          "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:n1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.n5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "chaotic good",
  },
  {
    Name: "Rust Monster",
    Type: "monstrosity",
    HP: 27,
    AC: 14,
    Speed: ["40 ft."],
    Abilities: {
      Str: 13,
      Dex: 12,
      Con: 13,
      Int: 2,
      Wis: 13,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Iron Scent",
        Content:
          "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it.",
        Usage: "",
      },
      {
        Name: "Rust Metal",
        Content:
          "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Non magical ammunition made of metal that hits the rust monster is destroyed after dealing damage.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
        Usage: "",
      },
      {
        Name: "Antennae",
        Content:
          "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch.nIf the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Hawk",
    Type: "beast",
    HP: 1,
    AC: 13,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 5,
      Dex: 16,
      Con: 8,
      Int: 2,
      Wis: 14,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Keen Sight",
        Content:
          "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Talons",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Marid",
    Type: "elemental",
    HP: 229,
    AC: 17,
    Speed: ["30 ft.", "fly 60 ft.", "swim 90 ft."],
    Abilities: {
      Str: 22,
      Dex: 12,
      Con: 26,
      Int: 18,
      Wis: 17,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid", "cold", "lightning"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "11",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The marid can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Elemental Demise",
        Content:
          "If the marid dies, its body disintegrates into a burst of water and foam, leaving behind only equipment the marid was wearing or carrying.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The marid's innate spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no material components: nnAt will: create or destroy water, detect evil and good, detect magic, fog cloud, purify food and drinkn3/day each: tongues, water breathing, water walkn1/day each: conjure elemental (water elemental only), control water, gaseous form, invisibility, plane shift",
        Usage: "",
      },
      {
        Name: "Variant: Genie Powers",
        Content:
          "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.nnDisguises.nSome genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.nWishes.nThe genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.nTo be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The marid makes two trident attacks.",
        Usage: "",
      },
      {
        Name: "Trident",
        Content:
          "Melee or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 13 (2d6 + 6) piercing damage, or 15 (2d8 + 6) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
      {
        Name: "Water Jet",
        Content:
          "The marid magically shoots water in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw. On a failure, a target takes 21 (6d6) bludgeoning damage and, if it is Huge or smaller, is pushed up to 20 feet away from the marid and knocked prone. On a success, a target takes half the bludgeoning damage, but is neither pushed nor knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Faerie Dragon (Red)",
    Type: "dragon",
    HP: 14,
    AC: 15,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 3,
      Dex: 20,
      Con: 13,
      Int: 14,
      Wis: 12,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "The Colors of Age",
        Content:
          "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.nnRed — 5 years or lessnOrange — 6-10 yearsnYellow — 11-20 yearsnGreen — 21-30 yearsnBlue — 31-40 yearsnIndigo — 41-50 yearsnViolet — 51 years or morenA green or older faerie dragon's CR increases to 2.",
        Usage: "",
      },
      {
        Name: "Superior Invisibility",
        Content:
          "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.",
        Usage: "",
      },
      {
        Name: "Limited Telepathy",
        Content:
          "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The faerie dragon has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.nn1/day each: dancing lights, mage hand, minor illusion",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        Usage: "",
      },
      {
        Name: "Euphoria Breath (Recharge 5-6)",
        Content:
          "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:n1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.n5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "chaotic good",
  },
  {
    Name: "Gynosphinx",
    Type: "monstrosity",
    HP: 136,
    AC: 17,
    Speed: ["40 ft.", "fly 60 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 18,
      Wis: 18,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["psychic"],
    ConditionImmunities: ["charmed", "frightened"],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 12,
      },
      {
        Name: "History",
        Modifier: 12,
      },
      {
        Name: "Perception",
        Modifier: 8,
      },
      {
        Name: "Religion",
        Modifier: 8,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "11",
    Traits: [
      {
        Name: "Inscrutable",
        Content:
          "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The sphinx's weapon attacks are magical.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared: nn• Cantrips (at will): mage hand, minor illusion, prestidigitationn• 1st level (4 slots): detect magic, identify, shieldn• 2nd level (3 slots): darkness, locate object, suggestionn• 3rd level (3 slots): dispel magic, remove curse, tonguesn• 4th level (3 slots): banishment, greater invisibilityn• 5th level (1 slot): legend lore",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The sphinx makes two claw attacks.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Claw Attack",
        Content: "The sphinx makes one claw attack.",
        Usage: "",
      },
      {
        Name: "Teleport (Costs 2 Actions)",
        Content:
          "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Cast a Spell (Costs 3 Actions)",
        Content:
          "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.",
        Usage: "",
      },
    ],
    Size: "Large",
    Alignment: "lawful neutral",
  },
  {
    Name: "Ancient White Dragon",
    Type: "dragon",
    HP: 333,
    AC: 20,
    Speed: ["40 ft.", "burrow 40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 26,
      Dex: 10,
      Con: 26,
      Int: 10,
      Wis: 13,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 14,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 13,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "20",
    Traits: [
      {
        Name: "Ice Walk",
        Content:
          "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours .",
        Usage: "",
      },
      {
        Name: "Cold Breath (Recharge 5-6)",
        Content:
          "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) cold damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Gargantuan",
    Alignment: "chaotic evil",
  },
  {
    Name: "Adult Black Dragon",
    Type: "dragon",
    HP: 195,
    AC: 19,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 23,
      Dex: 14,
      Con: 21,
      Int: 14,
      Wis: 13,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 10,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 11,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "14",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Acid Breath (Recharge 5-6)",
        Content:
          "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "chaotic evil",
  },
  {
    Name: "Death Slaad",
    Type: "aberration",
    HP: 170,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 20,
      Dex: 15,
      Con: 19,
      Int: 15,
      Wis: 10,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 8,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 60 ft."],
    Challenge: "10",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The slaad's innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). The slaad can innately cast the following spells, requiring no material components: nnAt will: detect magic, detect thoughts, invisibility (self only), mage hand, major imagen2/day each: fear, fireball, fly, tonguesn1/day each: cloudkill, plane shift",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The slaad has advantage on saving throws against spells and other magical effects",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The slaad's weapon attacks are magical.",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point.",
        Usage: "",
      },
      {
        Name: "Variant: Control Gem",
        Content:
          "Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.nCertain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.nA greater restoration spell cast on the slaad destroys the gem without harming the slaad.nSomeone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The slaad makes three attacks: one with its bite and two with its claws or greatsword.",
        Usage: "",
      },
      {
        Name: "Bite (Slaad Form Only)",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage plus 7 (2d6) necrotic damage.",
        Usage: "",
      },
      {
        Name: "Claws (Slaad Form Only)",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) slashing damage plus 7 (2d6) necrotic damage.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 7 (2d6) necrotic damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Oni",
    Type: "giant",
    HP: 110,
    AC: 16,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 19,
      Dex: 11,
      Con: 16,
      Int: 14,
      Wis: 12,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 3,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 5,
      },
      {
        Name: "Deception",
        Modifier: 8,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "7",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components: nnAt will: darkness, invisibilityn1/day each: charm person, cone of cold, gaseous form, sleep",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The oni's weapon attacks are magical.",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The oni makes two attacks, either with its claws or its glaive.",
        Usage: "",
      },
      {
        Name: "Claw (Oni Form Only)",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Glaive",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Ancient Copper Dragon",
    Type: "dragon",
    HP: 350,
    AC: 21,
    Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 27,
      Dex: 12,
      Con: 25,
      Int: 20,
      Wis: 17,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 8,
      },
      {
        Name: "Con",
        Modifier: 14,
      },
      {
        Name: "Wis",
        Modifier: 10,
      },
      {
        Name: "Cha",
        Modifier: 11,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 11,
      },
      {
        Name: "Perception",
        Modifier: 17,
      },
      {
        Name: "Stealth",
        Modifier: 8,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "21",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nAcid Breath. The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one.nSlowing Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "chaotic good",
  },
  {
    Name: "Giant Boar",
    Type: "beast",
    HP: 42,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 17,
      Dex: 10,
      Con: 16,
      Int: 2,
      Wis: 7,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Relentless (Recharges after a Short or Long Rest)",
        Content:
          "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Tusk",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Elk",
    Type: "beast",
    HP: 13,
    AC: 10,
    Speed: ["50 ft."],
    Abilities: {
      Str: 16,
      Dex: 10,
      Con: 12,
      Int: 2,
      Wis: 10,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Ram",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Red Dragon Wyrmling",
    Type: "dragon",
    HP: 75,
    AC: 17,
    Speed: ["30 ft.", "climb 30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 19,
      Dex: 10,
      Con: 17,
      Int: 12,
      Wis: 11,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 2,
      },
      {
        Name: "Con",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "4",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Fire Breath (Recharge 5-6)",
        Content:
          "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC l3 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Rug of Smothering",
    Type: "construct",
    HP: 33,
    AC: 12,
    Speed: ["10 ft."],
    Abilities: {
      Str: 17,
      Dex: 14,
      Con: 10,
      Int: 1,
      Wis: 3,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison", "psychic"],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "2",
    Traits: [
      {
        Name: "Antimagic Susceptibility",
        Content:
          "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
        Usage: "",
      },
      {
        Name: "Damage Transfer",
        Content:
          "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the rug remains motionless, it is indistinguishable from a normal rug.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Smother",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Gargoyle",
    Type: "elemental",
    HP: 52,
    AC: 15,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 15,
      Dex: 11,
      Con: 16,
      Int: 6,
      Wis: 11,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't adamantine",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["exhaustion", "petrified", "poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the gargoyle remains motion less, it is indistinguishable from an inanimate statue.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The gargoyle makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "chaotic evil",
  },
  {
    Name: "Giant Rat (Diseased)",
    Type: "beast",
    HP: 7,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 7,
      Dex: 15,
      Con: 11,
      Int: 2,
      Wis: 10,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/8",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Ice Mephit",
    Type: "elemental",
    HP: 21,
    AC: 11,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 7,
      Dex: 13,
      Con: 10,
      Int: 9,
      Wis: 11,
      Cha: 12,
    },
    DamageVulnerabilities: ["bludgeoning", "fire"],
    DamageResistances: [],
    DamageImmunities: ["cold", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Death Burst",
        Content:
          "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 ft. of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting (1/Day)",
        Content:
          "The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage.",
        Usage: "",
      },
      {
        Name: "Frost Breath (Recharge 6)",
        Content:
          "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Mephits (1/Day)",
        Content:
          "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "neutral evil",
  },
  {
    Name: "Giant Wasp",
    Type: "beast",
    HP: 13,
    AC: 12,
    Speed: ["10 ft.", "fly 50 ft.", "swim 50 ft."],
    Abilities: {
      Str: 10,
      Dex: 14,
      Con: 10,
      Int: 1,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/2",
    Traits: [],
    Actions: [
      {
        Name: "Sting",
        Content:
          "Sting. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Bone Naga (Spirit)",
    Type: "undead",
    HP: 58,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 15,
      Dex: 16,
      Con: 12,
      Int: 15,
      Wis: 15,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["charmed", "exhaustion", "paralyzed", "poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Spellcasting",
        Content:
          "The naga is a 5th-level spellcaster (spell save DC 12, +4 to hit with spell attacks) that needs only verbal components to cast its spells. Its spellcasting ability is Intelligence, and it has the following wizard spells prepared: nn• Cantrips (at will): mage hand, minor illusion, ray of frostn• 1st level (4 slots): charm person, sleepn• 2nd level (3 slots): detect thoughts, hold personn• 3rd level (2 slots): lightning bolt",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 10 (2d6 + 3) piercing damage plus 10 (3d6) poison damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Harpy",
    Type: "monstrosity",
    HP: 38,
    AC: 11,
    Speed: ["20 ft.", "fly 40 ft."],
    Abilities: {
      Str: 12,
      Dex: 13,
      Con: 12,
      Int: 7,
      Wis: 10,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The harpy makes two attacks: one with its claws and one with its club.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
        Usage: "",
      },
      {
        Name: "Club",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Luring Song",
        Content:
          "The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.n     While charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it.n     A target that successfully saves is immune to this harpy's song for the next 24 hours.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Medusa",
    Type: "monstrosity",
    HP: 127,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 15,
      Con: 16,
      Int: 12,
      Wis: 13,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 5,
      },
      {
        Name: "Insight",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "Petrifying Gaze",
        Content:
          "When a creature that can see the medusa's eyes starts its turn within 30 ft. of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.nUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.nIf the medusa sees itself reflected on a polished surface within 30 ft. of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The medusa makes either three melee attacks —  one with its snake hair and two with its shortsword — or two ranged attacks with its longbow.",
        Usage: "",
      },
      {
        Name: "Snake Hair",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Hyena",
    Type: "beast",
    HP: 5,
    AC: 11,
    Speed: ["50 ft."],
    Abilities: {
      Str: 11,
      Dex: 13,
      Con: 12,
      Int: 2,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Pack Tactics",
        Content:
          "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Owlbear",
    Type: "monstrosity",
    HP: 59,
    AC: 13,
    Speed: ["40 ft."],
    Abilities: {
      Str: 20,
      Dex: 12,
      Con: 17,
      Int: 3,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Keen Sight and Smell",
        Content:
          "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The owlbear makes two attacks: one with its beak and one with its claws.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Sea Hag",
    Type: "fey",
    HP: 52,
    AC: 14,
    Speed: ["30 ft.", "swim 40 ft."],
    Abilities: {
      Str: 16,
      Dex: 13,
      Con: 16,
      Int: 12,
      Wis: 12,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The hag can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Horrific Appearance",
        Content:
          "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours.nUnless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag.",
        Usage: "",
      },
      {
        Name: "Hag Coven",
        Content:
          "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
        Usage: "",
      },
      {
        Name: "Shared Spellcasting (Coven Only)",
        Content:
          "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves: nn• 1st level (4 slots): identify, ray of sicknessn• 2nd level (3 slots): hold person, locate objectn• 3rd level (3 slots): bestow curse, counterspell, lightning boltn• 4th level (3 slots): phantasmal killer, polymorphn• 5th level (2 slots): contact other plane, scryingn• 6th level (1 slot): eye bitennFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
        Usage: "",
      },
      {
        Name: "Hag Eye (Coven Only)",
        Content:
          "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Death Glare",
        Content:
          "The hag targets one frightened creature she can see within 30 ft. of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points.",
        Usage: "",
      },
      {
        Name: "Illusory Appearance",
        Content:
          "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "chaotic evil",
  },
  {
    Name: "Ancient Red Dragon",
    Type: "dragon",
    HP: 546,
    AC: 22,
    Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 30,
      Dex: 10,
      Con: 29,
      Int: 18,
      Wis: 15,
      Cha: 23,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 16,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 13,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 16,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "24",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Fire Breath (Recharge 5-6)",
        Content:
          "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "chaotic evil",
  },
  {
    Name: "Blue Slaad",
    Type: "aberration",
    HP: 123,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 20,
      Dex: 15,
      Con: 18,
      Int: 7,
      Wis: 7,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 1,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "7",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The slaad has advantage on saving throws against spells and other magical effects",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point.",
        Usage: "",
      },
      {
        Name: "Variant: Control Gem",
        Content:
          "Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.nCertain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.nA greater restoration spell cast on the slaad destroys the gem without harming the slaad.nSomeone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The slaad makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage. If the target is a humanoid, it must succeed on a DC 15 Constitution saving throw or be infected with a disease called chaos phage. While infected, the target can't regain hit points, and its hit point maximum is reduced by 10 (3d6) every 24 hours. If the disease reduces the target's hit point maximum to 0, the target instantly transforms into a red slaad or, if it has the ability to cast spells of 3rd level or higher, a green slaad. Only a wish spell can reverse the transformation.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Jackalwere",
    Type: "humanoid",
    HP: 18,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 11,
      Dex: 15,
      Con: 11,
      Int: 13,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "bludgeoning",
      "piercing",
      "and slashing damage from nonmagical weapons that aren't silvered",
    ],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The jackalwere can use its action to polymorph into a specific Medium human or a jackal-humanoid hybrid, or back into its true form (that of a Small jackal). Other than its size, its statistics are the same in each form. Any equipment it is wearing or carrying isn 't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The jackalwere has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The jackalwere has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite (Jackal or Hybrid Form Only)",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Scimitar (Human or Hybrid Form Only)",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Sleep Gaze",
        Content:
          "The jackalwere gazes at one creature it can see within 30 feet of it. The target must make a DC 10 Wisdom saving throw. On a failed save, the target succumbs to a magical slumber, falling unconscious for 10 minutes or until someone uses an action to shake the target awake. A creature that successfully saves against the effect is immune to this jackalwere's gaze for the next 24 hours. Undead and creatures immune to being charmed aren't affected by it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Shield Guardian",
    Type: "construct",
    HP: 142,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 8,
      Con: 18,
      Int: 7,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "7",
    Traits: [
      {
        Name: "Bound",
        Content:
          "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian.",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit. point.",
        Usage: "",
      },
      {
        Name: "Spell Storing",
        Content:
          "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The guardian makes two fist attacks.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Shield",
        Content:
          "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Mage",
    Type: "humanoid",
    HP: 40,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 9,
      Dex: 14,
      Con: 11,
      Int: 17,
      Wis: 12,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Int",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 6,
      },
      {
        Name: "History",
        Modifier: 6,
      },
    ],
    Senses: [],
    Challenge: "6",
    Traits: [
      {
        Name: "Spellcasting",
        Content:
          "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared: nn• Cantrips (at will): fire bolt, light, mage hand, prestidigitationn• 1st level (4 slots): detect magic, mage armor, magic missile, shieldn• 2nd level (3 slots): misty step, suggestionn• 3rd level (3 slots): counterspell, fireball, flyn• 4th level (3 slots): greater invisibility, ice stormn• 5th level (1 slot): cone of cold",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Dagger",
        Content:
          "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Quadrone",
    Type: "construct",
    HP: 22,
    AC: 16,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 12,
      Dex: 14,
      Con: 12,
      Int: 10,
      Wis: 10,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Axiomatic Mind",
        Content:
          "The quadrone can't be compelled to act in a manner contrary to its nature or its instructions.",
        Usage: "",
      },
      {
        Name: "Disintegration",
        Content:
          "If the quadrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The quadrone makes two fist attacks or four shortbow attacks.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Shortbow",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "construct",
  },
  {
    Name: "Stone Giant",
    Type: "giant",
    HP: 126,
    AC: 17,
    Speed: ["40 ft."],
    Abilities: {
      Str: 23,
      Dex: 15,
      Con: 20,
      Int: 10,
      Wis: 12,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 8,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 12,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "7",
    Traits: [
      {
        Name: "Stone Camouflage",
        Content:
          "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Fling",
        Content:
          "The giant tries to throw a Small or Medium creature within 10 feet of it. The target must succeed on a DC 17 Dexterity saving throw or be hurled up to 60 feet horizontally in a direction of the giant's choice. and land prone, taking 1d6 bludgeoning damage for every 10 feet it was thrown. ",
        Usage: "",
      },
      {
        Name: "Rolling Rock",
        Content:
          "The giant sends a rock tumbling along the ground in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 17 Dexterity saving throw, taking 22 (3d10 + 6) bludgeoning damage and falling prone on a failed save",
        Usage: "",
      },
      {
        Name: "Multiattack",
        Content: "The giant makes two greatclub attacks.",
        Usage: "",
      },
      {
        Name: "Greatclub",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Rock Catching",
        Content:
          "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "neutral",
  },
  {
    Name: "Thri-kreen (Psionic)",
    Type: "humanoid",
    HP: 33,
    AC: 15,
    Speed: ["40 ft."],
    Abilities: {
      Str: 12,
      Dex: 15,
      Con: 13,
      Int: 8,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
      {
        Name: "Survival",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Chameleon Carapace",
        Content:
          "The thri-kreen can change the color of its carapace to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide.",
        Usage: "",
      },
      {
        Name: "Standing Leap",
        Content:
          "The thri-kreen's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting (Psionics)",
        Content:
          "The thri-kreen's innate spellcasting ability is Wisdom. The thri-kreen can innately cast the following spells, requiring no components: nnAt will: mage hand (the hand is invisible)n2/day each: blur, magic weaponn1/day: invisibility (self only)",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The thri-kreen makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is also paralyzed while poisoned in this way. The poisoned target can repeat the saving throw on each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
        Usage: "",
      },
      {
        Name: "Variant: Weapons Multiattack",
        Content:
          "The thri-kreen makes two gythka attacks or two chatkcha attacks.",
        Usage: "",
      },
      {
        Name: "Variant: Gythka",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage.",
        Usage: "",
      },
      {
        Name: "Variant: Chatkcha",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Tridrone",
    Type: "construct",
    HP: 16,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 12,
      Dex: 13,
      Con: 12,
      Int: 9,
      Wis: 10,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Axiomatic Mind",
        Content:
          "The tridrone can't be compelled to act in a manner contrary to its nature or its instructions.",
        Usage: "",
      },
      {
        Name: "Disintegration",
        Content:
          "If the tridrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The tridrone makes three fist attacks or three javelin attacks.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "construct",
  },
  {
    Name: "Ice Devil",
    Type: "devil",
    HP: 180,
    AC: 18,
    Speed: ["40 ft."],
    Abilities: {
      Str: 21,
      Dex: 14,
      Con: 18,
      Int: 18,
      Wis: 15,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "14",
    Traits: [
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the devil's darkvision.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The devil has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The devil makes three attacks: one with its bite, one with its claws, and one with its tail.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack:+10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage.",
        Usage: "",
      },
      {
        Name: "Wall of Ice",
        Content:
          "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.nWhen the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.nThe wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Scorpion",
    Type: "beast",
    HP: 1,
    AC: 11,
    Speed: ["10 ft."],
    Abilities: {
      Str: 2,
      Dex: 11,
      Con: 8,
      Int: 1,
      Wis: 8,
      Cha: 2,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "0",
    Traits: [],
    Actions: [
      {
        Name: "Sting",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Pteranodon",
    Type: "dinosaur",
    HP: 13,
    AC: 13,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 12,
      Dex: 15,
      Con: 10,
      Int: 2,
      Wis: 9,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 1,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Flyby",
        Content:
          "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) piercing damage",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Bearded Devil",
    Type: "devil",
    HP: 52,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 15,
      Con: 15,
      Int: 9,
      Wis: 11,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Str",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 4,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the devil's darkvision.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The devil has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Steadfast",
        Content:
          "The devil can't be frightened while it can see an allied creature within 30 feet of it.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The devil makes two attacks: one with its beard and one with its glaive.",
        Usage: "",
      },
      {
        Name: "Beard",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Glaive",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Blood Hawk",
    Type: "beast",
    HP: 7,
    AC: 12,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 6,
      Dex: 14,
      Con: 10,
      Int: 3,
      Wis: 14,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Keen Sight",
        Content:
          "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Empyrean",
    Type: "celestial",
    HP: 313,
    AC: 22,
    Speed: ["50 ft.", "fly 50 ft.", "swim 50 ft."],
    Abilities: {
      Str: 30,
      Dex: 21,
      Con: 30,
      Int: 21,
      Wis: 22,
      Cha: 27,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Str",
        Modifier: 17,
      },
      {
        Name: "Int",
        Modifier: 12,
      },
      {
        Name: "Wis",
        Modifier: 13,
      },
      {
        Name: "Cha",
        Modifier: 15,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 13,
      },
      {
        Name: "Persuasion",
        Modifier: 15,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "23",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The empyrean's innate spellcasting ability is Charisma (spell save DC 23, +15 to hit with spell attacks). It can innately cast the following spells, requiring no material components: nAt will: greater restoration, pass without trace, water breathing, water walkn1/day each: commune, dispel evil and good, earthquake, fire storm, plane shift (self only)",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the empyrean fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The empyrean has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The empyrean's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Maul",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or be stunned until the end of the empyrean's next turn.",
        Usage: "",
      },
      {
        Name: "Bolt",
        Content:
          "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit: 24 (7d6) damage of one of the following types (empyrean's choice): acid, cold, fire, force, lightning, radiant, or thunder.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Attack",
        Content: "The empyrean makes one attack.",
        Usage: "",
      },
      {
        Name: "Bolster",
        Content:
          "The empyrean bolsters all nonhostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn.",
        Usage: "",
      },
      {
        Name: "Trembling Strike (Costs 2 Actions)",
        Content:
          "The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a DC 25 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "chaotic good (75%) or neutral evil (25%)",
  },
  {
    Name: "Avatar of Death",
    Type: "undead",
    HP: 0,
    AC: 20,
    Speed: ["60 ft.", "fly 60 ft. (hover)"],
    Abilities: {
      Str: 16,
      Dex: 16,
      Con: 16,
      Int: 16,
      Wis: 16,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["necrotic", "poison"],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned ",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft.", "truesight 60 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Incorporeal Movement",
        Content:
          "The avatar can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
        Usage: "",
      },
      {
        Name: "Turning Immunity",
        Content: "The avatar is immune to features that turn undead.",
        Usage: "",
      },
      {
        Name: "Hit Points",
        Content:
          "The Avatar of Death appears with hit points equal to half its summoner's maximum hit points.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Reaping Scythe",
        Content:
          "The avatar sweeps its spectral scythe through a creature within 5 feet of it, dealing 7 (1d8 + 3) slashing damage plus 4 (1d8) necrotic damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Warhorse",
    Type: "beast",
    HP: 19,
    AC: 11,
    Speed: ["60 ft."],
    Abilities: {
      Str: 18,
      Dex: 12,
      Con: 13,
      Int: 2,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Trampling Charge",
        Content:
          "If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Triceratops",
    Type: "dinosaur",
    HP: 95,
    AC: 13,
    Speed: ["50 ft."],
    Abilities: {
      Str: 22,
      Dex: 9,
      Con: 17,
      Int: 2,
      Wis: 11,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "5",
    Traits: [
      {
        Name: "Trampling Charge",
        Content:
          "If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Gore",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Stomp",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Basilisk",
    Type: "monstrosity",
    HP: 52,
    AC: 12,
    Speed: ["20 ft."],
    Abilities: {
      Str: 16,
      Dex: 8,
      Con: 15,
      Int: 2,
      Wis: 8,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Petrifying Gaze",
        Content:
          "If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.nA creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.nIf the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Flying Sword",
    Type: "construct",
    HP: 17,
    AC: 17,
    Speed: ["0 ft.", "fly 50 ft. It can hover."],
    Abilities: {
      Str: 12,
      Dex: 15,
      Con: 11,
      Int: 1,
      Wis: 5,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison", "psychic"],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
    ],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
    ],
    Skills: [],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Antimagic Susceptibility",
        Content:
          "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "unaligned",
  },
  {
    Name: "Faerie Dragon (Blue)",
    Type: "dragon",
    HP: 14,
    AC: 15,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 3,
      Dex: 20,
      Con: 13,
      Int: 14,
      Wis: 12,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "The Colors of Age",
        Content:
          "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.nnRed — 5 years or lessnOrange — 6-10 yearsnYellow — 11-20 yearsnGreen — 21-30 yearsnBlue — 31-40 yearsnIndigo — 41-50 yearsnViolet — 51 years or morenA green or older faerie dragon's CR increases to 2.",
        Usage: "",
      },
      {
        Name: "Superior Invisibility",
        Content:
          "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.",
        Usage: "",
      },
      {
        Name: "Limited Telepathy",
        Content:
          "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The faerie dragon has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.nn1/day each: color spray, dancing lights, mage hand, major image, minor illusion, mirror image, suggestion",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        Usage: "",
      },
      {
        Name: "Euphoria Breath (Recharge 5-6)",
        Content:
          "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:n1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.n5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "chaotic good",
  },
  {
    Name: "Quasit",
    Type: "demon",
    HP: 7,
    AC: 13,
    Speed: ["40 ft."],
    Abilities: {
      Str: 5,
      Dex: 17,
      Con: 10,
      Int: 7,
      Wis: 10,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold; fire; lightning; bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form . Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed . It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The quasit has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Variant: Familiar",
        Content:
          "The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10 feet of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claw (Bite in Beast Form)",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft ., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Scare (1/day)",
        Content:
          "One creature of the quasit's choice within 20 ft. of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Invisibility",
        Content:
          "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "chaotic evil",
  },
  {
    Name: "Black Dragon Wyrmling",
    Type: "dragon",
    HP: 33,
    AC: 17,
    Speed: ["30 ft.", "fly 60 ft.", "swim 30 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 13,
      Int: 10,
      Wis: 11,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Con",
        Modifier: 3,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 3,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage.",
        Usage: "",
      },
      {
        Name: "Acid Breath (Recharge 5-6)",
        Content:
          "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (Sd8) acid damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Chimera",
    Type: "monstrosity",
    HP: 114,
    AC: 14,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 19,
      Dex: 11,
      Con: 19,
      Int: 3,
      Wis: 14,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 8,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "6",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Horns",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Fire Breath (Recharge 5-6)",
        Content:
          "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Ultroloth",
    Type: "fiend",
    HP: 153,
    AC: 19,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 16,
      Dex: 16,
      Con: 18,
      Int: 18,
      Wis: 15,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["acid", "poison"],
    ConditionImmunities: ["charmed", "frightened", "poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Intimidation",
        Modifier: 9,
      },
      {
        Name: "Perception",
        Modifier: 7,
      },
      {
        Name: "Stealth",
        Modifier: 8,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "13",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The ultroloth's innate spellcasting ability is Charisma (spell save DC 17). The ultroloth can innately cast the following spells, requiring no material components: nnAt will: alter self, clairvoyance, darkness, detect magic, detect thoughts, dispel magic, invisibility (self only), suggestionn3/day each: dimension door, fear, wall of firen1/day each: fire storm, mass suggestion",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The ultroloth has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The ultroloth's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The ultroloth can use its Hypnotic Gaze and makes three melee attacks.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
        Usage: "",
      },
      {
        Name: "Hypnotic Gaze",
        Content:
          "The ultroloth's eyes sparkle with opalescent light as it targets one creature it can see within 30 feet of it. If the target can see the ultroloth, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed until the end of the ultroloth's next turn. The charmed target is stunned. If the target's saving throw is successful, the target is immune to the ultroloth's gaze for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Teleport",
        Content:
          "The ultroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Yugoloth (1/Day)",
        Content:
          "The yugoloth chooses what to summon and attempts a magical summoning.nAn ultroloth has a 50 percent chance of summoning 1d6 mezzoloths, 1d4 nycaloths, or one ultroloth.nA summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Pit Fiend",
    Type: "devil",
    HP: 300,
    AC: 19,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 26,
      Dex: 14,
      Con: 24,
      Int: 22,
      Wis: 18,
      Cha: 24,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 8,
      },
      {
        Name: "Con",
        Modifier: 13,
      },
      {
        Name: "Wis",
        Modifier: 10,
      },
    ],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "20",
    Traits: [
      {
        Name: "Fear Aura",
        Content:
          "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The pit fiend has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The pit fiend's weapon attacks are magical.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The pit fiend's spellcasting ability is Charisma (spell save DC 21). The pit fiend can innately cast the following spells, requiring no material components: nAt will: detect magic, fireballn3/day each: hold monster, wall of fire",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 10 ft. , one target. Hit: 17 (2d8 + 8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Mace",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 24 (3d10 + 8) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Adult Red Dragon",
    Type: "dragon",
    HP: 256,
    AC: 19,
    Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 27,
      Dex: 10,
      Con: 25,
      Int: 16,
      Wis: 13,
      Cha: 21,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 13,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 11,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 13,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "17",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Fire Breath (Recharge 5-6)",
        Content:
          "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Lair Actions",
        Content:
          "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: the dragon can't use the same effect two rounds in a row:nt• Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.nt• A tremor shakes the lair in a 60-foot-radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone.nt• Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "chaotic evil",
  },
  {
    Name: "Black Bear",
    Type: "beast",
    HP: 19,
    AC: 11,
    Speed: ["40 ft.", "climb 30 ft."],
    Abilities: {
      Str: 15,
      Dex: 10,
      Con: 14,
      Int: 2,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The bear makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Ochre Jelly",
    Type: "ooze",
    HP: 45,
    AC: 8,
    Speed: ["10 ft.", "climb 10 ft."],
    Abilities: {
      Str: 15,
      Dex: 6,
      Con: 14,
      Int: 2,
      Wis: 6,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid"],
    DamageImmunities: ["lightning", "slashing"],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "prone",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "2",
    Traits: [
      {
        Name: "Amorphous",
        Content:
          "The jelly can move through a space as narrow as 1 inch wide without squeezing.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Pseudopod",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Split",
        Content:
          "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Darkmantle",
    Type: "monstrosity",
    HP: 29,
    AC: 11,
    Speed: ["10 ft.", "fly 30 ft."],
    Abilities: {
      Str: 16,
      Dex: 12,
      Con: 13,
      Int: 2,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Echolocation",
        Content: "The darkmantle can't use its blindsight while deafened.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Crush",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.nA creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement.",
        Usage: "",
      },
      {
        Name: "Darkness Aura (1/day)",
        Content:
          "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "unaligned",
  },
  {
    Name: "Water Weird",
    Type: "elemental",
    HP: 58,
    AC: 13,
    Speed: ["0 ft.", "swim 60 ft."],
    Abilities: {
      Str: 17,
      Dex: 16,
      Con: 13,
      Int: 11,
      Wis: 10,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "fire; bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "exhaustion",
      "grappled",
      "paralyzed",
      "poisoned",
      "restrained",
      "prone",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 30 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Invisible in Water",
        Content: "The water weird is invisible while fully immersed in water.",
        Usage: "",
      },
      {
        Name: "Water Bound",
        Content:
          "The water weird dies if it leaves the water to which it is bound or if that water is destroyed.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Constrict",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 13 (3d6 + 3) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 13) and pulled 5 ft. toward the water weird. Until this grapple ends, the target is restrained, the water weird tries to drown it, and the water weird can't constrict another target.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "neutral",
  },
  {
    Name: "Mind Flayer Arcanist",
    Type: "aberration",
    HP: 71,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 12,
      Con: 12,
      Int: 19,
      Wis: 17,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Int",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 7,
      },
      {
        Name: "Deception",
        Modifier: 6,
      },
      {
        Name: "Insight",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Persuasion",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "8",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The mind flayer has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting (Psionics)",
        Content:
          "The mind flayer's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components: nnAt will: detect thoughts, levitaten1/day each: dominate monster, plane shift (self only)",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The mind flayer is a 10th-level spellcaster. Its spellcasting ability is Intelligence (save DC 15, +7 to hit with spell attacks). The mind flayer has the following wizard spells prepared: nn• Cantrips (at will): blade ward, dancing lights, mage hand, shocking graspn• 1st level (4 slots): detect magic, disguise self, shield, sleepn• 2nd level (3 slots): blur, invisibility, ray of enfeeblementn• 3rd level (3 slots): clairvoyance, lightning bolt, sendingn• 4th level (3 slots): confusion, hallucinatory terrainn• 5th level (2 slots): telekinesis, wall of force",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Tentacles",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10 + 4) psychic damage. If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends.",
        Usage: "",
      },
      {
        Name: "Extract Brain",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit: The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain.",
        Usage: "",
      },
      {
        Name: "Mind Blast (Recharge 5-6)",
        Content:
          "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8 + 4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Lizardfolk Shaman",
    Type: "humanoid",
    HP: 27,
    AC: 13,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 15,
      Dex: 10,
      Con: 13,
      Int: 10,
      Wis: 15,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
      {
        Name: "Survival",
        Modifier: 6,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Hold Breath",
        Content: "The lizardfolk can hold its breath for 15 minutes.",
        Usage: "",
      },
      {
        Name: "Spellcasting (Lizardfolk Form Only)",
        Content:
          "The lizardfolk is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The lizardfolk has the following druid spells prepared: nn• Cantrips (at will): druidcraft, produce flame, thorn whipn• 1st Level (4 slots): entangle, fog cloudn• 2nd Level (3 slots): heat metal, spike growthn• 3rd Level (2 slots): conjure animals (reptiles only), plant growth",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack (Lizardfolk Form Only)",
        Content:
          "The lizardfolk makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 7 (1d10 + 2) piercing damage in crocodile form. If the lizardfolk is in crocodile form and the target is a Large or smaller creature, the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the lizardfolk can't bite another target. If the lizardfolk reverts to its true form, the grapple ends.",
        Usage: "",
      },
      {
        Name: "Claws (Lizardfolk Form Only)",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Change Shape (Recharges after a Short or Long Rest)",
        Content:
          "The lizardfolk magically polymorphs into a crocodile, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral",
  },
  {
    Name: "Half-Ogre (Ogrillon)",
    Type: "giant",
    HP: 30,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 17,
      Dex: 10,
      Con: 14,
      Int: 7,
      Wis: 9,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [],
    Actions: [
      {
        Name: "Battleaxe",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) slashing damage, or 14 (2d10 + 3) slashing damage if used with two hands.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "any chaotic alignment",
  },
  {
    Name: "Green Slaad",
    Type: "aberration",
    HP: 127,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 11,
      Wis: 8,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 3,
      },
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 60 ft."],
    Challenge: "8",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The slaad's innate spellcasting ability is Charisma (spell save DC 12). The slaad can innately cast the following spells, requiring no material components: nnAt will: detect magic, detect thoughts, mage handn2/day each: fear, invisibility (self only)n1/day: fireball",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The slaad has advantage on saving throws against spells and other magical effects",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point.",
        Usage: "",
      },
      {
        Name: "Variant: Control Gem",
        Content:
          "Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.nCertain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.nA greater restoration spell cast on the slaad destroys the gem without harming the slaad.nSomeone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The slaad makes three attacks: one with its bite and two with its claws or staff. Alternatively, it uses its Hurl Flame twice.",
        Usage: "",
      },
      {
        Name: "Bite (Slaad Form Only)",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw (Slaad Form Only)",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Staff",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Hurl Flame",
        Content:
          "Ranged Spell Attack: +4 to hit, range 60 ft., one target. Hit: 10 (3d6) fire damage. The fire ignites flammable objects that aren 't being worn or carried.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Nothic",
    Type: "aberration",
    HP: 45,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 14,
      Dex: 16,
      Con: 16,
      Int: 13,
      Wis: 10,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 3,
      },
      {
        Name: "Insight",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Keen Sight",
        Content:
          "The nothic has advantage on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The nothic makes two claw attacks.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Rotting Gaze",
        Content:
          "The nothic targets one creature it can see within 30 ft. of it. The target must succeed on a DC 12 Constitution saving throw against this magic or take 10 (3d6) necrotic damage.",
        Usage: "",
      },
      {
        Name: "Weird Insight",
        Content:
          "The nothic targets one creature it can see within 30 ft. of it. The target must contest its Charisma (Deception) check against the nothic's Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the target. The target automatically wins if it is immune to being charmed.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Young Copper Dragon",
    Type: "dragon",
    HP: 119,
    AC: 17,
    Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 19,
      Dex: 12,
      Con: 17,
      Int: 16,
      Wis: 13,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 7,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "7",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nAcid Breath. The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one.nSlowing Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic good",
  },
  {
    Name: "Animated Armor",
    Type: "construct",
    HP: 33,
    AC: 18,
    Speed: ["25 ft."],
    Abilities: {
      Str: 14,
      Dex: 11,
      Con: 13,
      Int: 1,
      Wis: 3,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison", "psychic"],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "1",
    Traits: [
      {
        Name: "Antimagic Susceptibility",
        Content:
          "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the armor remains motionless, it is indistinguishable from a normal suit of armor.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The armor makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Myconid Sprout",
    Type: "plant",
    HP: 7,
    AC: 10,
    Speed: ["10 ft."],
    Abilities: {
      Str: 8,
      Dex: 10,
      Con: 10,
      Int: 8,
      Wis: 11,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Distress Spores",
        Content:
          "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain.",
        Usage: "",
      },
      {
        Name: "Sun Sickness",
        Content:
          "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4- 1) bludgeoning damage plus 2 (1d4) poison damage.",
        Usage: "",
      },
      {
        Name: "Rapport Spores (3/Day)",
        Content:
          "A 10-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "lawful neutral",
  },
  {
    Name: "Ankylosaurus",
    Type: "dinosaur",
    HP: 68,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 19,
      Dex: 11,
      Con: 15,
      Int: 2,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "3",
    Traits: [],
    Actions: [
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Bat",
    Type: "beast",
    HP: 1,
    AC: 12,
    Speed: ["5 ft.", "fly 30 ft."],
    Abilities: {
      Str: 2,
      Dex: 15,
      Con: 8,
      Int: 2,
      Wis: 12,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Echolocation",
        Content: "The bat can't use its blindsight while deafened.",
        Usage: "",
      },
      {
        Name: "Keen Hearing",
        Content:
          "The bat has advantage on Wisdom (Perception) checks that rely on hearing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Smoke Mephit",
    Type: "elemental",
    HP: 22,
    AC: 12,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 6,
      Dex: 14,
      Con: 12,
      Int: 10,
      Wis: 10,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Death Burst",
        Content:
          "When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius sphere centered on its space. The sphere is heavily obscured. Wind disperses the cloud, which otherwise lasts for 1 minute.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting (1/Day)",
        Content:
          "The mephit can innately cast dancing lights, requiring no material components. Its innate spellcasting ability is Charisma.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Cinder Breath (Recharge 6)",
        Content:
          "The mephit exhales a 15-foot cone of smoldering ash. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded until the end of the mephit's next turn .",
        Usage: "",
      },
      {
        Name: "Variant: Summon Mephits (1/Day)",
        Content:
          "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "neutral evil",
  },
  {
    Name: "Unicorn",
    Type: "celestial",
    HP: 67,
    AC: 12,
    Speed: ["50 ft."],
    Abilities: {
      Str: 18,
      Dex: 14,
      Con: 15,
      Int: 11,
      Wis: 17,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["charmed", "paralyzed", "poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the unicorn moves at least 20 ft. straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components: nnAt will: detect evil and good, druidcraft, pass without tracen1/day each: calm emotions, dispel evil and good, entangle",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The unicorn has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The unicorn's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The unicorn makes two attacks: one with its hooves and one with its horn.",
        Usage: "",
      },
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft ., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Horn",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft ., one target. Hit: 8 (1d8 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Healing Touch (3/Day)",
        Content:
          "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target.",
        Usage: "",
      },
      {
        Name: "Teleport (1/Day)",
        Content:
          "The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Hooves",
        Content: "The unicorn makes one attack with its hooves.",
        Usage: "",
      },
      {
        Name: "Shimmering Shield (Costs 2 Actions)",
        Content:
          "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 ft. of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn.",
        Usage: "",
      },
      {
        Name: "Heal Self (Costs 3 Actions)",
        Content: "The unicorn magically regains 11 (2d8 + 2) hit points.",
        Usage: "",
      },
    ],
    Size: "L",
    Alignment: "lawful good",
  },
  {
    Name: "Swarm of Rats",
    Type: "swarm",
    HP: 24,
    AC: 10,
    Speed: ["30 ft."],
    Abilities: {
      Str: 9,
      Dex: 11,
      Con: 9,
      Int: 2,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 30 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The swarm has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Deva",
    Type: "celestial",
    HP: 136,
    AC: 17,
    Speed: ["30 ft.", "fly 90 ft."],
    Abilities: {
      Str: 18,
      Dex: 18,
      Con: 18,
      Int: 17,
      Wis: 20,
      Cha: 20,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "radiant",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: ["charmed", "exhaustion", "frightened"],
    Saves: [
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 9,
      },
      {
        Name: "Perception",
        Modifier: 9,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "10",
    Traits: [
      {
        Name: "Angelic Weapons",
        Content:
          "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack).",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components: nAt will: detect evil and goodn1/day each: commune, raise dead",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The deva has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The deva makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Mace",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage.",
        Usage: "",
      },
      {
        Name: "Healing Touch (3/Day)",
        Content:
          "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).nIn a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful good",
  },
  {
    Name: "Night Hag",
    Type: "fiend",
    HP: 112,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 16,
      Wis: 14,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: [],
    ConditionImmunities: ["charmed"],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 7,
      },
      {
        Name: "Insight",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components: nnAt will: detect magic, magic missilen2/day each: plane shift (self only), ray of enfeeblement, sleep",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The hag has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Night Hag Items",
        Content:
          "A night hag carries two very rare magic items that she must craft for herself If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort.nHeartstone: This lustrous black gem allows a night hag to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days.nSoul Bag: When an evil humanoid dies as a result of a night hag's Nightmare Haunting, the hag catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag).",
        Usage: "",
      },
      {
        Name: "Hag Coven",
        Content:
          "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
        Usage: "",
      },
      {
        Name: "Shared Spellcasting (Coven Only)",
        Content:
          "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves: nn• 1st level (4 slots): identify, ray of sicknessn• 2nd level (3 slots): hold person, locate objectn• 3rd level (3 slots): bestow curse, counterspell, lightning boltn• 4th level (3 slots): phantasmal killer, polymorphn• 5th level (2 slots): contact other plane, scryingn• 6th level (1 slot): eye bitennFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
        Usage: "",
      },
      {
        Name: "Hag Eye (Coven Only)",
        Content:
          "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws (Hag Form Only)",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies.",
        Usage: "",
      },
      {
        Name: "Etherealness",
        Content:
          "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession.",
        Usage: "",
      },
      {
        Name: "Nightmare Haunting (1/Day)",
        Content:
          "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Treant",
    Type: "plant",
    HP: 138,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 23,
      Dex: 8,
      Con: 21,
      Int: 12,
      Wis: 16,
      Cha: 12,
    },
    DamageVulnerabilities: ["fire"],
    DamageResistances: ["bludgeoning", "piercing"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "9",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the treant remains motionless, it is indistinguishable from a normal tree.",
        Usage: "",
      },
      {
        Name: "Siege Monster",
        Content: "The treant deals double damage to objects and structures.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The treant makes two slam attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Animate Trees (1/Day)",
        Content:
          "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "chaotic good",
  },
  {
    Name: "Pseudodragon",
    Type: "dragon",
    HP: 7,
    AC: 13,
    Speed: ["15 ft.", "fly 60 ft."],
    Abilities: {
      Str: 6,
      Dex: 15,
      Con: 13,
      Int: 10,
      Wis: 12,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Keen Senses",
        Content:
          "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The pseudodragon has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Limited Telepathy",
        Content:
          "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft. of it that can understand a language.",
        Usage: "",
      },
      {
        Name: "Variant: Familiar",
        Content:
          "The pseudodragon can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the pseudodragon senses as long as they are within 1 mile of each other. While the pseudodragon is within 10 feet of its companion, the companion shares the pseudodragon's Magic Resistance trait. At any time and for any reason, the pseudodragon can end its service as a familiar, ending the telepathic bond.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Sting",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "neutral good",
  },
  {
    Name: "Glabrezu",
    Type: "demon",
    HP: 157,
    AC: 17,
    Speed: ["40 ft."],
    Abilities: {
      Str: 20,
      Dex: 15,
      Con: 21,
      Int: 19,
      Wis: 17,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Str",
        Modifier: 9,
      },
      {
        Name: "Con",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "9",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components: nAt will: darkness, detect magic, dispel magicn1/day each: confusion, fly, power word stun",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The glabrezu has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell.",
        Usage: "",
      },
      {
        Name: "Pincer",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Demon (1/Day)",
        Content:
          "The demon chooses what to summon and attempts a magical summoning.nA glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Frost Giant",
    Type: "giant",
    HP: 138,
    AC: 15,
    Speed: ["40 ft."],
    Abilities: {
      Str: 23,
      Dex: 9,
      Con: 21,
      Int: 9,
      Wis: 10,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 8,
      },
      {
        Name: "Wis",
        Modifier: 3,
      },
      {
        Name: "Cha",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 9,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "8",
    Traits: [],
    Actions: [
      {
        Name: "Weighted Net",
        Content:
          "Ranged Weapon Attack: +5 to hit, ranged 20/60 ft., one Small, Medium, or Large creature. Hit: The target is restrained until it escapes the net. Any creature can use its action to make a DC 17 Strength check to free itself or another creature in the net, ending the effect on a success. Dealing 15 slashing damage to the net (AC 12) destroys the net and frees the target.",
        Usage: "",
      },
      {
        Name: "Multiattack",
        Content: "The giant makes two greataxe attacks.",
        Usage: "",
      },
      {
        Name: "Greataxe",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "neutral evil",
  },
  {
    Name: "Stirge",
    Type: "beast",
    HP: 2,
    AC: 14,
    Speed: ["10 ft.", "fly 40 ft."],
    Abilities: {
      Str: 4,
      Dex: 16,
      Con: 11,
      Int: 2,
      Wis: 8,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/8",
    Traits: [],
    Actions: [
      {
        Name: "Blood Drain",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Gelatinous Cube",
    Type: "ooze",
    HP: 84,
    AC: 6,
    Speed: ["15 ft."],
    Abilities: {
      Str: 14,
      Dex: 3,
      Con: 20,
      Int: 1,
      Wis: 6,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "prone",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "2",
    Traits: [
      {
        Name: "Ooze Cube",
        Content:
          "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.nCreatures inside the cube can be seen but have total cover.nA creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.nThe cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.",
        Usage: "",
      },
      {
        Name: "Transparent",
        Content:
          "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Pseudopod",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage.",
        Usage: "",
      },
      {
        Name: "Engulf",
        Content:
          "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.nOn a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.nOn a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.nAn engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Bone Devil",
    Type: "devil",
    HP: 142,
    AC: 19,
    Speed: ["40 ft.", "fly 40 ft."],
    Abilities: {
      Str: 18,
      Dex: 16,
      Con: 18,
      Int: 13,
      Wis: 14,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 7,
      },
      {
        Name: "Insight",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "12",
    Traits: [
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the devil's darkvision.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The devil has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The devil makes three attacks: two with its claws and one with its sting.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Sting",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success .",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Satyr",
    Type: "fey",
    HP: 31,
    AC: 14,
    Speed: ["40 ft."],
    Abilities: {
      Str: 12,
      Dex: 16,
      Con: 11,
      Int: 12,
      Wis: 10,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Performance",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The satyr has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Ram",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1 d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Shortbow",
        Content:
          "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Variant: Panpipes",
        Content:
          "Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Giant Rat",
    Type: "beast",
    HP: 7,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 7,
      Dex: 15,
      Con: 11,
      Int: 2,
      Wis: 10,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Drow Elite Warrior",
    Type: "humanoid",
    HP: 71,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 13,
      Dex: 18,
      Con: 14,
      Int: 11,
      Wis: 13,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 10,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Fey Ancestry",
        Content:
          "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The drow's spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components: nAt will: dancing lightsn1/day each: darkness, faerie fire, levitate (self only)",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The drow makes two shortsword attacks.",
        Usage: "",
      },
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Hand Crossbow",
        Content:
          "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit: 7 (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Parry",
        Content:
          "The drow adds 3 to its AC against one melee attack that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Priest",
    Type: "humanoid",
    HP: 27,
    AC: 13,
    Speed: ["25 ft."],
    Abilities: {
      Str: 10,
      Dex: 10,
      Con: 12,
      Int: 13,
      Wis: 16,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Medicine",
        Modifier: 7,
      },
      {
        Name: "Persuasion",
        Modifier: 3,
      },
      {
        Name: "Religion",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Divine Eminence",
        Content:
          "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared: nn• Cantrips (at will): light, sacred flame, thaumaturgyn• 1st level (4 slots): cure wounds, guiding bolt, sanctuaryn• 2nd level (3 slots): lesser restoration, spiritual weaponn• 3rd level (2 slots): dispel magic, spirit guardians",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Mace",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Wight",
    Type: "undead",
    HP: 45,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 16,
      Int: 10,
      Wis: 13,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "necrotic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.",
        Usage: "",
      },
      {
        Name: "Life Drain",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.nA humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Orc War Chief",
    Type: "humanoid",
    HP: 93,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 12,
      Con: 18,
      Int: 11,
      Wis: 11,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Str",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
    ],
    Skills: [
      {
        Name: "Intimidation",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Aggressive",
        Content:
          "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.",
        Usage: "",
      },
      {
        Name: "Gruumsh's Fury",
        Content:
          "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attacks).",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The orc makes two attacks with its greataxe or its spear.",
        Usage: "",
      },
      {
        Name: "Greataxe",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (1d12 + 4 plus 1d8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 12 (1d6 + 4 plus 1d8) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
      {
        Name: "Battle Cry (1/Day)",
        Content:
          "Each creature of the war chief's choice that is within 30 feet of it, can hear it, and not already affected by Battle Cry gain advantage on attack rolls until the start of the war chief's next turn. The war chief can then make one attack as a bonus action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Bullywug",
    Type: "humanoid",
    HP: 11,
    AC: 15,
    Speed: ["20 ft.", "swim 40 ft."],
    Abilities: {
      Str: 12,
      Dex: 12,
      Con: 13,
      Int: 7,
      Wis: 10,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The bullywug can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Speak with Frogs and Toads",
        Content:
          "The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug.",
        Usage: "",
      },
      {
        Name: "Swamp Camouflage",
        Content:
          "The bullywug has advantage on Dexterity (Stealth) checks made to hide in swampy terrain.",
        Usage: "",
      },
      {
        Name: "Standing Leap",
        Content:
          "The bullywug's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The bullywug makes two melee attacks: one with its bite and one with its spear.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Homunculus",
    Type: "construct",
    HP: 5,
    AC: 13,
    Speed: ["20 ft.", "fly 40 ft."],
    Abilities: {
      Str: 4,
      Dex: 15,
      Con: 11,
      Int: 10,
      Wis: 10,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["charmed", "poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Telepathic Bond",
        Content:
          "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "neutral",
  },
  {
    Name: "Clay Golem",
    Type: "construct",
    HP: 133,
    AC: 14,
    Speed: ["20 ft."],
    Abilities: {
      Str: 20,
      Dex: 9,
      Con: 18,
      Int: 3,
      Wis: 8,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "acid",
      "poison",
      "psychic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't adamantine",
    ],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "9",
    Traits: [
      {
        Name: "Acid Absorption",
        Content:
          "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt.",
        Usage: "",
      },
      {
        Name: "Berserk",
        Content:
          "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.",
        Usage: "",
      },
      {
        Name: "Immutable Form",
        Content:
          "The golem is immune to any spell or effect that would alter its form.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The golem has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The golem's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The golem makes two slam attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic.",
        Usage: "",
      },
      {
        Name: "Haste (Recharge 5-6)",
        Content:
          "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Young Gold Dragon",
    Type: "dragon",
    HP: 178,
    AC: 18,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 23,
      Dex: 14,
      Con: 21,
      Int: 16,
      Wis: 13,
      Cha: 20,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 5,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 9,
      },
      {
        Name: "Persuasion",
        Modifier: 9,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "10",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nFire Breath. The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one.nWeakening Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful good",
  },
  {
    Name: "Baboon",
    Type: "beast",
    HP: 3,
    AC: 12,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 8,
      Dex: 14,
      Con: 11,
      Int: 4,
      Wis: 12,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Pack Tactics",
        Content:
          "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Chasme",
    Type: "demon",
    HP: 84,
    AC: 15,
    Speed: ["20 ft", "fly 60 ft"],
    Abilities: {
      Str: 15,
      Dex: 15,
      Con: 12,
      Cha: 10,
      Int: 11,
      Wis: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold", "fire", "lightning"],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 5,
      },
    ],
    Skills: [
      {
        Name: "perception",
        Modifier: 5,
      },
      {
        Name: "passive perception",
        Modifier: 15,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 120 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "Drone",
        Content:
          "The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn within 30 feet of the chasme must succeed on a DC 12 Constitution saving throw or fall unconscious for 10 minutes. A creature that can’t hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature’s saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The chasme has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Proboscis",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 16 (4d6 + 2) piercing damage plus 24 (7d6) necrotic damage, and the target’s hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature’s hit point maximum to 0, the creature dies. This reduction to a creature’s hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Gladiator",
    Type: "humanoid",
    HP: 112,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 10,
      Wis: 12,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Str",
        Modifier: 7,
      },
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 10,
      },
      {
        Name: "Intimidation",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "5",
    Traits: [
      {
        Name: "Brave",
        Content:
          "The gladiator has advantage on saving throws against being frightened.",
        Usage: "",
      },
      {
        Name: "Brute",
        Content:
          "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack).",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The gladiator makes three melee attacks or two ranged attacks.",
        Usage: "",
      },
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
      {
        Name: "Shield Bash",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Parry",
        Content:
          "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Giant Spider",
    Type: "beast",
    HP: 26,
    AC: 14,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 14,
      Dex: 16,
      Con: 12,
      Int: 2,
      Wis: 11,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Spider Climb",
        Content:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Web Sense",
        Content:
          "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
        Usage: "",
      },
      {
        Name: "Web Walker",
        Content: "The spider ignores movement restrictions caused by webbing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        Usage: "",
      },
      {
        Name: "Web (Recharge 5-6)",
        Content:
          "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Death Knight",
    Type: "undead",
    HP: 180,
    AC: 20,
    Speed: ["30 ft."],
    Abilities: {
      Str: 20,
      Dex: 11,
      Con: 20,
      Int: 12,
      Wis: 16,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["necrotic", "poison"],
    ConditionImmunities: ["exhaustion", "frightened", "poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 10,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "17",
    Traits: [
      {
        Name: "Undead Nature",
        Content: "A death knight doesn't require air, food, drink, or sleep.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The death knight has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Marshal Undead",
        Content:
          "Unless the death knight is incapacitated, it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The death knight is a 19th-level spell caster. Its spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). It has the following paladin spells prepared: n• 1st level (4 slots): command, compelled duel, searing smiten• 2nd level (3 slots): hold person, magic weaponn• 3rd level (3 slots): dispel magic, elemental weaponn• 4th level (3 slots): banishment, staggering smiten• 5th level (2 slots): destructive wave (necrotic)",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The death knight makes three longsword attacks.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands, plus 18 (4d8) necrotic damage.",
        Usage: "",
      },
      {
        Name: "Hellfire Orb (1/day)",
        Content:
          "The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a DC 18 Dexterity saving throw. The sphere spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Parry",
        Content:
          "The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Specter",
    Type: "undead",
    HP: 22,
    AC: 12,
    Speed: ["0 ft.", "fly 50 ft. (hover)"],
    Abilities: {
      Str: 1,
      Dex: 14,
      Con: 11,
      Int: 10,
      Wis: 10,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["necrotic", "poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Incorporeal Movement",
        Content:
          "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Life Drain",
        Content:
          "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Barbed Devil",
    Type: "devil",
    HP: 110,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 17,
      Con: 18,
      Int: 12,
      Wis: 14,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Str",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 5,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 5,
      },
      {
        Name: "Insight",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 8,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Barbed Hide",
        Content:
          "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it.",
        Usage: "",
      },
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the devil's darkvision.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The devil has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft ., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Hurl Flame",
        Content:
          "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Thri-kreen",
    Type: "humanoid",
    HP: 33,
    AC: 15,
    Speed: ["40 ft."],
    Abilities: {
      Str: 12,
      Dex: 15,
      Con: 13,
      Int: 8,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
      {
        Name: "Survival",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Chameleon Carapace",
        Content:
          "The thri-kreen can change the color of its carapace to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide.",
        Usage: "",
      },
      {
        Name: "Standing Leap",
        Content:
          "The thri-kreen's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The thri-kreen makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is also paralyzed while poisoned in this way. The poisoned target can repeat the saving throw on each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
        Usage: "",
      },
      {
        Name: "Variant: Weapons Multiattack",
        Content:
          "The thri-kreen makes two gythka attacks or two chatkcha attacks.",
        Usage: "",
      },
      {
        Name: "Variant: Gythka",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage.",
        Usage: "",
      },
      {
        Name: "Variant: Chatkcha",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Couatl",
    Type: "celestial",
    HP: 97,
    AC: 19,
    Speed: ["30 ft.", "fly 90 ft."],
    Abilities: {
      Str: 16,
      Dex: 20,
      Con: 17,
      Int: 18,
      Wis: 20,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["radiant"],
    DamageImmunities: [
      "psychic; bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 6,
      },
    ],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components: nnAt will: detect evil and good, detect magic, detect thoughtsn3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shieldn1/day each: dream, greater restoration, scrying",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The couatl's weapon attacks are magical.",
        Usage: "",
      },
      {
        Name: "Shielded Mind",
        Content:
          "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.",
        Usage: "",
      },
      {
        Name: "Constrict",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "lawful good",
  },
  {
    Name: "Mastiff",
    Type: "beast",
    HP: 5,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 13,
      Dex: 14,
      Con: 12,
      Int: 3,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Eagle",
    Type: "beast",
    HP: 26,
    AC: 13,
    Speed: ["10 ft.", "fly 80 ft."],
    Abilities: {
      Str: 16,
      Dex: 17,
      Con: 13,
      Int: 8,
      Wis: 14,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "1",
    Traits: [
      {
        Name: "Keen Sight",
        Content:
          "The eagle has advantage on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The eagle makes two attacks: one with its beak and one with its talons.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Talons",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "neutral good",
  },
  {
    Name: "Roc",
    Type: "monstrosity",
    HP: 248,
    AC: 15,
    Speed: ["20 ft.", "fly 120 ft."],
    Abilities: {
      Str: 28,
      Dex: 10,
      Con: 20,
      Int: 3,
      Wis: 10,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Con",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 3,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "11",
    Traits: [
      {
        Name: "Keen Sight",
        Content:
          "The roc has advantage on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The roc makes two attacks: one with its beak and one with its talons.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8 + 9) piercing damage.",
        Usage: "",
      },
      {
        Name: "Talons",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Gargantuan",
    Alignment: "unaligned",
  },
  {
    Name: "Plesiosaurus",
    Type: "dinosaur",
    HP: 68,
    AC: 13,
    Speed: ["20 ft.", "swim 40 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 2,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Hold Breath",
        Content: "The plesiosaurus can hold its breath for 1 hour.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Bat",
    Type: "beast",
    HP: 22,
    AC: 13,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 15,
      Dex: 16,
      Con: 11,
      Int: 2,
      Wis: 12,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Echolocation",
        Content: "The bat can't use its blindsight while deafened.",
        Usage: "",
      },
      {
        Name: "Keen Hearing",
        Content:
          "The bat has advantage on Wisdom (Perception) checks that rely on hearing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Bandit",
    Type: "humanoid",
    HP: 11,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 12,
      Con: 12,
      Int: 10,
      Wis: 10,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/8",
    Traits: [],
    Actions: [
      {
        Name: "Scimitar",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
        Usage: "",
      },
      {
        Name: "Light Crossbow",
        Content:
          "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any non-lawful alignment",
  },
  {
    Name: "Axe Beak",
    Type: "beast",
    HP: 19,
    AC: 11,
    Speed: ["50 ft."],
    Abilities: {
      Str: 14,
      Dex: 12,
      Con: 12,
      Int: 2,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Tempani",
    Type: "celestial",
    HP: 243,
    AC: 21,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 26,
      Dex: 22,
      Con: 26,
      Int: 28,
      Wis: 24,
      Cha: 30,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "radiant",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["necrotic", "poison"],
    ConditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
    Saves: [
      {
        Name: "Int",
        Modifier: 14,
      },
      {
        Name: "Wis",
        Modifier: 14,
      },
      {
        Name: "Cha",
        Modifier: 17,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 14,
      },
      {
        Name: "Passive Perception",
        Modifier: 24,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "20",
    Traits: [
      {
        Name: "Corrupted Weapons",
        Content:
          "Tempani's weapon attacks are magical.  When she hits with any weapon, the weapon deals an extra 8d8 psychic damage (included in the attack)",
        Usage: "",
      },
      {
        Name: "Warped Awareness",
        Content:
          "If Tempani looks a creature in the eyes, she knows its greatest fear.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "Tempani's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components: nAt will: Invisibilityn3/day each: Tasha's Hideous Laughter, Evard's Black Tentacles.n1/day each: Eyebite",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "Tempani has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "Tempani makes two greatsword attacks.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) psychic damage.",
        Usage: "",
      },
      {
        Name: "Word of Truth",
        Content:
          "Tempani whispers a horrible truth of the Far Realms into the mind of one creature within 30 ft.  The target must make a DC 25 Charisma save or take 27 (6d8) psychic damage.  If they fail this check by 10 or more they are dominated by Tempani until the end of their next turn.",
        Usage: "",
      },
      {
        Name: "Merge (only available when below half hit points)",
        Content:
          "Tempani reached out to an Elder Being within 5 ft. and merges with it, transforming into the Divine Horror.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Legendary Actions",
        Content:
          "Tempani can take 3 legendary actions, choosing from the options below.  Only onelegendary action option can be used at a time and only at the end of another creature's turn.  Tempani regains spent legendary actions at the start of her turn.",
        Usage: "",
      },
      {
        Name: "Teleport",
        Content:
          "Tempani magically teleports, along with any equpment she is wearing or carrying or carrying, up to 120 feet to an unoccupied space she can see.",
        Usage: "",
      },
      {
        Name: "Maddening Burst (Cost 2 Actions)",
        Content:
          "Tempani emits a burst of psychic engergy.  Each creature of her choice in a 10 ft. radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) psychic damage plus 14 (4d6) necrotic damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Size: "Large",
    Alignment: "lawful good",
  },
  {
    Name: "Swarm of Ravens",
    Type: "swarm",
    HP: 24,
    AC: 12,
    Speed: ["10 ft.", "fly 50 ft."],
    Abilities: {
      Str: 6,
      Dex: 14,
      Con: 8,
      Int: 3,
      Wis: 12,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Beaks",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Sea Horse",
    Type: "beast",
    HP: 1,
    AC: 11,
    Speed: ["swim 20 ft."],
    Abilities: {
      Str: 1,
      Dex: 12,
      Con: 8,
      Int: 1,
      Wis: 10,
      Cha: 2,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Water Breathing",
        Content: "The sea horse can breathe only underwater.",
        Usage: "",
      },
    ],
    Actions: [],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Faerie Dragon (Orange)",
    Type: "dragon",
    HP: 14,
    AC: 15,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 3,
      Dex: 20,
      Con: 13,
      Int: 14,
      Wis: 12,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "The Colors of Age",
        Content:
          "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.nnRed — 5 years or lessnOrange — 6-10 yearsnYellow — 11-20 yearsnGreen — 21-30 yearsnBlue — 31-40 yearsnIndigo — 41-50 yearsnViolet — 51 years or morenA green or older faerie dragon's CR increases to 2.",
        Usage: "",
      },
      {
        Name: "Superior Invisibility",
        Content:
          "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.",
        Usage: "",
      },
      {
        Name: "Limited Telepathy",
        Content:
          "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The faerie dragon has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.nn1/day each:color spray, dancing lights, mage hand, minor illusion",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        Usage: "",
      },
      {
        Name: "Euphoria Breath (Recharge 5-6)",
        Content:
          "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:n1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.n5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "chaotic good",
  },
  {
    Name: "Vine Blight",
    Type: "plant",
    HP: 26,
    AC: 12,
    Speed: ["10 ft."],
    Abilities: {
      Str: 15,
      Dex: 8,
      Con: 14,
      Int: 5,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["blinded", "deafened"],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 1,
      },
    ],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "1/2",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the blight remains motionless, it is indistinguishable from a tangle of vines.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Constrict",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage, and a Large or smaller target is grappled (escape DC 12) . Until this grapple ends, the target is restrained, and the blight can't constrict another target.",
        Usage: "",
      },
      {
        Name: "Entangling Plants (Recharge 5-6)",
        Content:
          "Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing it self or another entangled creature within reach on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Githyanki Knight",
    Type: "humanoid",
    HP: 91,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 14,
      Con: 15,
      Int: 14,
      Wis: 14,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 5,
      },
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 5,
      },
    ],
    Skills: [],
    Senses: [],
    Challenge: "8",
    Traits: [
      {
        Name: "Innate Spellcasting (Psionics)",
        Content:
          "The githyanki's innate spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It can innately cast the following spells, requiring no components: nnAt will: mage hand (the hand is invisible)n3/day each: jump, misty step, nondetection (self only), tonguesn1/day each: plane shift, telekinesis",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The githyanki makes two silver greatsword attacks.",
        Usage: "",
      },
      {
        Name: "Silver Greatsword",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage plus 10 (3d6) psychic damage. This is a magic weapon attack. On a critical hit against a target in an astral body (as with the astral projection spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Wolf",
    Type: "beast",
    HP: 11,
    AC: 13,
    Speed: ["40 ft."],
    Abilities: {
      Str: 12,
      Dex: 15,
      Con: 12,
      Int: 3,
      Wis: 12,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Fire Giant",
    Type: "giant",
    HP: 162,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 25,
      Dex: 9,
      Con: 23,
      Int: 10,
      Wis: 14,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 3,
      },
      {
        Name: "Con",
        Modifier: 10,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 11,
      },
      {
        Name: "Perception",
        Modifier: 6,
      },
    ],
    Senses: [],
    Challenge: "9",
    Traits: [
      {
        Name: "Siege Monster",
        Content: "The giant deals double damage to objects and structures.",
        Usage: "",
      },
      {
        Name: "Tackle",
        Content:
          "When the giant enters any enemy's space for the first time on a turn, the enemy must succeed on a DC 19 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The giant makes two greatsword attacks.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage.",
        Usage: "",
      },
      {
        Name: "Rock",
        Content:
          "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "lawful evil",
  },
  {
    Name: "Mammoth",
    Type: "beast",
    HP: 126,
    AC: 13,
    Speed: ["40 ft."],
    Abilities: {
      Str: 24,
      Dex: 9,
      Con: 21,
      Int: 3,
      Wis: 11,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "6",
    Traits: [
      {
        Name: "Trampling Charge",
        Content:
          "If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Gore",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage.",
        Usage: "",
      },
      {
        Name: "Stomp",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Crab",
    Type: "beast",
    HP: 2,
    AC: 11,
    Speed: ["20 ft.", "swim 20 ft."],
    Abilities: {
      Str: 2,
      Dex: 11,
      Con: 10,
      Int: 1,
      Wis: 8,
      Cha: 2,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 30 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The crab can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Berserker",
    Type: "humanoid",
    HP: 67,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 12,
      Con: 17,
      Int: 9,
      Wis: 11,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Reckless",
        Content:
          "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Greataxe",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any chaotic alignment",
  },
  {
    Name: "Swarm of Poisonous Snakes",
    Type: "swarm",
    HP: 36,
    AC: 14,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 8,
      Dex: 18,
      Con: 11,
      Int: 1,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Commoner",
    Type: "humanoid",
    HP: 4,
    AC: 10,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 10,
      Con: 10,
      Int: 10,
      Wis: 10,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "0",
    Traits: [],
    Actions: [
      {
        Name: "Club",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Constrictor Snake",
    Type: "beast",
    HP: 13,
    AC: 12,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 12,
      Int: 1,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Constrict",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Owl",
    Type: "beast",
    HP: 19,
    AC: 12,
    Speed: ["5 ft.", "fly 60 ft."],
    Abilities: {
      Str: 13,
      Dex: 15,
      Con: 12,
      Int: 8,
      Wis: 13,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Flyby",
        Content:
          "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
        Usage: "",
      },
      {
        Name: "Keen Hearing and Sight",
        Content:
          "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Talons",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "neutral",
  },
  {
    Name: "Lion",
    Type: "beast",
    HP: 26,
    AC: 12,
    Speed: ["50 ft."],
    Abilities: {
      Str: 17,
      Dex: 15,
      Con: 13,
      Int: 3,
      Wis: 12,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: [],
    Challenge: "1",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The lion has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
      {
        Name: "Pounce",
        Content:
          "If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action.",
        Usage: "",
      },
      {
        Name: "Running Leap",
        Content:
          "With a 10-foot running start, the lion can long jump up to 25 ft..",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Succubus/Incubus",
    Type: "fiend",
    HP: 66,
    AC: 15,
    Speed: ["30 ft.", "fly 60 ft."],
    Abilities: {
      Str: 8,
      Dex: 17,
      Con: 13,
      Int: 15,
      Wis: 12,
      Cha: 20,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "poison",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 9,
      },
      {
        Name: "Insight",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 5,
      },
      {
        Name: "Persuasion",
        Modifier: 9,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Telepathic Bond",
        Content:
          "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence.",
        Usage: "",
      },
      {
        Name: "Shapechanger",
        Content:
          "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Thunderous Stomp (Recharge 6)",
        Content:
          "The storm giant stomps the ground, triggering a thunderclap. All other creatures within 15 feet of the giant must succeed on a DC 17 Constitution saving throw or take 33 (6d10) thunder damage and be deafened until the start of the giant's next turn. On a successful save, a creature takes half as much damage and isn't deafened. The thunderclap can be heard out to a range of 1,200 feet.",
        Usage: "",
      },
      {
        Name: "Claw (Fiend Form Only)",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Charm",
        Content:
          "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.nThe fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends.",
        Usage: "",
      },
      {
        Name: "Draining Kiss",
        Content:
          "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
        Usage: "",
      },
      {
        Name: "Etherealness",
        Content:
          "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Frog",
    Type: "beast",
    HP: 1,
    AC: 11,
    Speed: ["20 ft.", "swim 20 ft."],
    Abilities: {
      Str: 1,
      Dex: 13,
      Con: 8,
      Int: 1,
      Wis: 8,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 1,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 30 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The frog can breathe air and water",
        Usage: "",
      },
      {
        Name: "Standing Leap",
        Content:
          "The frog's long jump is up to 10 ft. and its high jump is up to 5 ft., with or without a running start.",
        Usage: "",
      },
    ],
    Actions: [],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Badger",
    Type: "beast",
    HP: 3,
    AC: 10,
    Speed: ["20 ft.", "burrow 5 ft."],
    Abilities: {
      Str: 4,
      Dex: 11,
      Con: 12,
      Int: 2,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 30 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The badger has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Banshee",
    Type: "undead",
    HP: 58,
    AC: 12,
    Speed: ["0 ft.", "fly 40 ft. (hover)"],
    Abilities: {
      Str: 1,
      Dex: 14,
      Con: 10,
      Int: 12,
      Wis: 11,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "acid",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["cold", "necrotic", "poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
    ],
    Saves: [
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Detect Life",
        Content:
          "The banshee can magically sense the presence of living creatures up to 5 miles away that aren't  undead or constructs. She knows the general direction they're in but not their exact locations.",
        Usage: "",
      },
      {
        Name: "Incorporeal Movement",
        Content:
          "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Corrupting Touch",
        Content:
          "Melee Spell Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6 + 2) necrotic damage.",
        Usage: "",
      },
      {
        Name: "Horrifying Visage",
        Content:
          "Each non-undead creature within 60 ft. of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Wail (1/Day)",
        Content:
          "The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 ft. of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage.The woeful banshee is a spiteful creature formed from the spirit of a female elf. Its face is wreathed in a wild tangle of hair, its body clad in wispy rags that flutter and stream around it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Young Bronze Dragon",
    Type: "dragon",
    HP: 142,
    AC: 18,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 21,
      Dex: 10,
      Con: 19,
      Int: 14,
      Wis: 13,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 3,
      },
      {
        Name: "Con",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 7,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "8",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nLightning Breath. The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful good",
  },
  {
    Name: "Invisible Stalker",
    Type: "elemental",
    HP: 104,
    AC: 14,
    Speed: ["50 ft.", "fly 50 ft. (hover)"],
    Abilities: {
      Str: 16,
      Dex: 19,
      Con: 14,
      Int: 10,
      Wis: 15,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious",
    ],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 8,
      },
      {
        Name: "Stealth",
        Modifier: 10,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "Invisibility",
        Content: "The stalker is invisible.",
        Usage: "",
      },
      {
        Name: "Faultless Tracker",
        Content:
          "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The stalker makes two slam attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "neutral",
  },
  {
    Name: "Young Blue Dragon",
    Type: "dragon",
    HP: 152,
    AC: 18,
    Speed: ["40 ft.", "burrow 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 21,
      Dex: 10,
      Con: 19,
      Int: 14,
      Wis: 13,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Con",
        Modifier: 8,
      },
      {
        Name: "Wis",
        Modifier: 5,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 9,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "9",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        Usage: "",
      },
      {
        Name: "Lightning Breath (Recharge 5-6)",
        Content:
          "The dragon exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Saber-Toothed Tiger",
    Type: "beast",
    HP: 52,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 18,
      Dex: 14,
      Con: 15,
      Int: 3,
      Wis: 12,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Pounce",
        Content:
          "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Lizard",
    Type: "beast",
    HP: 19,
    AC: 12,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 15,
      Dex: 12,
      Con: 13,
      Int: 2,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 30 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Variant: Hold Breath",
        Content:
          "The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)",
        Usage: "",
      },
      {
        Name: "Variant: Spider Climb",
        Content:
          "The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Githzerai Monk",
    Type: "humanoid",
    HP: 38,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 12,
      Dex: 15,
      Con: 12,
      Int: 13,
      Wis: 14,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Str",
        Modifier: 3,
      },
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Int",
        Modifier: 3,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Innate Spellcasting (Psionics)",
        Content:
          "The githzerai's innate spellcasting ability is Wisdom. It can innately cast the following spells, requiring no components: nnAt will: mage hand (the hand is invisible)n3/day each: feather fall, jump, see invisibility, shield",
        Usage: "",
      },
      {
        Name: "Psychic Defense",
        Content:
          "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The githzerai makes two unarmed strikes.",
        Usage: "",
      },
      {
        Name: "Unarmed Strike",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage plus 9 (2d8) psychic damage. This is a magic weapon attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful neutral",
  },
  {
    Name: "Air Elemental",
    Type: "elemental",
    HP: 90,
    AC: 15,
    Speed: ["fly 90 ft. (hover)"],
    Abilities: {
      Str: 14,
      Dex: 20,
      Con: 14,
      Int: 6,
      Wis: 10,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "lightning",
      "thunder",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Air Form",
        Content:
          "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The elemental makes two slam attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Whirlwind (Recharge 4-6)",
        Content:
          "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.nIf the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "neutral",
  },
  {
    Name: "Swarm of Centipedes",
    Type: "swarm",
    HP: 22,
    AC: 12,
    Speed: ["20 ft.", "climb 20 ft."],
    Abilities: {
      Str: 3,
      Dex: 13,
      Con: 10,
      Int: 1,
      Wis: 7,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.nA creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Adult Blue Dragon",
    Type: "dragon",
    HP: 225,
    AC: 19,
    Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft."],
    Abilities: {
      Str: 25,
      Dex: 10,
      Con: 23,
      Int: 16,
      Wis: 15,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 11,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 12,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "16",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Lightning Breath (Recharge 5-6)",
        Content:
          "The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "lawful evil",
  },
  {
    Name: "Planetar",
    Type: "celestial",
    HP: 200,
    AC: 19,
    Speed: ["40 ft.", "fly 120 ft."],
    Abilities: {
      Str: 24,
      Dex: 20,
      Con: 24,
      Int: 19,
      Wis: 22,
      Cha: 25,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "radiant",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: ["charmed", "exhaustion", "frightened"],
    Saves: [
      {
        Name: "Con",
        Modifier: 12,
      },
      {
        Name: "Wis",
        Modifier: 11,
      },
      {
        Name: "Cha",
        Modifier: 12,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 11,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "16",
    Traits: [
      {
        Name: "Angelic Weapons",
        Content:
          "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack).",
        Usage: "",
      },
      {
        Name: "Divine Awareness",
        Content: "The planetar knows if it hears a lie.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components: nAt will: detect evil and good, invisibility (self only)n3/day each: blade barrier, dispel evil and good, flame strike, raise deadn1/day each: commune, control weather, insect plague",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The planetar has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The planetar makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage.",
        Usage: "",
      },
      {
        Name: "Healing Touch (4/Day)",
        Content:
          "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful good",
  },
  {
    Name: "Ghoul",
    Type: "undead",
    HP: 22,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 13,
      Dex: 15,
      Con: 10,
      Int: 7,
      Wis: 10,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "chaotic evil",
  },
  {
    Name: "Dire Wolf",
    Type: "beast",
    HP: 37,
    AC: 14,
    Speed: ["50 ft."],
    Abilities: {
      Str: 17,
      Dex: 15,
      Con: 15,
      Int: 3,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "1",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Zuggtmoy",
    Type: "fiend",
    HP: 304,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 22,
      Dex: 15,
      Con: 18,
      Int: 20,
      Wis: 19,
      Cha: 24,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold", "fire", "lightning"],
    DamageImmunities: [
      "poison; bludgeoning",
      "piercing",
      "and slashing that is nonmagical",
    ],
    ConditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 9,
      },
      {
        Name: "Con",
        Modifier: 11,
      },
      {
        Name: "Wis",
        Modifier: 11,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 11,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "23",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "Zuggtmoy's spellcasting ability is Charisma (spell save DC 22). She can innately cast the following spells, requiring no material components:nnAt will: detect magic, locate animals or plants, ray of sicknessn3/day each: dispel magic, ensnaring strike, entangle, plant growthn1/day: etherealness, teleport",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If Zuggtmoy fails a saving throw, she can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "Zuggtmoy has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapon",
        Content: "Zuggtmoy's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "Zuggtmoy makes four pseudopod attacks.",
        Usage: "",
      },
      {
        Name: "Pseudopod",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage plus 9 (2d8) poison damage.",
        Usage: "",
      },
      {
        Name: "Infestation Spores (3/Day)",
        Content:
          "Zuggtmoy releases spores that burst out in cloud fills a 20-foof-radius sphere centered on her, and it lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 19 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of madness (determined by rolling on the Madness of Zuggtmoy table) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the 'Myconids' entry in the Monster Manual).",
        Usage: "",
      },
      {
        Name: "Mind Control Spores (Recharge 5�6)",
        Content:
          "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Humanoids and beasts in the cloud when it appears, or that enter it later, must make a DC 19 Wisdom saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the influence of Zuggtmoy for 24 hours. While infected, the creature is charmed by her and can't be reinfected by these spores.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "",
        Content:
          "Zuggtmoy can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Zuggtmoy regains spent legendary actions at the start of her turn.",
        Usage: "",
      },
      {
        Name: "Attack",
        Content: "Zuggtmoy makes one pseudopod attack.",
        Usage: "",
      },
      {
        Name: "Exert Will",
        Content:
          "One creature charmed by Zuggtmoy that she can see must use its reaction to move up to its speed as she directs or to make a weapon attack against a target that she designates.",
        Usage: "",
      },
    ],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Demilich",
    Type: "undead",
    HP: 80,
    AC: 20,
    Speed: ["0 ft.", "fly 30 ft. (hover)"],
    Abilities: {
      Str: 1,
      Dex: 20,
      Con: 10,
      Int: 20,
      Wis: 17,
      Cha: 20,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from magic weapons",
    ],
    DamageImmunities: [
      "necrotic",
      "poison",
      "psychic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: [
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "stunned",
    ],
    Saves: [
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Int",
        Modifier: 11,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 11,
      },
    ],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "18",
    Traits: [
      {
        Name: "Avoidance",
        Content:
          "If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the demilich fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Turn Immunity",
        Content: "The demilich is immune to effects that turn undead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Howl (Recharge 5-6)",
        Content:
          "The demilich emits a bloodcurdling howl. Each creature within 30 feet of the demilich that can hear the howl must succeed on a DC 15 Constitution saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn.",
        Usage: "",
      },
      {
        Name: "Life Drain",
        Content:
          "The demilich targets up to three creatures that it can see within 10 feet of it. Each target must succeed on a DC 19 Constitution saving throw or take 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Flight",
        Content: "The demilich flies up to half its flying speed.",
        Usage: "",
      },
      {
        Name: "Cloud of Dust",
        Content:
          "The demilich magically swirls its dusty remains. Each creature within 10 feet of the demilich, including around a corner, must succeed on a DC 15 Constitution saving throw or be blinded until the end of the demilich's next turn. A creature that succeeds on the saving throw is immune to this effect until the end of the demilich's next turn.",
        Usage: "",
      },
      {
        Name: "Energy Drain (Costs 2 Actions)",
        Content:
          "Each creature with in 30 feet of the demilich must make a DC 15 Constitution saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies. A creature's hit point maximum can be restored with the greater restoration spell or similar magic.",
        Usage: "",
      },
      {
        Name: "Vile Curse (Costs 3 Actions)",
        Content:
          "The demilich targets one creature it can see within 30 feet of it. The target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until the curse ends, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success.",
        Usage: "",
      },
    ],
    Size: "Tiny",
    Alignment: "neutral evil",
  },
  {
    Name: "Revenant",
    Type: "undead",
    HP: 136,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 14,
      Con: 18,
      Int: 13,
      Wis: 16,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["necrotic", "psychic"],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned",
      "stunned",
    ],
    Saves: [
      {
        Name: "Str",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Regeneration",
        Content:
          "The revenant regains 10 hit points at the start of its turn. If the revenant takes fire or radiant damage, this trait doesn't function at the start of the revenant's next turn. The revenant's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate.",
        Usage: "",
      },
      {
        Name: "Rejuvenation",
        Content:
          "When the revenant's body is destroyed, its soul lingers. After 24 hours, the soul inhabits and animates another corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a wish spell can be used to force the soul to go to the afterlife and not return.",
        Usage: "",
      },
      {
        Name: "Turn Immunity",
        Content: "The revenant is immune to effects that turn undead.",
        Usage: "",
      },
      {
        Name: "Vengeful Tracker",
        Content:
          "The revenant knows the distance to and direction of any creature against which it seeks revenge, even if the creature and the revenant are on different planes of existence. If the creature being tracked by the revenant dies, the revenant knows.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The revenant makes two fist attacks.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. If the target is a creature against which the revenant has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, the revenant can grapple the target (escape DC 14) provided the target is Large or smaller.",
        Usage: "",
      },
      {
        Name: "Vengeful Glare",
        Content:
          "The revenant targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw. On a failure, the target is paralyzed until the revenant deals damage to it, or until the end of the revenant's next turn. When the paralysis ends, the target is frightened of the revenant for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if it can see the revenant, ending the frightened condition on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral",
  },
  {
    Name: "Yuan-ti Pureblood",
    Type: "humanoid",
    HP: 40,
    AC: 11,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 12,
      Con: 11,
      Int: 13,
      Wis: 12,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The yuan-ti's spellcasting ability is Charisma (spell save DC 12). The yuan-ti can innately cast the following spells, requiring no material components: nnAt will: animal friendship (snakes only)n3/day each: poison spray, suggestion",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The yuan-ti has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The yuan-ti makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Scimitar",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
        Usage: "",
      },
      {
        Name: "Shortbow",
        Content:
          "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 4 (1d6 + 1) piercing damage plus 7 (2d6) poison damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Giant Weasel",
    Type: "beast",
    HP: 9,
    AC: 13,
    Speed: ["40 ft."],
    Abilities: {
      Str: 11,
      Dex: 16,
      Con: 10,
      Int: 4,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Minotaur Skeleton",
    Type: "undead",
    HP: 67,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 18,
      Dex: 11,
      Con: 15,
      Int: 6,
      Wis: 8,
      Cha: 5,
    },
    DamageVulnerabilities: ["bludgeoning"],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["exhaustion", "poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Greataxe",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Gore",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Spider",
    Type: "beast",
    HP: 1,
    AC: 12,
    Speed: ["20 ft.", "climb 20 ft."],
    Abilities: {
      Str: 2,
      Dex: 14,
      Con: 8,
      Int: 1,
      Wis: 10,
      Cha: 2,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 30 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Spider Climb",
        Content:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Web Sense",
        Content:
          "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
        Usage: "",
      },
      {
        Name: "Web Walker",
        Content: "The spider ignores movement restrictions caused by webbing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Vampire Spellcaster",
    Type: "undead",
    HP: 144,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 18,
      Con: 18,
      Int: 17,
      Wis: 15,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "necrotic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 7,
      },
      {
        Name: "Stealth",
        Modifier: 9,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "15",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.nWhile in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.nWhile in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the vampire fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Misty Escape",
        Content:
          "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point.",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Vampire Weaknesses",
        Content:
          "The vampire has the following flaws: nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.nHarmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.nStake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.nSunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The vampire is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). The vampire has the following wizard spells prepared: nn• Cantrips (at will): mage hand, prestidigitation, ray of frostn• 1st level (4 slots): comprehend languages, fog cloud, sleepn• 2nd level (3 slots): detect thoughts, gust of wind, mirror imagen• 3rd level (3 slots): animate dead, bestow curse, nondetectionn• 4th level (3 slots): blight, greater invisibilityn• 5th level (1 slot): dominate person",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack (Vampire Form Only)",
        Content:
          "The vampire makes two attacks, only one of which can be a bite attack.",
        Usage: "",
      },
      {
        Name: "Unarmed Strike (Vampire Form Only)",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
        Usage: "",
      },
      {
        Name: "Bite (Bat or Vampire Form Only)",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
        Usage: "",
      },
      {
        Name: "Charm",
        Content:
          "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.",
        Usage: "",
      },
      {
        Name: "Children of the Night (1/Day)",
        Content:
          "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Giant Centipede",
    Type: "beast",
    HP: 4,
    AC: 13,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 5,
      Dex: 14,
      Con: 12,
      Int: 1,
      Wis: 7,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 30 ft."],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Bite. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Goblin Boss",
    Type: "humanoid",
    HP: 21,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 14,
      Con: 10,
      Int: 10,
      Wis: 8,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Nimble Escape",
        Content:
          "The goblin can take the Disengage or Hide action as a bonus action on each of its turns.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The goblin makes two attacks with its scimitar. The second attack has disadvantage.",
        Usage: "",
      },
      {
        Name: "Scimitar",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Redirect Attack",
        Content:
          "When a creature the goblin can see targets it with an attack, the goblin chooses another goblin within 5 feet of it. The two goblins swap places, and the chosen goblin becomes the target instead.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "neutral evil",
  },
  {
    Name: "Young Green Dragon",
    Type: "dragon",
    HP: 136,
    AC: 18,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 19,
      Dex: 12,
      Con: 17,
      Int: 16,
      Wis: 13,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 7,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "8",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Poison Breath (Recharge 5-6)",
        Content:
          "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Young Remorhaz",
    Type: "monstrosity",
    HP: 93,
    AC: 14,
    Speed: ["30 ft.", "burrow 20 ft."],
    Abilities: {
      Str: 18,
      Dex: 13,
      Con: 17,
      Int: 3,
      Wis: 10,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold", "fire"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Heated Body",
        Content:
          "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 20 (3d10 + 4) piercing damage plus 7 (2d6) fire damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Guardian Naga",
    Type: "monstrosity",
    HP: 127,
    AC: 18,
    Speed: ["40 ft."],
    Abilities: {
      Str: 19,
      Dex: 18,
      Con: 16,
      Int: 16,
      Wis: 19,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["charmed", "poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 8,
      },
      {
        Name: "Con",
        Modifier: 7,
      },
      {
        Name: "Int",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 8,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "10",
    Traits: [
      {
        Name: "Rejuvenation",
        Content:
          "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared: nn• Cantrips (at will): mending, sacred flame, thaumaturgyn• 1st level (4 slots): command, cure wounds, shield of faithn• 2nd level (3 slots): calm emotions, hold personn• 3rd level (3 slots): bestow curse, clairvoyancen• 4th level (3 slots): banishment, freedom of movementn• 5th level (2 slots): flame strike, geasn• 6th level (1 slot): true seeing",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Spit Poison",
        Content:
          "Ranged Weapon Attack: +8 to hit, range 15/30 ft., one creature. Hit: The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful good",
  },
  {
    Name: "Cultist",
    Type: "humanoid",
    HP: 9,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 12,
      Con: 10,
      Int: 10,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 2,
      },
      {
        Name: "Religion",
        Modifier: 2,
      },
    ],
    Senses: [],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Dark Devotion",
        Content:
          "The cultist has advantage on saving throws against being charmed or frightened.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Scimitar",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any non-good alignment",
  },
  {
    Name: "Dretch",
    Type: "demon",
    HP: 18,
    AC: 11,
    Speed: ["20 ft."],
    Abilities: {
      Str: 11,
      Dex: 11,
      Con: 12,
      Int: 5,
      Wis: 8,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold", "fire", "lightning"],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dretch makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Fetid Cloud (1/Day)",
        Content:
          "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "chaotic evil",
  },
  {
    Name: "Androsphinx",
    Type: "monstrosity",
    HP: 199,
    AC: 17,
    Speed: ["40 ft.", "fly 60 ft."],
    Abilities: {
      Str: 22,
      Dex: 10,
      Con: 20,
      Int: 16,
      Wis: 18,
      Cha: 23,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "psychic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: ["charmed", "frightened"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 11,
      },
      {
        Name: "Int",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 10,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 9,
      },
      {
        Name: "Perception",
        Modifier: 10,
      },
      {
        Name: "Religion",
        Modifier: 15,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "17",
    Traits: [
      {
        Name: "Inscrutable",
        Content:
          "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The sphinx's weapon attacks are magical.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared: nn• Cantrips (at will): sacred flame, spare the dying, thaumaturgyn• 1st level (4 slots): command, detect evil and good, detect magicn• 2nd level (3 slots): lesser restoration, zone of truthn• 3rd level (3 slots): dispel magic, tonguesn• 4th level (3 slots): banishment, freedom of movementn• 5th level (2 slots): flame strike, greater restorationn• 6th level (1 slot): heroes' feast",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The sphinx makes two claw attacks.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Roar (3/Day)",
        Content:
          "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.nnFirst Roar. Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.nnSecond Roar. Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.nnThird Roar. Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Claw Attack",
        Content: "The sphinx makes one claw attack.",
        Usage: "",
      },
      {
        Name: "Teleport (Costs 2 Actions)",
        Content:
          "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Cast a Spell (Costs 3 Actions)",
        Content:
          "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.",
        Usage: "",
      },
    ],
    Size: "Large",
    Alignment: "lawful neutral",
  },
  {
    Name: "Spy",
    Type: "humanoid",
    HP: 27,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 15,
      Con: 10,
      Int: 12,
      Wis: 14,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 5,
      },
      {
        Name: "Insight",
        Modifier: 4,
      },
      {
        Name: "Investigation",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Persuasion",
        Modifier: 5,
      },
      {
        Name: "Sleight",
        Modifier: null,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "1",
    Traits: [
      {
        Name: "Cunning Action",
        Content:
          "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action.",
        Usage: "",
      },
      {
        Name: "Sneak Attack (1/Turn)",
        Content:
          "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The spy makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Hand Crossbow",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Drow Mage",
    Type: "humanoid",
    HP: 45,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 9,
      Dex: 14,
      Con: 10,
      Int: 17,
      Wis: 13,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 6,
      },
      {
        Name: "Deception",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "7",
    Traits: [
      {
        Name: "Fey Ancestry",
        Content:
          "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The drow's spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components: nAt will: dancing lightsn1/day each: darkness, faerie fire, levitate (self only)",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The drow is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The drow has the following wizard spells prepared: nn• Cantrips (at will): mage hand, minor illusion, poison spray, ray of frostn• 1st level (4 slots): mage armor, magic missile, shield, witch boltn• 2nd level (3 slots): alter self, misty step, webn• 3rd level (3 slots): fly, lightning boltn• 4th level (3 slots): Evard's black tentacles, greater invisibilityn• 5th level (2 slots): cloudkill",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Staff",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) bludgeoning damage, or 3 (1d8-1) bludgeoning damage if used with two hands, plus 3 (1d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Summon Demon (1/Day)",
        Content:
          "The drow magically summons a quasit, or attempts to summon a shadow demon with a 50 percent chance of success. The summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Vampire",
    Type: "undead",
    HP: 144,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 18,
      Con: 18,
      Int: 17,
      Wis: 15,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "necrotic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 7,
      },
      {
        Name: "Stealth",
        Modifier: 9,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "13",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.nWhile in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.nWhile in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the vampire fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Misty Escape",
        Content:
          "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point.",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Vampire Weaknesses",
        Content:
          "The vampire has the following flaws: nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.nHarmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.nStake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.nSunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack (Vampire Form Only)",
        Content:
          "The vampire makes two attacks, only one of which can be a bite attack.",
        Usage: "",
      },
      {
        Name: "Unarmed Strike (Vampire Form Only)",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
        Usage: "",
      },
      {
        Name: "Bite (Bat or Vampire Form Only)",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
        Usage: "",
      },
      {
        Name: "Charm",
        Content:
          "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.",
        Usage: "",
      },
      {
        Name: "Children of the Night (1/Day)",
        Content:
          "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Move",
        Content:
          "The vampire moves up to its speed without provoking opportunity attacks.",
        Usage: "",
      },
      {
        Name: "Unarmed Strike",
        Content: "The vampire makes one unarmed strike.",
        Usage: "",
      },
      {
        Name: "Bite (Costs 2 Actions)",
        Content: "The vampire makes one bite attack.",
        Usage: "",
      },
    ],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Druid",
    Type: "humanoid",
    HP: 27,
    AC: 11,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 12,
      Con: 13,
      Int: 12,
      Wis: 15,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Medicine",
        Modifier: 4,
      },
      {
        Name: "Nature",
        Modifier: 3,
      },
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Spellcasting",
        Content:
          "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared: nn• Cantrips (at will): druidcraft, produce flame, shillelaghn• 1st level (4 slots): entangle, longstrider, speak with animals, thunderwaven• 2nd level (3 slots): animal messenger, barkskin",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Quarterstaff",
        Content:
          "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage with shillelagh or if wielded with two hands.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Tarrasque",
    Type: "monstrosity",
    HP: 676,
    AC: 25,
    Speed: ["40 ft."],
    Abilities: {
      Str: 30,
      Dex: 11,
      Con: 30,
      Int: 3,
      Wis: 11,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "fire",
      "poison",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned"],
    Saves: [
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [],
    Senses: ["blindsight 120 ft."],
    Challenge: "30",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the tarrasque fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The tarrasque has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Reflective Carapace",
        Content:
          "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target.",
        Usage: "",
      },
      {
        Name: "Siege Monster",
        Content: "The tarrasque deals double damage to objects and structures.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tai l. It can use its Swallow instead of its bite.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) slashing damage.",
        Usage: "",
      },
      {
        Name: "Horns",
        Content:
          "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) piercing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Swallow",
        Content:
          "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Attack",
        Content: "The tarrasque makes one claw attack or tail attack.",
        Usage: "",
      },
      {
        Name: "Move",
        Content: "The tarrasque moves up to half its speed.",
        Usage: "",
      },
      {
        Name: "Chomp (Costs 2 Actions)",
        Content: "The tarrasque makes one bite attack or uses its Swallow.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "unaligned",
  },
  {
    Name: "Lizard",
    Type: "beast",
    HP: 2,
    AC: 10,
    Speed: ["20 ft.", "climb 20 ft."],
    Abilities: {
      Str: 2,
      Dex: 11,
      Con: 10,
      Int: 1,
      Wis: 8,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 30 ft."],
    Challenge: "0",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Kuo-Toa",
    Type: "humanoid",
    HP: 18,
    AC: 13,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 13,
      Dex: 10,
      Con: 11,
      Int: 11,
      Wis: 10,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The kuo-toa can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Otherwordly Perception",
        Content:
          "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving.",
        Usage: "",
      },
      {
        Name: "Slippery",
        Content:
          "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.",
        Usage: "",
      },
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
      {
        Name: "Net",
        Content:
          "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller creature. Hit: The target is restrained. A creature can use its action to make a DC 10 Strength check to free itself or another creature in a net, ending the effect on a success. Dealing 5 slashing damage to the net (AC 10) frees the target without harming it and destroys the net.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Sticky Shield",
        Content:
          "When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a DC 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a DC 11 Strength check and succeeding.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Ogre",
    Type: "giant",
    HP: 59,
    AC: 11,
    Speed: ["40 ft."],
    Abilities: {
      Str: 19,
      Dex: 8,
      Con: 16,
      Int: 5,
      Wis: 7,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [],
    Actions: [
      {
        Name: "Greatclub",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Shadow Demon",
    Type: "demon",
    HP: 66,
    AC: 13,
    Speed: ["30 ft.", "fly 30 ft."],
    Abilities: {
      Str: 1,
      Dex: 17,
      Con: 12,
      Int: 14,
      Wis: 13,
      Cha: 14,
    },
    DamageVulnerabilities: ["radiant"],
    DamageResistances: [
      "acid",
      "fire",
      "necrotic",
      "thunder",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["cold", "lightning", "poison"],
    ConditionImmunities: [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
    ],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Cha",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Incorporeal Movement",
        Content:
          "The demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
        Usage: "",
      },
      {
        Name: "Light Sensitivity",
        Content:
          "While in bright light, the demon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Shadow Stealth",
        Content:
          "While in dim light or darkness, the demon can take the Hide action as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) psychic damage or, if the demon had advantage on the attack roll, 17 (4d6 + 3) psychic damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Hook Horror",
    Type: "monstrosity",
    HP: 75,
    AC: 15,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 18,
      Dex: 10,
      Con: 15,
      Int: 6,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 10 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Echolocation",
        Content: "The hook horror can't use its blindsight while deafened.",
        Usage: "",
      },
      {
        Name: "Keen Hearing",
        Content:
          "The hook horror has advantage on Wisdom (Perception) checks that rely on hearing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The hook horror makes two hook attacks.",
        Usage: "",
      },
      {
        Name: "Hook",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral",
  },
  {
    Name: "Gorgon",
    Type: "monstrosity",
    HP: 114,
    AC: 19,
    Speed: ["40 ft."],
    Abilities: {
      Str: 20,
      Dex: 11,
      Con: 18,
      Int: 2,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["petrified"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Trampling Charge",
        Content:
          "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Gore",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) piercing damage.",
        Usage: "",
      },
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Petrifying Breath (Recharge 5-6)",
        Content:
          "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Intellect Devourer",
    Type: "aberration",
    HP: 21,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 6,
      Dex: 14,
      Con: 13,
      Int: 12,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: ["blinded"],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "2",
    Traits: [
      {
        Name: "Detect Sentience",
        Content:
          "The intellect devourer can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a mind blank spell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The intellect devourer makes one attack with its claws and uses Devour Intellect.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
        Usage: "",
      },
      {
        Name: "Devour Intellect",
        Content:
          "The intellect devourer targets one creature it can see within 10 feet of it that has a brain. The target must succeed on a DC 12 Intelligence saving throw against this magic or take 11 (2d10) psychic damage. Also on a failure, roll 3d6: If the total equals or exceeds the target's Intelligence score, that score is reduced to 0. The target is stunned until it regains at least one point of Intelligence.",
        Usage: "",
      },
      {
        Name: "Body Thief",
        Content:
          "The intellect devourer initiates an Intelligence contest with an incapacitated humanoid within 5 feet of it that isn't protected by protection from evil and good. If it wins the contest, the intellect devourer magically consumes the target's brain, teleports into the target's skull, and takes control of the target's body. While inside a creature, the intellect devourer has total cover against attacks and other effects originating outside its host. The intellect devourer retains its Intelligence, Wisdom, and Charisma scores, as well as its understanding of Deep Speech, its telepathy, and its traits. It otherwise adopts the target's statistics. It knows everything the creature knew, including spells and languages.nIf the host body dies, the intellect devourer must leave it. A protection from evil and good spell cast on the body drives the intellect devourer out. The intellect devourer is also forced out if the target regains its devoured brain by means of a wish. By spending 5 feet of its movement, the intellect devourer can voluntarily leave the body, teleporting to the nearest unoccupied space within 5 feet of it. The body then dies, unless its brain is restored within 1 round.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "lawful evil",
  },
  {
    Name: "Bronze Dragon Wyrmling",
    Type: "dragon",
    HP: 32,
    AC: 17,
    Speed: ["30 ft.", "fly 60 ft.", "swim 30 ft."],
    Abilities: {
      Str: 17,
      Dex: 10,
      Con: 15,
      Int: 12,
      Wis: 11,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 2,
      },
      {
        Name: "Con",
        Modifier: 4,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nLightning Breath. The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one.nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful good",
  },
  {
    Name: "Draft Horse",
    Type: "beast",
    HP: 19,
    AC: 10,
    Speed: ["40 ft."],
    Abilities: {
      Str: 18,
      Dex: 10,
      Con: 12,
      Int: 2,
      Wis: 11,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Giant Goat",
    Type: "beast",
    HP: 19,
    AC: 11,
    Speed: ["40 ft."],
    Abilities: {
      Str: 17,
      Dex: 11,
      Con: 12,
      Int: 3,
      Wis: 12,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Sure-Footed",
        Content:
          "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Ram",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Kraken",
    Type: "monstrosity",
    HP: 472,
    AC: 18,
    Speed: ["20 ft.", "swim 60 ft."],
    Abilities: {
      Str: 30,
      Dex: 11,
      Con: 25,
      Int: 22,
      Wis: 18,
      Cha: 20,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: ["frightened", "paralyzed"],
    Saves: [
      {
        Name: "Str",
        Modifier: 17,
      },
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 14,
      },
      {
        Name: "Int",
        Modifier: 13,
      },
      {
        Name: "Wis",
        Modifier: 11,
      },
    ],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "23",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The kraken can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Freedom of Movement",
        Content:
          "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled.",
        Usage: "",
      },
      {
        Name: "Siege Monster",
        Content: "The kraken deals double damage to objects and structures.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.",
        Usage: "",
      },
      {
        Name: "Tentacle",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target.",
        Usage: "",
      },
      {
        Name: "Fling",
        Content:
          "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone.",
        Usage: "",
      },
      {
        Name: "Lightning Storm",
        Content:
          "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Tentacle Attack or Fling",
        Content: "The kraken makes one tentacle attack or uses its Fling.",
        Usage: "",
      },
      {
        Name: "Lightning Storm (Costs 2 Actions)",
        Content: "The kraken uses Lightning Storm.",
        Usage: "",
      },
      {
        Name: "Ink Cloud (Costs 3 Actions)",
        Content:
          "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "chaotic evil",
  },
  {
    Name: "Hezrou",
    Type: "demon",
    HP: 136,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 19,
      Dex: 17,
      Con: 20,
      Int: 5,
      Wis: 12,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Str",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 8,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "8",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The hezrou has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Stench",
        Content:
          "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The hezrou makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Demon (1/Day)",
        Content:
          "The demon chooses what to summon and attempts a magical summoning.nA hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Polar Bear",
    Type: "beast",
    HP: 42,
    AC: 12,
    Speed: ["40 ft.", "swim 30 ft."],
    Abilities: {
      Str: 20,
      Dex: 10,
      Con: 16,
      Int: 2,
      Wis: 13,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The bear makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Horned Devil",
    Type: "devil",
    HP: 178,
    AC: 18,
    Speed: ["20 ft.", "fly 60 ft."],
    Abilities: {
      Str: 22,
      Dex: 17,
      Con: 21,
      Int: 12,
      Wis: 16,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Str",
        Modifier: 10,
      },
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "11",
    Traits: [
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the devil's darkvision.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The devil has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack.",
        Usage: "",
      },
      {
        Name: "Fork",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
        Usage: "",
      },
      {
        Name: "Hurl Flame",
        Content:
          "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Brass Dragon Wyrmling",
    Type: "dragon",
    HP: 16,
    AC: 16,
    Speed: ["30 ft.", "burrow 15 ft.", "fly 60 ft."],
    Abilities: {
      Str: 15,
      Dex: 10,
      Con: 13,
      Int: 10,
      Wis: 11,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 2,
      },
      {
        Name: "Con",
        Modifier: 3,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 3,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "1",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nFire Breath. The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.nSleep Breath. The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic good",
  },
  {
    Name: "Gold Dragon Wyrmling",
    Type: "dragon",
    HP: 60,
    AC: 17,
    Speed: ["30 ft.", "fly 60 ft.", "swim 30 ft."],
    Abilities: {
      Str: 19,
      Dex: 14,
      Con: 17,
      Int: 14,
      Wis: 11,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Con",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nFire Breath. The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.nWeakening Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful good",
  },
  {
    Name: "Vampire Warrior",
    Type: "undead",
    HP: 144,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 18,
      Con: 18,
      Int: 17,
      Wis: 15,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "necrotic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 7,
      },
      {
        Name: "Stealth",
        Modifier: 9,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "15",
    Traits: [
      {
        Name: "Shapechanger",
        Content:
          "If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.nWhile in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.nWhile in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the vampire fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
      {
        Name: "Misty Escape",
        Content:
          "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point.",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Vampire Weaknesses",
        Content:
          "The vampire has the following flaws: nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.nHarmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.nStake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.nSunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack (Vampire Form Only)",
        Content:
          "The vampire makes two attacks, only one of which can be a bite attack.",
        Usage: "",
      },
      {
        Name: "Unarmed Strike (Vampire Form Only)",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
        Usage: "",
      },
      {
        Name: "Bite (Bat or Vampire Form Only)",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
        Usage: "",
      },
      {
        Name: "Charm",
        Content:
          "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.",
        Usage: "",
      },
      {
        Name: "Children of the Night (1/Day)",
        Content:
          "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Ancient Green Dragon",
    Type: "dragon",
    HP: 385,
    AC: 21,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 27,
      Dex: 12,
      Con: 25,
      Int: 20,
      Wis: 17,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 8,
      },
      {
        Name: "Con",
        Modifier: 14,
      },
      {
        Name: "Wis",
        Modifier: 10,
      },
      {
        Name: "Cha",
        Modifier: 11,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 11,
      },
      {
        Name: "Insight",
        Modifier: 10,
      },
      {
        Name: "Perception",
        Modifier: 17,
      },
      {
        Name: "Persuasion",
        Modifier: 11,
      },
      {
        Name: "Stealth",
        Modifier: 8,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "22",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6 + 8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Poison Breath (Recharge 5-6)",
        Content:
          "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "lawful evil",
  },
  {
    Name: "Myconid Sovereign",
    Type: "plant",
    HP: 60,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 12,
      Dex: 10,
      Con: 14,
      Int: 13,
      Wis: 15,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Distress Spores",
        Content:
          "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain.",
        Usage: "",
      },
      {
        Name: "Sun Sickness",
        Content:
          "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The myconid uses either its Hallucination Spores or its Pacifying Spores, then makes a fist attack.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (3d4 + 1) bludgeoning damage plus 7 (3d4) poison damage.",
        Usage: "",
      },
      {
        Name: "Animating Spores",
        Content:
          "The myconid targets one corpse of a humanoid or a Large or smaller beast within 5 feet of it and releases spores at the corpse. In 24 hours, the corpse rises as a spore servant. The corpse stays animated for 1d4 + 1 weeks or until destroyed, and it can't be animated again in this way.",
        Usage: "",
      },
      {
        Name: "Hallucination Spores",
        Content:
          "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The poisoned target is incapacitated while it hallucinates. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Pacifying Spores",
        Content:
          "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Rapport Spores",
        Content:
          "A 30-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful neutral",
  },
  {
    Name: "Noble",
    Type: "humanoid",
    HP: 9,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 12,
      Con: 11,
      Int: 12,
      Wis: 14,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 5,
      },
      {
        Name: "Insight",
        Modifier: 4,
      },
      {
        Name: "Persuasion",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "1/8",
    Traits: [],
    Actions: [
      {
        Name: "Rapier",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Parry",
        Content:
          "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Cloaker",
    Type: "aberration",
    HP: 78,
    AC: 14,
    Speed: ["10 ft.", "fly 40 ft."],
    Abilities: {
      Str: 17,
      Dex: 15,
      Con: 12,
      Int: 13,
      Wis: 12,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "8",
    Traits: [
      {
        Name: "Damage Transfer",
        Content:
          "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak.",
        Usage: "",
      },
      {
        Name: "Light Sensitivity",
        Content:
          "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The cloaker makes two attacks: one with its bite and one with its tail.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Moan",
        Content:
          "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Phantasms (Recharges after a Short or Long Rest)",
        Content:
          "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.nA duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Brown Bear",
    Type: "beast",
    HP: 34,
    AC: 11,
    Speed: ["40 ft.", "climb 30 ft."],
    Abilities: {
      Str: 19,
      Dex: 10,
      Con: 16,
      Int: 2,
      Wis: 13,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "1",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The bear makes two attacks: one with its bite and one with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Faerie Dragon (Violet)",
    Type: "dragon",
    HP: 14,
    AC: 15,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 3,
      Dex: 20,
      Con: 13,
      Int: 14,
      Wis: 12,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "The Colors of Age",
        Content:
          "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.nnRed — 5 years or lessnOrange — 6-10 yearsnYellow — 11-20 yearsnGreen — 21-30 yearsnBlue — 31-40 yearsnIndigo — 41-50 yearsnViolet — 51 years or morenA green or older faerie dragon's CR increases to 2.",
        Usage: "",
      },
      {
        Name: "Superior Invisibility",
        Content:
          "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.",
        Usage: "",
      },
      {
        Name: "Limited Telepathy",
        Content:
          "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The faerie dragon has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.nn1/day each: color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, polymorph, suggestion",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        Usage: "",
      },
      {
        Name: "Euphoria Breath (Recharge 5-6)",
        Content:
          "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:n1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.n5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "chaotic good",
  },
  {
    Name: "Adult Brass Dragon",
    Type: "dragon",
    HP: 172,
    AC: 18,
    Speed: ["40 ft.", "burrow 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 23,
      Dex: 10,
      Con: 21,
      Int: 14,
      Wis: 13,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 10,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "History",
        Modifier: 7,
      },
      {
        Name: "Perception",
        Modifier: 11,
      },
      {
        Name: "Persuasion",
        Modifier: 8,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "13",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +11 to hit, reach,.0 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nFire Breath. The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.nSleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Huge",
    Alignment: "chaotic good",
  },
  {
    Name: "Myconid Adult",
    Type: "plant",
    HP: 22,
    AC: 12,
    Speed: ["20 ft."],
    Abilities: {
      Str: 10,
      Dex: 10,
      Con: 12,
      Int: 10,
      Wis: 13,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Distress Spores",
        Content:
          "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain.",
        Usage: "",
      },
      {
        Name: "Sun Sickness",
        Content:
          "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) bludgeoning damage plus 5 (2d4) poison damage.",
        Usage: "",
      },
      {
        Name: "Pacifying Spores (3/Day)",
        Content:
          "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 11 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Rapport Spores",
        Content:
          "A 20-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful neutral",
  },
  {
    Name: "Kuo-Toa Whip",
    Type: "humanoid",
    HP: 65,
    AC: 11,
    Speed: ["32 ft.", "swim 30 ft."],
    Abilities: {
      Str: 14,
      Dex: 10,
      Con: 14,
      Int: 12,
      Wis: 14,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Religion",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The kuo-toa can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Otherwordly Perception",
        Content:
          "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving.",
        Usage: "",
      },
      {
        Name: "Slippery",
        Content:
          "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The kuo-toa is a 2nd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The kuo-toa has the following cleric spells prepared: nn• Cantrips (at will): sacred flame, thaumaturgyn• 1st level (3 slots): bane, shield of faith",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The kuo-toa makes two attacks: one with its bite and one with its pincer staff.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Pincer Staff",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 14). Until this grapple ends, the kuo-toa can't use its pincer staff on another target.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Giant Fire Beetle",
    Type: "beast",
    HP: 4,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 8,
      Dex: 10,
      Con: 12,
      Int: 1,
      Wis: 7,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 30 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Illumination",
        Content:
          "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft..",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "unaligned",
  },
  {
    Name: "Owl",
    Type: "beast",
    HP: 1,
    AC: 11,
    Speed: ["5 ft.", "fly 60 ft."],
    Abilities: {
      Str: 3,
      Dex: 13,
      Con: 8,
      Int: 2,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Flyby",
        Content:
          "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
        Usage: "",
      },
      {
        Name: "Keen Hearing and Sight",
        Content:
          "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Talons",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Dragon Turtle",
    Type: "dragon",
    HP: 341,
    AC: 20,
    Speed: ["20 ft.", "swim 40 ft."],
    Abilities: {
      Str: 25,
      Dex: 10,
      Con: 20,
      Int: 10,
      Wis: 12,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["fire"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 11,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "17",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon turtle can breathe air and water.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8 + 7) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone.",
        Usage: "",
      },
      {
        Name: "Steam Breath (Recharge 5-6)",
        Content:
          "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Gargantuan",
    Alignment: "neutral",
  },
  {
    Name: "Adult Gold Dragon",
    Type: "dragon",
    HP: 256,
    AC: 19,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 27,
      Dex: 14,
      Con: 25,
      Int: 16,
      Wis: 15,
      Cha: 24,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 8,
      },
      {
        Name: "Con",
        Modifier: 13,
      },
      {
        Name: "Wis",
        Modifier: 8,
      },
      {
        Name: "Cha",
        Modifier: 13,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 8,
      },
      {
        Name: "Perception",
        Modifier: 14,
      },
      {
        Name: "Persuasion",
        Modifier: 13,
      },
      {
        Name: "Stealth",
        Modifier: 8,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "17",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "lawful good",
  },
  {
    Name: "Grimlock",
    Type: "humanoid",
    HP: 11,
    AC: 11,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 12,
      Con: 12,
      Int: 9,
      Wis: 8,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["blinded"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: [
      "blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius)",
    ],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Blind Senses",
        Content:
          "The grimlock can't use its blindsight while deafened and unable to smell.",
        Usage: "",
      },
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
      {
        Name: "Stone Camouflage",
        Content:
          "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Spiked Bone Club",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Bone Devil Polearm",
    Type: "devil",
    HP: 142,
    AC: 19,
    Speed: ["40 ft.", "fly 40 ft."],
    Abilities: {
      Str: 18,
      Dex: 16,
      Con: 18,
      Int: 13,
      Wis: 14,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 7,
      },
      {
        Name: "Insight",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "12",
    Traits: [
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the devil's darkvision.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The devil has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The devil makes three attacks: two with its hooked polearm and one with its sting.",
        Usage: "",
      },
      {
        Name: "Hooked Polearm",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 17 (2d12 + 4) piercing damage. If the target is a huge or smaller creature, it is grappled (escape DC 14). Until the grapple ends, the devil can't use its polearm on another target.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Sting",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success .",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Gray Ooze",
    Type: "ooze",
    HP: 22,
    AC: 8,
    Speed: ["10 ft.", "climb 10 ft."],
    Abilities: {
      Str: 12,
      Dex: 6,
      Con: 16,
      Int: 1,
      Wis: 6,
      Cha: 2,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid", "cold", "fire"],
    DamageImmunities: [],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "prone",
    ],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Amorphous",
        Content:
          "The ooze can move through a space as narrow as 1 inch wide without squeezing.",
        Usage: "",
      },
      {
        Name: "Corrode Metal",
        Content:
          "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.nThe ooze can eat through 2-inch-thick, nonmagical metal in 1 round.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Pseudopod",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Cult Fanatic",
    Type: "humanoid",
    HP: 22,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 14,
      Con: 12,
      Int: 10,
      Wis: 13,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Deception",
        Modifier: 4,
      },
      {
        Name: "Persuasion",
        Modifier: 4,
      },
      {
        Name: "Religion",
        Modifier: 2,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Dark Devotion",
        Content:
          "The fanatic has advantage on saving throws against being charmed or frightened.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The fanatic is a 4th-level spellcaster. Its spell casting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared: nnCantrips (at will): light, sacred flame, thaumaturgyn• 1st level (4 slots): command, inflict wounds, shield of faithn• 2nd level (3 slots): hold person, spiritual weapon",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The fanatic makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Dagger",
        Content:
          "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any non-good alignment",
  },
  {
    Name: "Pixie",
    Type: "fey",
    HP: 1,
    AC: 15,
    Speed: ["10 ft.", "fly 30 ft."],
    Abilities: {
      Str: 2,
      Dex: 20,
      Con: 8,
      Int: 10,
      Wis: 14,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The pixie has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The pixie's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring only its pixie dust as a component: nnAt will: druidcraftn1/day each: confusion, dancing lights, detect evil and good, detect thoughts, dispel magic, entangle, fly, phantasmal force, polymorph, sleep",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Superior Invisibility",
        Content:
          "The pixie magically turns invisible until its concentration ends (as if concentrating on a spell). Any equipment the pixie wears or carries is invisible with it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "neutral good",
  },
  {
    Name: "Orc Eye of Gruumsh",
    Type: "humanoid",
    HP: 45,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 12,
      Con: 17,
      Int: 9,
      Wis: 13,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Intimidation",
        Modifier: 3,
      },
      {
        Name: "Religion",
        Modifier: 1,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Aggressive",
        Content:
          "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.",
        Usage: "",
      },
      {
        Name: "Gruumsh's Fury",
        Content:
          "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attacks).",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The orc is a 3rd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The orc has the following cleric spells prepared: nn• Cantrips (at will): guidance, resistance, thaumaturgyn• 1st level (4 slots): bless, commandn• 2nd level (2 slots): augury, spiritual weapon (spear)",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (1d6 + 3 plus 1d8) piercing damage, or 12 (2d8 + 3) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Dryad",
    Type: "fey",
    HP: 22,
    AC: 11,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 12,
      Con: 11,
      Int: 14,
      Wis: 15,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components: nnAt will: druidcraftn3/day each: entangle, goodberryn1/day each: barkskin, pass without trace, shillelagh",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The dryad has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Speak with Beasts and Plants",
        Content:
          "The dryad can communicate with beasts and plants as if they shared a language.",
        Usage: "",
      },
      {
        Name: "Tree Stride",
        Content:
          "Once on her turn, the dryad can use 10 ft. of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 ft. of the first tree, appearing in an unoccupied space within 5 ft. of the second tree. Both trees must be large or bigger.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Club",
        Content:
          "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1 d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh.",
        Usage: "",
      },
      {
        Name: "Fey Charm",
        Content:
          "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.nEach time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.nThe dryad can have no more than one humanoid and up to three beasts charmed at a time.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "neutral",
  },
  {
    Name: "Killer Whale",
    Type: "beast",
    HP: 90,
    AC: 12,
    Speed: ["swim 60 ft."],
    Abilities: {
      Str: 19,
      Dex: 10,
      Con: 13,
      Int: 3,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: ["blindsight 120 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Echolocation",
        Content: "The whale can't use its blindsight while deafened.",
        Usage: "",
      },
      {
        Name: "Hold Breath",
        Content: "The whale can hold its breath for 30 minutes",
        Usage: "",
      },
      {
        Name: "Keen Hearing",
        Content:
          "The whale has advantage on Wisdom (Perception) checks that rely on hearing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Chain Devil",
    Type: "devil",
    HP: 85,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 18,
      Int: 11,
      Wis: 12,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Con",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "11",
    Traits: [
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the devil's darkvision.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The devil has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The devil makes two attacks with its chains.",
        Usage: "",
      },
      {
        Name: "Chain",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns.",
        Usage: "",
      },
      {
        Name: "Animate Chains (Recharges after a Short or Long Rest)",
        Content:
          "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.nEach animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Unnerving Mask",
        Content:
          "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Bugbear",
    Type: "humanoid",
    HP: 27,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 13,
      Int: 8,
      Wis: 11,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 6,
      },
      {
        Name: "Survival",
        Modifier: 2,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Brute",
        Content:
          "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).",
        Usage: "",
      },
      {
        Name: "Surprise Attack",
        Content:
          "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Morningstar",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Roper",
    Type: "monstrosity",
    HP: 93,
    AC: 20,
    Speed: ["10 ft.", "climb 10 ft."],
    Abilities: {
      Str: 18,
      Dex: 8,
      Con: 17,
      Int: 7,
      Wis: 16,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "False Appearance",
        Content:
          "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite.",
        Usage: "",
      },
      {
        Name: "Grasping Tendrils",
        Content:
          "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Tendril",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target.",
        Usage: "",
      },
      {
        Name: "Reel",
        Content:
          "The roper pulls each creature grappled by it up to 25 ft. straight toward it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral evil",
  },
  {
    Name: "Half-Red Dragon Veteran",
    Type: "humanoid",
    HP: 65,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 13,
      Con: 14,
      Int: 10,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["fire"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Str",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 5,
      },
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "5",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
        Usage: "",
      },
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Heavy Crossbow",
        Content:
          "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage.",
        Usage: "",
      },
      {
        Name: "Fire Breath (Recharge 5-6)",
        Content:
          "The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Grell",
    Type: "aberration",
    HP: 55,
    AC: 12,
    Speed: ["10 ft.", "fly 30 ft. (hover)"],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 13,
      Int: 12,
      Wis: 11,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: ["blinded", "prone"],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "3",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The grell makes two attacks: one with its tentacles and one with its beak.",
        Usage: "",
      },
      {
        Name: "Tentacles",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The poisoned target is paralyzed, and it can repeat the saving throw at the end of each of its turns, ending the effect on a success.nThe target is also grappled (escape DC 15). If the target is Medium or smaller, it is also restrained until this grapple ends. While grappling the target, the grell has advantage on attack rolls against it and can 't use this attack against other targets. When the grell moves, any Medium or smaller target it is grappling moves with it.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Goat",
    Type: "beast",
    HP: 4,
    AC: 10,
    Speed: ["40 ft."],
    Abilities: {
      Str: 12,
      Dex: 10,
      Con: 11,
      Int: 2,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Sure-Footed",
        Content:
          "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Ram",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Ankheg",
    Type: "monstrosity",
    HP: 39,
    AC: 14,
    Speed: ["30 ft.", "burrow 10 ft."],
    Abilities: {
      Str: 17,
      Dex: 11,
      Con: 13,
      Int: 1,
      Wis: 13,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
    Challenge: "2",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.",
        Usage: "",
      },
      {
        Name: "Acid Spray (Recharge 6)",
        Content:
          "The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Orc",
    Type: "humanoid",
    HP: 15,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 12,
      Con: 16,
      Int: 7,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Intimidation",
        Modifier: 2,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Aggressive",
        Content:
          "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Greataxe",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Duergar",
    Type: "humanoid",
    HP: 26,
    AC: 16,
    Speed: ["25 ft."],
    Abilities: {
      Str: 14,
      Dex: 11,
      Con: 14,
      Int: 11,
      Wis: 10,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["poison"],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Duergar Resilience",
        Content:
          "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Enlarge (Recharges after a Short or Long Rest)",
        Content:
          "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.",
        Usage: "",
      },
      {
        Name: "War Pick",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged.",
        Usage: "",
      },
      {
        Name: "Invisibility (Recharges after a Short or Long Rest)",
        Content:
          "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it .",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Giant Scorpion",
    Type: "beast",
    HP: 52,
    AC: 15,
    Speed: ["40 ft."],
    Abilities: {
      Str: 15,
      Dex: 13,
      Con: 15,
      Int: 1,
      Wis: 9,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft."],
    Challenge: "3",
    Traits: [],
    Actions: [
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.",
        Usage: "",
      },
      {
        Name: "Multiattack",
        Content:
          "The scorpion makes three attacks: two with its claws and one with its sting.",
        Usage: "",
      },
      {
        Name: "Sting",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Reef Shark",
    Type: "beast",
    HP: 22,
    AC: 12,
    Speed: ["swim 40 ft."],
    Abilities: {
      Str: 14,
      Dex: 13,
      Con: 13,
      Int: 1,
      Wis: 10,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 30 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Pack Tactics",
        Content:
          "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
      {
        Name: "Water Breathing",
        Content: "The shark can breathe only underwater.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Quaggoth Spore Servant",
    Type: "plant",
    HP: 45,
    AC: 13,
    Speed: ["20 ft.", "climb 20 ft."],
    Abilities: {
      Str: 17,
      Dex: 12,
      Con: 16,
      Int: 2,
      Wis: 6,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "frightened",
      "paralyzed",
      "poisoned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 30 ft. (blind beyond this radius)"],
    Challenge: "1",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The spore servant makes two claw attacks.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Vrock",
    Type: "demon",
    HP: 104,
    AC: 15,
    Speed: ["40 ft.", "fly 60 ft."],
    Abilities: {
      Str: 17,
      Dex: 15,
      Con: 18,
      Int: 8,
      Wis: 13,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 2,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The vrock has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The vrock makes two attacks: one with its beak and one with its talons.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Talons",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Spores (Recharge 6)",
        Content:
          "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.",
        Usage: "",
      },
      {
        Name: "Stunning Screech (1/Day)",
        Content:
          "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn .",
        Usage: "",
      },
      {
        Name: "Variant: Summon Demon (1/Day)",
        Content:
          "The demon chooses what to summon and attempts a magical summoning.nA vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Bone Naga (Guardian)",
    Type: "undead",
    HP: 58,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 15,
      Dex: 16,
      Con: 12,
      Int: 15,
      Wis: 15,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["charmed", "exhaustion", "paralyzed", "poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Spellcasting",
        Content:
          "The naga is a 5th-level spellcaster (spell save DC 12, +4 to hit with spell attacks) that needs only verbal components to cast its spells. Its spellcasting ability is Wisdom, and it has the following cleric spells prepared: nn• Cantrips (at will): mending, sacred flame, thaumaturgyn• 1st level (4 slots): command, shield of faithn• 2nd level (3 slots): calm emotions, hold personn• 3rd level (2 slots): bestow curse",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 10 (2d6 + 3) piercing damage plus 10 (3d6) poison damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Bridesmaid of Zuggtmoy",
    Type: "plant",
    HP: 22,
    AC: 13,
    Speed: ["20 ft."],
    Abilities: {
      Str: 14,
      Dex: 11,
      Con: 11,
      Int: 14,
      Wis: 8,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Fungus Stride",
        Content:
          "Once on its turn, the bridesmaid can use 10 feet of its movement to step magically into one living mushroom or fungus patch within 5 feet and emerge from another within 60 feet of the first one, appearing in an unoccupied space within 5 feet of the second mushroom or fungus patch. The mushrooms and patches must be large or bigger.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Hallucination Spores",
        Content:
          "The bridesmaid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target is incapacitated. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Infestation Spores (1/Day)",
        Content:
          "The bridesmaid releases spores that burst out in a cloud that fills a 10-foot-radius sphere centered on it, and the cloud lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 10 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of indefinite madness (determined by rolling on the Madness of Zuggtmoy table in appendix D) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must be repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the 'Myconids' entry in the Monster Manual).",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "chaotic evil",
  },
  {
    Name: "Xorn",
    Type: "elemental",
    HP: 73,
    AC: 19,
    Speed: ["20 ft.", "burrow 20 ft."],
    Abilities: {
      Str: 17,
      Dex: 10,
      Con: 22,
      Int: 11,
      Wis: 10,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "piercing and slashing from nonmagical weapons that aren't adamantine",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Earth Glide",
        Content:
          "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through.",
        Usage: "",
      },
      {
        Name: "Stone Camouflage",
        Content:
          "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
        Usage: "",
      },
      {
        Name: "Treasure Sense",
        Content:
          "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 ft. of it.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The xorn makes three claw attacks and one bite attack.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "neutral",
  },
  {
    Name: "Wyvern",
    Type: "dragon",
    HP: 110,
    AC: 13,
    Speed: ["20 ft.", "fly 80 ft."],
    Abilities: {
      Str: 19,
      Dex: 10,
      Con: 16,
      Int: 5,
      Wis: 12,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "6",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Stinger",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Gnoll Fang of Yeenoghu",
    Type: "humanoid",
    HP: 65,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 17,
      Dex: 15,
      Con: 15,
      Int: 10,
      Wis: 11,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 4,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 3,
      },
    ],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Rampage",
        Content:
          "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The gnoll makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 7 (2d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Swarm of Beetles",
    Type: "swarm",
    HP: 22,
    AC: 12,
    Speed: ["20 ft.", "burrow 5 ft.", "climb 20 ft."],
    Abilities: {
      Str: 3,
      Dex: 13,
      Con: 10,
      Int: 1,
      Wis: 7,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Barlgura",
    Type: "demon",
    HP: 68,
    AC: 15,
    Speed: ["40 ft.", "climb 40 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 7,
      Wis: 14,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold", "fire", "lightning"],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Innate Spellcasting",
        Content:
          "The barlgura's spellcasting ability is Wisdom (spell save DC 13). The barlgura can innately cast the following spells, requiring no material components: n1/day each: entangle, phantasmal forcen2/day each: disguise self, invisibility (self only)",
        Usage: "",
      },
      {
        Name: "Reckless",
        Content:
          "At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.",
        Usage: "",
      },
      {
        Name: "Running Leap",
        Content:
          "The barlgura's long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The barlgura makes three attacks: one with its bite and two with its fists.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Demon (1/Day)",
        Content:
          "The demon chooses what to summon and attempts a magical summoning.nA barlgura has a 30 percent chance of summoning one barlgura.nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Ancient Gold Dragon",
    Type: "dragon",
    HP: 546,
    AC: 22,
    Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 30,
      Dex: 14,
      Con: 29,
      Int: 18,
      Wis: 17,
      Cha: 28,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 9,
      },
      {
        Name: "Con",
        Modifier: 16,
      },
      {
        Name: "Wis",
        Modifier: 10,
      },
      {
        Name: "Cha",
        Modifier: 16,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 10,
      },
      {
        Name: "Perception",
        Modifier: 17,
      },
      {
        Name: "Persuasion",
        Modifier: 16,
      },
      {
        Name: "Stealth",
        Modifier: 9,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "24",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The dragon can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nFire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one.nWeakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "lawful good",
  },
  {
    Name: "Swarm of Bats",
    Type: "swarm",
    HP: 22,
    AC: 12,
    Speed: ["0 ft.", "fly 30 ft."],
    Abilities: {
      Str: 5,
      Dex: 15,
      Con: 10,
      Int: 2,
      Wis: 12,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Echolocation",
        Content: "The swarm can't use its blindsight while deafened.",
        Usage: "",
      },
      {
        Name: "Keen Hearing",
        Content:
          "The swarm has advantage on Wisdom (Perception) checks that rely on hearing.",
        Usage: "",
      },
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Ettin",
    Type: "giant",
    HP: 85,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 21,
      Dex: 8,
      Con: 17,
      Int: 6,
      Wis: 10,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Two Heads",
        Content:
          "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.",
        Usage: "",
      },
      {
        Name: "Wakeful",
        Content:
          "When one of the ettin's heads is asleep, its other head is awake.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The ettin makes two attacks: one with its battleaxe and one with its morningstar.",
        Usage: "",
      },
      {
        Name: "Battleaxe",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
        Usage: "",
      },
      {
        Name: "Morningstar",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Grick Alpha",
    Type: "monstrosity",
    HP: 75,
    AC: 18,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 18,
      Dex: 16,
      Con: 15,
      Int: 4,
      Wis: 14,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing damage from nonmagical weapons",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "7",
    Traits: [
      {
        Name: "Stone Camouflage",
        Content:
          "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The grick makes two attacks: one with its tail and one with its tentacles. If it hits with its tentacles, the grick can make one beak attack against the same target.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Tentacles",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 22 (4d8 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral",
  },
  {
    Name: "Umber Hulk",
    Type: "monstrosity",
    HP: 93,
    AC: 18,
    Speed: ["30 ft.", "burrow 20 ft."],
    Abilities: {
      Str: 20,
      Dex: 13,
      Con: 16,
      Int: 9,
      Wis: 10,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft.", "tremorsense 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Confusing Gaze",
        Content:
          "When a creature starts its turn within 30 feet of the umber hulk and is able to see the umber hulk's eyes, the umber hulk can magically force it to make a DC 15 Charisma saving throw, unless the umber hulk is incapacitated.nOn a failed saving throw, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during that turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action but uses all its movement to move in a random direction. On a 7 or 8, the creature makes one melee attack against a random creature, or it does nothing if no creature is within reach.nUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the umber hulk until the start of its next turn, when it can avert its eyes again. If the creature looks at the umber hulk in the meantime, it must immediately make the save.",
        Usage: "",
      },
      {
        Name: "Tunneler",
        Content:
          "The umber hulk can burrow through solid rock at half its burrowing speed and leaves a 5 foot-wide, 8-foot-high tunnel in its wake.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The umber hulk makes three attacks: two with its claws and one with its mandibles.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) slashing damage.",
        Usage: "",
      },
      {
        Name: "Mandibles",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Archmage",
    Type: "humanoid",
    HP: 99,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 14,
      Con: 12,
      Int: 20,
      Wis: 15,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "damage from spells; non magical bludgeoning",
      "piercing",
      "and slashing (from stoneskin)",
    ],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Int",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 13,
      },
      {
        Name: "History",
        Modifier: 13,
      },
    ],
    Senses: [],
    Challenge: "12",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The archmage has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared: nn• Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking graspn• 1st level (4 slots): detect magic, identify, mage armor*, magic missilen• 2nd level (3 slots): detect thoughts, mirror image, misty stepn• 3rd level (3 slots): counterspell,fly, lightning boltn• 4th level (3 slots): banishment, fire shield, stoneskin*n• 5th level (3 slots): cone of cold, scrying, wall of forcen• 6th level (1 slot): globe of invulnerabilityn• 7th level (1 slot): teleportn• 8th level (1 slot): mind blank*n• 9th level (1 slot): time stopn* The archmage casts these spells on itself before combat.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Dagger",
        Content:
          "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Ghost",
    Type: "undead",
    HP: 45,
    AC: 11,
    Speed: ["0 ft.", "fly 40 ft. It can hover."],
    Abilities: {
      Str: 7,
      Dex: 13,
      Con: 10,
      Int: 10,
      Wis: 12,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "acid",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["cold", "necrotic", "poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Ethereal Sight",
        Content:
          "The ghost can see 60 ft. into the Ethereal Plane when it is on the Material Plane, and vice versa.",
        Usage: "",
      },
      {
        Name: "Incorporeal Movement",
        Content:
          "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Withering Touch",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage.",
        Usage: "",
      },
      {
        Name: "Etherealness",
        Content:
          "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.",
        Usage: "",
      },
      {
        Name: "Horrifying Visage",
        Content:
          "Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 _ 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring.",
        Usage: "",
      },
      {
        Name: "Possession (Recharge 6)",
        Content:
          "One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.n     The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Winter Wolf",
    Type: "monstrosity",
    HP: 75,
    AC: 13,
    Speed: ["50 ft."],
    Abilities: {
      Str: 18,
      Dex: 13,
      Con: 14,
      Int: 7,
      Wis: 12,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "3",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
      {
        Name: "Snow Camouflage",
        Content:
          "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Cold Breath (Recharge 5-6)",
        Content:
          "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral evil",
  },
  {
    Name: "Drider",
    Type: "monstrosity",
    HP: 123,
    AC: 19,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 16,
      Dex: 16,
      Con: 18,
      Int: 13,
      Wis: 14,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
      {
        Name: "Stealth",
        Modifier: 9,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "Fey Ancestry",
        Content:
          "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components: nAt will: dancing lightsn1/day each: darkness, faerie fire",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Web Walker",
        Content: "The drider ignores movement restrictions caused by webbing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Guard",
    Type: "humanoid",
    HP: 11,
    AC: 16,
    Speed: ["30 ft."],
    Abilities: {
      Str: 13,
      Dex: 12,
      Con: 12,
      Int: 10,
      Wis: 11,
      Cha: 10,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: [],
    Challenge: "1/8",
    Traits: [],
    Actions: [
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Quaggoth Thonot",
    Type: "humanoid",
    HP: 45,
    AC: 13,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 17,
      Dex: 12,
      Con: 16,
      Int: 6,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Wounded Fury",
        Content:
          "While it has 10 hit points or fewer, the quaggoth has advantage on attack rolls. In addition, it deals an extra 7 (2d6) damage to any target it hits with a melee attack.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting (Psionics)",
        Content:
          "The quaggoth's innate spellcasting ability is Wisdom (spell save DC 11 ). The quaggoth can innately cast the following spells, requiring no components: nnAt will: feather fall, mage hand (the hand is invisible)n1/day each: cure wounds, enlarge/reduce, heat metal, mirror image",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The quaggoth makes two claw attacks.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic neutral",
  },
  {
    Name: "Yeti",
    Type: "monstrosity",
    HP: 51,
    AC: 12,
    Speed: ["40 ft.", "climb 40 ft."],
    Abilities: {
      Str: 18,
      Dex: 13,
      Con: 16,
      Int: 8,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Fear of Fire",
        Content:
          "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.",
        Usage: "",
      },
      {
        Name: "Keen Smell",
        Content:
          "The yeti has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Snow Camouflage",
        Content:
          "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The yeti can use its Chilling Gaze and makes two claw attacks.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) slashing damage plus 3 (1d6) cold damage.",
        Usage: "",
      },
      {
        Name: "Chilling Gaze",
        Content:
          "The yeti targets one creature it can see within 30 ft. of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Swarm of Insects",
    Type: "swarm",
    HP: 22,
    AC: 12,
    Speed: ["20 ft.", "climb 20 ft."],
    Abilities: {
      Str: 3,
      Dex: 13,
      Con: 10,
      Int: 1,
      Wis: 7,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Deer",
    Type: "beast",
    HP: 4,
    AC: 13,
    Speed: ["50 ft."],
    Abilities: {
      Str: 11,
      Dex: 16,
      Con: 11,
      Int: 2,
      Wis: 14,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "0",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Solar",
    Type: "celestial",
    HP: 243,
    AC: 21,
    Speed: ["50 ft.", "fly 150 ft."],
    Abilities: {
      Str: 26,
      Dex: 22,
      Con: 26,
      Int: 25,
      Wis: 25,
      Cha: 30,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "radiant",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["necrotic", "poison"],
    ConditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
    Saves: [
      {
        Name: "Int",
        Modifier: 14,
      },
      {
        Name: "Wis",
        Modifier: 14,
      },
      {
        Name: "Cha",
        Modifier: 17,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 14,
      },
    ],
    Senses: ["truesight 120 ft."],
    Challenge: "21",
    Traits: [
      {
        Name: "Angelic Weapons",
        Content:
          "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack).",
        Usage: "",
      },
      {
        Name: "Divine Awareness",
        Content: "The solar knows if it hears a lie.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The solar's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components: nAt will: detect evil and good, invisibility (self only)n3/day each: blade barrier, dispel evil and good, resurrectionn1/day each: commune, control weather",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The solar has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The solar makes two greatsword attacks.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.",
        Usage: "",
      },
      {
        Name: "Slaying Longbow",
        Content:
          "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.",
        Usage: "",
      },
      {
        Name: "Flying Sword",
        Content:
          "The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.",
        Usage: "",
      },
      {
        Name: "Healing Touch (4/Day)",
        Content:
          "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Teleport",
        Content:
          "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Searing Burst (Costs 2 Actions)",
        Content:
          "The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
      {
        Name: "Blinding Gaze (Costs 3 Actions)",
        Content:
          "The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.",
        Usage: "",
      },
    ],
    Size: "Large",
    Alignment: "lawful good",
  },
  {
    Name: "Death Tyrant",
    Type: "undead",
    HP: 187,
    AC: 19,
    Speed: ["0 ft.", "fly 20 ft. (hover)"],
    Abilities: {
      Str: 10,
      Dex: 14,
      Con: 14,
      Int: 19,
      Wis: 15,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
    ],
    Saves: [
      {
        Name: "Str",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 7,
      },
      {
        Name: "Int",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 12,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "14",
    Traits: [
      {
        Name: "Negative Energy Cone",
        Content:
          "The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the tyrant decides which way the cone faces and whether the cone is active.nAny creature in that area can't regain hit points. Any humanoid that dies there becomes a zombie under the tyrant's command. The dead humanoid retains its place in the initiative order and animates at the start of its next turn, provided that its body hasn't been completely destroyed.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Eye Rays",
        Content:
          "The death tyrant shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 ft. of it:n1. Charm Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be charmed by the death tyrant for 1 hour, or until the death tyrant harms the creature.n2. Paralyzing Ray. The targeted creature must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.n3. Fear Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.n4. Slowing Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.n5. Enervation Ray. The targeted creature must make a DC 17 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.n6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 17 Strength saving throw or the death tyrant moves it up to 30 ft. in any direction. It is restrained by the ray's telekinetic grip until the start of the death tyrant's next turn or until the death tyrant is incapacitated.nIf the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 ft. in any direction. The death tyrant can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.n7. Sleep Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.n8. Petrification Ray. The targeted creature must make a DC 17 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.n9. Disintegration Ray. If the target is a creature, it must succeed on a DC 17 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.nIf the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.n10. Death Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Eye Ray",
        Content: "The death tyrant uses one random eye ray.",
        Usage: "",
      },
    ],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Adult Copper Dragon",
    Type: "dragon",
    HP: 184,
    AC: 18,
    Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 23,
      Dex: 12,
      Con: 21,
      Int: 18,
      Wis: 15,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 10,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "Deception",
        Modifier: 8,
      },
      {
        Name: "Perception",
        Modifier: 12,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "14",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nAcid Breath. The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.nSlowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "chaotic good",
  },
  {
    Name: "Ancient Silver Dragon",
    Type: "dragon",
    HP: 487,
    AC: 22,
    Speed: ["40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 30,
      Dex: 10,
      Con: 29,
      Int: 18,
      Wis: 15,
      Cha: 23,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 16,
      },
      {
        Name: "Wis",
        Modifier: 9,
      },
      {
        Name: "Cha",
        Modifier: 13,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 11,
      },
      {
        Name: "History",
        Modifier: 11,
      },
      {
        Name: "Perception",
        Modifier: 16,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "23",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons.nCold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.nParalyzing Breath. The dragon exhales paralyzing gas in a 90- foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "lawful good",
  },
  {
    Name: "Drow Priestess of Lolth",
    Type: "humanoid",
    HP: 71,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 14,
      Con: 12,
      Int: 13,
      Wis: 17,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 4,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [
      {
        Name: "Insight",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 6,
      },
      {
        Name: "Religion",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "8",
    Traits: [
      {
        Name: "Fey Ancestry",
        Content:
          "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The drow's spellcasting ability is Charisma (spell save DC 15. She can innately cast the following spells, requiring no material components: nAt will: dancing lightsn1/day each: darkness, faerie fire, levitate (self only)",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom (save DC 14, +6 to hit with spell attacks). The drow has the following cleric spells prepared: nn• Cantrips (at will): guidance, poison spray, resistance, spare the dying, thaumaturgyn• 1st level (4 slots): animal friendship, cure wounds, detect poison and disease, ray of sicknessn• 2nd level (3 slots): lesser restoration, protection from poison, webn• 3rd level (3 slots): conjure animals (2 giant spiders), dispel magicn• 4th level (3 slots): divination, freedom of movementn• 5th level (2 slots): insect plague, mass cure wounds",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The drow makes two scourge attacks.",
        Usage: "",
      },
      {
        Name: "Scourge",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage plus 17 (5d6) poison damage.",
        Usage: "",
      },
      {
        Name: "Summon Demon (1/Day)",
        Content:
          "The drow attempts to magically summon a yochlol with a 30 percent chance of success. If the attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "neutral evil",
  },
  {
    Name: "Faerie Dragon (Indigo)",
    Type: "dragon",
    HP: 14,
    AC: 15,
    Speed: ["10 ft.", "fly 60 ft."],
    Abilities: {
      Str: 3,
      Dex: 20,
      Con: 13,
      Int: 14,
      Wis: 12,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 4,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "The Colors of Age",
        Content:
          "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.nnRed — 5 years or lessnOrange — 6-10 yearsnYellow — 11-20 yearsnGreen — 21-30 yearsnBlue — 31-40 yearsnIndigo — 41-50 yearsnViolet — 51 years or morenA green or older faerie dragon's CR increases to 2.",
        Usage: "",
      },
      {
        Name: "Superior Invisibility",
        Content:
          "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.",
        Usage: "",
      },
      {
        Name: "Limited Telepathy",
        Content:
          "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The faerie dragon has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.nn1/day each: color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, suggestion",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        Usage: "",
      },
      {
        Name: "Euphoria Breath (Recharge 5-6)",
        Content:
          "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:n1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.n5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Tiny",
    Alignment: "chaotic good",
  },
  {
    Name: "Giant Toad",
    Type: "beast",
    HP: 39,
    AC: 11,
    Speed: ["20 ft.", "swim 40 ft."],
    Abilities: {
      Str: 15,
      Dex: 13,
      Con: 13,
      Int: 2,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 30 ft."],
    Challenge: "1",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The toad can breathe air and water",
        Usage: "",
      },
      {
        Name: "Standing Leap",
        Content:
          "The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target.",
        Usage: "",
      },
      {
        Name: "Swallow",
        Content:
          "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Iron Golem",
    Type: "construct",
    HP: 210,
    AC: 20,
    Speed: ["30 ft."],
    Abilities: {
      Str: 24,
      Dex: 9,
      Con: 20,
      Int: 3,
      Wis: 11,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [
      "fire",
      "poison",
      "psychic",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't adamantine",
    ],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "16",
    Traits: [
      {
        Name: "Fire Absorption",
        Content:
          "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt.",
        Usage: "",
      },
      {
        Name: "Immutable Form",
        Content:
          "The golem is immune to any spell or effect that would alter its form.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The golem has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The golem's weapon attacks are magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The golem makes two melee attacks.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Sword",
        Content:
          "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10 + 7) slashing damage.",
        Usage: "",
      },
      {
        Name: "Poison Breath (Recharge 5-6)",
        Content:
          "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (l0d8) poison damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Shambling Mound",
    Type: "plant",
    HP: 136,
    AC: 15,
    Speed: ["20 ft.", "swim 20 ft."],
    Abilities: {
      Str: 18,
      Dex: 8,
      Con: 16,
      Int: 5,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["cold", "fire"],
    DamageImmunities: ["lightning"],
    ConditionImmunities: ["blinded", "deafened", "exhaustion"],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "5",
    Traits: [
      {
        Name: "Lightning Absorption",
        Content:
          "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it.",
        Usage: "",
      },
      {
        Name: "Slam",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Engulf",
        Content:
          "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Sprite",
    Type: "fey",
    HP: 2,
    AC: 15,
    Speed: ["10 ft.", "fly 40 ft."],
    Abilities: {
      Str: 3,
      Dex: 18,
      Con: 10,
      Int: 14,
      Wis: 13,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 8,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        Usage: "",
      },
      {
        Name: "Shortbow",
        Content:
          "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake.",
        Usage: "",
      },
      {
        Name: "Heart Sight",
        Content:
          "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw.",
        Usage: "",
      },
      {
        Name: "Invisibility",
        Content:
          "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "neutral good",
  },
  {
    Name: "Troll",
    Type: "giant",
    HP: 84,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 18,
      Dex: 13,
      Con: 20,
      Int: 7,
      Wis: 9,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The troll has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Regeneration",
        Content:
          "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate.",
        Usage: "",
      },
      {
        Name: "Variant: Loathsome Limbs",
        Content:
          "Whenever the troll takes at least 15 slashing damage at one time, roll a d20 to determine what else happens to it: n1-10: Nothing else happens.n11-14: One leg is severed from the troll if it has any legs left.n15- 18: One arm is severed from the troll if it has any arms left.n19-20: The troll is decapitated, but the troll dies only if it can't regenerate. If it dies, so does the severed head.nIf the troll finishes a short or long rest without reattaching a severed limb or head, the part regrows. At that point, the severed part dies. Until then, a severed part acts on the troll's initiative and has its own action and movement. A severed part has AC 13, 10 hit points, and the troll's Regeneration trait.nA severed leg is unable to attack and has a speed of 5 feet.nA severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll unless the troll can see the arm and its target. Each time the troll loses an arm, it loses a claw attack.nIf its head is severed, the troll loses its bite attack and its body is blinded unless the head can see it. The severed head has a speed of 0 feet and the troll's Keen Smell trait. It can make a bite attack but only against a target in its space.nThe troll's speed is halved if it's missing a leg. If it loses both legs, it falls prone. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0, and it can't benefit from bonuses to speed.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The troll makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "White Dragon Wyrmling",
    Type: "dragon",
    HP: 32,
    AC: 16,
    Speed: ["30 ft.", "burrow 15 ft.", "fly 60 ft.", "swim 30 ft."],
    Abilities: {
      Str: 14,
      Dex: 10,
      Con: 14,
      Int: 5,
      Wis: 10,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 2,
      },
      {
        Name: "Con",
        Modifier: 4,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 2,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "2",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage.",
        Usage: "",
      },
      {
        Name: "Cold Breath (Recharge 5-6)",
        Content:
          "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Pony",
    Type: "beast",
    HP: 11,
    AC: 10,
    Speed: ["40 ft."],
    Abilities: {
      Str: 15,
      Dex: 10,
      Con: 13,
      Int: 2,
      Wis: 11,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/8",
    Traits: [],
    Actions: [
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Flying Snake",
    Type: "beast",
    HP: 5,
    AC: 14,
    Speed: ["30 ft.", "fly 60 ft.", "swim 30 ft."],
    Abilities: {
      Str: 4,
      Dex: 18,
      Con: 11,
      Int: 2,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Flyby",
        Content:
          "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Githzerai Zerth",
    Type: "humanoid",
    HP: 84,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 13,
      Dex: 18,
      Con: 15,
      Int: 16,
      Wis: 17,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Str",
        Modifier: 4,
      },
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Int",
        Modifier: 6,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Arcana",
        Modifier: 6,
      },
      {
        Name: "Insight",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 6,
      },
    ],
    Senses: [],
    Challenge: "6",
    Traits: [
      {
        Name: "Innate Spellcasting (Psionics)",
        Content:
          "The githzerai's innate spellcasting ability is Wisdom. It can innately cast the following spells, requiring no components: nnAt will: mage hand (the hand is invisible)n3/day each: feather fall, jump, see invisibility, shield",
        Usage: "",
      },
      {
        Name: "Psychic Defense",
        Content:
          "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The githzerai makes two unarmed strikes.",
        Usage: "",
      },
      {
        Name: "Unarmed Strike",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 13 (3d8) psychic damage. This is a magic weapon attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful neutral",
  },
  {
    Name: "Gray Ooze (Psychic)",
    Type: "ooze",
    HP: 22,
    AC: 8,
    Speed: ["10 ft.", "climb 10 ft."],
    Abilities: {
      Str: 12,
      Dex: 6,
      Con: 16,
      Int: 6,
      Wis: 6,
      Cha: 2,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["acid", "cold", "fire"],
    DamageImmunities: [],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "prone",
    ],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Amorphous",
        Content:
          "The ooze can move through a space as narrow as 1 inch wide without squeezing.",
        Usage: "",
      },
      {
        Name: "Corrode Metal",
        Content:
          "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.nThe ooze can eat through 2-inch-thick, nonmagical metal in 1 round.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Pseudopod",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
        Usage: "",
      },
      {
        Name: "Psychic Crush (Recharge 5-6)",
        Content:
          "The ooze targets one creature that it can sense within 60 feet of it. The target must make a DC 10 Intelligence saving throw, taking 10 (3d6) psychic damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Duodrone",
    Type: "construct",
    HP: 11,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 11,
      Dex: 13,
      Con: 12,
      Int: 6,
      Wis: 10,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Axiomatic Mind",
        Content:
          "The duodrone can't be compelled to act in a manner contrary to its nature or its instructions.",
        Usage: "",
      },
      {
        Name: "Disintegration",
        Content:
          "If the duodrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The duodrone makes two fist attacks or two javelin attacks.",
        Usage: "",
      },
      {
        Name: "Fist",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "construct",
  },
  {
    Name: "Griffon",
    Type: "monstrosity",
    HP: 59,
    AC: 12,
    Speed: ["30 ft.", "fly 80 ft."],
    Abilities: {
      Str: 18,
      Dex: 15,
      Con: 16,
      Int: 2,
      Wis: 13,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Keen Sight",
        Content:
          "The griffon has advantage on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The griffon makes two attacks: one with its beak and one with its claws.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Quipper",
    Type: "beast",
    HP: 1,
    AC: 13,
    Speed: ["swim 40 ft."],
    Abilities: {
      Str: 2,
      Dex: 16,
      Con: 9,
      Int: 1,
      Wis: 7,
      Cha: 2,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "0",
    Traits: [
      {
        Name: "Blood Frenzy",
        Content:
          "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
        Usage: "",
      },
      {
        Name: "Water Breathing",
        Content: "The quipper can breathe only underwater.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "T",
    Alignment: "unaligned",
  },
  {
    Name: "Hobgoblin",
    Type: "humanoid",
    HP: 11,
    AC: 18,
    Speed: ["30 ft."],
    Abilities: {
      Str: 13,
      Dex: 12,
      Con: 12,
      Int: 10,
      Wis: 10,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Martial Advantage",
        Content:
          "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Giant Frog",
    Type: "beast",
    HP: 18,
    AC: 11,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 12,
      Dex: 13,
      Con: 11,
      Int: 2,
      Wis: 10,
      Cha: 3,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 30 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The frog can breathe air and water",
        Usage: "",
      },
      {
        Name: "Standing Leap",
        Content:
          "The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target.",
        Usage: "",
      },
      {
        Name: "Swallow",
        Content:
          "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Hunter Shark",
    Type: "beast",
    HP: 45,
    AC: 12,
    Speed: ["swim 40 ft."],
    Abilities: {
      Str: 18,
      Dex: 13,
      Con: 15,
      Int: 1,
      Wis: 10,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 2,
      },
    ],
    Senses: ["darkvision 30 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Blood Frenzy",
        Content:
          "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
        Usage: "",
      },
      {
        Name: "Water Breathing",
        Content: "The shark can breathe only underwater.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Chuul",
    Type: "aberration",
    HP: 93,
    AC: 16,
    Speed: ["30 ft.", "swim 30 ft."],
    Abilities: {
      Str: 19,
      Dex: 10,
      Con: 16,
      Int: 5,
      Wis: 11,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "4",
    Traits: [
      {
        Name: "Amphibious",
        Content: "The chuul can breathe air and water.",
        Usage: "",
      },
      {
        Name: "Sense Magic",
        Content:
          "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.",
        Usage: "",
      },
      {
        Name: "Pincer",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.",
        Usage: "",
      },
      {
        Name: "Tentacles",
        Content:
          "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Swarm of Wasps",
    Type: "swarm",
    HP: 22,
    AC: 12,
    Speed: ["5 ft.", "fly 30 ft."],
    Abilities: {
      Str: 3,
      Dex: 13,
      Con: 10,
      Int: 1,
      Wis: 7,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: ["bludgeoning", "piercing", "slashing"],
    DamageImmunities: [],
    ConditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 10 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Swarm",
        Content:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bites",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "unaligned",
  },
  {
    Name: "Minotaur",
    Type: "monstrosity",
    HP: 76,
    AC: 14,
    Speed: ["40 ft."],
    Abilities: {
      Str: 18,
      Dex: 11,
      Con: 16,
      Int: 6,
      Wis: 16,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the minotaur moves at least 10 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 ft. away and knocked prone.",
        Usage: "",
      },
      {
        Name: "Labyrinthine Recall",
        Content: "The minotaur can perfectly recall any path it has traveled.",
        Usage: "",
      },
      {
        Name: "Reckless",
        Content:
          "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Greataxe",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Gore",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Bandit Captain",
    Type: "humanoid",
    HP: 65,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 15,
      Dex: 16,
      Con: 14,
      Int: 14,
      Wis: 11,
      Cha: 14,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Str",
        Modifier: 4,
      },
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
    ],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 4,
      },
      {
        Name: "Deception",
        Modifier: 4,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.",
        Usage: "",
      },
      {
        Name: "Scimitar",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Dagger",
        Content:
          "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Parry",
        Content:
          "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any non-lawful alignment",
  },
  {
    Name: "Young Red Dragon",
    Type: "dragon",
    HP: 178,
    AC: 18,
    Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 23,
      Dex: 10,
      Con: 21,
      Int: 14,
      Wis: 11,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 4,
      },
      {
        Name: "Con",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 8,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["blindsight 30 ft.", "darkvision 120 ft."],
    Challenge: "10",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Fire Breath (Recharge 5-6)",
        Content:
          "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Phase Spider",
    Type: "monstrosity",
    HP: 32,
    AC: 13,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 15,
      Dex: 15,
      Con: 12,
      Int: 6,
      Wis: 10,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Ethereal Jaunt",
        Content:
          "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Web Walker",
        Content: "The spider ignores movement restrictions caused by webbing.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Hobgoblin Captain",
    Type: "humanoid",
    HP: 39,
    AC: 17,
    Speed: ["30 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 14,
      Int: 12,
      Wis: 10,
      Cha: 13,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Martial Advantage",
        Content:
          "Once per turn, the hobgoblin can deal an extra 10 (3d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content: "The hobgoblin makes two greatsword attacks.",
        Usage: "",
      },
      {
        Name: "Greatsword",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Leadership (Recharges after a Short or Long Rest)",
        Content:
          "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Ancient Brass Dragon",
    Type: "dragon",
    HP: 297,
    AC: 20,
    Speed: ["40 ft.", "burrow 40 ft.", "fly 80 ft."],
    Abilities: {
      Str: 27,
      Dex: 10,
      Con: 25,
      Int: 16,
      Wis: 15,
      Cha: 19,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 6,
      },
      {
        Name: "Con",
        Modifier: 13,
      },
      {
        Name: "Wis",
        Modifier: 8,
      },
      {
        Name: "Cha",
        Modifier: 10,
      },
    ],
    Skills: [
      {
        Name: "History",
        Modifier: 9,
      },
      {
        Name: "Perception",
        Modifier: 14,
      },
      {
        Name: "Persuasion",
        Modifier: 10,
      },
      {
        Name: "Stealth",
        Modifier: 6,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "20",
    Traits: [
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Breath Weapons (Recharge 5-6)",
        Content:
          "The dragon uses one of the following breath weapons:nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
        Usage: "",
      },
      {
        Name: "Change Shape",
        Content:
          "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Gargantuan",
    Alignment: "chaotic good",
  },
  {
    Name: "Vulture",
    Type: "beast",
    HP: 5,
    AC: 10,
    Speed: ["10 ft.", "fly 50 ft."],
    Abilities: {
      Str: 7,
      Dex: 10,
      Con: 13,
      Int: 2,
      Wis: 12,
      Cha: 4,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "0",
    Traits: [
      {
        Name: "Keen Sight and Smell",
        Content:
          "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Hippogriff",
    Type: "monstrosity",
    HP: 19,
    AC: 11,
    Speed: ["40 ft", "fly 60 ft."],
    Abilities: {
      Str: 17,
      Dex: 13,
      Con: 13,
      Int: 2,
      Wis: 12,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "1",
    Traits: [
      {
        Name: "Keen Sight",
        Content:
          "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The hippogriff makes two attacks: one with its beak and one with its claws.",
        Usage: "",
      },
      {
        Name: "Beak",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Hell Hound",
    Type: "fiend",
    HP: 45,
    AC: 15,
    Speed: ["50 ft."],
    Abilities: {
      Str: 17,
      Dex: 12,
      Con: 14,
      Int: 6,
      Wis: 13,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
      {
        Name: "Pack Tactics",
        Content:
          "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Fire Breath (Recharge 5-6)",
        Content:
          "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Mud Mephit",
    Type: "elemental",
    HP: 27,
    AC: 11,
    Speed: ["20 ft.", "fly 20 ft.", "swim 20 ft."],
    Abilities: {
      Str: 8,
      Dex: 12,
      Con: 12,
      Int: 9,
      Wis: 11,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Death Burst",
        Content:
          "When the mephit dies, it explodes in a burst of sticky mud. Each Medium or smaller creature within 5 ft. of it must succeed on a DC 11 Dexterity saving throw or be restrained until the end of the creature's next turn.",
        Usage: "",
      },
      {
        Name: "False Appearance",
        Content:
          "While the mephit remains motionless, it is indistinguishable from an ordinary mound of mud.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Fists",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Mud Breath (Recharge 6)",
        Content:
          "The mephit belches viscid mud onto one creature within 5 ft. of it. If the target is Medium or smaller, it must succeed on a DC 11 Dexterity saving throw or be restrained for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Mephits (1/Day)",
        Content:
          "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "S",
    Alignment: "neutral evil",
  },
  {
    Name: "Mule",
    Type: "beast",
    HP: 11,
    AC: 10,
    Speed: ["40 ft."],
    Abilities: {
      Str: 14,
      Dex: 10,
      Con: 13,
      Int: 2,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Beast of Burden",
        Content:
          "The mule is considered to be a Large animal for the purpose of determining its carrying capacity.",
        Usage: "",
      },
      {
        Name: "Sure-Footed",
        Content:
          "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "unaligned",
  },
  {
    Name: "Sahuagin Baron",
    Type: "humanoid",
    HP: 76,
    AC: 16,
    Speed: ["30 ft.", "swim 50 ft."],
    Abilities: {
      Str: 19,
      Dex: 15,
      Con: 16,
      Int: 14,
      Wis: 13,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 6,
      },
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 7,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Blood Frenzy",
        Content:
          "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
        Usage: "",
      },
      {
        Name: "Limited Amphibiousness",
        Content:
          "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.",
        Usage: "",
      },
      {
        Name: "Shark Telepathy",
        Content:
          "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The sahuagin makes three attacks: one with his bite and two with his claws or trident.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Trident",
        Content:
          "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Black Pudding",
    Type: "ooze",
    HP: 85,
    AC: 7,
    Speed: ["20 ft.", "climb 20 ft."],
    Abilities: {
      Str: 16,
      Dex: 5,
      Con: 16,
      Int: 1,
      Wis: 6,
      Cha: 1,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["acid", "cold", "lightning", "slashing"],
    ConditionImmunities: [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "prone",
    ],
    Saves: [],
    Skills: [],
    Senses: ["blindsight 60 ft. (blind beyond this radius)"],
    Challenge: "4",
    Traits: [
      {
        Name: "Amorphous",
        Content:
          "The pudding can move through a space as narrow as 1 inch wide without squeezing.",
        Usage: "",
      },
      {
        Name: "Corrosive Form",
        Content:
          "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Pseudopod",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Split",
        Content:
          "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Ice Devil Spear",
    Type: "devil",
    HP: 180,
    AC: 18,
    Speed: ["40 ft."],
    Abilities: {
      Str: 21,
      Dex: 14,
      Con: 18,
      Int: 18,
      Wis: 15,
      Cha: 18,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons that aren't silvered",
    ],
    DamageImmunities: ["fire", "poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Dex",
        Modifier: 7,
      },
      {
        Name: "Con",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 9,
      },
    ],
    Skills: [],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "14",
    Traits: [
      {
        Name: "Devil's Sight",
        Content: "Magical darkness doesn't impede the devil's darkvision.",
        Usage: "",
      },
      {
        Name: "Magic Resistance",
        Content:
          "The devil has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The devil makes two attacks: one with its spear and one with its tail.",
        Usage: "",
      },
      {
        Name: "Ice Spear",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) piercing damage plus 10 (3d6) cold damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw, or for 1 minute, its speed is reduced by 10 feet; it can take either an action or a bonus action on each of its turns, not both; and it can't take reactions. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage.",
        Usage: "",
      },
      {
        Name: "Claws",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage.",
        Usage: "",
      },
      {
        Name: "Wall of Ice",
        Content:
          "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.nWhen the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.nThe wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Giant Crocodile",
    Type: "beast",
    HP: 85,
    AC: 14,
    Speed: ["30 ft.", "swim 50 ft."],
    Abilities: {
      Str: 21,
      Dex: 9,
      Con: 17,
      Int: 2,
      Wis: 10,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "5",
    Traits: [
      {
        Name: "Hold Breath",
        Content: "The crocodile can hold its breath for 30 minutes.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The crocodile makes two attacks: one with its bite and one with its tail.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "H",
    Alignment: "unaligned",
  },
  {
    Name: "Centaur",
    Type: "monstrosity",
    HP: 45,
    AC: 12,
    Speed: ["50 ft."],
    Abilities: {
      Str: 18,
      Dex: 14,
      Con: 14,
      Int: 9,
      Wis: 13,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Athletics",
        Modifier: 6,
      },
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Survival",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Charge",
        Content:
          "If the centaur moves at least 30 ft. straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.",
        Usage: "",
      },
      {
        Name: "Pike",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Hooves",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral good",
  },
  {
    Name: "Otyugh",
    Type: "aberration",
    HP: 114,
    AC: 14,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 11,
      Con: 19,
      Int: 6,
      Wis: 13,
      Cha: 6,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Con",
        Modifier: 7,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Limited Telepathy",
        Content:
          "The otyugh can magically transmit simple messages and images to any creature within 120 ft. of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The otyugh makes three attacks: one with its bite and two with its tentacles.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured.",
        Usage: "",
      },
      {
        Name: "Tentacle",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target.",
        Usage: "",
      },
      {
        Name: "Tentacle Slam",
        Content:
          "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "neutral",
  },
  {
    Name: "Blue Dragon Wyrmling",
    Type: "dragon",
    HP: 52,
    AC: 17,
    Speed: ["30 ft.", "burrow 15 ft.", "fly 60 ft."],
    Abilities: {
      Str: 17,
      Dex: 10,
      Con: 15,
      Int: 12,
      Wis: 11,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["lightning"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 2,
      },
      {
        Name: "Con",
        Modifier: 4,
      },
      {
        Name: "Wis",
        Modifier: 2,
      },
      {
        Name: "Cha",
        Modifier: 4,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 4,
      },
      {
        Name: "Stealth",
        Modifier: 2,
      },
    ],
    Senses: ["blindsight 10 ft.", "darkvision 60 ft."],
    Challenge: "3",
    Traits: [],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage.",
        Usage: "",
      },
      {
        Name: "Lightning Breath (Recharge 5-6)",
        Content:
          "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Skeleton",
    Type: "undead",
    HP: 13,
    AC: 13,
    Speed: ["30 ft."],
    Abilities: {
      Str: 10,
      Dex: 14,
      Con: 15,
      Int: 6,
      Wis: 8,
      Cha: 5,
    },
    DamageVulnerabilities: ["bludgeoning"],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["poisoned"],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/4",
    Traits: [],
    Actions: [
      {
        Name: "Shortsword",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Shortbow",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "lawful evil",
  },
  {
    Name: "Carrion Crawler",
    Type: "monstrosity",
    HP: 51,
    AC: 13,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 14,
      Dex: 13,
      Con: 16,
      Int: 1,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Keen Smell",
        Content:
          "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell.",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The carrion crawler makes two attacks: one with its tentacles and one with its bite.",
        Usage: "",
      },
      {
        Name: "Tentacles",
        Content:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4 + 2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Marilith",
    Type: "demon",
    HP: 189,
    AC: 18,
    Speed: ["40 ft."],
    Abilities: {
      Str: 18,
      Dex: 20,
      Con: 20,
      Int: 18,
      Wis: 16,
      Cha: 20,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Str",
        Modifier: 9,
      },
      {
        Name: "Con",
        Modifier: 10,
      },
      {
        Name: "Wis",
        Modifier: 8,
      },
      {
        Name: "Cha",
        Modifier: 10,
      },
    ],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "16",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The marilith has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
      {
        Name: "Magic Weapons",
        Content: "The marilith's weapon attacks are magical.",
        Usage: "",
      },
      {
        Name: "Reactive",
        Content: "The marilith can take one reaction on every turn in combat.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The marilith can make seven attacks: six with its longswords and one with its tail.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets.",
        Usage: "",
      },
      {
        Name: "Teleport",
        Content:
          "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Demon (1/Day)",
        Content:
          "The demon chooses what to summon and attempts a magical summoning.nA marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Parry",
        Content:
          "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Tribal Warrior",
    Type: "humanoid",
    HP: 11,
    AC: 12,
    Speed: ["30 ft."],
    Abilities: {
      Str: 13,
      Dex: 11,
      Con: 12,
      Int: 8,
      Wis: 11,
      Cha: 8,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: [],
    Challenge: "1/8",
    Traits: [
      {
        Name: "Pack Tactics",
        Content:
          "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Spear",
        Content:
          "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "any alignment",
  },
  {
    Name: "Allosaurus",
    Type: "dinosaur",
    HP: 60,
    AC: 15,
    Speed: ["60 ft."],
    Abilities: {
      Str: 19,
      Dex: 13,
      Con: 17,
      Int: 2,
      Wis: 12,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "2",
    Traits: [
      {
        Name: "Pounce",
        Content:
          "If the allosaurus moves at least 30 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Gnoll Pack Lord",
    Type: "humanoid",
    HP: 49,
    AC: 15,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 14,
      Con: 13,
      Int: 8,
      Wis: 11,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Rampage",
        Content:
          "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The gnoll makes two attacks, either with its glaive or its longbow, and uses its Incite Rampage if it can.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Glaive",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Incite Rampage (Recharge 5-6)",
        Content:
          "One creature the gnoll can see within 30 feet of it can use its reaction to make a melee attack if it can hear the gnoll and has the Rampage trait.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Drider Spellcaster",
    Type: "monstrosity",
    HP: 123,
    AC: 19,
    Speed: ["30 ft.", "climb 30 ft."],
    Abilities: {
      Str: 16,
      Dex: 16,
      Con: 18,
      Int: 13,
      Wis: 16,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 5,
      },
      {
        Name: "Stealth",
        Modifier: 9,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "Fey Ancestry",
        Content:
          "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components: nAt will: dancing lightsn1/day each: darkness, faerie fire",
        Usage: "",
      },
      {
        Name: "Spider Climb",
        Content:
          "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Web Walker",
        Content: "The drider ignores movement restrictions caused by webbing.",
        Usage: "",
      },
      {
        Name: "Spellcasting",
        Content:
          "The drider is a 7th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The drider has the following spells prepared from the cleric spell list: nn• Cantrips (at will): poison spray, thaumaturgyn• 1st level (4 slots): bane, detect magic, sanctuaryn• 2nd level (3 slots): hold person, silencen• 3rd level (3 slots): clairvoyance, dispel magicn• 4th level (2 slots): divination,freedom of movement",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
        Usage: "",
      },
      {
        Name: "Longbow",
        Content:
          "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Bulette",
    Type: "monstrosity",
    HP: 94,
    AC: 17,
    Speed: ["40 ft.", "burrow 40 ft."],
    Abilities: {
      Str: 19,
      Dex: 11,
      Con: 21,
      Int: 2,
      Wis: 10,
      Cha: 5,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 6,
      },
    ],
    Senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
    Challenge: "5",
    Traits: [
      {
        Name: "Standing Leap",
        Content:
          "The bulette's long jump is up to 30 ft. and its high jump is up to 15 ft., with or without a running start.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage.",
        Usage: "",
      },
      {
        Name: "Deadly Leap",
        Content:
          "If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its ft. in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "unaligned",
  },
  {
    Name: "Mummy",
    Type: "undead",
    HP: 58,
    AC: 11,
    Speed: ["20 ft."],
    Abilities: {
      Str: 16,
      Dex: 8,
      Con: 15,
      Int: 6,
      Wis: 10,
      Cha: 12,
    },
    DamageVulnerabilities: ["fire"],
    DamageResistances: [],
    DamageImmunities: [
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    ConditionImmunities: ["necrotic", "poisoned"],
    Saves: [
      {
        Name: "Wis",
        Modifier: 2,
      },
    ],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "3",
    Traits: [],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The mummy can use its Dreadful Glare and makes one attack with its rotting fist.",
        Usage: "",
      },
      {
        Name: "Rotting Fist",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
        Usage: "",
      },
      {
        Name: "Dreadful Glare",
        Content:
          "The mummy targets one creature it can see within 60 ft. of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "lawful evil",
  },
  {
    Name: "Beholder",
    Type: "aberration",
    HP: 189,
    AC: 18,
    Speed: ["0 ft.", "fly 20 ft. (hover)"],
    Abilities: {
      Str: 10,
      Dex: 14,
      Con: 18,
      Int: 17,
      Wis: 15,
      Cha: 17,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: ["prone"],
    Saves: [
      {
        Name: "Int",
        Modifier: 8,
      },
      {
        Name: "Wis",
        Modifier: 7,
      },
      {
        Name: "Cha",
        Modifier: 8,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 12,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "13",
    Traits: [
      {
        Name: "Antimagic Cone",
        Content:
          "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage.",
        Usage: "",
      },
      {
        Name: "Eye Rays",
        Content:
          "The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 ft. of it:n1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.n2. Paralyzing Ray. The targeted creature must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.n3. Fear Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.n4. Slowing Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.n5. Enervation Ray. The targeted creature must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.n6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 16 Strength saving throw or the beholder moves it up to 30 ft. in any direction. It is restrained by the ray's telekinetic grip until the start of the beholder's next turn or until the beholder is incapacitated.nIf the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 ft. in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.n7. Sleep Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.n8. Petrification Ray. The targeted creature must make a DC 16 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.n9. Disintegration Ray. If the target is a creature, it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.nIf the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.n10. Death Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Legendary Actions",
        Content:
          "The beholder can take 3 legendary actions, using the Eye Ray option below. It can take only one legendary action at a time and only at the end of another creature’s turn. The beholder regains spent legendary actions at the start of its turn.",
        Usage: "",
      },
      {
        Name: "Eye Ray",
        Content: "The beholder uses one random eye ray.",
        Usage: "",
      },
    ],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Poltergeist",
    Type: "undead",
    HP: 22,
    AC: 12,
    Speed: ["0 ft.", "fly 50 ft. (hover)"],
    Abilities: {
      Str: 1,
      Dex: 14,
      Con: 11,
      Int: 10,
      Wis: 10,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["necrotic", "poison"],
    ConditionImmunities: [
      "charmed",
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious",
    ],
    Saves: [],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "2",
    Traits: [
      {
        Name: "Incorporeal Movement",
        Content:
          "The poltergeist can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
        Usage: "",
      },
      {
        Name: "Sunlight Sensitivity",
        Content:
          "While in sunlight, the poltergeist has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
        Usage: "",
      },
      {
        Name: "Invisibility",
        Content: "The poltergeist is invisible.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Forceful Slam",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft. one creature. Hit: 10 (3d6) force damage.",
        Usage: "",
      },
      {
        Name: "Telekinetic Thrust",
        Content:
          "The poltergeist targets a creature or unattended object within 30 feet of it. A creature must be Medium or smaller to be affected by this magic, and an object can weigh up to 150 pounds.nIf the target is a creature, the poltergeist makes a Charisma check contested by the target's Strength check. If the poltergeist wins the contest, the poltergeist hurls the target up to 30 feet in any direction, including upward. If the target then comes into contact with a hard surface or heavy object, the target takes 1d6 damage per 10 feet moved.nIf the target is an object that isn't being worn or carried, the poltergeist hurls it up to 30 feet in any direction. The poltergeist can use the object as a ranged weapon, attacking one creature along the object's path (+4 to hit) and dealing 5 (2d4) bludgeoning damage on a hit.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Nalfeshnee",
    Type: "demon",
    HP: 184,
    AC: 18,
    Speed: ["20 ft.", "fly 30 ft."],
    Abilities: {
      Str: 21,
      Dex: 10,
      Con: 22,
      Int: 19,
      Wis: 12,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [
      "cold",
      "fire",
      "lightning",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["poison"],
    ConditionImmunities: ["poisoned"],
    Saves: [
      {
        Name: "Con",
        Modifier: 11,
      },
      {
        Name: "Int",
        Modifier: 9,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [],
    Senses: ["truesight 120 ft."],
    Challenge: "13",
    Traits: [
      {
        Name: "Magic Resistance",
        Content:
          "The nalfeshnee has advantage on saving throws against spells and other magical effects.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The nalfeshnee uses Horror Nimbus if it can.  It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) piercing damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) slashing damage.",
        Usage: "",
      },
      {
        Name: "Horror Nimbus (Recharge 5-6)",
        Content:
          "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Teleport",
        Content:
          "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        Usage: "",
      },
      {
        Name: "Variant: Summon Demon (1/Day)",
        Content:
          "The demon chooses what to summon and attempts a magical summoning.nA nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "chaotic evil",
  },
  {
    Name: "Hobgoblin Warlord",
    Type: "humanoid",
    HP: 97,
    AC: 20,
    Speed: ["30 ft."],
    Abilities: {
      Str: 16,
      Dex: 14,
      Con: 16,
      Int: 14,
      Wis: 11,
      Cha: 15,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Int",
        Modifier: 5,
      },
      {
        Name: "Wis",
        Modifier: 3,
      },
      {
        Name: "Cha",
        Modifier: 5,
      },
    ],
    Skills: [],
    Senses: ["darkvision 60 ft."],
    Challenge: "6",
    Traits: [
      {
        Name: "Martial Advantage",
        Content:
          "Once per turn, the hobgoblin can deal an extra 14 (4d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The hobgoblin makes three melee attacks. Alternatively, it can make two ranged attacks with its javelins.",
        Usage: "",
      },
      {
        Name: "Longsword",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
        Usage: "",
      },
      {
        Name: "Shield Bash",
        Content:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) bludgeoning damage. If the target is Large or smaller, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
        Usage: "",
      },
      {
        Name: "Javelin",
        Content:
          "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        Usage: "",
      },
      {
        Name: "Leadership (Recharges after a Short or Long Rest)",
        Content:
          "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated.",
        Usage: "",
      },
    ],
    Reactions: [
      {
        Name: "Parry",
        Content:
          "The hobgoblin adds 3 to its AC against one melee attack that would hit it. To do so, the hobgoblin must see the attacker and be wielding a melee weapon.",
        Usage: "",
      },
    ],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "lawful evil",
  },
  {
    Name: "Efreeti",
    Type: "elemental",
    HP: 200,
    AC: 17,
    Speed: ["40 ft.", "fly 60 ft."],
    Abilities: {
      Str: 22,
      Dex: 12,
      Con: 24,
      Int: 16,
      Wis: 15,
      Cha: 16,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["fire"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Int",
        Modifier: 7,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 7,
      },
    ],
    Skills: [],
    Senses: ["darkvision 120 ft."],
    Challenge: "11",
    Traits: [
      {
        Name: "Elemental Demise",
        Content:
          "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the djinni was wearing or carrying.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The efreeti's innate spell casting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components: nnAt will: detect magicn3/day: enlarge/reduce, tonguesn1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire",
        Usage: "",
      },
      {
        Name: "Variant: Genie Powers",
        Content:
          "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.nnDisguises.nSome genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.nWishes.nThe genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.nTo be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The efreeti makes two scimitar attacks or uses its Hurl Flame twice.",
        Usage: "",
      },
      {
        Name: "Scimitar",
        Content:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage.",
        Usage: "",
      },
      {
        Name: "Hurl Flame",
        Content:
          "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6) fire damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Large",
    Alignment: "lawful evil",
  },
  {
    Name: "Blink Dog",
    Type: "fey",
    HP: 22,
    AC: 13,
    Speed: ["40 ft."],
    Abilities: {
      Str: 12,
      Dex: 17,
      Con: 12,
      Int: 10,
      Wis: 13,
      Cha: 11,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: [],
    Challenge: "1/4",
    Traits: [
      {
        Name: "Keen Hearing and Smell",
        Content:
          "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
        Usage: "",
      },
      {
        Name: "Teleport (Recharge 4-6)",
        Content:
          "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "M",
    Alignment: "lawful good",
  },
  {
    Name: "Giant Hyena",
    Type: "beast",
    HP: 45,
    AC: 12,
    Speed: ["50 ft."],
    Abilities: {
      Str: 16,
      Dex: 14,
      Con: 14,
      Int: 2,
      Wis: 12,
      Cha: 7,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Perception",
        Modifier: 3,
      },
    ],
    Senses: [],
    Challenge: "1",
    Traits: [
      {
        Name: "Rampage",
        Content:
          "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "L",
    Alignment: "unaligned",
  },
  {
    Name: "Deep Gnome (Svirfneblin)",
    Type: "humanoid",
    HP: 16,
    AC: 15,
    Speed: ["20 ft."],
    Abilities: {
      Str: 15,
      Dex: 14,
      Con: 14,
      Int: 12,
      Wis: 10,
      Cha: 9,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: [],
    ConditionImmunities: [],
    Saves: [],
    Skills: [
      {
        Name: "Investigation",
        Modifier: 3,
      },
      {
        Name: "Perception",
        Modifier: 2,
      },
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 120 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Stone Camouflage",
        Content:
          "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
        Usage: "",
      },
      {
        Name: "Gnome Cunning",
        Content:
          "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.",
        Usage: "",
      },
      {
        Name: "Innate Spellcasting",
        Content:
          "The gnome's innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components: nAt will: nondetection (self only)n1/day each: blindness/deafness, blur, disguise self",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "War Pick",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        Usage: "",
      },
      {
        Name: "Poisoned Dart",
        Content:
          "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Small",
    Alignment: "neutral good",
  },
  {
    Name: "Shadow",
    Type: "undead",
    HP: 16,
    AC: 12,
    Speed: ["40 ft."],
    Abilities: {
      Str: 6,
      Dex: 14,
      Con: 13,
      Int: 6,
      Wis: 10,
      Cha: 8,
    },
    DamageVulnerabilities: ["radiant"],
    DamageResistances: [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning",
      "piercing",
      "and slashing from nonmagical weapons",
    ],
    DamageImmunities: ["necrotic", "poison"],
    ConditionImmunities: [
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
    ],
    Saves: [],
    Skills: [
      {
        Name: "Stealth",
        Modifier: 4,
      },
    ],
    Senses: ["darkvision 60 ft."],
    Challenge: "1/2",
    Traits: [
      {
        Name: "Amorphous",
        Content:
          "The shadow can move through a space as narrow as 1 inch wide without squeezing.",
        Usage: "",
      },
      {
        Name: "Shadow Stealth",
        Content:
          "While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6.",
        Usage: "",
      },
      {
        Name: "Sunlight Weakness",
        Content:
          "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Strength Drain",
        Content:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [],
    Size: "Medium",
    Alignment: "chaotic evil",
  },
  {
    Name: "Adult White Dragon",
    Type: "dragon",
    HP: 200,
    AC: 18,
    Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft.", "swim 40 ft."],
    Abilities: {
      Str: 22,
      Dex: 10,
      Con: 22,
      Int: 8,
      Wis: 12,
      Cha: 12,
    },
    DamageVulnerabilities: [],
    DamageResistances: [],
    DamageImmunities: ["cold"],
    ConditionImmunities: [],
    Saves: [
      {
        Name: "Dex",
        Modifier: 5,
      },
      {
        Name: "Con",
        Modifier: 11,
      },
      {
        Name: "Wis",
        Modifier: 6,
      },
      {
        Name: "Cha",
        Modifier: 6,
      },
    ],
    Skills: [
      {
        Name: "Perception",
        Modifier: 11,
      },
      {
        Name: "Stealth",
        Modifier: 5,
      },
    ],
    Senses: ["blindsight 60 ft.", "darkvision 120 ft."],
    Challenge: "13",
    Traits: [
      {
        Name: "Ice Walk",
        Content:
          "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
        Usage: "",
      },
      {
        Name: "Legendary Resistance (3/Day)",
        Content:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
        Usage: "",
      },
    ],
    Actions: [
      {
        Name: "Multiattack",
        Content:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        Usage: "",
      },
      {
        Name: "Bite",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage.",
        Usage: "",
      },
      {
        Name: "Claw",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        Usage: "",
      },
      {
        Name: "Tail",
        Content:
          "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
        Usage: "",
      },
      {
        Name: "Frightful Presence",
        Content:
          "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        Usage: "",
      },
      {
        Name: "Cold Breath (Recharge 5-6)",
        Content:
          "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
        Usage: "",
      },
    ],
    Reactions: [],
    LegendaryActions: [
      {
        Name: "Detect",
        Content: "The dragon makes a Wisdom (Perception) check.",
        Usage: "",
      },
      {
        Name: "Tail Attack",
        Content: "The dragon makes a tail attack.",
        Usage: "",
      },
      {
        Name: "Wing Attack (Costs 2 Actions)",
        Content:
          "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        Usage: "",
      },
    ],
    Size: "Huge",
    Alignment: "chaotic evil",
  },
];

function calcXP(CR) {
    if (CR == String("0")) {
        return 10
    }
    else if (CR == String("1/8")) {
        return 25
    }
    else if (CR == String("1/4")) {
        return 50
    }
    else if (CR == String("1/2")) {
        return 100
    }
    else if (CR == String("1")) {
        return 200
    }
    else if (CR == String("2")) {
        return 450
    }
    else if (CR == String("3")) {
        return 700
    }
    else if (CR == String("4")) {
        return 1100
    }
    else if (CR == String("5")) {
        return 1800
    }
    else if (CR == String("6")) {
        return 2300
    }
    else if (CR == String("7")) {
        return 2900
    }
    else if (CR == String("8")) {
        return 3900
    }
    else if (CR == String("9")) {
        return 5000
    }
    else if (CR == String("10")) {
        return 5900
    }
    else if (CR == String("11")) {
        return 7200
    }
    else if (CR == String("12")) {
        return 8400
    }
    else if (CR == String("13")) {
        return 10000
    }
    else if (CR == String("14")) {
        return 11500
    }
    else if (CR == String("15")) {
        return 13000
    }
    else if (CR == String("16")) {
        return 15000
    }
    else if (CR == String("17")) {
        return 18000
    }
    else if (CR == String("18")) {
        return 20000
    }
    else if (CR == String("19")) {
        return 22000
    }
    else if (CR == String("20")) {
        return 25000
    }
    else if (CR == String("21")) {
        return 33000
    }
    else if (CR == String("22")) {
        return 41000
    }
    else if (CR == String("23")) {
        return 50000
    }
    else if (CR == String("24")) {
        return 62000
    }
    else if (CR == String("25")) {
        return 75000
    }
    else if (CR == String("26")) {
        return 90000
    }
    else if (CR == String("27")) {
        return 105000
    }
    else if (CR == String("28")) {
        return 120000
    }
    else if (CR == String("29")) {
        return 135000
    }
    else if (CR == String("30")) {
        return 155000
    }

    
};

let sortVal

function sort(col) {
    if (col == "Challenge" || col == "XP") {
        console.log("XP")
        monsters.sort((a, b) => a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", "")));
        if (sortVal == "XPDown") {            
            monsters.sort((a, b) => b.XP - a.XP)
            sortVal = "XPUp"
        } else {
            monsters.sort((a, b) => a.XP - b.XP)
            sortVal = "XPDown"
        }
    }
    else if (col == "Name") {
        if (sortVal == "nameDown") {
            monsters.sort((a, b) => b.Name.replaceAll(" ", "").localeCompare(a.Name.replaceAll(" ", "")));
            sortVal = "nameUp"
        } else {
            monsters.sort((a, b) => a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", "")));
            sortVal = "nameDown"
        }
    }
    else if (col == "HP") {
        monsters.sort((a, b) => a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", "")));
        if (sortVal == "HPDown") {            
            monsters.sort((a, b) => b.HP - a.HP)
            sortVal = "HPUp"
        } else {
            monsters.sort((a, b) => a.HP - b.HP)
            sortVal = "HPDown"
        }
    }
    else if (col == "AC") {
        monsters.sort((a, b) => a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", "")));
        if (sortVal == "ACDown") {            
            monsters.sort((a, b) => b.AC - a.AC)
            sortVal = "ACUp"
        } else {
            monsters.sort((a, b) => a.AC - b.AC)
            sortVal = "ACDown"
        }
    }
    printMonsters()
};

monsters.forEach((monster) => {
    monster["XP"] = calcXP(monster.Challenge)
})

function printMonsters() {
    const tb = document.getElementById("tb");
    let tr = [];
    monsters.forEach((monster) => {
    tr.push("<tr><td>" + monster.Name + "</td>");
    tr.push("<td>" + monster.HP + "</td>");
    tr.push("<td>" + monster.AC + "</td>");
    tr.push("<td>" + monster.Challenge + "</td>");
    let XP = String(monster.XP);
    if (XP.length > 3) {
        let leading = XP.slice(0, XP.length-3)
        let trailing = XP.slice(-3)
        XP = leading + "," + trailing;
    }
    tr.push("<td>" + XP + "</td>");
    });
    tb.innerHTML = tr.join("");
    document.getElementById("result").classList.remove("hide"); // show
}

sort("Name")

function closeNav() {
    document.getElementById("navMenu").style.width = "0%";
}

function openNav() {
    document.getElementById("navMenu").style.width = "66%";
}