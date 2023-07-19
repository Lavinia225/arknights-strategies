class User < ActiveRecord::Base
    has_secure_password

    validates :username, uniqueness: true
    validates :display_name, {uniqueness: true, comparison: {other_than: :username}}
end