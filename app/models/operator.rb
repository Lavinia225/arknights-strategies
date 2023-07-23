class Operator < ActiveRecord::Base
    has_many :post_operators
    has_many :posts, through: :post_operators
end