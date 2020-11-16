class BusinessSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :name, :address, :city, :state,  :country, :zipcode
  
end
