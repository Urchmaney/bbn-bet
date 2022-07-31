class CreateReportBet < ActiveRecord::Migration[7.0]
  def change
    create_table :report_bets do |t|
      t.text :reason
      t.references :bet, index: true
      t.references :account, index: true

      t.timestamps
    end
  end
end
