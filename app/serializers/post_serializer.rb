class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :updated_at_formatted, :summary, :user
  has_many :operators, through: :post_operators

  def summary
    "#{object.body[0...100]}"
  end

  def user
    "#{object.user.display_name}"
  end

  def updated_at_formatted
    object.updated_at.strftime("%I:%M%p %B %d, %Y")
  end
end
