class PostsController < ApplicationController
    
    def index
        render json: Post.all
    end

    def show
        post = Post.find_by(id: params[:id])
        render json: post
    end

    def create
        post = Post.new(post_params)
        post.user_id = @current_user.id
        post.save!
        render json: post, status: :created
    end

    private

    def post_params
        params.permit(:title, :body)
    end
end
