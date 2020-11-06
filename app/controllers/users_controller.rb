class UsersController < ApplicationController

    # GET /users
    def index
        @users = User.all
    end 

    # POST /users
    def create
        @user = User.new(user_params)

        if @user.save
            render json: @user, status: :created
        else 
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    #GET /users/1
    def show
        render json: @user
    end 

    # PATCH /users
    def update
        if @user.update(user_params)
            render json: @userelse 
        else 
            render json: @user.errors, status: :unprocessable_entity
        end 
    end 

    private 

    def set_user
        @user = User.find_by(params[:id])
    end

    def user_params
        params.require(:user).permit(:name, :username, :user_id, :password)
    end 
end 