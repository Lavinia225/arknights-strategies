class UserSerializer < ActiveModel::Serializer
  attributes :display_name, :id, :access_level
end
