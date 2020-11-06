class CreateUsers < ActiveRecord::Migration[6.0]
    def change
      create_table :users do |t|
        t.string :name
        t.string :email
        t.string :username
        t.string :passsword_digest
        t.string :image
        t.datetime :remember_created_at
        t.timestamps null: false
      end 
    end
  end
  