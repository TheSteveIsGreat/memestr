User.destroy_all

u1 = User.create(name: 'Steve',
                 email: 'steve@steve.com', 
                 password: 123456, 
                 image:'https://static.wikia.nocookie.net/ladygaga/images/2/2e/Beyonc%C3%A9.jpg/revision/latest?cb=20200718185948')

u2 = User.create(name: 'Randy',
                 email: 'randy@randy.com',
                 password: 123456,
                 image:'https://static.wikia.nocookie.net/ladygaga/images/2/2e/Beyonc%C3%A9.jpg/revision/latest?cb=20200718185948')

u3 = User.create(name: 'Trina', 
                 email: 'trina@trina.com', 
                 password: 123456, 
                 image:'https://static.wikia.nocookie.net/ladygaga/images/2/2e/Beyonc%C3%A9.jpg/revision/latest?cb=20200718185948')

u1.posts.create(title: 'liek dis if u cry evrytim',
               meme: '',
               like: 20,
               dislike: 100,
               share: '',
               )

u1.posts.create(title: 'I hate everything',
               meme: '',
               like: 10,
               dislike: 200,
               share: '',
               )

u1.posts.create(title: 'This is fine',
               meme: '',
               like: 30,
               dislike: 6000,
               share: '',
               )

u2.posts.create(title: 'DogeCoin', 
               meme: 'emptyurl.com', 
               like: 400, 
               dislike: 5, 
               share: '')

u2.posts.create(title: 'A bug: A coders best friend',
               meme: 'emptyurl.com',
               like: 1000, 
               dislike: 1, 
               share: '')

u2.posts.create(title: 'Meet me at the SPACE-bar',
               meme: 'emptyurl.com', 
               like: 300, 
               dislike: 3, 
               share: '')

u3.posts.create(title: "Oh no she didnt", 
                meme: 'https://i.imgur.com/F6v1jHY.jpeg', 
                like: 1, 
                dislike: 1, 
                share: '')

u3.posts.create(title: "Oh no she didnt", 
                meme: 'https://i.imgur.com/F6v1jHY.jpeg', 
                like: 1, 
                dislike: 1, 
                share: '')

u3.posts.create(title: "Oh no she didnt", 
                meme: 'https://i.imgur.com/F6v1jHY.jpeg', 
                like: 1, 
                dislike: 1, 
                share: '')

u1.comments.create(input: 'Wow you have the coolest life ever!',
                   like: 0,
                   dislike: 0,
                   post_id: 1)

u1.comments.create(input: 'I dont wanna grow up, im a toys-r-us kid',
                   like: 0,
                   dislike: 0,
                   post_id: 2)

u1.comments.create(input: 'Eat my shorts!',
                   like: 0,
                   dislike: 0,
                   post_id: 3)

u2.comments.create(input: 'wow! thats hilarious ',
                   like: 8,
                   dislike: 0,
                   post_id: 4)

u2.comments.create(input: 'that isnt even funny ',
                   like: 0,
                   dislike: 20,
                   post_id: 5)

u2.comments.create(input: 'omg im crying ',
                   like: 100,
                   dislike: 1,
                   post_id: 6)

u3.comments.create(input: 'Omg, I love this!',
                   like: 0,
                   dislike: 0,
                   post_id: 7)
                   
u3.comments.create(input: 'lololol',
                   like: 0,
                   dislike: 0,
                   post_id: 8)
                   
u3.comments.create(input: 'This is sooooooo funny. I’m crying over here!',
                   like: 0,
                   dislike: 0,
                   post_id: 9)

puts "All users: #{User.all.length}"
puts "All posts: #{Post.all.length}"
puts "All comments: #{Comment.all.length}"