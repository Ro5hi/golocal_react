class API::V1::UsersController < ApplicationController

    # GET /users
    def index
        @users = User.all
    end 

    # POST /users
    def create
        @user = User.new(user_params)
        @business = Business.find_or_create_by(name: params[:business][:name], address: params[:business][:address], city: params[:business][:city], country: params[:business][:country], category: params[:business][:category])

        @user.business = @business
        if @user.save
            session[:user_id] = @user.id
            render json: UserSerializer.new(@user), status: :created
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
            render json: @user 
        else 
            render json: @user.errors, status: :unprocessable_entity
        end 
    end 

    private 

    def set_user
        @user = User.find_by(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :user_id, :password_digest)
    end 
end 