class CreateUsers < ActiveRecord::Migration[6.0]
    def change
      create_table :users do |t|
        t.string :name
        t.string :email
        t.string :passsword
        t.string :image 
        t.string :session_id
        t.datetime :remember_created_at
        t.timestamps null: false
        
        end 

        add_index :users, :email,                unique: true
        add_index :users, :reset_password_token, unique: true
    end
  end
  