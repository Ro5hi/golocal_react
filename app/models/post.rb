class Post < ActiveRecord::Base

    belongs_to :user
    validates :caption, length: {maximum: 50 }


end