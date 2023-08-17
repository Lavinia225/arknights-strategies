class OperatorsController < ApplicationController
    before_action :admin_check
    skip_before_action :admin_check, only: :index

    def index
        render json: Operator.all.order(:name)
    end

    def show
        operator = find_operator
        render json: operator
    end

    def create
        operator = Operator.create!(operator_params)
        render json: operator, status: :created
    end

    def update
        operator = find_operator
        operator.update!(operator_params)
        render json: operator, status: :accepted
    end

    def destroy
        operator = find_operator
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

    def find_operator
        Operator.find(params[:id])
    end
end
