DROP DATABASE IF EXISTS items_db;
CREATE DATABASE items_db;

DROP TABLE IF EXISTS items, cart;

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    category VARCHAR(30) NOT NULL,
    is_sold BOOLEAN
);
CREATE TABLE cart(
    user_id TEXT,
    item_id INTEGER,
    CONSTRAINT fk_item_id FOREIGN KEY (item_id)
    REFERENCES items(item_id)  
);



INSERT INTO items (name, description, price, image_path, category, is_sold)
VALUES 
('Rich Dad Poor Dad', 'Rich Dad Poor Dad is the #1 personal finance book of all time. Listen today to set yourself up for a wealthy, happy future.', 24.99, 'https://m.media-amazon.com/images/I/51AHZGhzZEL.jpg', 'Books', false),

('RC Car','1:14 Scale 40+ Km/h RC Car with Headlights 4WD, All Terrains, Long Driving Time, 2.4GHz Remote Control System', 70.99, 'https://m.media-amazon.com/images/I/51RlGji+12L._AC_.jpg', 'Electronics', false),

('Royal Gourmet 8-Burner Gas Grill, 104,000 BTU Liquid Propane Grill, Independently Controlled Dual Systems, Outdoor Party or Backyard BBQ, Black',
'Take the headache away from outdoor cooking and spend more time enjoying the outdoors with your family and friends! Thanks to Royal Gourmet 8-Burner Gas Grill, there’s no event that you can’t reach, and let’s bring it to a picnic, tailgate party or poolside feast! 8 stainless steel tube burners boast an overall 104,000 BTU output! Two gas systems and oil management systems are primed for even the biggest activities, during which you can handle over 60 burgers at once. Start grilling up some gorgeous food for your mouth-watering guests with Royal Gourmet!',
1500.99, 'https://m.media-amazon.com/images/S/aplus-media/sc/46029f67-8979-4f10-ac19-2ad77fc2402e.__CR0,691,2000,1237_PT0_SX970_V1___.jpg', 'Outdoor', false);