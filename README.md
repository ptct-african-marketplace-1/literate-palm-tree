# buildweek 
Authentication Routes
Method	Endpoint	Token	Required
POST	api/auth/register	no	registers a new user. required: name, username, password, owner. returns: id, username and password
POST	api/auth/login	no	Signs user in and returns a token. Required: username and password. Returns a token.


Items Routes
Method	Endpoint	Token	Required
GET	api/AfricanMarket/items/	yes	returns all items
GET	api/AfricanMarket/items/:id	yes	returns an item by id
POST	api/AfricanMarket/items/addItem	yes	creates new item in database
PUT	api/AfricanMarket/items/:id	yes	edits a single item by id
DELETE	api/AfricanMarket/items/:id	yes	deletes a specific item by id