module.exports = {
        characterName: "",
        overview:{
            race: "",
            class: "",
            background: "",
            alignment: "",
            "player Name": "",
            sex:"",
          //  created: "",
          //  lastModified: "",
        },
        stats:{
            initiative: 0,
            speed: 0,
            proficiency: 0,
            inspiration:0,
            armorClass:0,
            maxHp:0,
            currentHp:0,
            wounds:0,
            level:0,
            exp:0,
            age: 0,
            skin:"",
            height:0,
            hair:"",
            weight:0,
            eyes:"",
            vision:"",
            reputation:"",
            personalityTraits:[],
            ideals:{},
            bonds:"",
            flaws:"",
    },
    itemProficiencies:{
            weapons:[],
            tools:[],
    },
    languages:[],
    notes:[],
    equipment: {
            armor:[],
            weapons:[],
            spells:[],
            tools:[],
            others:[],
    },
        abilityScore:{
            strength: {
                base: 10,
                race: 0,
                feat: 0,
                savingthrow: false,
                mod: 0,
                skills:[
                    {   name:"Athletics",
                        chosen: false}
                ]
            },
            dexterity:{
                base: 10,
                race: 0,
                feat: 0,
                savingthrow: false,
                mod: 0,
                skills:[
                    {   name:"Acrobatics",
                        chosen: false},
                    {   name:"Sleight of Hand",
                        chosen: false},
                    {   name:"Stealth",
                        chosen: false}
                ]
            },
            constitution:{
                base: 10,
                race: 0,
                feat: 0,
                savingthrow: false,
                mod: 0,
                skills:[
                ]
            },
            intelligence:{
                base: 10,
                race: 0,
                feat: 0,
                savingthrow: false,
                mod: 0,
                skills:[
                    {   name:"Arcana",
                        chosen: false},
                    {   name:"History",
                        chosen: false},
                    {   name:"Investigation",
                        chosen: false},
                    {   name:"Nature",
                        chosen: false},
                    {   name:"Religion",
                        chosen: false}
                ]
            },
            wisdom:{
                base: 10,
                race: 0,
                feat: 0,
                savingthrow: false,
                mod: 0,
                skills:[
                    {   name:"Animal handling",
                        chosen: false},
                    {   name:"Insight",
                        chosen: false},
                    {   name:"Medicine",
                        chosen: false},
                    {   name:"Perception",
                        chosen: false},
                    {   name:"Survival",
                        chosen: false}
                ]
            },
            charisma:{
                base: 10,
                race: 0,
                feat: 0,
                savingthrow: false,
                mod: 0,
                skills:[
                    {   name:"Deception",
                        chosen: false},
                    {   name:"Intimidation",
                        chosen: false},
                    {   name:"Performance",
                        chosen: false},
                    {   name:"Persuasion",
                        chosen: false},
                ]
            }}
};
