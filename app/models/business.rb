class Business < ActiveRecord::Base

    belongs_to :user
    has_many :links

    validates :name, presence: true
    validates :address, presence: true
    validates :state, presence: true
    validates :zipcode, presence: true
    validates :category, presence: true

end 