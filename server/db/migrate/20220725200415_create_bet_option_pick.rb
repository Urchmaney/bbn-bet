class CreateBetOptionPick < ActiveRecord::Migration[7.0]
  def change
    create_table :bet_option_picks do |t|
      t.references :account, index: true
      t.references :bet_event, index: true
      t.references :bet, index: true
      t.references :bet_event_option, index: true

      t.index [:account_id, :bet_event_id, :bet_id, :bet_event_option_id], unique: true, name: 'index_account_bet_option_pick'
      t.timestamps
    end
  end
end
