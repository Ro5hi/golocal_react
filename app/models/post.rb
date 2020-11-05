class Post < ActiveRecord::Base

    belongs_to :user

    has_many :comments
    
    has_many :taggs
    has_many :tags, through: :taggs 

    validates :caption, length: {maximum: 50 }

    def self.tagged_with(name)
        Tag.find_by_name!(name).posts
    end
    
    def tag_list
        tags.map(&:name).join(', ')
    end
    
    def tag_list=(names)
        self.tags = names.split(',').map do |n|
          Tag.where(name: n.strip).first_or_create!
        end 
    end

end