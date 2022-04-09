User.destroy_all

u1 = User.create(
  name: 'Steve',
  email: 'steve@steve.com', 
  password: 123456, 
  image:'https://static.wikia.nocookie.net/ladygaga/images/2/2e/Beyonc%C3%A9.jpg/revision/latest?cb=20200718185948')

u2 = User.create(
  name: 'Randy',
  email: 'randy@randy.com',
  password: 123456,
  image:'https://static.wikia.nocookie.net/ladygaga/images/2/2e/Beyonc%C3%A9.jpg/revision/latest?cb=20200718185948')

u3 = User.create(
  name: 'Trina', 
email: 'trina@trina.com', 
password: 123456, 
image:'https://static.wikia.nocookie.net/ladygaga/images/2/2e/Beyonc%C3%A9.jpg/revision/latest?cb=20200718185948')


cat = [
'Happy', 
'Funny', 
'Sad', 
'Cute', 
'Birthday', 
'Pets', 'Cats', 
'Dogs', 
'Awesome', 
'Hilarious', 
'Embarassing']



u1.posts.create(
  title: 'liek dis if u cry evrytim',
  meme: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80',
  like: 20,
  dislike: 100,
  share: '',
  tags: cat.sample
               )

u1.posts.create(
  title: 'I hate everything',
  meme: 'https://images.unsplash.com/photo-1607317146126-64b09b69eb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
  like: 10,
  dislike: 200,
  share: '',
  tags: cat.sample

               )

u1.posts.create(
  title: 'This is fine',
  meme: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  like: 30,
  dislike: 6000,
  share: '',
  tags: cat.sample

               )

u2.posts.create(
  title: 'DogeCoin', 
  meme: 'https://images.unsplash.com/photo-1625637870692-ddd9cd870757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 
  like: 400, 
  dislike: 5, 
  share: '',
  tags: cat.sample
)

u2.posts.create(
  title: 'A bug: A coders best friend',
  meme: 'https://images.unsplash.com/photo-1561131989-b8112bafbd43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  like: 1000, 
  dislike: 1, 
  share: '',
  tags: cat.sample
  )

u2.posts.create(
  title: 'Meet me at the SPACE-bar',
  meme: 'https://images.unsplash.com/photo-1610898564097-e28bd69740a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 
  like: 300, 
  dislike: 3, 
  share: '',
  tags: cat.sample
)

u3.posts.create(
  title: "Oh no she didnt", 
  meme: 'https://i.imgur.com/F6v1jHY.jpeg', 
  like: 1, 
  dislike: 1, 
  share: '',
  tags: cat.sample
)

u3.posts.create(title: "Oh no she didnt", 
  meme: 'https://i.imgur.com/F6v1jHY.jpeg', 
  like: 155, 
  dislike: 61, 
  share: '',
  tags: cat.sample
)

u3.posts.create(
  title: "Oh no she didnt", 
  meme: 'https://i.imgur.com/F6v1jHY.jpeg', 
  like: 123, 
  dislike: 15, 
  share: '',
  tags: cat.sample
)

u1.comments.create(
  input: 'Wow you have the coolest life ever!',
  like: 0,
  dislike: 340,
  post_id: 1)

u1.comments.create(
  input: 'I dont wanna grow up, im a toys-r-us kid',
  like: 0,
  dislike: 0,
  post_id: 2)

u1.comments.create(
  input: 'Eat my shorts!',
  like: 0,
  dislike: 0,
  post_id: 3)

u2.comments.create(
  input: 'wow! thats hilarious ',
  like: 8,
  dislike: 0,
  post_id: 4)

u2.comments.create(
  input: 'that isnt even funny ',
  like: 0,
  dislike: 20,
  post_id: 5)

u2.comments.create(
  input: 'omg im crying ',
  like: 100,
  dislike: 1,
  post_id: 6)

u3.comments.create(
  input: 'Omg, I love this!',
  like: 0,
  dislike: 0,
  post_id: 7)
                   
u3.comments.create(
  input: 'lololol',
  like: 0,
  dislike: 0,
  post_id: 8)
                   
u3.comments.create(
  input: 'This is sooooooo funny. I’m crying over here!',
  like: 0,
  dislike: 0,
  post_id: 9)

puts "All users: #{User.all.length}"
puts "All posts: #{Post.all.length}"
puts "All comments: #{Comment.all.length}"