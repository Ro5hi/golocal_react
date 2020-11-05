class User < ActiveRecord::Base

    serialize :image, JSON

    has_many :posts, dependent: :destroy 
    
    validates :name, presence: true
    validates :username, presence: true 
    validates :description, length: { maximum: 50 }

    def profile_photo
        @user = User.find(params[:image])
    end 

    
end 