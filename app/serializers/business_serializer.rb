class BusinessSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :address, :city, :state, :zipcode, :country, :category, :user_id
  belongs_to :user 
end
