class OperatorsController < ApplicationController
    before_action :admin_check
    skip_before_action :admin_check, only: :index

    def index
        render json: Operator.all
    end

    def create
        operator = Operator.create!(operator_params)
        render json: operator, status: :created
    end

    def destroy
        operator = Operator.find(params[:id])
        operator.destroy
        head :no_content
    end

    private

    def admin_check
         render json: {errors: "You are not authorized to modify this data."}, status: :unauthorized unless @current_user.access_level > 0
    end

    def operator_params
        params.permit(:name)
    end
end
