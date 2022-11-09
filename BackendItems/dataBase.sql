DROP DATABASE IF EXISTS items_DB;
CREATE DATABASE items_DB;


DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    catergory VARCHAR(30) NOT NULL,
    seller_id integer NOT NULL,
    is_sold INTEGER,
    FOREIGN KEY (seller_id) REFERENCES users(seller_id)
);

DROP TABLE IF EXISTS checkout CASCADE;
CREATE TABLE checkout (
    FOREIGN KEY (item_id) REFERENCES items(item_id),
    FOREIGN KEY (buyer_id) REFERENCES users(buyer_id)
);


INSERT INTO items (item_id, name, description, price, image_path, catergory,
 seller_id, is_sold) VALUES ('Rich Dad Poor Dad', 'Rich Dad Poor Dad is the #1 personal finance book of all time. Listen today to set yourself up for a wealthy, happy future.',
 24.99, 'https://m.media-amazon.com/images/I/51AHZGhzZEL.jpg', 'Books');

INSERT INTO items (item_id, name, description, price, image_path, catergory,
 seller_id, is_sold) VALUES ('RC Car','1:14 Scale 40+ Km/h RC Car with Headlights
4WD, All Terrains, Long Driving Time, 2.4GHz Remote Control System', 70.99, 'https://m.media-amazon.com/images/I/51RlGji+12L._AC_.jpg',
'Electronics');
 
INSERT INTO items (item_id, name, description, price, image_path, catergory,
 seller_id, is_sold) VALUES ('Royal Gourmet 8-Burner Gas Grill, 104,000 BTU Liquid Propane Grill, Independently Controlled Dual Systems, Outdoor Party or Backyard BBQ, Black',
 'Take the headache away from outdoor cooking and spend more time enjoying the outdoors with your family and friends! Thanks to Royal Gourmet 8-Burner Gas Grill, there’s no event that you can’t reach,
  and let’s bring it to a picnic, tailgate party or poolside feast! 8 stainless steel tube burners boast an overall 104,000 BTU output! Two gas systems and oil management systems are primed for even the 
  biggest activities, during which you can handle over 60 burgers at once. Start grilling up some gorgeous food for your mouth-watering guests with Royal Gourmet!', 1500.99, 'https://m.media-amazon.com/images/S/aplus-media/sc/46029f67-8979-4f10-ac19-2ad77fc2402e.__CR0,691,2000,1237_PT0_SX970_V1___.jpg',
  'Outdoor');