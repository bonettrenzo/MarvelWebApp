const mockCharacter = {
    data: {
      results: [
        {
          id: 1011334,
          name: "3-D Man",
          description: "3-D Man es el nombre de dos superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics",
          thumbnail: {
            path: "https://cdn.marvel.com/content/1x/3dman442.jpg",
            extension: "jpg",
          },
          comics: {
            available: 3,
            items: [
              { name: "Avengers: The Initiative (2007) #14" },
              { name: "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)" },
              { name: "Avengers: The Initiative (2007) #15" },
            ],
          },
          series: {
            available: 2,
            items: [
              { name: "Avengers: The Initiative (2007 - 2010)" },
              { name: "Marvel Premiere (1972 - 1981)" },
            ],
          },
          stories: {
            available: 4,
            items: [
              { name: "Cover #19947", type: "cover" },
              { name: "The 3-D Man!", type: "interiorStory" },
              { name: "Cover #19948", type: "cover" },
              { name: "The Return of the 3-D Man!", type: "interiorStory" },
            ],
          },
        },
        {
          id: 1009144,
          name: "A.I.M.",
          description: "A.I.M. (Advanced Idea Mechanics) es una organización de científicos dedicados a la adquisición del poder mundial.",
          thumbnail: {
            path: "https://assets1.ignimgs.com/2019/08/22/morok-br-1566513321715_160w.jpg?width=1280",
            extension: "jpg",
          },
          comics: {
            available: 5,
            items: [
              { name: "Avengers (1998) #67" },
              { name: "Avengers (1998) #68" },
              { name: "Avengers (1998) #69" },
              { name: "Captain America (1968) #124" },
              { name: "Iron Man (1968) #1" },
            ],
          },
          series: {
            available: 3,
            items: [
              { name: "Avengers (1998 - 2004)" },
              { name: "Captain America (1968 - 1996)" },
              { name: "Iron Man (1968 - 1996)" },
            ],
          },
          stories: {
            available: 3,
            items: [
              { name: "Story #1", type: "interiorStory" },
              { name: "Story #2", type: "cover" },
              { name: "Story #3", type: "interiorStory" },
            ],
          },
        },
        {
          id: 1009146,
          name: "Abomination",
          description: "Emil Blonsky se convirtió en el Abominación, uno de los enemigos más fuertes de Hulk.",
          thumbnail: {
            path: "https://i.redd.it/ranking-the-marvel-universe-day-11-abomination-v0-te18rcytv1xc1.jpg?width=2292&format=pjpg&auto=webp&s=4d4fbb639339a8613fe846abc31490872e5a270a",
            extension: "jpg",
          },
          comics: {
            available: 4,
            items: [
              { name: "Incredible Hulk (1962) #159" },
              { name: "Incredible Hulk (1962) #90" },
              { name: "Incredible Hulk (1962) #91" },
              { name: "Incredible Hulk (1962) #92" },
            ],
          },
          series: {
            available: 1,
            items: [{ name: "Incredible Hulk (1962 - 1999)" }],
          },
          stories: {
            available: 2,
            items: [
              { name: "Abomination Returns", type: "interiorStory" },
              { name: "Gamma Battle", type: "cover" },
            ],
          },
        },
        {
          id: 1009148,
          name: "Absorbing Man",
          description: "Carl 'Crusher' Creel es el Hombre Absorbente, capaz de absorber las propiedades de cualquier cosa que toca.",
          thumbnail: {
            path: "https://static.wikia.nocookie.net/villains/images/7/7f/Absorbing_man.jpg",
            extension: "jpg",
          },
          comics: {
            available: 3,
            items: [
              { name: "Journey Into Mystery (1952) #114" },
              { name: "Incredible Hulk (1962) #125" },
              { name: "Thor (1966) #206" },
            ],
          },
          series: {
            available: 2,
            items: [
              { name: "Journey Into Mystery (1952 - 1966)" },
              { name: "Thor (1966 - 1996)" },
            ],
          },
          stories: {
            available: 2,
            items: [
              { name: "Hammer vs Ball", type: "interiorStory" },
              { name: "Thor Battles Creel", type: "cover" },
            ],
          },
        },
        {
          id: 1009150,
          name: "Adam Warlock",
          description: "Adam Warlock es un ser artificial con poderes cósmicos, a menudo involucrado en conflictos universales.",
          thumbnail: {
            path: "https://www.marvel-world.com/contents/encyclopedie/biographies/w/warlock-adam/warlock-adam_0.jpg",
            extension: "jpg",
          },
          comics: {
            available: 6,
            items: [
              { name: "Warlock (1972) #1" },
              { name: "Infinity Gauntlet (1991) #3" },
              { name: "Infinity Watch (1992) #5" },
              { name: "Silver Surfer (1987) #46" },
              { name: "Thanos Quest (1990) #2" },
              { name: "Infinity War (1992) #4" },
            ],
          },
          series: {
            available: 4,
            items: [
              { name: "Warlock (1972 - 1976)" },
              { name: "Infinity Gauntlet (1991)" },
              { name: "Infinity Watch (1992 - 1995)" },
              { name: "Infinity War (1992)" },
            ],
          },
          stories: {
            available: 4,
            items: [
              { name: "Warlock Awakens", type: "interiorStory" },
              { name: "The Soul Gem", type: "cover" },
              { name: "Thanos vs Warlock", type: "interiorStory" },
              { name: "The Cosmic Decision", type: "interiorStory" },
            ],
          },
        },
        {
          id: 1009151,
          name: "Agent X",
          description: "Alex Hayden es Agent X, un mercenario con habilidades de regeneración y gran puntería.",
          thumbnail: {
            path: "https://upload.wikimedia.org/wikipedia/en/a/a9/Agent_X_03_Udon_Studios.jpg",
            extension: "jpg",
          },
          comics: {
            available: 2,
            items: [
              { name: "Agent X (2002) #1" },
              { name: "Agent X (2002) #2" },
            ],
          },
          series: {
            available: 1,
            items: [{ name: "Agent X (2002 - 2003)" }],
          },
          stories: {
            available: 2,
            items: [
              { name: "Who is Agent X?", type: "interiorStory" },
              { name: "Cover #1", type: "cover" },
            ],
          },
        },
        {
          id: 1009152,
          name: "Agent Zero",
          description: "David North, también conocido como Maverick y luego como Agent Zero, fue parte del programa Arma X.",
          thumbnail: {
            path: "https://s3.amazonaws.com/comicgeeks/characters/avatars/6040.jpg",
            extension: "jpg",
          },
          comics: {
            available: 3,
            items: [
              { name: "Weapon X (2002) #1" },
              { name: "Weapon X (2002) #3" },
              { name: "Weapon X (2002) #6" },
            ],
          },
          series: {
            available: 1,
            items: [{ name: "Weapon X (2002 - 2004)" }],
          },
          stories: {
            available: 2,
            items: [
              { name: "The Mission Begins", type: "interiorStory" },
              { name: "Cover Weapon X #1", type: "cover" },
            ],
          },
        },
        {
          id: 1009153,
          name: "Agatha Harkness",
          description: "Agatha es una poderosa bruja que ha sido mentora de Scarlet Witch y aliada de los Cuatro Fantásticos.",
          thumbnail: {
            path: "https://static.wikia.nocookie.net/tasw/images/8/8f/Agatha_Harkness_%28Marvel_Comics%29.png",
            extension: "jpg",
          },
          comics: {
            available: 4,
            items: [
              { name: "Fantastic Four (1961) #94" },
              { name: "Fantastic Four (1961) #185" },
              { name: "Vision and the Scarlet Witch (1982) #1" },
              { name: "WandaVision (2021) #2" },
            ],
          },
          series: {
            available: 3,
            items: [
              { name: "Fantastic Four (1961 - 1996)" },
              { name: "Vision and the Scarlet Witch (1982 - 1983)" },
              { name: "WandaVision (2021)" },
            ],
          },
          stories: {
            available: 3,
            items: [
              { name: "The Witch's Arrival", type: "interiorStory" },
              { name: "Mystic Guardian", type: "cover" },
              { name: "Spellbound", type: "interiorStory" },
            ],
          },
        },
        {
          id: 1009154,
          name: "Air-Walker",
          description: "Gabriel Lan, un oficial de la Nova Corps, fue transformado en el heraldo cósmico Air-Walker por Galactus.",
          thumbnail: {
            path: "https://static.wikia.nocookie.net/marveldatabase/images/1/1e/Air-Walker_%28Automaton%29_%28Earth-616%29_from_Fantastic_Four_Vol_1_120_0001.jpg",
            extension: "jpg",
          },
          comics: {
            available: 3,
            items: [
              { name: "Thor (1966) #305" },
              { name: "Silver Surfer (1987) #25" },
              { name: "Fantastic Four (1961) #120" },
            ],
          },
          series: {
            available: 2,
            items: [
              { name: "Thor (1966 - 1996)" },
              { name: "Silver Surfer (1987 - 1998)" },
            ],
          },
          stories: {
            available: 2,
            items: [
              { name: "Arrival of Air-Walker", type: "interiorStory" },
              { name: "Galactus's New Herald", type: "cover" },
            ],
          },
        },
      ],
    },
  };
  
  export default mockCharacter;
  