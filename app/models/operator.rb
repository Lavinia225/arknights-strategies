class Operator < ActiveRecord::Base
    has_many :post_operators, dependent: :destroy
    has_many :posts, through: :post_operators

    validates :name, presence: true
end