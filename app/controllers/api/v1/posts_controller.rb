class API::V1::PostsController < ApplicationController

before_action :set_post, only: [:show, :edit, :update, :destroy]
before_action :find_user, only: [:index, :new, :create, :show, :edit, :update, :destroy]

def index 
    @posts = Post.order("created_at DESC")
end

def new 
    @post = Post.new
    @user = current_user
end

def create
    @post = current_user.posts.build(create_params)
    if @post.save
        render json: @post
    else
        @post == 0 
        render json: @post.errors
    end 
end 

def show
end  

def edit
    @user == current_user
end 

def update
    if @post.user_id == current_user.id
       @post.update(edit_params)
       flash[:notice] = "Post updated."
       render json: @post
    else
       render json: @post.errors
    end 
end

def destroy
    if @post.user_id == current_user.id
       @post.destroy
       flash[:notice] = "Post deleted."
       render json: @post
    else
       render json: @post.errors
    end 
end

private

def create_params 
    params.require(:post).permit(:user_id, :caption)
end

def edit_params 
    params.require(:post).permit(:caption, :user_id, :id)
end

def set_post
    @post = Post.find_by(id: params[:id])
end

def find_user 
    @user = User.where(params[:id])
end 