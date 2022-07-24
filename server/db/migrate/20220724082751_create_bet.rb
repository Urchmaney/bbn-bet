class CreateBet < ActiveRecord::Migration[7.0]
  def change
    create_table :bets do |t|
      t.string :title, null: false
      t.text :description
      t.integer :status, null: false
      t.integer :number_of_participants
      t.integer :stake_amount
      t.references :account
    
      t.timestamps
    end
  end
end

