class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :body, :title, :created_at, :updated_at
  has_many :post_operators
  has_many :operators, through: :post_operators
end
