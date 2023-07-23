class Post < ActiveRecord::Base
    has_many :post_operators, dependent: :destroy
    has_many :operators, through: :post_operators
    belongs_to :user
end