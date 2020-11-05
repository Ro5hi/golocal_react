class TagsController < ApplicationController

    
    before_action :set_tag, only: [:index]

    def index
        @tags = Tag.includes(params[:name])
        @tagg = Taggable.includes(params[:tag_id])
    end

    def show
        tag = Tag.find_by(name: params[:name])
        @tagg = Taggabl.where(tag_id: tag.id)
        post_ids = @tagg.map {|t| t.post_id}
        @posts = Post.where(id: post_ids)
        if @posts.length == 0
            render json: @tag.errors 
        end             
    end

    private

    def set_tag 
        @tag = Tag.where(params[:id])
    end 

end