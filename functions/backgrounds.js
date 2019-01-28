module.exports.backgrounds = [
    {
        name:"Acolyte",
        skillProficiencies: [
            "Insight",
            "Religion"
        ],
        toolProficiencies:[],
        equipment: [
          "Holy Symbol",
          "Prayer book or prayer wheel",
          "5 sticks of incense",
          "Vestments",
            "Set of common clothes",
            "Belt pouch containing 15 gp"
        ],
        feature:[
            "Shelter the Faithful"
        ],
        special:[],
        personalityTraits:[
           "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.",
            "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
            "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
            "Nothing can shake my optimistic attitude.",
            "I quote (or misquote) sacred texts and proverbs in almost every situation.",
            "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
            "I've enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.",
            "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
        ],
        ideal:[
            {   name:"Tradition",
                alignment: "Lawful",
                flavor: "The ancient traditions of worship and sacrifice must be preserved and upheld."
            },{
                name:"Charity",
                alignment: "Good",
                flavor:"I always try to help those in need, no matter what the personal cost."
            },{
                name:"Change",
                alignment: "Chaotic",
                flavor:"We must help bring about the changes the gods are constantly working in the world."
            },{
                name:"Power",
                alignment: "Lawful",
                flavor:"I hope to one day rise to the top of my faith’s religious hierarchy."
            },{
                name:"Faith",
                alignment: "Lawful",
                flavor:"I trust that my deity will guide my actions, I have faith that if I work hard, things will go welly."
            },{
                name:"Aspiration",
                alignment: "Any",
                flavor:"I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings."
            },
        ],
        bond:[
            "I would die to recover an ancient relic of my faith that was lost long ago.",
            "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
            "I owe my life to the priest who took me in when my parents died.",
            "Everything I do is for the common people.",
            "I will do anything to protect the temple where I served.",
            "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.",
        ],
        flaw:[
            "I judge others harshly, and myself even more severely.",
            "I put too much trust in those who wield power within my temple’s hierarchy.",
            "My piety sometimes leads me to blindly trust those that profess faith in my god.",
            "I am inflexible in my thinking.",
            "I am suspicious of strangers and expect the worst of them.",
            "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
        ],
    },    {
        name:"Charlatan",
        skillProficiencies: [
            "Deception",
            "Sleight of Hand"
        ],
        toolProficiencies:[
            "Disguise kit",
            "Forgery kit"
        ],
        equipment: [
            "Set of fine clothes",
            "Disguise kit",
            "Tools of the con of your choise (ten stoppered bottles filled with colored liquid, set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke",
            "Belt pouch containing 15 gp"
        ],
        feature:[
            "False Identity"
        ],
        special:[{
            name:"Favorite Schemes",
            value:[
                "I cheat at games of chance",
                "I shave coins or forge documentaries",
                "I insinuate myself into people's lives to prey on their weakness and secure their fortunes",
                "I put on new identities like clothes",
                "I run sleight-of-hand cons on street corners",
                "I convince people that worthless junk is worth their hard-earned money"
            ]}],
        personalityTraits:[
            "I fall in and out of love easily, and am always pursuing someone.",
            "I have a joke for every occasion, especially occasions where humor is inappropriate.",
            "Flattery is my preferred trick for getting what I want.",
            "I’m a born gambler who can't resist taking a risk for a potential payoff.",
            "I lie about almost everything, even when there’s no good reason to.",
            "Sarcasm and insults are my weapons of choice.",
            "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
            "I pocket anything I see that might have some value."
        ],
        ideal:[
            {   name:"Independence",
                alignment: "Chaotic",
                flavor: "I am a free spirit— no one tells me what to do."
            },{
                name:"Fairness",
                alignment: "Lawful",
                flavor:"I never target people who can’t afford to lose a few coins."
            },{
                name:"Charity",
                alignment: "Good",
                flavor:"I distribute the money I acquire to the people who really need it."
            },{
                name:"Creativity",
                alignment: "Chaotic",
                flavor:"I never run the same con twice."
            },{
                name:"Friendship",
                alignment: "Good",
                flavor:"Material goods come and go. Bonds of friendship last forever.",
            },{
                name:"Aspiration",
                alignment: "Any",
                flavor:"I’m determined to make something of myself."
            },
        ],
        bond:[
            "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
            "I owe everything to my mentor—a horrible person who’s probably rotting in jail somewhere.",
            "Somewhere out there, I have a child who doesn’t know me. I’m making the world better for him or her.",
            "I come from a noble family, and one day I’ll reclaim my lands and title from those who stole them from me.",
            "A powerful person killed someone I love. Some day soon, I’ll have my revenge.",
            "I swindled and ruined a person who didn’t deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.",
        ],
        flaw:[
            "I can’t resist a pretty face.",
            "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
            "I’m convinced that no one could ever fool me the way I fool others.",
            "I’m too greedy for my own good. I can’t resist taking a risk if there’s money involved.",
            "I can’t resist swindling people who are more powerful than me.",
            "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
        ],
    },{
        name:"Criminal",
        skillProficiencies: [
            "Deception",
            "Stealth"
        ],
        toolProficiencies:[
            "One type of gaming set",
            "Thieves' tools"
        ],
        equipment: [
            "Crowbar",
            "Set of dark common clothes including hood",
            "Belt pouch containing 15 gp"
        ],
        feature:[
            "Criminal Speciality",
            "Criminal Contact"
        ],
        special:[{
            name:"Criminal Specialty",
            value:[
                "Blackmailer",
                "Burglar",
                "Enforcer",
                "Fence",
                "Highway robber",
                "Hired killer",
                "Pickpocket",
                "Smuggler"
            ]}],
        personalityTraits:[
            "I always have a plan for what to do when things go wrong",
            "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me",
            "The first thing I do in a new place is note the locations of everything valuable or where such things could be hidden",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide",
            "I don't pay attention to the risks in any situation. Never tell me the odds",
            "The best way to get me to do something is to tell me I can't do it",
            "I blow up at the slightest insult",
        ],
        ideal:[
            {   name:"Honor",
                alignment: "Lawful",
                flavor: "I don’t steal from others in the trade."
            },{
                name:"Freedom",
                alignment: "Chaotic",
                flavor:"Chains are meant to be broken, as are those who would forge them."
            },{
                name:"Charity",
                alignment: "Good",
                flavor:"I steal from the wealthy so that I can help people in need."
            },{
                name:"Greed",
                alignment: "Evil",
                flavor:"I will do whatever it takes to become wealthy."
            },{
                name:"People",
                alignment: "Neutral",
                flavor:"I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care",
            },{
                name:"Redemption",
                alignment: "Good",
                flavor:"There’s a spark of good in everyone."
            },
        ],
        bond:[
            "I’m trying to pay off an old debt I owe to a generous benefactor.",
            "My ill-gotten gains go to support my family.",
            "Something important was taken from me, and I aim to steal it back.",
            "I will become the greatest thief that ever lived.",
            "I’m guilty of a terrible crime. I hope I can redeem myself for it.",
            "Someone I loved died because of a mistake I made. That will never happen again",
        ],
        flaw:[
            "When I see something valuable, I can’t think about anything but how to steal it.",
            "When faced with a choice between money and my friends, I usually choose the money.",
            "If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it",
            "I have a “tell” that reveals when I'm lying",
            "I turn tail and run when things look bad.",
            "An innocent person is in prison for a crime that I committed. I’m okay with that.",
        ],
    },
];
