# DATABASE (MongoDB)

Collections are made to correspond with the available assembly categories.

Documents are made to correspond with available items in the assembly categories and their stats.
This data can be referenced in ACPrepInfo.md for now. (will move to this document eventually along with field names in database corresponding with stats) 

Numeric stats are stored as a Int32 datatype (which is all stored in a BSON). 
Some numeric stats like attack_power which, in the game, can be represented as 113x4, are stored as strings and parsed client side (113 times 4) to calculate total stats.

unit 'type's
- arm
- back

frame 'type's
- head
- core
- arm
- leg

inner 'type's
- booster
- fcs 
- generator