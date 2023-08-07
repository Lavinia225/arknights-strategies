class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        user = User.create(user_params)
        user.access_level
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :display_name, :password, :password_confirmation)
    end
end
