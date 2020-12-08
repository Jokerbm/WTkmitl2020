import pymongo
  
import json

with open('D:\git\WTkmitl2020\storylog\src\components\profile.json', encoding="utf8") as f:
  data = json.load(f)
client = pymongo.MongoClient("mongodb+srv://ryu:test@cluster0.ljg2u.mongodb.net/OOP?retryWrites=true&w=majority")  

# print("add book")
collection = client.OOP.user
story = client.OOP.story
# booksData = [  
  
#       {  
#          "id":"01",  
#          "language": "Java",  
#          "edition": "third",  
#          "author": "Herbert Schildt"  
#       },  
  
#       {  
#          "id":"07",  
#          "language": "C++",  
#          "edition": "second",  
#          "author": "E.Balagurusamy"  
#       }  
#    ]  
  
collection.insert_many(data)  
print('Find all documents') 
save = {} 
for x in client.OOP.user.find():
  s = x['_id']
  try:
    d = {x['name']:str(s).replace("ObjectId('","")}
    save.update(d)
  except:
    print("error")
for y in story.find():
  try:
    # print(y)
    # y['authorID'] = save[x['name']]
    story.update_one({"_id": y["_id"]}, {"$set": {"authorID": save[y['name']]}})
  except:
    print(y)