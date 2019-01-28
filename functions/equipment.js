module.exports = {
    armor:{
        lightArmor:[
            {
                name: "Padded armor",
                cost: 5,
                armorClass: 11,
                dexMod: 1,
                maxMod:10,
                str: 0,
                stealthDisadvantage: true,
                weight: 8
            },{
                name: "Leather armor",
                cost: 10,
                armorClass: 11,
                dexMod: 1,
                maxMod:10,
                str: 0,
                stealthDisadvantage: false,
                weight: 10
            },{
                name: "Studded leather armor",
                cost: 45,
                armorClass: 12,
                dexMod: 1,
                maxMod:10,
                str: 0,
                stealthDisadvantage: false,
                weight: 13
            },],
        mediumArmor:[
            {
                name: "Hide armor",
                cost: 10,
                armorClass: 12,
                dexMod: 1,
                maxMod:2,
                str: 0,
                stealthDisadvantage: false,
                weight: 12
            },{
                name: "Chain mail",
                cost: 50,
                armorClass: 13,
                dexMod: 1,
                maxMod:2,
                str: 0,
                stealthDisadvantage: false,
                weight: 20
            },{
                name: "Scale mail",
                cost: 50,
                armorClass: 14,
                dexMod: 1,
                maxMod:2,
                str: 0,
                stealthDisadvantage: true,
                weight: 45
            },{
                name: "Breastplate",
                cost: 400,
                armorClass: 14,
                dexMod: 1,
                maxMod:2,
                str: 0,
                stealthDisadvantage: false,
                weight: 20
            },{
                name: "Half plate armor",
                cost: 750,
                armorClass: 15,
                dexMod: 1,
                maxMod:2,
                str: 0,
                stealthDisadvantage: true,
                weight: 40
            },
        ],
        heavyArmor:[
            {
                name: "Ring mail",
                cost: 30,
                armorClass: 14,
                dexMod: 0,
                maxMod:0,
                str: 0,
                stealthDisadvantage: true,
                weight: 40
            },{
                name: "Chain mail",
                cost: 75,
                armorClass: 16,
                dexMod: 0,
                maxMod:0,
                str: 13,
                stealthDisadvantage: true,
                weight: 55
            },{
                name: "Splint armor",
                cost: 200,
                armorClass: 17,
                dexMod: 0,
                maxMod:0,
                str: 15,
                stealthDisadvantage: true,
                weight: 60
            },{
                name: "Plate armor",
                cost: 1500,
                armorClass: 18,
                dexMod: 0,
                maxMod:0,
                str: 15,
                stealthDisadvantage: true,
                weight: 65
            },
        ],
        shield:[
            {
                name: "Shield",
                cost: 10,
                armorClass: 2,
                dexMod: 0,
                maxMod:0,
                str: 0,
                stealthDisadvantage: false,
                weight: 6
            },
        ]
},
    weapons:{
        simpleWeapons:{
            ranged:[{
                name: "Light crossbow",
                cost: 25,
                dmgDice:8,
                dmgDiceAmount:1,
                type: "piercing",
                weight:5,
                ranged:{
                    isRanged:true,
                    rangeNorm:80,
                    rangeMax:320,
                    ammo:1,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Ammunition",
                    "Loading",
                    "Two-handed"
                ]},{
                name: "Dart",
                cost: 0.05,
                dmgDice: 4,
                dmgDiceAmount:1,
                type: "piercing",
                weight: 0.25,
                ranged:{
                    isRanged:true,
                    rangeNorm:20,
                    rangeMax:60,
                    ammo:1,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Finesse",
                    "Thrown",
                ]
            },{
                name: "Shortbow",
                cost: 25,
                dmgDice: 6,
                dmgDiceAmount:1,
                type: "piercing",
                weight: 2,
                ranged:{
                    isRanged:true,
                    rangeNorm:80,
                    rangeMax:320,
                    ammo:1,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Ammunition",
                    "Two-handed",
                ]
            },{
                name: "Sling",
                cost: 0.1,
                dmgDice: 4,
                dmgDiceAmount:1,
                type: "bludgeoning",
                weight: 0,
                ranged:{
                    isRanged:true,
                    rangeNorm:30,
                    rangeMax:120,
                    ammo:1,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Ammunition",
                ]
            },
            ],
            melee:[{
                name: "Club",
                cost: 0.1,
                dmgDice:4,
                dmgDiceAmount:1,
                type: "bludgeoning",
                weight:2,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Light"
                ],
                },{
                name: "Dagger",
                cost: 2,
                dmgDice:4,
                dmgDiceAmount:1,
                type: "piercing",
                weight: 1,
                ranged:{
                    isRanged:true,
                    rangeNorm:20,
                    rangeMax:60,
                    ammo:1,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Light",
                    "Finesse",
                    "Thrown",
                ],
            },{
                name: "Greatclub",
                cost: 0.2,
                dmgDice:8,
                dmgDiceAmount:1,
                type: "bludgeoning",
                weight: 10,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Two-handed",
                ],
            },{
                name: "Handaxe",
                cost: 5,
                dmgDice: 6,
                dmgDiceAmount:1,
                type: "slashing",
                weight: 2,
                ranged:{
                    isRanged:true,
                    rangeNorm:20,
                    rangeMax:60,
                    ammo:1,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Light",
                    "Thrown"
                ],
            },{
                name: "Javelin",
                cost: 0.5,
                dmgDice: 6,
                dmgDiceAmount:1,
                type: "piercing",
                weight: 2,
                ranged:{
                    isRanged:true,
                    rangeNorm:30,
                    rangeMax:120,
                    ammo:1,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Thrown"
                ],
            },{
                name: "Light hammer",
                cost: 2,
                dmgDice: 4,
                dmgDiceAmount:1,
                type: "bludgeoning",
                weight: 2,
                ranged:{
                    isRanged:true,
                    rangeNorm:20,
                    rangeMax:60,
                    ammo:1,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Light"
                ],
            },{
                name: "Mace",
                cost: 5,
                dmgDice: 6,
                dmgDiceAmount:1,
                type: "bludgeoning",
                weight: 4,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[],
            },{
                name: "Quarterstaff",
                cost: 0.2,
                dmgDice: 6,
                dmgDiceAmount:1,
                type: "bludgeoning",
                weight: 4,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:true,
                    dice:8,
                    amount:1
                },
                properties:[
                    "Versatile"
                ],
            },{
                name: "Sickle",
                cost: 1,
                dmgDice: 4,
                dmgDiceAmount:1,
                type: "slashing",
                weight: 2,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false,
                },
                properties:[
                    "Light"
                ],
            },{
                name: "Spear",
                cost: 1,
                dmgDice: 6,
                dmgDiceAmount:1,
                type: "piercing",
                weight: 3,
                ranged:{
                    isRanged:true,
                    rangeNorm:20,
                    rangeMax:60,
                    ammo:1,
                },
                versatile:{
                    isVersatile:true,
                    dice:8,
                    amount:1
                },
                properties:[
                ],
            },{
                name: "Unarmed strike",
                cost: 0,
                dmgDice: 1,
                dmgDiceAmount:1,
                type: "bludgeoning",
                weight: 0,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false,
                },
                properties:[
                ],
            },
            ],
        },
        martialWeapons:{
            ranged:[
                {
                    name: "Blowgun",
                    cost: 10,
                    dmgDice: 1,
                    dmgDiceAmount: 1,
                    type: "piercing",
                    weight: 1,
                    ranged:{
                        isRanged:true,
                        rangeNorm:25,
                        rangeMax:100,
                        ammo:1,
                    },
                    versatile:{
                        isVersatile:false,
                    },
                    properties:[
                        "Ammunition",
                        "Loading"
                    ],
                },{
                    name: "Hand crossbow",
                    cost: 75,
                    dmgDice: 6,
                    dmgDiceAmount: 1,
                    type: "piercing",
                    weight: 3,
                    ranged:{
                        isRanged:true,
                        rangeNorm:30,
                        rangeMax:120,
                        ammo:1,
                    },
                    versatile:{
                        isVersatile:false,
                    },
                    properties:[
                        "Ammunition",
                        "Light",
                        "Loading"
                    ],
                },{
                    name: "Heavy Crossbow",
                    cost: 50,
                    dmgDice: 10,
                    dmgDiceAmount: 1,
                    type: "piercing",
                    weight: 18,
                    ranged:{
                        isRanged:true,
                        rangeNorm:100,
                        rangeMax:400,
                        ammo:1,
                    },
                    versatile:{
                        isVersatile:false,
                    },
                    properties:[
                        "Ammunition",
                        "Loading",
                        "Heavy",
                        "Two-handed"
                    ],
                },{
                    name: "Longbow",
                    cost: 50,
                    dmgDice: 8,
                    dmgDiceAmount: 1,
                    type: "piercing",
                    weight: 2,
                    ranged:{
                        isRanged:true,
                        rangeNorm:150,
                        rangeMax:600,
                        ammo:1,
                    },
                    versatile:{
                        isVersatile:false,
                    },
                    properties:[
                        "Ammunition",
                        "Heavy",
                        "Two-handed"
                    ],
                },{
                    name: "Net",
                    cost: 1,
                    dmgDice: 0,
                    dmgDiceAmount: 0,
                    type: "",
                    weight: 3,
                    ranged:{
                        isRanged:true,
                        rangeNorm:5,
                        rangeMax:15,
                        ammo:1,
                    },
                    versatile:{
                        isVersatile:false,
                    },
                    properties:[
                        "Thrown",
                        "Special"
                    ],
                },
            ],
            melee:[{
                name: "Battleaxe",
                cost: 10,
                dmgDice: 8,
                dmgDiceAmount:1,
                type: "slashing",
                weight: 4,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:true,
                    dice:10,
                    amount:1
                },
                properties:[
                ],
            },{
                name: "Flail",
                cost: 10,
                dmgDice: 8,
                dmgDiceAmount:1,
                type: "bludgeoning",
                weight: 2,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false,
                },
                properties:[
                ],
            },{
                name: "Glaive",
                cost: 20,
                dmgDice: 10,
                dmgDiceAmount:1,
                type: "slashing",
                weight: 6,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false,
                },
                properties:[
                    "Heavy",
                    "Reach",
                    "Two-Handed"
                ],
            },{
                name: "Greataxe",
                cost: 30,
                dmgDice: 12,
                dmgDiceAmount:1,
                type: "slashing",
                weight: 7,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false,
                },
                properties:[
                    "Heavy",
                    "Two-Handed"
                ],
            },{
                name: "Greatsword",
                cost: 50,
                dmgDice: 6,
                dmgDiceAmount:2,
                type: "slashing",
                weight: 6,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false,
                },
                properties:[
                    "Heavy",
                    "Two-Handed"
                ],
            },{
                name: "Halberd",
                cost: 20,
                dmgDice: 10,
                dmgDiceAmount:1,
                type: "slashing",
                weight: 6,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false,
                },
                properties:[
                    "Heavy",
                    "Two-Handed",
                    "Reach"
                ],
            },{
                name: "Lance",
                cost: 10,
                dmgDice: 12,
                dmgDiceAmount:1,
                type: "piercing",
                weight: 6,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false,
                },
                properties:[
                    "Reach",
                    "Special"
                ],
            },{
                name: "Longsword",
                cost: 15,
                dmgDice: 8,
                dmgDiceAmount:1,
                type: "slashing",
                weight: 3,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:true,
                    dice:10,
                    amount:1
                },
                properties:[
                ],
            },{
                name: "Maul",
                cost: 10,
                dmgDice: 6,
                dmgDiceAmount:2,
                type: "bludgeoning",
                weight: 10,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Heavy","Two-handed"
                ],
            },{
                name: "Morningstar",
                cost: 15,
                dmgDice: 8,
                dmgDiceAmount:1,
                type: "piercing",
                weight: 4,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[],
            },{
                name: "Pike",
                cost: 5,
                dmgDice: 10,
                dmgDiceAmount: 1,
                type: "piercing",
                weight: 18,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Heavy",
                    "Two-handed",
                    "Reach"
                ],
            },{
                name: "Rapier",
                cost: 25,
                dmgDice: 8,
                dmgDiceAmount: 1,
                type: "piercing",
                weight: 2,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Finesse"
                ],
            },{
                name: "Scimitar",
                cost: 25,
                dmgDice: 6,
                dmgDiceAmount: 1,
                type: "slashing",
                weight: 3,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Finesse",
                    "Light"
                ],
            },{
                name: "Shortsword",
                cost: 10,
                dmgDice: 6,
                dmgDiceAmount: 1,
                type: "piercing",
                weight: 2,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false
                },
                properties:[
                    "Finesse",
                    "Light"
                ],
            },{
                name: "Trident",
                cost: 5,
                dmgDice: 6,
                dmgDiceAmount: 1,
                type: "piercing",
                weight: 4,
                ranged:{
                    isRanged:true,
                    rangeNorm:20,
                    rangeMax:60,
                    ammo:1,
                },
                versatile:{
                    isVersatile:true,
                    dice:8,
                    amount:1,
                },
                properties:[],
            },{
                name: "War pick",
                cost: 5,
                dmgDice: 8,
                dmgDiceAmount: 1,
                type: "piercing",
                weight: 2,
                ranged:{
                    isRanged:false
                },
                versatile:{
                    isVersatile:false
                },
                properties:[],
            },{
                name: "Warhammer",
                cost: 15,
                dmgDice: 8,
                dmgDiceAmount: 1,
                type: "bludgeoning",
                weight: 2,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:true,
                    dice:10,
                    amount:1,
                },
                properties:[],
            },{
                name: "Whip",
                cost: 2,
                dmgDice: 4,
                dmgDiceAmount: 1,
                type: "slashing",
                weight: 3,
                ranged:{
                    isRanged:false,
                },
                versatile:{
                    isVersatile:false,
                },
                properties:[
                    "Finesse",
                    "Reach"
                ],
            },]
        }
    }};