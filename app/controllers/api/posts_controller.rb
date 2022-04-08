class Api::PostsController < ApplicationController
  
    #defines the CRUD actions before using them
    before_action :set_post, only: [:show, :destroy, :update]

    #finds all Posts in DB
    def index 
        render json: Post.all
    end
     
    #finds specific Post in DB 
    def show 
        render json: @post
    end
    
    #creates a Post in DB
    def create
        post = Post.new(post_params)
        if(post.save)
          render json: post
        else
          render json: {errors: post.errors.full_messages}, status: 422
        end
    end
  
     #updates a Post in DB (edit)
     def update
        if(@post.update(post_params))
          render json: @post
        else
          render json: {errors: @post.errors.full_messages}, status: 422
       end
    end
  
    #deletes a Post in DB
    def destroy
        render json: @post.destroy
    end
  
    private
    #function that allows @user to find specific user
    def set_post
        @post = Post.find(params[:id])
    end
  
    #function for users that requires a name to create a user for DB
    #must require a username to work
    def post_params
        params.require(:post).permit(:title, :meme, :user_id)
    end
end
