class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

def self.users
  select(
    'posts.meme,
    posts.title,
    post.id,
    post.categories'
  )
  .join('INNER JOIN users u ON u.id = posts.user_id')
end







end
