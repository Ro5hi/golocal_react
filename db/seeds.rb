# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(id: 1, name: "Tony Zammar", username: "TonyZ", email: "tonyzmrr@gmail.com", password_digest: "password", image: "profile.jpg")
User.create(id: 2, name: "John Smith", username: "Super", email: "thisisjohnsmith@gmail.com", password_digest: "supersecret", image: "profile.jpg")
Business.create(id: 1, name: "Yats", address: "1625 W University Ave", city: "Muncie", state: "IN", zipcode: "47304", country: "USA", category: "Food", user_id: 1)