class CreateTransactions < ActiveRecord::Migration[8.0]
  def change
    create_table :transactions do |t|
      t.string :description
      t.float :amount
      t.string :category
      t.string :status

      t.timestamps
    end
  end
end
