https://github.com/bmcmahen/react-wysiwyg

Here's what I want:

a panel on the left of notes in a notebook. Things on that panel can also be notebooks themselves.


Here's the models, as it were:

Note has a title, body, and folder id
Folder has a name and parent folder

API actions:

POST /api/files/new
GET /api/files/:id
PATCH /api/files/:id

GET /api/files





Plan for the editor:

The core representation is just text.

When I format the text, I keep the selection in the same place. This might involve manually moving it into the right DOM element.