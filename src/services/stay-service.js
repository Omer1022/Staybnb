import { storageService } from "./storage-service.js";
import { utilService } from "./util-service.js";

export const stayService = {
  query,
  getById,
  getEmptyStay,
  saveStay,
  removeStay,
};

const STAY_KEY = "keyDB";

_createStays();

function query() {
  return storageService.query(STAY_KEY);
}

function getById(stayId) {
  return storageService.get(STAY_KEY, stayId);
}

function getEmptyStay() {
  return {
    _id: utilService.makeId(),
    name: "",
    type,
    imgUrls,
    price: utilService.getRandomIntInclusive(0, 300),
    amenities: ["TV", "Wifi", "Kitchen"],
  };
}

function saveStay(stay) {
  const savedStay = stay._id
    ? storageService.put(STAY_KEY, stay)
    : storageService.post(STAY_KEY, stay);
  return savedStay;
}

function removeStay(stay) {
  return storageService.remove(STAY_KEY, stay);
}

function _createStays() {
  let stays = JSON.parse(localStorage.getItem(STAY_KEY));
  if (!stays || !stays.length) {
    stays = [
      {
        _id: "10006546",
        numOfBeds: 6,
        name: "Ribeira Charming Duplex",
        type: "House",
        imgUrls: ["075.jpeg", "079.jpeg", "061.jpeg", "111.jpeg", "087.jpeg"],
        price: 80,
        summary:
          "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        capacity: 8,
        amenities: [
          "Internet",
          "Wifi",
          "Air conditioning",
          "Pets allowed",
          "Kitchen",
          "Iron",
          "Laptop friendly workspace",
        ],
        host: {
          _id: "51399391",
          fullname: "Davit Pok",
          imgUrl: "https://robohash.org/123605344?set=set1",
        },
        loc: {
          country: "Portugal",
          countryCode: "PT",
          city: "Porto",
          address: "17 Kombo st",
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: "madeId",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
              _id: "u102",
              fullname: "user2",
              imgUrl: "https://robohash.org/123605344?set=set1",
            },
          },
        ],
      },
      {
        _id: "10006547",
        numOfBeds: 5,
        name: "Fresh and modern 1BR in Bed-Stuy",
        type: "Apartment",
        imgUrls: ["101.jpeg", "037.jpeg", "038.jpeg", "043.jpeg", "113.jpeg"],
        price: 100,
        summary:
          "A spacious, art-filled one-bedroom apartment near the express train (28 minutes to Times Square) and a Citibike station. Sample Bed-Stuy life at a nearby French restaurant,  a sunny Haitian cafe, a boutique grocery and more. We do NOT discriminate based on race, religion or sexual orientation.",
        capacity: 2,
        amenities: [
          "Internet",
          "Wifi",
          "Air conditioning",
          "Pets allowed",
          "Kitchen",
          "Iron",
          "Laptop friendly workspace",
        ],
        host: {
          _id: "622f3402e36c59e6164fac46",
          numOfBeds: 4,
          fullname: "Shaila & Alex",
          imgUrl: "https://robohash.org/123605344?set=set1",
        },
        loc: {
          country: "US",
          countryCode: "US",
          city: "Brooklyn",
          address: "Brooklyn, NY",
          lat: -73.92922,
          lan: 40.68683,
        },
        reviews: [
          {
            at: "2013-05-27",
            txt: "Shaila's place is amazing! It's new, it's clean and it's big! And Shaila is very accommodating, we found everything we needed (cooking, coffee) and more. Given that we were the first guests she hosted through airbnb I can say that she did an amazing job! \r\n",
            rate: 3.7,
            by: {
              _id: "622f3407e36c59e6164fbfd2",
              fullname: "Nicolas",
              imgUrl: "https://robohash.org/4523027?set=set1",
              id: "4523027",
            },
          },
          {
            at: "2013-06-04",
            by: {
              _id: "622f3403e36c59e6164fb048",
              fullname: "Jeff",
              imgUrl: "https://robohash.org/6443424?set=set1",
              id: "6443424",
            },
            txt: "Great, quiet place to stay. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. ",
          },
          {
            at: "2013-06-13",
            by: {
              _id: "622f3406e36c59e6164fba55",
              fullname: "Carla",
              imgUrl: "https://robohash.org/6121036?set=set1",
              id: "6121036",
            },
            txt: "Shaila and Alex are wonderful hosts really, they helped us every time we needed with directions, the internet, the supermarket, the post office !!! (thank you guys !!!).The place and the neighbord are great, 8 blocks far from the apartment you have the subway and 30 min. later you are in the island, we moved early in the morning, late at night (sometimes we came back at 2am) and everything turned out great.Definetly I would come back to their apartment, It's bigger than ours in Argentina !!! I look forward to stay there again and, next time, go out with you guys and have a beer or anything.\r\nBye !!! - Guido and Carla - ",
          },
        ],
      },
      {
        _id: "10006548",
        numOfBeds: 8,
        name: "Belle chambre à côté Metro Papineau",
        type: "Apartment",
        imgUrls: ["074.jpeg", "077.jpeg", "060.jpeg", "110.jpeg", "086.jpeg"],
        price: 120,
        summary:
          "Chambre dans un bel appartement moderne avec balcon, ascenseur et terrasse. Private room in a beautiful modern apartment  with balcony, elevator and patio. La chambre est fermée avec une lit double. Vous aurez accès à une salle de bain avec une douche, terrasse. L'appartement est climatisé.  Votre chambre est équipé d'une connexion Wi-Fi illimité. Vous serez proche du centre ville, au pied du pont Jacques Cartier et à distance de marche de toutes les commodités (métro, supermarché, pharmacie",
        capacity: 2,
        amenities: [
          "Internet",
          "Wifi",
          "Air conditioning",
          "Pets allowed",
          "Kitchen",
          "Iron",
          "Laptop friendly workspace",
        ],
        host: {
          _id: "622f3401e36c59e6164fabab",
          fullname: "Angel",
          imgUrl: "https://robohash.org/123605344?set=set1",
        },
        loc: {
          country: "Canada",
          countryCode: "CD",
          city: "Montréal",
          address: "17 Kombo st",
          lat: -73.54985,
          lan: 45.52797,
        },
        reviews: [
          {
            at: "2016-07-07",
            rate: 4.6,
            by: {
              _id: "622f3407e36c59e6164fc058",
              fullname: "Rowan",
              imgUrl: "https://robohash.org/81703602?set=set1",
              id: "81703602",
            },
            txt: "The place was great, as was the host! I would recommend staying here.",
          },
          {
            at: "2016-07-08",
            by: {
              _id: "622f3403e36c59e6164fb274",
              fullname: "Adriana",
              imgUrl: "https://robohash.org/64310987?set=set1",
              id: "64310987",
            },
            txt: "J'ai adoré rester là. Très acceuillant.",
          },
          {
            at: "2016-07-12",
            by: {
              _id: "622f3405e36c59e6164fb87c",
              fullname: "Emma",
              imgUrl: "https://robohash.org/23709900?set=set1",
              id: "23709900",
            },
            txt: "Angel est un hôte très sympa et arrangeant ! L'appartement est agréable à vivre et propre. Proche du métro et du centre ville. Nous avons passé un très bon séjour !",
          },
          {
            at: "2016-08-02",
            by: {
              _id: "622f3408e36c59e6164fc082",
              fullname: "Jeffery",
              imgUrl: "https://robohash.org/44882622?set=set1",
              id: "44882622",
            },
            txt: "Angel was warm and welcoming and has a beautiful apartment. I'd recommend his place to anyone visiting downtown Montreal!",
          },
        ],
      },
      {
        _id: "10006549",
        numOfBeds: 2,
        name: "Nice Cosy Room In Taksim",
        type: "Apartment",
        imgUrls: ["042.jpeg", "110.jpeg", "037.jpeg", "005.jpeg", "075.jpeg"],
        price: 90,
        summary:
          "Welcome if you want to stay at a cozy flat with local experience.:) It is in the center of Istanbul.The neighborhood is safe and close to attractions.Transportation is easy. I will help you always.",
        capacity: 2,
        amenities: [
          "Internet",
          "Wifi",
          "Air conditioning",
          "Pets allowed",
          "Kitchen",
          "Iron",
          "Laptop friendly workspace",
        ],
        host: {
          _id: "622f3402e36c59e6164fae4d",
          fullname: "Nihat",
          imgUrl: "https://robohash.org/123605344?set=set1",
        },
        loc: {
          country: "Turkey",
          countryCode: "TR",
          city: "Istanbul",
          address: "Taksim, Cihangir",
          lat: 28.98648,
          lan: 41.03376,
        },
        reviews: [
          {
            at: "2014-04-06",
            rate: 3.9,
            by: {
              _id: "622f3406e36c59e6164fbcc7",
              fullname: "Quentin",
              imgUrl: "https://robohash.org/12424603?set=set1",
              id: "12424603",
            },
            txt: "I greatly appreciated both the location of the place (very central) and the appartment per se (clean and comfortable, with a very cosy room and with Wi-Fi). \r\n\r\nNihat was perfect host, quite welcoming and helpful about places to go (or avoid) and things to do in town. \r\n\r\nHosça kal!\r\n\r\n\r\n",
          },
          {
            at: "2015-04-02",
            by: {
              _id: "622f3405e36c59e6164fb7f6",
              fullname: "Steve",
              imgUrl: "https://robohash.org/10300292?set=set1",
              id: "10300292",
            },
            txt: "Nice room in a flat well located. Nihat is very nce and helpful. Good experience.",
          },
          {
            at: "2015-05-19",
            by: {
              _id: "622f3404e36c59e6164fb624",
              fullname: "Jess",
              imgUrl: "https://robohash.org/8641944?set=set1",
              id: "8641944",
            },
            txt: "We had a fantastic stay in this charming apartment. The location was perfect and Nihat welcomed us even when we made a late reservation and arrived early. He works at a bar no far from there- a great place to have a drink after seeing the sites! I highly recommend this place!",
          },
        ],
      },
      {
        _id: "10006546",
        numOfBeds: 6,
        name: "Ribeira Charming Duplex",
        type: "House",
        imgUrls: ["075.jpeg", "079.jpeg", "061.jpeg", "111.jpeg", "087.jpeg"],
        price: 80,
        summary:
          "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        capacity: 8,
        amenities: [
          "Internet",
          "Wifi",
          "Air conditioning",
          "Pets allowed",
          "Kitchen",
          "Iron",
          "Laptop friendly workspace",
        ],
        host: {
          _id: "51399391",
          fullname: "Davit Pok",
          imgUrl: "https://robohash.org/123605344?set=set1",
        },
        loc: {
          country: "Portugal",
          countryCode: "PT",
          city: "Porto",
          address: "17 Kombo st",
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: "madeId",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
              _id: "u102",
              fullname: "user2",
              imgUrl: "https://robohash.org/123605344?set=set1",
            },
          },
        ],
      },
      {
        _id: "10006547",
        numOfBeds: 5,
        name: "Fresh and modern 1BR in Bed-Stuy",
        type: "Apartment",
        imgUrls: ["101.jpeg", "037.jpeg", "038.jpeg", "043.jpeg", "113.jpeg"],
        price: 100,
        summary:
          "A spacious, art-filled one-bedroom apartment near the express train (28 minutes to Times Square) and a Citibike station. Sample Bed-Stuy life at a nearby French restaurant,  a sunny Haitian cafe, a boutique grocery and more. We do NOT discriminate based on race, religion or sexual orientation.",
        capacity: 2,
        amenities: [
          "Internet",
          "Wifi",
          "Air conditioning",
          "Kitchen",
          "Heating",
          "Family/kid friendly",
          "Smoke detector",
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Essentials",
          "Shampoo",
          "24-hour check-in",
          "Hangers",
          "Hair dryer",
          "Iron",
          "Laptop friendly workspace",
          "translation missing: en.hosting_amenity_49",
          "Self check-in",
          "Lockbox",
        ],
        host: {
          _id: "622f3402e36c59e6164fac46",
          numOfBeds: 4,
          fullname: "Shaila & Alex",
          imgUrl: "https://robohash.org/123605344?set=set1",
        },
        loc: {
          country: "US",
          countryCode: "US",
          city: "Brooklyn",
          address: "Brooklyn, NY",
          lat: -73.92922,
          lan: 40.68683,
        },
        reviews: [
          {
            at: "2013-05-27",
            by: {
              _id: "622f3407e36c59e6164fbfd2",
              fullname: "Nicolas",
              imgUrl: "https://robohash.org/4523027?set=set1",
              id: "4523027",
            },
            txt: "Shaila's place is amazing! It's new, it's clean and it's big! And Shaila is very accommodating, we found everything we needed (cooking, coffee) and more. Given that we were the first guests she hosted through airbnb I can say that she did an amazing job! \r\n",
          },
          {
            at: "2013-06-04",
            by: {
              _id: "622f3403e36c59e6164fb048",
              fullname: "Jeff",
              imgUrl: "https://robohash.org/6443424?set=set1",
              id: "6443424",
            },
            txt: "Great, quiet place to stay. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. ",
          },
          {
            at: "2013-06-13",
            by: {
              _id: "622f3406e36c59e6164fba55",
              fullname: "Carla",
              imgUrl: "https://robohash.org/6121036?set=set1",
              id: "6121036",
            },
            txt: "Shaila and Alex are wonderful hosts really, they helped us every time we needed with directions, the internet, the supermarket, the post office !!! (thank you guys !!!).The place and the neighbord are great, 8 blocks far from the apartment you have the subway and 30 min. later you are in the island, we moved early in the morning, late at night (sometimes we came back at 2am) and everything turned out great.Definetly I would come back to their apartment, It's bigger than ours in Argentina !!! I look forward to stay there again and, next time, go out with you guys and have a beer or anything.\r\nBye !!! - Guido and Carla - ",
          },
        ],
      },
      {
        _id: "10006548",
        numOfBeds: 8,
        name: "Belle chambre à côté Metro Papineau",
        type: "Apartment",
        imgUrls: ["074.jpeg", "077.jpeg", "060.jpeg", "110.jpeg", "086.jpeg"],
        price: 120,
        summary:
          "Chambre dans un bel appartement moderne avec balcon, ascenseur et terrasse. Private room in a beautiful modern apartment  with balcony, elevator and patio. La chambre est fermée avec une lit double. Vous aurez accès à une salle de bain avec une douche, terrasse. L'appartement est climatisé.  Votre chambre est équipé d'une connexion Wi-Fi illimité. Vous serez proche du centre ville, au pied du pont Jacques Cartier et à distance de marche de toutes les commodités (métro, supermarché, pharmacie",
        capacity: 2,
        amenities: [
          "Internet",
          "Wifi",
          "Air conditioning",
          "Pets allowed",
          "Kitchen",
          "Iron",
          "Laptop friendly workspace",
        ],
        host: {
          _id: "622f3401e36c59e6164fabab",
          fullname: "Angel",
          imgUrl: "https://robohash.org/123605344?set=set1",
        },
        loc: {
          country: "Canada",
          countryCode: "CD",
          city: "Montréal",
          address: "17 Kombo st",
          lat: -73.54985,
          lan: 45.52797,
        },
        reviews: [
          {
            at: "2016-07-07",
            by: {
              _id: "622f3407e36c59e6164fc058",
              fullname: "Rowan",
              imgUrl: "https://robohash.org/81703602?set=set1",
              id: "81703602",
            },
            txt: "The place was great, as was the host! I would recommend staying here.",
          },
          {
            at: "2016-07-08",
            by: {
              _id: "622f3403e36c59e6164fb274",
              fullname: "Adriana",
              imgUrl: "https://robohash.org/64310987?set=set1",
              id: "64310987",
            },
            txt: "J'ai adoré rester là. Très acceuillant.",
          },
          {
            at: "2016-07-12",
            by: {
              _id: "622f3405e36c59e6164fb87c",
              fullname: "Emma",
              imgUrl: "https://robohash.org/23709900?set=set1",
              id: "23709900",
            },
            txt: "Angel est un hôte très sympa et arrangeant ! L'appartement est agréable à vivre et propre. Proche du métro et du centre ville. Nous avons passé un très bon séjour !",
          },
          {
            at: "2016-08-02",
            by: {
              _id: "622f3408e36c59e6164fc082",
              fullname: "Jeffery",
              imgUrl: "https://robohash.org/44882622?set=set1",
              id: "44882622",
            },
            txt: "Angel was warm and welcoming and has a beautiful apartment. I'd recommend his place to anyone visiting downtown Montreal!",
          },
        ],
      },
      {
        _id: "10006549",
        numOfBeds: 2,
        name: "Nice Cosy Room In Taksim",
        type: "Apartment",
        imgUrls: ["042.jpeg", "110.jpeg", "037.jpeg", "005.jpeg", "075.jpeg"],
        price: 90,
        summary:
          "Welcome if you want to stay at a cozy flat with local experience.:) It is in the center of Istanbul.The neighborhood is safe and close to attractions.Transportation is easy. I will help you always.",
        capacity: 2,
        amenities: [
          "Internet",
          "Wifi",
          "Air conditioning",
          "Pets allowed",
          "Kitchen",
          "Iron",
          "Laptop friendly workspace",
        ],
        host: {
          _id: "622f3402e36c59e6164fae4d",
          fullname: "Nihat",
          imgUrl: "https://robohash.org/123605344?set=set1",
        },
        loc: {
          country: "Turkey",
          countryCode: "TR",
          city: "Istanbul",
          address: "Taksim, Cihangir",
          lat: 28.98648,
          lan: 41.03376,
        },
        reviews: [
          {
            at: "2014-04-06",
            by: {
              _id: "622f3406e36c59e6164fbcc7",
              fullname: "Quentin",
              imgUrl: "https://robohash.org/12424603?set=set1",
              id: "12424603",
            },
            txt: "I greatly appreciated both the location of the place (very central) and the appartment per se (clean and comfortable, with a very cosy room and with Wi-Fi). \r\n\r\nNihat was perfect host, quite welcoming and helpful about places to go (or avoid) and things to do in town. \r\n\r\nHosça kal!\r\n\r\n\r\n",
          },
          {
            at: "2015-04-02",
            by: {
              _id: "622f3405e36c59e6164fb7f6",
              fullname: "Steve",
              imgUrl: "https://robohash.org/10300292?set=set1",
              id: "10300292",
            },
            txt: "Nice room in a flat well located. Nihat is very nce and helpful. Good experience.",
          },
          {
            at: "2015-05-19",
            by: {
              _id: "622f3404e36c59e6164fb624",
              fullname: "Jess",
              imgUrl: "https://robohash.org/8641944?set=set1",
              id: "8641944",
            },
            txt: "We had a fantastic stay in this charming apartment. The location was perfect and Nihat welcomed us even when we made a late reservation and arrived early. He works at a bar no far from there- a great place to have a drink after seeing the sites! I highly recommend this place!",
          },
        ],
      },
    ];
    localStorage.setItem(STAY_KEY, JSON.stringify(stays));
  }
  return stays;
}
