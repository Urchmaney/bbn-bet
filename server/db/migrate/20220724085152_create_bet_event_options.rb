class CreateBetEventOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :bet_event_options do |t|
      t.string :title, null: false
      t.references :bet_event, index: true

      t.timestamps
    end
  end
end
