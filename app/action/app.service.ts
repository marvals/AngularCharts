import { Injectable } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

export class Hotel {
    Id: number;
    Hotel_Name: string;
    Address: string;
    Postal_Code: string;
    Description: string;
    Hotel_Class: string;
    City: string;
    Price: number;
    Images: Array<any>;
}

const data: Hotel[] = [{
    'Id' : 73,
    'Hotel_Name' : 'Hamburg Suites',
    'Address' : 'An Der Alster 82',
    'Postal_Code' : '20099',
    'Description' : 'Only a few hundred meters from the city center, enjoy the energy of Hamburg',
    'Hotel_Class' : 'Diamond',
    'City' : 'Hamburg',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'Hamburg-1.jpg'
        }, {
            'FileName' : 'Lobby-0.jpg'
        }, {
            'FileName' : 'MeetingRoom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-18.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-1-2.jpg'
        }, {
            'FileName' : 'Bathroom-0.jpg'
        }
    ]
}, {
    'Id' : 75,
    'Hotel_Name' : 'The Stanadard Resort',
    'Address' : 'Steindamm 99',
    'Postal_Code' : '20359',
    'Description' : 'At the Standard, there is nothing we won do to make',
    'Hotel_Class' : 'Platinum',
    'City' : 'Hamburg',
    'Price' : 399,
    'Images' : [{
            'FileName' : 'Hamburg-5.jpg'
        }, {
            'FileName' : 'Lobby-14.jpg'
        }, {
            'FileName' : 'Bathroom-3.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-2-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-4.jpg'
        }, {
            'FileName' : 'Restaurant-15.jpg'
        }
    ]
}, {
    'Id' : 76,
    'Hotel_Name' : 'The Park Hotel',
    'Address' : 'Borstelmannsweg 82',
    'Postal_Code' : '20537',
    'Description' : 'The Park remains the go to address for those travelling to the beautiful city of Hamburg',
    'Hotel_Class' : 'Gold',
    'City' : 'Hamburg',
    'Price' : 289,
    'Images' : [{
            'FileName' : 'Hamburg-7.jpg'
        }, {
            'FileName' : 'Lobby-9.jpg'
        }, {
            'FileName' : 'Bathroom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-2-1.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-0.jpg'
        }, {
            'FileName' : 'Restaurant-13.jpg'
        }
    ]
}, {
    'Id' : 28,
    'Hotel_Name' : 'Honolulu Inn',
    'Address' : '822 Mauna Loa Rd',
    'Postal_Code' : '96801',
    'Description' : 'Sun, sand and tropical breezes await you',
    'Hotel_Class' : 'Gold',
    'City' : 'Honolulu',
    'Price' : 111,
    'Images' : [{
            'FileName' : 'Honolulu-0.jpg'
        }, {
            'FileName' : 'Lobby-11.jpg'
        }, {
            'FileName' : 'Bedroom-4-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Pool-14.jpg'
        }, {
            'FileName' : 'Restaurant-6.jpg'
        }
    ]
}, {
    'Id' : 29,
    'Hotel_Name' : 'Waikiki Beach Hotel',
    'Address' : '800 Waikiki Beach Rd',
    'Postal_Code' : '96801',
    'Description' : 'Situated directly on Waikiki Beach you are 100 yards',
    'Hotel_Class' : 'Diamond',
    'City' : 'Honolulu',
    'Price' : 399,
    'Images' : [{
            'FileName' : 'Honolulu-1.jpg'
        }, {
            'FileName' : 'Lobby-13.jpg'
        }, {
            'FileName' : 'Bathroom-3.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-4-10.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Pool-3.jpg'
        }, {
            'FileName' : 'Restaurant-13.jpg'
        }
    ]
}, {
    'Id' : 30,
    'Hotel_Name' : 'Waikiki Suites',
    'Address' : '900 Waikiki Beach Rd',
    'Postal_Code' : '96801',
    'Description' : 'The only all suite hotel on Waikiki Beach. Enjoy panoramic views of the Pac',
    'Hotel_Class' : 'Platinum',
    'City' : 'Honolulu',
    'Price' : 399,
    'Images' : [{
            'FileName' : 'Honolulu-10.jpg'
        }, {
            'FileName' : 'Lobby-2.jpg'
        }, {
            'FileName' : 'Bedroom-4-11.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-7.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Pool-4.jpg'
        }, {
            'FileName' : 'Restaurant-14.jpg'
        }
    ]
}, {
    'Id' : 31,
    'Hotel_Name' : 'White Sand Resort',
    'Address' : '543 Sandy Beach Rd.',
    'Postal_Code' : '96801',
    'Description' : 'A resort of uncompromising beauty. Lush landscaping will make you feel like y',
    'Hotel_Class' : 'Platinum',
    'City' : 'Honolulu',
    'Price' : 499,
    'Images' : [{
            'FileName' : 'Honolulu-2.jpg'
        }, {
            'FileName' : 'Lobby-32.jpg'
        }, {
            'FileName' : 'Bathroom-6.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-4-5.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Pool-3.jpg'
        }, {
            'FileName' : 'Restaurant-7.jpg'
        }
    ]
}, {
    'Id' : 35,
    'Hotel_Name' : 'Sandpiper Hotel',
    'Address' : '424 Sand Hill Rd',
    'Postal_Code' : '96801',
    'Description' : 'Built to amaze, the Sandpiper Hotel includes a 100 million dollar art col',
    'Hotel_Class' : 'Diamond',
    'City' : 'Honolulu',
    'Price' : 599,
    'Images' : [{
            'FileName' : 'Honolulu-6.jpg'
        }, {
            'FileName' : 'Lobby-21.jpg'
        }, {
            'FileName' : 'Bathroom-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-4-8.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Pool-8.jpg'
        }, {
            'FileName' : 'Restaurant-8.jpg'
        }
    ]
}, {
    'Id' : 1,
    'Hotel_Name' : 'Grand Gold Resort',
    'Address' : '123 Las Vegas Blvd.',
    'Postal_Code' : '89120',
    'Description' : 'A gorgeous resort in the heart of Las Vegas. Enjoy our 50,000 gallon po',
    'Hotel_Class' : 'Platinum',
    'City' : 'Las Vegas',
    'Price' : 90,
    'Images' : [{
            'FileName' : 'LV-0.jpg'
        }, {
            'FileName' : 'Bathroom-0.jpg'
        }, {
            'FileName' : 'Bedroom-1-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Pool-0.jpg'
        }, {
            'FileName' : 'Restaurant-0.jpg'
        }
    ]
}, {
    'Id' : 2,
    'Hotel_Name' : 'Desert Sun Resort',
    'Address' : '47 Las Vegas Blvd.',
    'Postal_Code' : '89119',
    'Description' : 'Created by renowned architect John Biltmore, the Desert Sun Resort is the n',
    'Hotel_Class' : 'Platinum',
    'City' : 'Las Vegas',
    'Price' : 105,
    'Images' : [{
            'FileName' : 'LV-1.jpg'
        }, {
            'FileName' : 'Lobby-1.jpg'
        }, {
            'FileName' : 'Bedroom-1-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-1.jpg'
        }, {
            'FileName' : 'Pool-1.jpg'
        }
    ]
}, {
    'Id' : 4,
    'Hotel_Name' : 'Casino World Resort',
    'Address' : '28 Sunset Drive',
    'Postal_Code' : '89120',
    'Description' : 'The ultimate casino in Las Vegas. Based on your play, we comp roo',
    'Hotel_Class' : 'Diamond',
    'City' : 'Las Vegas',
    'Price' : 211,
    'Images' : [{
            'FileName' : 'LV-2.jpg'
        }, {
            'FileName' : 'Pool-11.jpg'
        }, {
            'FileName' : 'Lobby-11.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-3.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-1-3.jpg'
        }, {
            'FileName' : 'Restaurant-10.jpg'
        }
    ]
}, {
    'Id' : 6,
    'Hotel_Name' : 'Paradise Resort',
    'Address' : '524 Paradise Road',
    'Postal_Code' : '89120',
    'Description' : 'Constructed in 2012, the Paradise is the pinnacle of elegance and fun. Enjoy',
    'Hotel_Class' : 'Platinum',
    'City' : 'Las Vegas',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'LV-4.jpg'
        }, {
            'FileName' : 'Bathroom-6.jpg'
        }, {
            'FileName' : 'Bedroom-1-7.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-13.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-4.jpg'
        }, {
            'FileName' : 'Pool-14.jpg'
        }
    ]
}, {
    'Id' : 7,
    'Hotel_Name' : 'Sun World Hotel',
    'Address' : '1000 Las Vegas Blvd.',
    'Postal_Code' : '89119',
    'Description' : 'Enjoy the warmth of Las Vegas in our amazing hotel. Swim in our beau',
    'Hotel_Class' : 'Gold',
    'City' : 'Las Vegas',
    'Price' : 149,
    'Images' : [{
            'FileName' : 'LV-6.jpg'
        }, {
            'FileName' : 'Pool-3.jpg'
        }, {
            'FileName' : 'Restaurant-16.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Lobby-14.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-1-8.jpg'
        }, {
            'FileName' : 'Bathroom-7.jpg'
        }
    ]
}, {
    'Id' : 61,
    'Hotel_Name' : 'Metropolis Hotel',
    'Address' : '822 Edgware Rd',
    'Postal_Code' : 'W2 4AD',
    'Description' : 'At the Metropolis, you will be welcomed by the most professional hotel st',
    'Hotel_Class' : 'Diamond',
    'City' : 'London',
    'Price' : 379,
    'Images' : [{
            'FileName' : 'London-0.jpg'
        }, {
            'FileName' : 'Lobby-4.jpg'
        }, {
            'FileName' : 'Bedroom-5-1.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-0.jpg'
        }, {
            'FileName' : 'Restaurant-18.jpg'
        }
    ]
}, {
    'Id' : 63,
    'Hotel_Name' : 'Royal Grande Hotel',
    'Address' : '99 Garden Park',
    'Postal_Code' : 'W2 3JP',
    'Description' : 'The Royal Grande is the ultimate in luxury. From Kings to Queens, our hotel ha',
    'Hotel_Class' : 'Platinum',
    'City' : 'London',
    'Price' : 449,
    'Images' : [{
            'FileName' : 'London-10.jpg'
        }, {
            'FileName' : 'Lobby-5.jpg'
        }, {
            'FileName' : 'Bedroom-5-14.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-3.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-5.jpg'
        }, {
            'FileName' : 'Restaurant-12.jpg'
        }
    ]
}, {
    'Id' : 65,
    'Hotel_Name' : 'Palace Hotel',
    'Address' : '537 Southwark',
    'Postal_Code' : 'SE1 9HH',
    'Description' : 'The epitome of luxury, the Palace is near all the famous landmarks in the city o',
    'Hotel_Class' : 'Platinum',
    'City' : 'London',
    'Price' : 389,
    'Images' : [{
            'FileName' : 'London-3.jpg'
        }, {
            'FileName' : 'Lobby-3.jpg'
        }, {
            'FileName' : 'Bedroom-4-3.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-3.jpg'
        }, {
            'FileName' : 'Bathroom-0.jpg'
        }
    ]
}, {
    'Id' : 12,
    'Hotel_Name' : 'Downtown Inn',
    'Address' : '528 Pico Blvd.',
    'Postal_Code' : '90012',
    'Description' : 'In the heart of LA business district, the Downtown Inn has a welco',
    'Hotel_Class' : 'Diamond',
    'City' : 'Los Angeles',
    'Price' : 199,
    'Images' : [{
            'FileName' : 'LA-0.jpg'
        }, {
            'FileName' : 'Lobby-19.jpg'
        }, {
            'FileName' : 'Bedroom-2-1.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-6.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-0.jpg'
        }, {
            'FileName' : 'Pool-13.jpg'
        }
    ]
}, {
    'Id' : 50,
    'Hotel_Name' : 'Reef Resort',
    'Address' : '1 Reef Coast Street',
    'Postal_Code' : '0002',
    'Description' : 'A premier destination for the rich and famous, the Reef Resort offer',
    'Hotel_Class' : 'Diamond',
    'City' : 'Nassau',
    'Price' : 399,
    'Images' : [{
            'FileName' : 'Nassau-0.jpg'
        }, {
            'FileName' : 'Lobby-20.jpg'
        }, {
            'FileName' : 'Bedroom-3-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Pool-8.jpg'
        }, {
            'FileName' : 'Restaurant-21.jpg'
        }
    ]
}, {
    'Id' : 52,
    'Hotel_Name' : 'Nassau Beach Hotel',
    'Address' : '34 Coast Hwy',
    'Postal_Code' : '0003',
    'Description' : 'Who does not love an oceanfront hotel? At the Nassau Beach you be minut',
    'Hotel_Class' : 'Diamond',
    'City' : 'Nassau',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'Nassau-11.jpg'
        }, {
            'FileName' : 'Lobby-18.jpg'
        }, {
            'FileName' : 'Pool-5.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-15.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-3-1.jpg'
        }
    ]
}, {
    'Id' : 53,
    'Hotel_Name' : 'Sandybridge Inn',
    'Address' : '58 Bridge Road',
    'Postal_Code' : '0004',
    'Description' : 'Low prices does not mean bad service or unkept rooms. At the Sandyb',
    'Hotel_Class' : 'Gold',
    'City' : 'Nassau',
    'Price' : 249,
    'Images' : [{
            'FileName' : 'Nassau-12.jpg'
        }, {
            'FileName' : 'Lobby-17.jpg'
        }, {
            'FileName' : 'Bedroom-3-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Pool-3.jpg'
        }, {
            'FileName' : 'Restaurant-14.jpg'
        }
    ]
}, {
    'Id' : 54,
    'Hotel_Name' : 'Colonial House',
    'Address' : '8 Old City Dr',
    'Postal_Code' : '0004',
    'Description' : 'The Colonial House is consistently voted best hotel in the Bahamas.',
    'Hotel_Class' : 'Diamond',
    'City' : 'Nassau',
    'Price' : 379,
    'Images' : [{
            'FileName' : 'Nassau-14.jpg'
        }, {
            'FileName' : 'Lobby-25.jpg'
        }, {
            'FileName' : 'Pool-13.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-3.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-3-3.jpg'
        }, {
            'FileName' : 'Bathroom-3.jpg'
        }
    ]
}, {
    'Id' : 37,
    'Hotel_Name' : 'SoHo Inn',
    'Address' : '82 Houston St',
    'Postal_Code' : '10001',
    'Description' : 'The trendiest hotel in NYC. If you love SOHO, you are going to love stayin',
    'Hotel_Class' : 'Diamond',
    'City' : 'New York',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'NYC-0.jpg'
        }, {
            'FileName' : 'Lobby-1.jpg'
        }, {
            'FileName' : 'Bathroom-7.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-5-1.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-0.jpg'
        }, {
            'FileName' : 'Restaurant-9.jpg'
        }
    ]
}, {
    'Id' : 38,
    'Hotel_Name' : 'NoHo Hotel',
    'Address' : '99 Houston St',
    'Postal_Code' : '10001',
    'Description' : 'Some say that NOHO is the best area in Manhattan and who',
    'Hotel_Class' : 'Gold',
    'City' : 'New York',
    'Price' : 199,
    'Images' : [{
            'FileName' : 'NYC-1.jpg'
        }, {
            'FileName' : 'Lobby-9.jpg'
        }, {
            'FileName' : 'MeetingRoom-1.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-5-10.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-6.jpg'
        }, {
            'FileName' : 'Restaurant-8.jpg'
        }
    ]
}, {
    'Id' : 39,
    'Hotel_Name' : 'Broadway Suites',
    'Address' : '887 Broadway',
    'Postal_Code' : '10002',
    'Description' : 'The lights of broadway. The excitement of Times Square. The energy o',
    'Hotel_Class' : 'Gold',
    'City' : 'New York',
    'Price' : 119,
    'Images' : [{
            'FileName' : 'NYC-10.jpg'
        }, {
            'FileName' : 'Lobby-7.jpg'
        }, {
            'FileName' : 'Restaurant-7.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-5-11.jpg'
        }, {
            'FileName' : 'Bathroom-4.jpg'
        }
    ]
}, {
    'Id' : 40,
    'Hotel_Name' : 'NY Convention Hotel',
    'Address' : '288 6th Ave',
    'Postal_Code' : '10002',
    'Description' : 'The premier location for business conventions in New York City. With 500,000 ',
    'Hotel_Class' : 'Diamond',
    'City' : 'New York',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'NYC-2.jpg'
        }, {
            'FileName' : 'Lobby-6.jpg'
        }, {
            'FileName' : 'MeetingRoom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-5-14.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-4.jpg'
        }, {
            'FileName' : 'Restaurant-6.jpg'
        }
    ]
}, {
    'Id' : 41,
    'Hotel_Name' : 'Central Park Suites',
    'Address' : '900 Park Ave',
    'Postal_Code' : '10003',
    'Description' : 'Wake up, open your windows and take in a refreshing view of Central Park. We re',
    'Hotel_Class' : 'Diamond',
    'City' : 'New York',
    'Price' : 219,
    'Images' : [{
            'FileName' : 'NYC-3.jpg'
        }, {
            'FileName' : 'Lobby-5.jpg'
        }, {
            'FileName' : 'MeetingRoom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-6.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-5-2.jpg'
        }, {
            'FileName' : 'Bathroom-6.jpg'
        }
    ]
}, {
    'Id' : 42,
    'Hotel_Name' : 'Wall St Hotel',
    'Address' : '882 Battery Street',
    'Postal_Code' : '10005',
    'Description' : 'Business means Wall Street and the best hotel in the district is the Wall St',
    'Hotel_Class' : 'Gold',
    'City' : 'New York',
    'Price' : 249,
    'Images' : [{
            'FileName' : 'NYC-4.jpg'
        }, {
            'FileName' : 'Lobby-31.jpg'
        }, {
            'FileName' : 'MeetingRoom-5.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-5-5.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-0.jpg'
        }, {
            'FileName' : 'Restaurant-5.jpg'
        }
    ]
}, {
    'Id' : 43,
    'Hotel_Name' : 'The Grand Hotel',
    'Address' : '100 Park Ave',
    'Postal_Code' : '10002',
    'Description' : 'Like the name implies, the Grand Hotel is simply grand. We recently purchased ',
    'Hotel_Class' : 'Platinum',
    'City' : 'New York',
    'Price' : 399,
    'Images' : [{
            'FileName' : 'NYC-6.jpg'
        }, {
            'FileName' : 'Lobby-3.jpg'
        }, {
            'FileName' : 'Bathroom-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-5-7.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-1.jpg'
        }, {
            'FileName' : 'Restaurant-5.jpg'
        }
    ]
}, {
    'Id' : 45,
    'Hotel_Name' : 'The Americas Hotel',
    'Address' : '938 Ave of Americas',
    'Postal_Code' : '10003',
    'Description' : 'Directly across from the United Nations, the Americas Hotel has hosted',
    'Hotel_Class' : 'Diamond',
    'City' : 'New York',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'NYC-9.jpg'
        }, {
            'FileName' : 'Lobby-28.jpg'
        }, {
            'FileName' : 'MeetingRoom-5.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-3.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-5-9.jpg'
        }, {
            'FileName' : 'Bathroom-6.jpg'
        }
    ]
}, {
    'Id' : 55,
    'Hotel_Name' : 'Hotel de Paris',
    'Address' : '49 Rue Pierre Charron',
    'Postal_Code' : '75008',
    'Description' : 'The magnificant city of Paris like you never experienced it before. Get read',
    'Hotel_Class' : 'Platinum',
    'City' : 'Paris',
    'Price' : 399,
    'Images' : [{
            'FileName' : 'Paris-1.jpg'
        }, {
            'FileName' : 'Lobby-9.jpg'
        }, {
            'FileName' : 'MeetingRoom-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-2-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-0.jpg'
        }, {
            'FileName' : 'Restaurant-0.jpg'
        }
    ]
}, {
    'Id' : 56,
    'Hotel_Name' : 'Champs Elysees Hotel',
    'Address' : '1 Champs Elysees',
    'Postal_Code' : '75008',
    'Description' : 'The most famous boulevard in the world meets the most luxurious hotel in th',
    'Hotel_Class' : 'Platinum',
    'City' : 'Paris',
    'Price' : 399,
    'Images' : [{
            'FileName' : 'Paris-10.jpg'
        }, {
            'FileName' : 'Lobby-0.jpg'
        }, {
            'FileName' : 'Bathroom-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-1-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-1.jpg'
        }, {
            'FileName' : 'Restaurant-0.jpg'
        }
    ]
}, {
    'Id' : 58,
    'Hotel_Name' : 'The Hermitage',
    'Address' : '44 Rue Beaujon',
    'Postal_Code' : '75008',
    'Description' : 'The queen of hotels in the city of Paris, the Hermitage is currently',
    'Hotel_Class' : 'Diamond',
    'City' : 'Paris',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'Paris-3.jpg'
        }, {
            'FileName' : 'Lobby-14.jpg'
        }, {
            'FileName' : 'MeetingRoom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-10.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-1-3.jpg'
        }, {
            'FileName' : 'Bathroom-6.jpg'
        }
    ]
}, {
    'Id' : 60,
    'Hotel_Name' : 'Opera Hotel',
    'Address' : '77 Blvd Haussmann',
    'Postal_Code' : '75009',
    'Description' : 'Situated near the world famous Paris Opera and countless other Pari',
    'Hotel_Class' : 'Diamond',
    'City' : 'Paris',
    'Price' : 399,
    'Images' : [{
            'FileName' : 'Paris-9.jpg'
        }, {
            'FileName' : 'Lobby-18.jpg'
        }, {
            'FileName' : 'MeetingRoom-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-17.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-1-8.jpg'
        }, {
            'FileName' : 'Bathroom-0.jpg'
        }
    ]
}, {
    'Id' : 67,
    'Hotel_Name' : 'Hotel Roma',
    'Address' : 'Via Roma 427',
    'Postal_Code' : '00185',
    'Description' : 'In the center of Rome, the Hotel Roma is a blend of old and new. Our ga',
    'Hotel_Class' : 'Platinum',
    'City' : 'Rome',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'Rome-1.jpg'
        }, {
            'FileName' : 'Lobby-4.jpg'
        }, {
            'FileName' : 'Bedroom-5-1.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-7.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-12.jpg'
        }, {
            'FileName' : 'Pool-3.jpg'
        }
    ]
}, {
    'Id' : 68,
    'Hotel_Name' : 'The International Inn',
    'Address' : 'Via Nazionale 28',
    'Postal_Code' : '00184',
    'Description' : 'Just as the name implies, the International is the hotel of choice for tr',
    'Hotel_Class' : 'Diamond',
    'City' : 'Rome',
    'Price' : 279,
    'Images' : [{
            'FileName' : 'Rome-4.jpg'
        }, {
            'FileName' : 'Lobby-27.jpg'
        }, {
            'FileName' : 'Pool-11.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-13.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-1-9.jpg'
        }, {
            'FileName' : 'Bathroom-6.jpg'
        }
    ]
}, {
    'Id' : 70,
    'Hotel_Name' : 'The Colosseum Inn',
    'Address' : 'Via Sforza 99',
    'Postal_Code' : '00184',
    'Description' : 'The most beautiful hotel in Rome. You will feel warm an',
    'Hotel_Class' : 'Diamond',
    'City' : 'Rome',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'Rome-7.jpg'
        }, {
            'FileName' : 'Lobby-18.jpg'
        }, {
            'FileName' : 'MeetingRoom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-16.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-2-5.jpg'
        }, {
            'FileName' : 'Bathroom-3.jpg'
        }
    ]
}, {
    'Id' : 19,
    'Hotel_Name' : 'The Bay Hotel',
    'Address' : '1 Fishermans Rd',
    'Postal_Code' : '94105',
    'Description' : 'Located at the Fisherman Wharf, the Bay Hotel will lavish you in luxury and al',
    'Hotel_Class' : 'Diamond',
    'City' : 'San Francisco',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'SF-0.jpg'
        }, {
            'FileName' : 'Bedroom-5-10.jpg'
        }, {
            'FileName' : 'Lobby-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-20.jpg'
        }, {
            'FileName' : 'Pool-8.jpg'
        }
    ]
}, {
    'Id' : 20,
    'Hotel_Name' : 'Golden Suites',
    'Address' : '14 Golden Gate Blvd',
    'Postal_Code' : '94014',
    'Description' : 'Overlooking the amazing Golden Gate Bridge, the Golden S',
    'Hotel_Class' : 'Diamond',
    'City' : 'San Francisco',
    'Price' : 599,
    'Images' : [{
            'FileName' : 'SF-2.jpg'
        }, {
            'FileName' : 'Lobby-22.jpg'
        }, {
            'FileName' : 'MeetingRoom-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-2-10.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Restaurant-21.jpg'
        }, {
            'FileName' : 'Pool-8.jpg'
        }
    ]
}, {
    'Id' : 21,
    'Hotel_Name' : 'Metropolitan Hotel',
    'Address' : '378 Green St.',
    'Postal_Code' : '94102',
    'Description' : 'Luxury has been re-defnied at the Met. A $0 milllion dollar renovation in 20',
    'Hotel_Class' : 'Platinum',
    'City' : 'San Francisco',
    'Price' : 599,
    'Images' : [{
            'FileName' : 'Pool-8.jpg'
        }, {
            'FileName' : 'Bedroom-2-2.jpg'
        }, {
            'FileName' : 'MeetingRoom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-2-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-1.jpg'
        }, {
            'FileName' : 'Restaurant-3.jpg'
        }
    ]
}, {
    'Id' : 22,
    'Hotel_Name' : 'Residence Suites',
    'Address' : '278 Spring Rd',
    'Postal_Code' : '94104',
    'Description' : 'In the heart of San Francisco financial district, the Residence',
    'Hotel_Class' : 'Gold',
    'City' : 'San Francisco',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'SF-4.jpg'
        }, {
            'FileName' : 'Lobby-27.jpg'
        }, {
            'FileName' : 'Restaurant-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-3.jpg'
        }, {
            'FileName' : 'Bedroom-2-4.jpg'
        }
    ]
}, {
    'Id' : 23,
    'Hotel_Name' : 'City Lights Inn',
    'Address' : '278 Market St',
    'Postal_Code' : '94104',
    'Description' : 'Everyone at the City Lights Inn takes great pride in serving our gues',
    'Hotel_Class' : 'Gold',
    'City' : 'San Francisco',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'SF-5.jpg'
        }, {
            'FileName' : 'Lobby-27.jpg'
        }, {
            'FileName' : 'Bathroom-2.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-2-5.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-2.jpg'
        }, {
            'FileName' : 'Restaurant-4.jpg'
        }
    ]
},
{
'Id' : 23,
'Hotel_Name' : 'City Lights Inn',
'Address' : '278 Market St',
'Postal_Code' : '94104',
'Description' : 'Everyone at the City Lights Inn takes great pride in serving our gues',
'Hotel_Class' : 'Gold',
    'City' : 'San Francisco',
    'Price' : 299,
    'Images' : [{
            'FileName' : 'SF-6.jpg'
        }, {
            'FileName' : 'Lobby-28.jpg'
        }, {
            'FileName' : 'Restaurant-5.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-4.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-2-8.jpg'
        }, {
            'FileName' : 'Bathroom-6.jpg'
        }
    ]
}, {
    'Id' : 25,
    'Hotel_Name' : 'The Grand Resort',
    'Address' : '5772 1st Street',
    'Postal_Code' : '94104',
    'Description' : 'When opulance is your desire and when you only want the best in dining, sho',
    'Hotel_Class' : 'Platinum',
    'City' : 'San Francisco',
    'Price' : 499,
    'Images' : [{
            'FileName' : 'SF-7.jpg'
        }, {
            'FileName' : 'Lobby-3.jpg'
        }, {
            'FileName' : 'Restaurant-6.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bathroom-7.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-2-9.jpg'
        }, {
            'FileName' : 'Restaurant-21.jpgng'
        }
    ]
}, {
    'Id' : 27,
    'Hotel_Name' : 'Golden Gate Hotel',
    'Address' : '6222 Bridge Rd',
    'Postal_Code' : '94102',
    'Description' : 'At the Golden Gate, we welcome you to the Golden State with open arms and strive',
    'Hotel_Class' : 'Diamond',
    'City' : 'San Francisco',
    'Price' : 199,
    'Images' : [{
            'FileName' : 'SF-9.jpg'
        }, {
            'FileName' : 'Lobby-18.jpg'
        }, {
            'FileName' : 'Bathroom-3.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'Bedroom-3-0.jpg',
            'widthRatio' : 2,
            'heightRatio' : 2
        }, {
            'FileName' : 'MeetingRoom-1.jpg'
        }, {
            'FileName' : 'Restaurant-19.jpg'
        }
    ]
}];


const dataSource = new DataSource({
    store: new ArrayStore({
        data: data,
        key: 'Id'
    }),
    group: 'City',
    searchExpr: ['Hotel_Name', 'City', 'Address']
});


@Injectable()
export class Service {
    getDataSource() {
        return dataSource;
    }
    getFirstHotel() {
        return data[0];
    }
}
