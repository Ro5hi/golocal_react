class User < ActiveRecord::Base

    has_secure_password

    serialize :image, JSON

    has_many :posts, dependent: :destroy 
    has_many :comments 

    validates :name, :username, :email, presence: true 
    validates :username, uniqueness: true

    def profile_photo
        @user = User.find(params[:image])
    end 

    
end 