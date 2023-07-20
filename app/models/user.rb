class User < ActiveRecord::Base
    has_secure_password

    has_many :posts
    
    validates :username, uniqueness: true
    validates :display_name, {uniqueness: true, comparison: {other_than: :username}}
end