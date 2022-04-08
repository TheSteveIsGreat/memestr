class Api::UsersController < ApplicationController
  #defines the CRUD actions before using them
  before_action :set_user, only: [:show, :destroy, :update]

  #finds all Users in DB
  def index 
      render json: User.all
  end
   
  #finds specific User in DB
  def show 
      render json: @user
  end
  
  #creates a User in DB
  def create
      user = User.new(user_params)
      if(user.save)
        render json: user
      else
        render json: {errors: user.errors.full_messages}, status: 422
      end
  end

   #updates a User in DB (edit)
   def update
      if(@user.update(user_params))
        render json: @user
      else
        render json: {errors: @user.errors.full_messages}, status: 422
     end
  end

  #deletes a User in DB
  def destroy
      render json: @user.destroy
  end

  private
  #function that allows @user to find specific user
  def set_user
      @user = User.find(params[:id])
  end

  #function for users that requires a name to create a user for DB
  #must require a username to work
  def user_params
      params.require(:user).permit(:name, :email, :password)
  end
end
