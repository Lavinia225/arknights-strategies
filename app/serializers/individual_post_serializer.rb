class IndividualPostSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :creator_display_name, :body, :title, :created_at, :updated_at
    has_many :post_operators

    def creator_display_name
        "#{object.user.display_name}"
    end
end
  