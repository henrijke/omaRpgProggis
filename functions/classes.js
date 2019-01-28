const classes =
    [{
        className: "Barbarian"
        ,
        hitPoint: {
            hitDice: 12,
            startingHitPoints: 12,
            higherLvlHitPoints: 12,
            alternativeHitPoints: 7
        },
        proficiency:{
            weapons: [
                "simple weapons",
                "martial weapons"
            ],
            tools:[
            ],
            //TODO VALITSE KAKS SEURAAVISTA
            skills:{
                amount:2,
                list:["Animal Handling",
                "Athletics",
                "Intimidation",
                "Nature",
                "Perception",
                "Survival"
            ]},
            armor:[
                "light armor",
                "medium armor",
                "shields"
            ]
        },
        startingEquipment:[
            [{
                type:"weapon", name:"Greataxe", amount:1
            },{
                type:"any", name:"any martial melee weapon", amount:1
            }],
            [{
                type:"weapon", name:"Handaxe", amount:2
            },{
                type:"any", name:"any simple weapon", amount:1
            }],
            [{
                type:"tool", name:"an explorers pack", amount:1
            }],
            [{
                type:"weapon", name:"Javelin", amount:4
            }]
        ],
        savingThrows:[
            "Strength", "Constitution"
        ],
        spellcasting:{
            spellcaster:false
        },
        special:{
            "Rage": "Rage at the world",
            "Unarmored Defence": "be stronk",
        }
    },{
                className: "Cleric"
                ,
                hitPoint: {
                    hitDice: 8,
                    startingHitPoints: 8,
                    higherLvlHitPoints: 8,
                    alternativeHitPoints: 5
                },
                proficiency:{
                    weapons: [
                        "simple weapons"
                    ],
                    tools:[
                    ],
                    //TODO VALITSE KAKS SEURAAVISTA
                    skills:{
                        amount: 2,
                        list:["History",
                        "Insight",
                        "Medicine",
                        "Persuasion",
                        "Religion"
                    ]},
                    armor:[
                        "light armor",
                        "medium armor",
                        "shields"
                    ]
                },
                startingEquipment: [
                    [{
                    type:"weapon", name:"Mace", amount:1
                    },{
                        type:"weapon", name:"Warhammer", amount:1
                    }],
                    [{
                        type:"armor", name:"Scale mail", amount:1
                    },{
                        type:"armor", name:"Leather armor", amount:1
                    },{
                        type:"armor", name:"Chain mail", amount:1
                    },],
                    [{
                        type:"weapon", name:"Light crossbow", amount:1
                    },{
                        type:"any", name:"any simple weapon", amount:1
                    }],
                    [{
                        type:"armor", name:"Shield", amount:1
                    },],
                    [{
                        type:"other", name:"A holy symbol", amount:1
                    },]
                ],
                savingThrows:[
                 "Wisdom", "Charisma"
                ],
                spellcasting:{
                    spellcaster:true,
                    spellSlots:{
                        cantrips:3,
                        firstLevel:"-",
                        spellSlots:2
                                }

        },         special:{
                    "Divine Domain": "Pitää valkkaa joku domain ",
                    domains:[
                        "Knowledge",
                        "Life",
                        "Light",
                        "Nature",
                        "Tempest",
                        "Trickery",
                        "War"
                        ]
                }
            },
        {
            className: "Bard"
            ,
            hitPoint: {
                hitDice: 8,
                startingHitPoints: 8,
                higherLvlHitPoints: 8,
                alternativeHitPoints: 5
            },
            proficiency:{
                weapons: [
                    "simple weapons",
                    "hand crossbows",
                    "longswords",
                    "rapiers",
                    "shortswords"
                ],
                tools:[
                    "Three musical instruments of your choice"
                ],
                //TODO VALITSE KAKS SEURAAVISTA
                skills:{
                    amount: 3,
                    list:[
                        "Acrobatics",
                        "Athletics",
                        "Sleight of Hand",
                        "Stealth",
                        "Arcana",
                        "History",
                        "Investigation",
                        "Nature",
                        "Animal Handling",
                        "Perception",
                        "Survival",
                        "Deception",
                        "Intimidation",
                        "Performance",
                        "Insight",
                        "Medicine",
                        "Persuasion",
                        "Religion"
                    ]},
                armor:[
                    "light armor",
                ]
            },

            startingEquipment: [
                [{
                    type:"weapon", name:"Rapier", amount:1
                },{
                    type:"weapon", name:"Longsword", amount:1
                },{
                    type:"any", name:"any simple weapon", amount:1
                }],
                [{
                    type:"tool", name:"diplomats pack", amount:1
                },{
                    type:"tool", name:"entertrainers pack", amount:1
                }],
                [{
                    type:"tool", name:"lute", amount:1
                },{
                    type:"tool", name:"any musical instrument", amount:1
                }],
                [{
                    type:"armor", name:"Leather armor", amount:1
                }],
                [{
                    type:"weapon", name:"Dagger", amount:1
                }]
            ],
            savingThrows:[
                "Dexterity", "Charisma"
            ],
            spellcasting:{
                spellcaster:true,
                spellSlots:{
                    cantrips:2,
                    firstLevel:4,
                    spellSlots:2
                }
            },
            special:{
                "Bardic Inspiration": "anna inspist muille",
            }
        },
        {
            className: "Druid"
            ,
            hitPoint: {
                hitDice: 8,
                startingHitPoints: 8,
                higherLvlHitPoints: 8,
                alternativeHitPoints: 5
            },
            proficiency:{
                weapons: [
                    "clubs",
                    "daggers",
                    "darts",
                    "javelins",
                    "maces",
                    "quarterstaffs",
                    "scimitars",
                    "sickles",
                    "slings",
                    "spears",
                ],
                tools:[
                    "Herbalism kit"
                ],
                //TODO VALITSE KAKS SEURAAVISTA
                skills:{
                    amount: 2,
                    list:[
                        "Arcana",
                        "Nature",
                        "Animal Handling",
                        "Perception",
                        "Survival",
                        "Insight",
                        "Medicine",
                        "Religion"
                    ]},
                armor:[
                    "light armor", "medium armor", "shields"
                ]
            },
            startingEquipment: [
                [{
                    type:"armor", name:"Shield", amount:1
                },{
                    type:"any", name:"any simple weapon", amount:1
                }],
                [{
                    type:"weapon", name:"Scimitar", amount:1
                },{
                    type:"any", name:"any simple weapon", amount:1
                }],
                [{
                    type:"armor", name:"Leather armor", amount:1
                }],
                [{
                    type:"tool", name:"explorers pack", amount:1
                }],
                [{
                    type:"other", name:"a druidic focus", amount:1
                }]
            ],
            savingThrows:[
                "Intelligence", "Wisdom"
            ],
            spellcasting:{
                spellcaster:true,
                spellSlots:{
                    cantrips:2,
                    firstLevel:"-",
                    spellSlots:2
                }
            },
            special:{
                "Druidic": "salainen kieli",
            }
        },
    ];

module.exports= classes;