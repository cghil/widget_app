class AddHasOneAirbnbToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :airbnb_widget, :boolean, default: false
  end
end
