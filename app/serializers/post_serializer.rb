class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :caption
  belongs_to :user
end
