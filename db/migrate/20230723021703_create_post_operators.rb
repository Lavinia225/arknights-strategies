class CreatePostOperators < ActiveRecord::Migration[7.0]
  def change
    create_table :post_operators do |t|
      t.integer :post_id
      t.integer :operator_id
      t.string :level
      t.integer :potential

      t.timestamps
    end
  end
end
