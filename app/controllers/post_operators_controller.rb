class PostOperatorsController < ApplicationController
    def show
        post_operator = PostOperator.find_by(id: params[:id])
        render json: post_operator
    end

    def create
        post_operator = PostOperator.new(post_operator_params)
        post_operator.post_id = params[:post_id]
        post_operator.save!
        render json: post_operator, :status: :created
    end

    def update
        post_operator = PostOperator.find_by(id: params[:id])
        post_operator.update!(post_operator_params)
        render json: post_operator, status: :success
    end

    private

    def post_operator_params
        params.permit(:level, :potential)
    end
end
