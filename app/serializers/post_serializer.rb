class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image, :caption
end
