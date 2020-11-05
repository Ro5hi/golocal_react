class CreatePosts < ActiveRecord::Migration[6.0]
    def change
      create_table :posts do |t|
        t.string :caption
        t.string :image
        t.references :user
        t.boolean :active 
        t.timestamps
      end
    end
  end