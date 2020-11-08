class Business < ActiveRecord::Base

    belongs_to :user

    validates :name, presence: true
    validates :address, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zipcode, presence: true
    validates :country, presence: true 
    validates :category, presence: true

end 