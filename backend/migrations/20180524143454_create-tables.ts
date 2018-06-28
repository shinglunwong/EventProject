import * as Knex from "knex";

// use  ./node_modules/knex/bin/cli.js to run knex on server

exports.up = (knex: Knex) => {
    return knex.schema.createTable("users", (users) => {
        users.increments();
        users.string("email").unique();
        users.string("name").unique();
        users.string("password");
        users.text("photo","longtext");
        users.boolean("isactive");
    }).then(() => {

        return knex.schema.createTable("events", (events) => {
            events.increments();
            events.string("name");
            events.string("description");
            events.string("photo");
            events.timestamp("datetime");
            events.string("address");
            events.specificType("location", "POINT");
            events.boolean("private");
            events.decimal("deposit");
            events.boolean("isactive");
        })
    }).then(() => {

        return knex.schema.createTable("todo", (todo) => {
            todo.increments();
            todo.integer("events_id").unsigned();
            todo.foreign("events_id").references("events.id");
            todo.timestamps(false, true);
            todo.boolean("isactive");
        })
    }).then(() => {

        return knex.schema.createTable("items", (items) => {
            items.increments();
            items.string("name");
            items.integer("quantity");
            items.boolean("completed");
            items.integer("users_id").unsigned();
            items.foreign("users_id").references("users.id");
            items.integer("todo_id").unsigned();
            items.foreign("todo_id").references("todo.id");
            items.boolean("isactive");

        })
    }).then(() => {
        return knex.schema.createTable("events_users", (eventsUsers) => {
            eventsUsers.increments();
            eventsUsers.integer("users_id").unsigned();
            eventsUsers.foreign("users_id").references("users.id");
            eventsUsers.integer("events_id").unsigned();
            eventsUsers.foreign("events_id").references("events.id");
            eventsUsers.boolean("creator");
            eventsUsers.boolean("isactive");
        })
    }).then(() => {
        return knex.schema.createTable("discussion", (discussion) => {
            discussion.increments();
            discussion.integer("users_id").unsigned();
            discussion.foreign("users_id").references("users.id");
            discussion.integer("events_id").unsigned();
            discussion.foreign("events_id").references("events.id");
            discussion.timestamps(false, true);
            discussion.boolean("isactive");
            discussion.string("comment");
        })
    })
}

exports.down = (knex: Knex) => {
    return knex.schema.dropTable("discussion")
        .then(() =>knex.schema.dropTable("events_users"))
        .then(() => knex.schema.dropTable("items"))
        .then(() => knex.schema.dropTable("todo"))
        .then(() => knex.schema.dropTable("events"))
        .then(() => knex.schema.dropTable("users"));

}
