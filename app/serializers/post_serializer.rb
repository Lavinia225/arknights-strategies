class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :updated_at, :summary, :user
  has_many :post_operators
  has_many :operators, through: :post_operators

  def summary
    "#{object.body[0...100]}"
  end

  def user
    "#{object.user.display_name}"
  end
end
