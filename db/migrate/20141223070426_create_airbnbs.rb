class CreateAirbnbs < ActiveRecord::Migration
  def change
    create_table :airbnbs do |t|

      t.timestamps
    end
  end
end
