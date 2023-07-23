class PostOperator < ActiveRecord::Base
    belongs_to :post
    belongs_to :operator

    validates :post_id, {presence: true}
    validates :operator_id, {presence: true}
    validates :level, {length: {maximum: 5}}
end