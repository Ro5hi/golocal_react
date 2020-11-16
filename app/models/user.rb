class User < ActiveRecord::Base

    has_secure_password

    serialize :image, JSON
    
    belongs_to :business 

    has_many :posts, dependent: :destroy 

    validates :name, :username, :password, presence: true 
    validates :username, uniqueness: true

    def profile_photo
        @user = User.find(params[:image])
    end 

    
end 