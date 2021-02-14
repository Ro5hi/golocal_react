class User < ActiveRecord::Base

    has_secure_password

    serialize :image, JSON
    
    belongs_to :business, class_name: "Business", :foreign_key => "business_id"
    
    has_many :posts, dependent: :destroy 

    validates :name, :username, :password, :business, presence: true 
    validates :username, uniqueness: true
    
end 