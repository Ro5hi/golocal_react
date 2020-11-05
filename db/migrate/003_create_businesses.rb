class CreateBusinesses < ActiveRecord::Migration[6.0]
    def change
      create_table :businesses do |t|
        t.string :name
        t.string :address
        t.string :city
        t.string :state 
        t.string :zipcode
        t.string :category
        t.references :user
      end
    end
end