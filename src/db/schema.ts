import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";
import { defineRelations } from "drizzle-orm";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  first_name: varchar({ length: 255 }).notNull(),
  last_name: varchar({ length: 255 }).notNull(),
  username: varchar({ length:255 }).notNull(),
  passwordHash: text().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});


export const directionsTable = pgTable("directions", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    recipe_id: integer().notNull().references(() => recipesTable.id),
    recipe_step: integer().notNull(),
    step_title: varchar().notNull(),
    description: text().notNull(),
})


export const recipesTable = pgTable("recipes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  recipe_title: varchar().notNull(),
  user_id: integer().notNull().references(() => usersTable.id),


})



export const ingredientsTable = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  recipe_id: integer().notNull().references(() => recipesTable.id),
  ingredient: varchar({ length:255 }).notNull(),
  description: text().notNull(),

}
)




