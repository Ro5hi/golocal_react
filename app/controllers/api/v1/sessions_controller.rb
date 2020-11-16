class API::V1::SessionsController < ApplicationController

    def create
      @user = User.find_by(username: params[:username])
  
      if @user && @user.authenticate(params[:username])
        session[:user_id] = @user.id
        render json: UserSerializer.new(@user), status: :ok
      else
        render json: {
          error: "Incorrect username or password. Please try again."
        }
      end
    end
  
    def current_session
      if logged_in?
        render json: UserSerializer.new(current_user)
      else
        render json: {
          error: "No session detected."
        }
      end
    end
  
    def destroy
      session.clear
      render json: {
        notice: "Logged out successfully."
      }, status: :ok
    end
  
  end
  