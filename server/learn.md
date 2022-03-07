### Why am I using nested subdocuments for translations ?

In general better to avoid joins in mongo DB (easier) and it is a one to many relationship.
If it was many to many it is a different story (or if you want to actually attach translations to something else)