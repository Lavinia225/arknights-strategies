class Post < ActiveRecord::Base
    has_many :post_operators
    belongs_to :user
end