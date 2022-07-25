class CreateBetEvent < ActiveRecord::Migration[7.0]
  def change
    create_table :bet_events do |t|
      t.text :title, null: false
      t.references :bet, index: true

      t.timestamps
    end
  end
end

