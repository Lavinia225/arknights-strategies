class PostOperator < ActiveRecord::Base
    belongs_to :post
    belongs_to :operator
end