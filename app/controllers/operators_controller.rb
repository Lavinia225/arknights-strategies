class OperatorsController < ApplicationController
    before_action :admin_check
    skip_before_action :admin_check, only: :index, :show

    def index
        render json: Operator.all
    end
    
    private

    def admin_check
         render json: {errors: "You are not authorized to modify this data."}, status: :unauthorized unless @current_user.access_level > 0
    end
end
