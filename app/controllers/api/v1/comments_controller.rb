class API::V1::CommentsController < ApplicationController    

    before_action :get_post, only: [:new, :show, :create]

    def new
        @comment = Comment.new
        @comment.post_id = params[:post_id] 
    end

    def show 
    end 

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.post_id = params[:comment][:post_id] 
        
        if @comment.save 
            flash[:notice] = "Comment submitted."
            render json: @comment
        else 
            flash[:notice] = "Comment failed to submit."
            render json: @comment.errors
        end 
    end 

    def update 
    end 

    private 

    def comment_params
        params.require(:comment).permit(:body, :post_id, :user_id, :id)
    end 

    def get_post 
        @post = Post.find_by(id: params[:post_id])
    end 

end 
