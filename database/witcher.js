// database/witcher.js
window.gameDatabase = window.gameDatabase || {};

Object.assign(gameDatabase, {
    "The Witcher": {
        title: "The Witcher: Enhanced Edition", 
        meta: "Fool's Theory / CDPR  •  Upcoming  •  RPG",
        bg: "images/backgrounds/witcher1-bg.jpg", 
        cover: "images/covers/witcher1-cover.jpg",
        desc: "A modern reimagining of Geralt's first adventure, built from the ground up in Unreal Engine 5 for a vast, open-world narrative experience.",
        tags: ["Vizima", "Temeria", "Salamandra", "Unreal Engine 5"],
        featured: [
            { title: "Production Log", desc: "Everything we know about the remake.", img: "images/featured/witcher1-log.jpg" },
            { title: "Unreal Engine 5 Analysis", desc: "Visual upgrades and mechanics overhaul.", img: "images/featured/witcher1-ue5.jpg" },
            { title: "Vizima Redesign", desc: "Concept art and lore updates.", img: "images/featured/witcher1-vizima.jpg" }
        ],
                /* АБСОЛЮТНО ПОЛНЫЙ ЛОР-СПИСОК ПЕРСОНАЖЕЙ — ЧАСТЬ 1 */
                wikiCharacters: [
                    {
                        name: "Geralt of Rivia", role: "Witcher • School of the Wolf", avatar: "images/characters/w1-geralt.jpg",
                        quote: "“I have no memory of my past. But I still remember how to handle a blade.”",
                        stats: [{ label: "Affiliation", val: "Independent" }, { label: "Status", val: "Amnesiac" }, { label: "Threat Level", val: "High" }]
                    },
                    {
                        name: "Vesemir", role: "Grand Master • School of the Wolf", avatar: "images/characters/w1-vesemir.jpg",
                        quote: "“The secrets of our mutations are gone. We are the last of our kind.”",
                        stats: [{ label: "Affiliation", val: "Kaer Morhen Keep" }, { label: "Status", val: "Active" }, { label: "Experience", val: "Centuries" }]
                    },
                    {
                        name: "Eskel", role: "Witcher • School of the Wolf", avatar: "images/characters/w1-eskel.jpg",
                        quote: "“Kaer Morhen isn't what it used to be, but it's still home.”",
                        stats: [{ label: "Affiliation", val: "Kaer Morhen Keep" }, { label: "Status", val: "Active" }, { label: "Combat Tier", val: "Veteran" }]
                    },
                    {
                        name: "Lambert", role: "Witcher • School of the Wolf", avatar: "images/characters/w1-lambert.jpg",
                        quote: "“If you want to save the world, go ahead. I just want to stay alive.”",
                        stats: [{ label: "Affiliation", val: "Kaer Morhen Keep" }, { label: "Status", val: "Active" }, { label: "Temper", val: "Cynical" }]
                    },
                    {
                        name: "Leo", role: "Witcher Apprentice • Fallen Brother", avatar: "images/characters/w1-leo.jpg",
                        quote: "“I wanted to be just like you, Geralt...”",
                        stats: [{ label: "Affiliation", val: "School of the Wolf" }, { label: "Status", val: "Deceased" }, { label: "Threat Level", val: "None" }]
                    },
                    {
                        name: "Triss Merigold", role: "Sorceress • Royal Advisor", avatar: "images/characters/w1-triss.jpg",
                        quote: "“Magic can control destiny, Geralt, but it cannot override choices.”",
                        stats: [{ label: "Affiliation", val: "Temerian Court / Lodge" }, { label: "Status", val: "Active" }, { label: "Magic Tier", val: "High" }]
                    },
                    {
                        name: "Abigail", role: "Witch", avatar: "images/characters/w1-abigail.jpg",
                        quote: "“People fear what they don't understand, and they call it evil.”",
                        stats: [{ label: "Affiliation", val: "Outskirts of Wyzim" }, { label: "Status", val: "Threatened" }, { label: "Profession", val: "Alchemist" }]
                    },
                    {
                        name: "The Reverend", role: "Religious Leader • Outskirts", avatar: "images/characters/w1-reverend.jpg",
                        quote: "“The Eternal Fire will purge this land of mutants and unholy beasts.”",
                        stats: [{ label: "Affiliation", val: "Eternal Fire Cult" }, { label: "Status", val: "Active" }, { label: "Influence", val: "Local" }]
                    },
                    {
                        name: "Odo", role: "Wealthy Landowner • Outskirts", avatar: "images/characters/w1-odo.jpg",
                        quote: "“My gold is mine. Leave me alone with my plants.”",
                        stats: [{ label: "Affiliation", val: "Outskirts of Wyzim" }, { label: "Status", val: "Terrified" }, { label: "Secret", val: "Fratricide" }]
                    },
                    {
                        name: "Haren Brogg", role: "Merchant • Smuggler", avatar: "images/characters/w1-haren.jpg",
                        quote: "“Business is business. I trade with humans, elves, or monsters if they pay.”",
                        stats: [{ label: "Affiliation", val: "Salamandra / Scoia'tael" }, { label: "Status", val: "Active" }, { label: "Trade", val: "Illegal Weapons" }]
                    },
                    {
                        name: "Mikul", role: "Gate Guard • Outskirts", avatar: "images/characters/w1-mikul.jpg",
                        quote: "“I just do what the Reverend says. Keep your nose out of my business.”",
                        stats: [{ label: "Affiliation", val: "Wyzim Guard" }, { label: "Status", val: "Active" }, { label: "Duty", val: "Mill Gate" }]
                    },
                    {
                        name: "Kalkstein", role: "Alchemist • Scholar", avatar: "images/characters/w1-kalkstein.jpg",
                        quote: "“The Great Work requires patience, calculation, and a few monster parts.”",
                        stats: [{ label: "Affiliation", val: "Temple Quarter" }, { label: "Status", val: "Suspected" }, { label: "Field", val: "Alchemy / Portals" }]
                    },
                    {
                        name: "Thaler", role: "Chief of Secret Service • Temeria", avatar: "images/characters/w1-thaler.jpg",
                        quote: "“Don't teach your grandmother to suck eggs. I know who runs this city.”",
                        stats: [{ label: "Affiliation", val: "King Foltest's Crown" }, { label: "Status", val: "Undercover" }, { label: "Profession", val: "Fence / Spy" }]
                    },
                    {
                        name: "Vincent Meis", role: "Captain of the City Guard", avatar: "images/characters/w1-vincent.jpg",
                        quote: "“Wyzim is a powder keg. And I am the one holding the match.”",
                        stats: [{ label: "Affiliation", val: "Wyzim City Guard" }, { label: "Status", val: "Curse Suspect" }, { label: "Combat Tier", val: "Veteran" }]
                    },
                    {
                        name: "Siegfried of Denesle", role: "Knight Idealist", avatar: "images/characters/w1-siegfried.jpg",
                        quote: "“Honor and order will light our way through the dark slime of Wyzim.”",
                        stats: [{ label: "Affiliation", val: "Order of the Flaming Rose" }, { label: "Status", val: "Active" }, { label: "Duty", val: "Sewer Patrol" }]
                    },
                    {
                        name: "Raymond Maarloeve", role: "Private Detective", avatar: "images/characters/w1-raymond.jpg",
                        quote: "“The truth is like a monster in the dark. It bites when you find it.”",
                        stats: [{ label: "Affiliation", val: "Temple Quarter" }, { label: "Status", val: "Compromised" }, { label: "Identity", val: "Deceased / Mimic" }]
                    },
                    {
                        name: "Shani", role: "Medic • St. Lebioda Hospital", avatar: "images/characters/w1-shani.jpg",
                        quote: "“Soldiers bleed the same, no matter what banners they fight under.”",
                        stats: [{ label: "Affiliation", val: "Oxenfurt Academy" }, { label: "Status", val: "Active" }, { label: "Field", val: "Medicine" }]
                    },
                    {
                        name: "Vaska", role: "Elder • Brickmakers' Village", avatar: "images/characters/w1-vaska.jpg",
                        quote: "“The Swamp belongs to the Vodyanoi. We only live by their grace.”",
                        stats: [{ label: "Affiliation", val: "Wyzim Swamps" }, { label: "Status", val: "Active" }, { label: "Belief", val: "Lords of the Deep" }]
                    },
                    {
                        name: "Declan Leuvaarden", role: "Grand Merchant • Financier", avatar: "images/characters/w1-leuvaarden.jpg",
                        quote: "“Wars cost money, witcher. But peace is far more expensive.”",
                        stats: [{ label: "Affiliation", val: "Trade Corporation / Redania" }, { label: "Status", val: "Active" }, { label: "Influence", val: "International" }]
                    },
                    {
                        name: "Azar Javed", role: "Renegade Mage • Salamandra Leader", avatar: "images/characters/w1-javed.jpg",
                        quote: "“Your secrets now belong to the Salamandra, witcher.”",
                        stats: [{ label: "Affiliation", val: "Salamandra / Zerrikania" }, { label: "Status", val: "Active" }, { label: "Threat Level", val: "Extreme" }]
                    },
                    {
                        name: "The Professor (Magister)", role: "Assassin • Salamandra Enforcer", avatar: "images/characters/w1-professor.jpg",
                        quote: "“Academic knowledge means nothing without a swift execution.”",
                        stats: [{ label: "Affiliation", val: "Salamandra" }, { label: "Status", val: "Active" }, { label: "Combat Style", val: "Crossbow / Poison" }]
                    },
                    {
                        name: "Jacques de Aldersberg", role: "Grand Master • Order", avatar: "images/characters/w1-jacques.jpg",
                        quote: "“I saw the White Frost engulf the worlds. I am the only salvation.”",
                        stats: [{ label: "Affiliation", val: "Order of the Flaming Rose" }, { label: "Status", val: "Active" }, { label: "Threat Level", val: "Extreme" }]
                    },
                    {
                        name: "Alvin", role: "Source • Mysterious Child", avatar: "images/characters/w1-alvin.jpg",
                        quote: "“The lord of the old place said I have a great destiny...”",
                        stats: [{ label: "Affiliation", val: "Elder Blood Lineage" }, { label: "Status", val: "Protected" }, { label: "Power Tier", val: "Unstable" }]
                    },
                    {
                        name: "Yaevinn", role: "Commando Leader • Scoia'tael", avatar: "images/characters/w1-yaevinn.jpg",
                        quote: "“We fight for freedom, even if we must burn human cities to ash.”",
                        stats: [{ label: "Affiliation", val: "Scoia'tael (Squirrels)" }, { label: "Status", val: "Rebel" }, { label: "Tactics", val: "Guerrilla Warfare" }]
                    },
                    {
                        name: "King Foltest", role: "Ruler of Temeria • Lord of Wyzim", avatar: "images/characters/w1-foltest.jpg",
                        quote: "“A king must choose between the lesser evil and the survival of his crown.”",
                        stats: [{ label: "Affiliation", val: "Temerian Kingdom" }, { label: "Status", val: "Active" }, { label: "Tier", val: "Monarch" }]
                    },
                    {
                        name: "Princess Adda (The Striga)", role: "Cursed Royalty", avatar: "images/characters/w1-adda.jpg",
                        quote: "“Blood tastes sweeter when it runs from a royal throat.”",
                        stats: [{ label: "Affiliation", val: "Temerian Court" }, { label: "Status", val: "Cursed / Relapsed" }, { label: "Form", val: "Human / Striga" }]
                    },
                    {
                        name: "Roderick de Wett", role: "Count • Order Representative", avatar: "images/characters/w1-dewett.jpg",
                        quote: "“I act in the interest of Temeria. And the Order, of course.”",
                        stats: [{ label: "Affiliation", val: "Order / Temerian Nobles" }, { label: "Status", val: "Traitor" }, { label: "Plot Tier", val: "High" }]
                    },
                    {
                        name: "Jaskier (Dandelion)", role: "Master Bard • Poet", avatar: "images/characters/w1-jaskier.jpg",
                        quote: "“A witcher's life is full of blood, but my ballads give it flavor.”",
                        stats: [{ label: "Affiliation", val: "Independent / Oxenfurt" }, { label: "Status", val: "Active" }, { label: "Profession", val: "Bard / Informant" }]
                    },
                    {
                        name: "Zoltan Chivay", role: "Veteran Warrior • Craftsman", avatar: "images/characters/w1-zoltan.jpg",
                        quote: "“A good axe is like an old friend. It never turns its back on you.”",
                        stats: [{ label: "Affiliation", val: "Mahakam Dwarves" }, { label: "Status", val: "Active" }, { label: "Profession", val: "Blacksmith" }]
                    },
                    {
                        name: "Toruviel", role: "Scoia'tael Commando • Rebel", avatar: "images/characters/w1-toruviel.jpg",
                        quote: "“We will die in the woods before we beg dh'oine for a single grain of wheat.”",
                        stats: [{ label: "Affiliation", val: "Scoia'tael" }, { label: "Status", val: "Active" }, { label: "Location", val: "Murky Waters" }]
                    },
                    {
                        name: "Julian", role: "Merchant • Village Leader", avatar: "images/characters/w1-julian.jpg",
                        quote: "“Murky Waters was a peaceful place until the conflict arrived.”",
                        stats: [{ label: "Affiliation", val: "Murky Waters" }, { label: "Status", val: "Active" }, { label: "Conflict", val: "Love Triangle" }]
                    },
                    {
                        name: "Alina", role: "Village Girl • Midday Bride", avatar: "images/characters/w1-alina.jpg",
                        quote: "“The sun is so hot... Why am I wearing a wedding dress in the fields?”",
                        stats: [{ label: "Affiliation", val: "Murky Waters" }, { label: "Status", val: "Deceased / Noonwraith" }, { label: "Form", val: "Wraith" }]
                    },
                    {
                        name: "Celina", role: "Jealous Sister • Night Bride", avatar: "images/characters/w1-celina.jpg",
                        quote: "“She had everything. The gold, the love... Now she has nothing.”",
                        stats: [{ label: "Affiliation", val: "Murky Waters" }, { label: "Status", val: "Deceased / Nightwraith" }, { label: "Form", val: "Wraith" }]
                    },
                    {
                        name: "The Lady of the Lake", role: "Goddess • Keeper of Excalibur", avatar: "images/characters/w1-lady.jpg",
                        quote: "“Destiny is a path you walk, witcher. Aerondight will help you carve it.”",
                        stats: [{ label: "Affiliation", val: "Avalon / Murky Waters" }, { label: "Status", val: "Divine" }, { label: "Gift", val: "Aerondight Sword" }]
                    },
                    {
                        name: "The Fisher King", role: "Silent Guardian", avatar: "images/characters/w1-fisher.jpg",
                        quote: "“...”",
                        stats: [{ label: "Affiliation", val: "Lady of the Lake" }, { label: "Status", val: "Active" }, { label: "Trait", val: "Mute" }]
                    },
                    {
                        name: "Berengar", role: "Renegade Witcher • School of the Wolf", avatar: "images/characters/w1-berengar.jpg",
                        quote: "“The witchers stole my life. I hate what I became.”",
                        stats: [{ label: "Affiliation", val: "Independent / Salamandra" }, { label: "Status", val: "Regretful" }, { label: "Threat Level", val: "High" }]
                    },
                    {
                        name: "The King of the Wild Hunt", role: "Spectral Monarch • Wraith", avatar: "images/characters/w1-wildhunt.jpg",
                        quote: "“You cannot escape destiny, Geralt. You belong to the Hunt.”",
                        stats: [{ label: "Affiliation", val: "Tir ná nÓg / Eredin" }, { label: "Status", val: "Active" }, { label: "Threat Level", val: "Godlike" }]
                    },
                    {
                        name: "Grand Inquisitor White", role: "Torturer • Fanatic", avatar: "images/characters/w1-inquisitor.jpg",
                        quote: "“Pain cleanses the soul of heresy. Scream, mutant, and be saved.”",
                        stats: [{ label: "Affiliation", val: "Order of the Flaming Rose" }, { label: "Status", val: "Active" }, { label: "Location", val: "Wyzim Dungeons" }]
                    },
                    {
                        name: "Golan Vivaldi", role: "Banker • Disgraced Noble", avatar: "images/characters/w1-vivaldi.jpg",
                        quote: "“The humans took my family's bank. But they didn't take my ledger.”",
                        stats: [{ label: "Affiliation", val: "Vivaldi Bank / Non-humans" }, { label: "Status", val: "Bankrupt" }, { label: "Location", val: "Temple Quarter" }]
                    },
                    {
                        name: "Velerad", role: "Burgomaster of Wyzim", avatar: "images/characters/w1-velerad.jpg",
                        quote: "“Politics in Temeria is like wrestling a drowner in deep mud.”",
                        stats: [{ label: "Affiliation", val: "King Foltest's Crown" }, { label: "Status", val: "Active" }, { label: "Duty", val: "City Management" }]
                    }
                ], // Полное закрытие массива персонажей для The Witcher: Enhanced Edition
                  media: `<div class="featured-card"><h5>Teaser Breakdown</h5></div>`
            },
   
});
