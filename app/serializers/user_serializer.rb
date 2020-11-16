class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username, :email
  has_many :posts, serializer: PostSerializer

  attribute :business do |user|
    {
      name: user.business.name,
      address: user.business.address,
      city: user.business.city,
      state: user.business.state,
      zipcode: user.business.zipcode,
      county: user.business.country,
      category: user.business.category
    }
  end
end