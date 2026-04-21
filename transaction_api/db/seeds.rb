# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

categories = %w[food transport utilities entertainment health other]
statuses = %w[pending settled]

10.times do |i|
	Transaction.create(
		description: "Transaction #{i + 1}",
		amount: rand(-500.0..500.0).round(2),
		category: categories.sample,
		status: statuses.sample
		)
end