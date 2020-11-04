class User < ActiveRecord::Base

    has_many :posts 
    
    validates :name, presence: true
    validates :username, presence: true 
    validates :description, length: { maximum: 50 }
    
end 