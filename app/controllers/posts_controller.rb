class PostsController < ApplicationController
    
    def index
        render json: Post.all
    end

    def show
        post = Post.find_by(id: params[:id])
        render json: post
    end
end
