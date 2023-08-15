class PostsController < ApplicationController
    
    def index
        render json: Post.all
    end

    def show
        post = find_post
        render json: post, serializer: IndividualPostSerializer, include: ['post_operators.operator']
    end

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = find_post

        if post.user_id == @current_user.id
            post.update!(post_params)
            render json: post, status: :accepted
        else
            render json: {errors: ["Not Authorized to modify this post!"]}, status: :unauthorized
        end
    end

    def destroy
        post = find_post

        if post.user_id == @current_user.id
            post.destroy
            head :no_content
        else
            render json: {errors: ["Not Authorized to delete this post!"]}, status: :unauthorized
        end
    end

    private

    def post_params
        params.permit(:title, :body)
    end

    def find_post
        post = Post.find(params[:id])
    end
end
