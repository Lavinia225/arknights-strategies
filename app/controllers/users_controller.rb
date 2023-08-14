class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        user = User.create!(user_params)
        user.access_level = 0
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :display_name, :password, :password_confirmation)
    end
end
