class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    before_action :authorize

        private 
        def authorize
            @current_user = User.find_by(id: session[:user_id])

            render json: {errors: ["Not Authorized!"]}, status: :unauthorized unless @current_user
        end

        def render_unprocessable_entity e
            render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
        end

        def render_not_found errors
            render json: {errors: errors}, status: :not_found
        end
end
