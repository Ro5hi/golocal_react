class TaggableSerializer
  include FastJsonapi::ObjectSerializer
  attributes :post_id, :tag_id
end
