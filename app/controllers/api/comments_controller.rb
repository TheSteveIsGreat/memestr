class Api::CommentsController < ApplicationController

  #defines the CRUD actions before using them
  before_action :set_comment, only: [:show, :destroy, :update]

  #finds all Comments in DB 
  def index 
      render json: Comment.all
  end
   
  #finds specific Comment in DB 
  def show 
      render json: @comment
  end
  
  #creates a Comment in DB
  def create
      comment = Comment.new(comment_params)
      if(comment.save)
        render json: comment
      else
        render json: {errors: comment.errors.full_messages}, status: 422
      end
  end

   #updates a Comment in DB (edit) 
   def update
      if(@comment.update(comment_params))
        render json: @comment
      else
        render json: {errors: @comment.errors.full_messages}, status: 422
     end
  end

  #deletes a Comment in DB 
  def destroy
      render json: @comment.destroy
  end

  private
  #function that allows @comment to find specific user
  def set_comment
      @comment = Comment.find(params[:id])
  end

  #function for users that requires a name to create a comment for DB
  #must require a () to work
  def comment_params
      params.require(:comment).permit(:input, :post_id, :user_id)
  end
end
