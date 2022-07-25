# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_25_200415) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_accounts_on_username", unique: true
  end

  create_table "bet_event_options", force: :cascade do |t|
    t.string "title", null: false
    t.bigint "bet_event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bet_event_id"], name: "index_bet_event_options_on_bet_event_id"
  end

  create_table "bet_events", force: :cascade do |t|
    t.text "title", null: false
    t.bigint "bet_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bet_id"], name: "index_bet_events_on_bet_id"
  end

  create_table "bet_option_picks", force: :cascade do |t|
    t.bigint "account_id"
    t.bigint "bet_event_id"
    t.bigint "bet_id"
    t.bigint "bet_event_option_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id", "bet_event_id", "bet_id", "bet_event_option_id"], name: "index_account_bet_option_pick", unique: true
    t.index ["account_id"], name: "index_bet_option_picks_on_account_id"
    t.index ["bet_event_id"], name: "index_bet_option_picks_on_bet_event_id"
    t.index ["bet_event_option_id"], name: "index_bet_option_picks_on_bet_event_option_id"
    t.index ["bet_id"], name: "index_bet_option_picks_on_bet_id"
  end

  create_table "bets", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.integer "status", null: false
    t.integer "number_of_participants"
    t.integer "stake_amount"
    t.bigint "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_bets_on_account_id"
  end

end
