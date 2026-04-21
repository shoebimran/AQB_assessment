module Api
	class TransactionsController < ApplicationController
		def index
			transactions = Transaction.all
			if params[:category].present?
				transactions = transactions.where(category: params[:category].downcase)
			end

			render json: transactions
		rescue => e
			render json: { error: e.message }, status: 500
		end
	end
end