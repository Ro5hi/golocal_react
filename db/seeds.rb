# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(id: 1, name: "Tony", username: "TonyZ", password: "password", image: "profile.jpg", business_id: 1)
User.create(id: 2, name: "John", username: "Super", password: "supersecret", image: "profile.jpg", business_id: 2)
Business.create(id: 1, name: "A Business", address: "123 4th Street", city: "Denver", state: "CO", zipcode: "80019", country: "USA", user_id: 1)
Business.create(id: 2, name: "The Business", address: "34 5th Street", city: "Denver", state: "CO", zipcode: "80019", country: "USA", user_id: 2)