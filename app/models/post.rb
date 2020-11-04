class Post < ActiveRecord::Base

    belongs_to :user

    has_many :comments
    
    has_many :taggs
    has_many :tags, through: :taggs 

    validates :caption, length: {maximum: 50 }

end