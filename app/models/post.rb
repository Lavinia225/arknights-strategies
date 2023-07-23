class Post < ActiveRecord::Base
    has_many :post_operators, dependent: :destroy
    has_many :operators, through: :post_operators
    belongs_to :user

    validates :title, presence: true
    validates :body, {presence: true, length: {minimum: 100}}
    validates :user_id, presence: true
end