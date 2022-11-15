//create database(planets), add collection

use solarSystem
db.dropDatabase();

db.solarSystemCollection.insertMany([
    {
        "name": "Mercury",
        "pronunciation": "muh-kyuh-ree",
        "length_of_year": "88 Earth days", 
        "fact_1": "Our Solar Systems smallest planet as Pluto has been disqualified",
        "fact_2": "It might have previously had magma oceans",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/600px-Mercury_in_true_color.jpg", //%28 %29 may need to be replaced with ()
        "gif": "https://media1.giphy.com/media/l0HlO4V8iCRME3i0g/giphy.gif?cid=790b7611ea699bd37fdc474308fd03ff9a0504b403a52ceb&rid=giphy.gif&ct=g",
        "number_of_moons": "0",
        "avg_temp_celsius": "178",
        "avg_temp_fahrenheit": "354",
        "discovered_by": "Thomas Harriott & Galileo Galilei",
        "date_of_discovery": "1631",
        "gravity": "3.7",  // m/s2
        "rotation": "59",  // days
        "radius": "2,439.7", //km
        "distance_to_sun": "68.517", // million km
        "sunlight_contact": "3.2", // minutes
        "profile": "The smallest planet in our solar system and the closest to the sun. The BepiColombo spacecraft is scheduled to arrive at Mercury in 2025",
        "audio": "https://upload.wikimedia.org/wikipedia/commons/e/e4/En-us-mercury.ogg",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"    
    },
    {
        "name": "Venus",
        "pronunciation": "vee-nuhs",
        "length_of_year": "225 Earth years", 
        "fact_1": "Was the first planet to be explored by Spacecraft!",
        "fact_2": "Unlike most of the planets in our Solar System, Venus spins clockwise",
        "img": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Venus_2_Approach_Image.jpg", 
        "gif": "https://media4.giphy.com/media/l0MYB89UFsVqLY5oc/giphy.gif?cid=790b7611e3196e9dbc53a3ddc5c3cbeaead73cc58721d6c2&rid=giphy.gif&ct=g",
        "number_of_moons": "0",
        "avg_temp_celsius": "452",
        "avg_temp_fahrenheit": "847",
        "discovered_by": "Galileo Galilei",
        "date_of_discovery": "1610",
        "gravity": "8.87",
        "rotation": "243", // days
        "radius": "6,051.8",
        "distance_to_sun": "108.45",
        "sunlight_contact": "6", // minutes
        "profile": "Venus is the brightest natural object in Earth's sky, other than the Sun and Moon. Venus is one of the few planets in the Solar System that has no moons",
        "audio": "https://upload.wikimedia.org/wikipedia/commons/2/22/En-us-Venus.ogg",
        "source": "https://en.wikipedia.org/wiki/Venus"       
    },
    {
        "name": "Earth",
        "pronunciation": "uhth",
        "length_of_year": "365 days", // this has to be hardcoded in because the others are XX years instead of days.
        "fact_1": "we named our planet 'dirt'",
        "fact_2": "we have 1 natural satellite (the moon) and 4,500 artificial satellites!",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg", // %28%29 may need replacing with ()
        "gif": "https://media.tenor.com/4sL95F-2BjwAAAAM/earth.gif",
        "number_of_moons": "1",
        "avg_temp_celsius": "13",
        "avg_temp_fahrenheit": "57",
        "discovered_by": "Unknown",
        "date_of_discovery": "Unknown",
        "gravity": "9.807", 
        "rotation": "24",  // hours
        "radius": "6,371",
        "distance_to_sun": "148.1",
        "sunlight_contact": "8.3", // minutes
        "profile": "To this date, the only planet confirmed to support human life",
        "audio": "https://upload.wikimedia.org/wikipedia/commons/a/ad/En-us-earth.ogg",
        "source": "https://en.wikipedia.org/wiki/Earth"
    },
    {
        "name": "Mars",
        "pronunciation": "maaz",
        "length_of_year": "1.9 Earth years", 
        "fact_1": "Also known as the Red Planet",
        "fact_2": "Dust storms on mars can cover the entire planet and last for months!",
        "img": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png", 
        "gif": "https://thumbs.gfycat.com/FemaleSnoopyDoctorfish-size_restricted.gif",
        "number_of_moons": "2",
        "avg_temp_celsius": "-62",
        "avg_temp_fahrenheit": "-81",
        "discovered_by": "Galileo Galilei",
        "date_of_discovery": "1610",
        "gravity": "3.721",
        "rotation": "24.6",  //hours
        "radius": "3,389.5",
        "distance_to_sun": "225.75",
        "sunlight_contact": "12.6", // minutes
        "profile": "Sometimes known as the Red Planet. Although it has days and seasons comparable to Earth, its atmostphere is extremely thin",
        "audio": "https://upload.wikimedia.org/wikipedia/commons/b/b5/En-us-mars.ogg",
        "source": "https://en.wikipedia.org/wiki/Mars"         
    },
    {
        "name": "Jupiter",
        "pronunciation": "joo-puh-tuh",
        "length_of_year": "11.9 Earth years", 
        "fact_1": "The largest and fastest spinning planet in our solar system!",
        "fact_2": "Jupiter's rings was not discovered until 1979.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Jupiter_New_Horizons.jpg", 
        "gif": "https://media.tenor.com/Do8FV2K_YAUAAAAd/jupiter-planet.gif",
        "number_of_moons": "67",
        "avg_temp_celsius": "-150",
        "avg_temp_fahrenheit": "-238",
        "discovered_by": "Galilei Galilei",
        "date_of_discovery": "1610",
        "gravity": "24.79",
        "rotation": "10",  //hours
        "radius": "69,911",
        "distance_to_sun": "740.97",
        "sunlight_contact": "43.2", // minutes
        "profile": "A gas giant and the largest planet in our Solar System. Its Great Red Spot is a giant storm that has been observed since 1831",
        "audio": "https://upload.wikimedia.org/wikipedia/commons/c/c5/En-us-Jupiter.ogg",
        "source": "https://en.wikipedia.org/wiki/Jupiter"        
    },
    {
        "name": "Saturn",
        "pronunciation": "sa-tn",
        "length_of_year": "29.5 Earth years", 
        "fact_1": "Has the biggest and brightest rings in our solar system",
        "fact_2": "Saturn is a gas giant so you cannot stand on it!",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg", 
        "gif": "https://thumbs.gfycat.com/ImmaculateEthicalIberianbarbel-mobile.mp4",
        "number_of_moons": "83",
        "avg_temp_celsius": "-176",
        "avg_temp_fahrenheit": "-285",
        "discovered_by": "Galileo Galilei",
        "date_of_discovery": "1610",
        "gravity": "10.44",
        "rotation": "10.7", // hours
        "radius": "58,232",
        "distance_to_sun": "1.4712",  // BILLION km
        "sunlight_contact": "79.3", // minutes
        "profile": "Although not the only planet in the Solar System with rings, Saturn's is by far the most prominent. Although 83 moons have been confirmed, only 53 are officially named",
        "audio": "https://upload.wikimedia.org/wikipedia/commons/9/90/En-us-Saturn.ogg",
        "source": "https://en.wikipedia.org/wiki/Saturn"
    }, 
    {
        "name": "Uranus",
        "pronunciation": "yuor-ray-nuhs",
        "length_of_year": "84 Earth years", 
        "fact_1": "Uranus was possibly impacted by celestial object which is thought to explain its unusual axis of rotation",
        "fact_2": "It only takes Uranus 17 hours to complete 1 rotation!",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg", 
        "gif": "https://i.gifer.com/origin/25/25da6b58e71f4ef3d9df2ba8200daf98_w200.gif",
        "number_of_moons": "27",
        "avg_temp_celsius": "-213",
        "avg_temp_fahrenheit": "-353",
        "discovered_by": "William Herschel",
        "date_of_discovery": "1781",
        "gravity": "8.87",
        "rotation": "17", // hours
        "radius": "25,362",
        "distance_to_sun": "2.9427", // billion km
        "sunlight_contact": "159.6", // minutes
        "profile": "With the coldest planetary atmosphere in the Solar System, Uranus is often classed as one of 2 'ice giants' (the other being Neptune)",
        "audio": "https://upload.wikimedia.org/wikipedia/commons/1/1c/En-us-Uranus.ogg",
        "source": "https://en.wikipedia.org/wiki/Uranus"       
    },
    {
        "name": "Neptune",
        "pronunciation": "nep-choon",
        "length_of_year": "168.8 Earth years", 
        "fact_1": "Named after the Roman God of the Sea!",
        "fact_2": "Neptune is our most distant planet.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg", 
        "gif": "https://thumbs.gfycat.com/GoodGlisteningDutchshepherddog-size_restricted.gif",
        "number_of_moons": "14",
        "avg_temp_celsius": "-255",
        "avg_temp_fahrenheit": "-373",
        "discovered_by": "Urbain Le Verrier",
        "date_of_discovery": "1846",
        "gravity": "11.15",
        "rotation": "16",  // hours
        "radius": "24,622",
        "distance_to_sun": "4.4738",  // billion km
        "sunlight_contact": "4.1", // HOURS
        "profile": "Although first observed in 1846, Neptunes existance was mathematically predicted years before. Unexpected changes in the orbit of Uranus led to the hypothesis of the gravitatonal pull of an unknown planet being the cause",
        "audio": "https://upload.wikimedia.org/wikipedia/commons/f/f3/En-us-Neptune.ogg",
        "source": "https://en.wikipedia.org/wiki/Neptune"        
    },  
    // {
    //     // "name": "",
    //     // "pronunciation": "",
    //     // "length_of_year": "", 
    //     // "fact_1": "",
    //     // "fact_2": "",
    //     // "img": "", 
    //     // "gif": "",
    //     // "number_of_moons": "",
    //     // "avg_temp_celsius": "",
    //     // "avg_temp_fahrenheit": "",
    //     // "discovered_by": "",
    //     // "date_of_discovery": "",
    //     // "gravity": "",
    //     // "rotation": "",
    //     // "radius": "",
    //     // "distance_to_sun": "",
    //     // "profile": "",
    //     // "audio": "",
    //     // "source": ""        
    // },

]);