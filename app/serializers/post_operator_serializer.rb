class PostOperatorSerializer < ActiveModel::Serializer
  attributes :id, :potential, :level
  belongs_to :operator
  belongs_to :post
end
