class UserSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :name, :username, :business_id
  has_many :posts, serializer: PostSerializer

  attribute :business do |user|
    {
      name: user.business.name,
      address: user.business.address,
      city: user.business.city,
      state: user.business.state,
      country: user.business.country,
      zipcode: user.business.zipcode
    }
    
  end
end