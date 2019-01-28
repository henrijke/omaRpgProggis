const races =[
    {
        default:{
            raceName: "Dwarf"
            ,
            age:{
                maxAge: 350,
                adultAge: 50
            },
            alignment: "tba"
            ,
            size: "medium"
            ,
            speed: 25
            ,
            vision: "Darkvision"
            ,
            proficiency:{
                weapons: [
                    "battleaxe",
                    "handaxe",
                    "light hammer",
                    "warhammer"
                ],
                //TODO miten vain yksi seuraavista:
                tools:[
                    "smith's tool",
                    "brewer's supplies",
                    "mason's tools",
                ],
                skills:[
                ]
            },
            names:{
                male:[
                    "Adrik",
                    "Alberich",
                    "Baern",
                    "Barendd",
                    "Brottor",
                    "Bruenor",
                    "Dain",
                    "Darrak",
                    "Delg",
                    "Eberk",
                    "Einkil",
                    "Fargrim",
                    "Flint",
                    "Gardain",
                    "Harbek",
                    "Kildrak",
                    "Morgran",
                    "Orsik",
                    "Oskar",
                    "Rangrim",
                    "Rurik",
                    "Taklinn",
                    "Thoradin",
                    "Thorin",
                    "Tordek",
                    "Traubon",
                    "Travok",
                    "Ulfgar",
                    "Veit",
                    "Vondal"],
                female:["Amber",
                    "Artin",
                    "Audhild",
                    "Bardryn",
                    "Dagnal",
                    "Diesa",
                    "Eldeth",
                    "Falkrunn",
                    "Finellen",
                    "Gunnloda",
                    "Gurdis",
                    "Helja",
                    "Hlin",
                    "Kathra",
                    "Kristryd",
                    "Ilde",
                    "Liftrasa",
                    "Mardred",
                    "Riswynn",
                    "Sannl",
                    "Torbera",
                    "Torgga",
                    "Vistra"],
                lastname:["Balderk",
                    "Battlehammer",
                    "Brawnanvil",
                    "Dankil",
                    "Fireforge",
                    "Frostbeard",
                    "Gorunn",
                    "Holderhek",
                    "Ironfist",
                    "Loderr",
                    "Lutgehr",
                    "Rumnaheim",
                    "Strakeln",
                    "Torunn",
                    "Ungart"],
            },
            languages:[
                "Common",
                "Dwarvish",
            ],
            special:[ "Dwarven Resilience",
                "Stonecunning"
                    ],
            abilityIncrease:[{
                name: "con",
                amount: 2
            },],
        },
            subrace:[
                    {
                        subraceName: "Hill Dwarf"
                        ,
                        //tähän tarvis viel +1 hitpointtii ja +1 aina level upis
                        abilityIncrease: [ {
                            name: "wis",
                            amount: 1
                        }],
                        special:["Dwarven Toughness"
                        ],
                        heightBase: 44,
                        heightMod:{
                            dice: 4,
                            times:2
                        },
                        weightBase: 115,
                        weightMod:{
                            dice: 6,
                            times:2
                        },
                    },
                    {
                        subraceName: "Mountain Dwarf"
                        ,
                        //tähän tarvis viel proficiency
                        abilityIncrease: [{
                            name: "str",
                            amount: 2
                        }],
                        proficiency:{
                            armor:[
                                "light armor", "medium armor"
                            ]
                        },
                        heightBase: 48,
                        heightMod:{
                            dice: 4,
                            times:2
                        },
                        weightBase: 130,
                        weightMod:{
                            dice: 6,
                            times:2
                        },
                    }
            ]
    },{
            default:{
                raceName: "Elf"
                ,
                age:{
                    maxAge: 750,
                    adultAge: 100
                }
                ,
                alignment: "tba"
                ,
                size: "medium"
                ,
                speed: 30
                ,
                vision: "Darkvision"
                ,
                proficiency:{
                    weapons: [

                    ],
                    tools:[

                    ],
                    skills:[
                        "perception"
                    ]
                },
                names:{
                    male:[
                        "Adran"
                    ],
                    female:[
                        "Adrie"
                    ],
                    lastname:[
                        "Amakiir"
                    ]
                },
                languages:[
                    "Common",
                    "Elvish",
                ],
                special:[
                    "Fey Ancestry",
                    "Trance"
                ],
                abilityIncrease:[{
                    name: "dex",
                    amount: 2
                },],
            },
            subrace:[
                    {
                        subraceName: "High Elf"
                        ,
                        //tähän tarvis viel proficiency
                        abilityIncrease: [{
                            name: "int",
                            amount: 1
                        }],
                        proficiency:{
                            weapons:[
                                "longsword","shortsword", "shortbow", "longbow"
                            ]
                        },
                        special:["Extra Language","Cantrip"],
                        heightBase: 54,
                        heightMod:{
                            dice: 10,
                            times:2
                        },
                        weightBase: 90,
                        weightMod:{
                            dice: 4,
                            times: 1
                        },
                    },
                    {
                        subraceName: "Wood Elf"
                        ,
                        //tähän tarvis viel proficiency
                        abilityIncrease: [{
                            name: "wis",
                            amount: 1
                        }],
                        proficiency:{
                            weapons:[
                                "longsword","shortsword", "shortbow", "longbow"
                            ]
                        },
                        special:["Fleet of Foot",
                            "Mask of the Wild"],
                        heightBase: 54,
                        heightMod:{
                            dice: 10,
                            times:2
                        },
                        weightBase: 100,
                        weightMod:{
                            dice: 4,
                            times:1
                        },
                    },
                {
                    subraceName: "Dark Elf"
                    ,
                    //tähän tarvis viel proficiency
                    abilityIncrease: [{
                        name: "char",
                        amount: 1
                    }],
                    proficiency:{
                        weapons:[
                            "rapier","shortsword", "hand crossbow",
                        ]
                    },
                    special:["Superior Darkvision",
                        "Sunlight Sensitivity",
                        "Drow Magic"],
                    heightBase: 54,
                    heightMod:{
                        dice: 10,
                        times:2
                    },
                    weightBase: 100,
                    weightMod:{
                        dice: 4,
                        times:1
                    },
                    }
            ]
    },
    {
        default:{
            raceName: "Halfling"
            ,
            age:{
                maxAge: 200,
                adultAge: 20
            }
            ,
            alignment: "tba"
            ,
            size: "small"
            ,
            speed: 25
            ,
            vision: "Normal"
            ,
            proficiency:{
                weapons: [

                ],
                tools:[

                ],
                skills:[

                ]
            },
            names:{
                male:[
                    "Alton"
                ],
                female:[
                    "Andry"
                ],
                lastname:[
                    "Brushgather"
                ]
            },
            languages:[
                "Common",
                "Halfling",
            ],
            special:[
                "Lucky",
                "Brave",
                "Halfling Nimbleness"
            ],
            abilityIncrease:[{
                name: "dex",
                amount: 2
            },],
        },
        subrace:[
            {
                subraceName: "Lightfoot"
                ,
                //tähän tarvis viel proficiency
                abilityIncrease: [{
                    name: "cha",
                    amount: 1
                }],
                proficiency:{
                    weapons:[

                    ]
                },
                special:["Naturally Stealthy",],
                heightBase: 31,
                heightMod:{
                    dice: 4,
                    times:2
                },
                weightBase: 35,
                weightMod:{
                    dice: 1,
                    times: 1
                },
            },{
                subraceName: "Stout"
                ,
                //tähän tarvis viel proficiency
                abilityIncrease: [{
                    name: "con",
                    amount: 1
                }],
                proficiency:{
                    weapons:[]
                },
                special:["Stout Resilience",],
                heightBase: 31,
                heightMod:{
                    dice: 4,
                    times:2
                },
                weightBase: 35,
                weightMod:{
                    dice: 1,
                    times: 1
                },
            },]
    },
    {
        default:{
            raceName: "Human"
            ,
            age:{
                maxAge: 100,
                adultAge: 18
            },
            alignment: "tba"
            ,
            size: "medium"
            ,
            speed: 30
            ,
            vision: "Normal"
            ,
            proficiency:{
                weapons: [],
                tools:[],
                skills:[]
            },
            names:{
                male:[
                    "Aseir"
                ],
                female:[
                    "Atala"
                ],
                lastname:[
                    "Basha"
                ]
            },
            languages:[
                "Common",
                "One Extra Language",
            ],
            special:[
            ],
            abilityIncrease:[{
                    name: "str",
                    amount: 1
                },{
                    name: "dex",
                    amount: 1
                },{
                    name: "con",
                    amount: 1
                },{
                    name: "wis",
                    amount: 1
                },{
                    name: "int",
                    amount: 1
                },{
                    name: "char",
                    amount: 1
            },],
        },
        subrace:[
            {
                subraceName: ""
                ,
                //tähän tarvis viel proficiency
                abilityIncrease: [{
                }],
                proficiency:{
                    weapons:[]
                },
                special:[],
                heightBase: 56,
                heightMod:{
                    dice: 10,
                    times:2
                },
                weightBase: 110,
                weightMod:{
                    dice: 4,
                    times: 2
                },
            },]
    },{
        default:{
            raceName: "Dragonborn"
            ,
            age:{
                maxAge: 80,
                adultAge: 15
            },
            alignment: "tba"
            ,
            size: "medium"
            ,
            speed: 30
            ,
            vision: "Normal"
            ,
            proficiency:{
                weapons: [],
                tools:[],
                skills:[ ]
            },
            names:{
                male:[
                    "Arjhan"
                ],
                female:[
                    "Akra"
                ],
                lastname:[
                    "Clethtinthiallor"
                ]
            },
            languages:[
                "Common",
                "Draconic",
            ],
            special:[
                "Draconic Ancestry",
                "Breath Weapon",
                "Damage Ressistance"
            ],
            abilityIncrease:[{
                name: "str",
                amount: 2
            },
                {
                    name: "cha",
                    amount:1
                }],
        },
        subrace:[
            {
                subraceName: ""
                ,
                //tähän tarvis viel proficiency
                abilityIncrease: [],
                proficiency:{
                    weapons:[]
                },
                special:[],
                heightBase: 66,
                heightMod:{
                    dice: 8,
                    times:2
                },
                weightBase: 175,
                weightMod:{
                    dice: 6,
                    times: 2
                },
            },]
    },
    {
        default:{
            raceName: "Gnome"
            ,
            age:{
                maxAge: 500,
                adultAge: 40
            }
            ,
            alignment: "tba"
            ,
            size: "small"
            ,
            speed: 25
            ,
            vision: "Darkvision"
            ,
            proficiency:{
                weapons: [],
                tools:[],
                skills:[]
            },
            names:{
                male:[
                    "Alston"
                ],
                female:[
                    "Bimpnottin"
                ],
                lastname:[
                    "Beren"
                ]
            },
            languages:[
                "Common",
                "Gnomish",
            ],
            special:[
                "Gnome Cunning",
            ],
            abilityIncrease:[{
                name: "int",
                amount: 2
            },],
        },
        subrace:[
            {
                subraceName: "Forest Gnome"
                ,
                //tähän tarvis viel proficiency
                abilityIncrease: [{
                    name: "dex",
                    amount: 1
                }],
                proficiency:{
                    weapons:[]
                },
                special:["Natural Illusionist", "Speak with Small Beasts"],
                heightBase: 35,
                heightMod:{
                    dice: 4,
                    times:2
                },
                weightBase: 35,
                weightMod:{
                    dice: 1,
                    times: 1
                },
            },{
                subraceName: "Rock Gnome"
                ,
                //tähän tarvis viel proficiency
                abilityIncrease: [{
                    name: "con",
                    amount: 1
                }],
                proficiency:{
                    weapons:[]
                },
                special:["Artificer's Lore","Tinker"],
                heightBase: 35,
                heightMod:{
                    dice: 10,
                    times:2
                },
                weightBase: 35,
                weightMod:{
                    dice: 1,
                    times: 1
                },
            },]
    },
    {
        default:{
            raceName: "Half-Elf"
            ,
            age:{
                maxAge: 200,
                adultAge: 20
            }
            ,
            alignment: "tba"
            ,
            size: "small"
            ,
            speed: 30
            ,
            vision: "Darkvision"
            ,
            proficiency:{
                weapons: [],
                tools:[],
                skills:[]
            },
            names:{
                male:[
                    "Haltia"
                ],
                female:[
                    "Ihmis"
                ],
                lastname:[
                    "Keksi jotain"
                ]
            },
            languages:[
                "Common",
                "Elvish",
                "One Extra Language"
            ],
            special:[
                "Fey Ancestry",
                "Skill Versatility",
            ],
            abilityIncrease:[{
                name: "cha",
                amount: 2
            },],
        },
        subrace:[
            {
                subraceName: ""
                ,
                //tähän tarvis viel proficiency
                abilityIncrease: [],
                proficiency:{
                    weapons:[]
                },
                special:[],
                heightBase: 57,
                heightMod:{
                    dice: 8,
                    times:2
                },
                weightBase: 110,
                weightMod:{
                    dice: 4,
                    times: 2
                },
            },]
    },
    {
        default:{
            raceName: "Tiefling"
            ,
            age:{
                maxAge: 100,
                adultAge: 18
            },
            alignment: "tba"
            ,
            size: "medium"
            ,
            speed: 30
            ,
            vision: "Darkvision"
            ,
            proficiency:{
                weapons: [],
                tools:[],
                skills:[]
            },
            names:{
                male:[
                    "Akmenos"
                ],
                female:[
                    "Akta"
                ],
                lastname:[
                    "Art"
                ]
            },
            languages:[
                "Common",
                "Infernal",
                ],
            special:[
                "Hellish Resistance",
                "Infernal Legacy",
            ],
            abilityIncrease:[{
                name: "cha",
                amount: 2
            },{
                name: "int",
                amount: 1
            },],
        },
        subrace:[
            {
                subraceName: ""
                ,
                abilityIncrease: [],
                proficiency:{
                    weapons:[]
                },
                special:[],
                heightBase: 57,
                heightMod:{
                    dice: 8,
                    times:2
                },
                weightBase: 110,
                weightMod:{
                    dice: 4,
                    times: 2
                },
            },]
    },
    {
        default:{
            raceName: "Half-Orc"
            ,
            age:{
                maxAge: 75,
                adultAge: 14
            },
            alignment: "tba"
            ,
            size: "medium"
            ,
            speed: 30
            ,
            vision: "Darkvision"
            ,
            proficiency:{
                weapons: [],
                tools:[],
                skills:[]
            },
            names:{
                male:[
                    "Dench"
                ],
                female:[
                    "Baggi"
                ],
                lastname:[
                    "URH"
                ]
            },
            languages:[
                "Common",
                "Orc",
            ],
            special:[
                "Menacing",
                "Relentless Endurance",
                "Savage Attacks"
            ],
            abilityIncrease:[{
                name: "str",
                amount: 2
            },{
                name: "con",
                amount: 1
            },],
        },
        subrace:[
            {
                subraceName: ""
                ,
                abilityIncrease: [],
                proficiency:{
                    weapons:[]
                },
                special:[],
                heightBase: 58,
                heightMod:{
                    dice: 10,
                    times:2
                },
                weightBase: 140,
                weightMod:{
                    dice: 6,
                    times: 2
                },
            },]
    },
];

module.exports= races;