class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username, :email, :password_digest, :image, :business
end
