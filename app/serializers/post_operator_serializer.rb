class PostOperatorSerializer < ActiveModel::Serializer
  attributes :id, :potential, :level
  belongs_to :operator
end
