import Sequelize from "sequelize"

const sequelize = new Sequelize("postgres://uazlhesv:M0oVhHW-llfFGVE96vtn7SC3M8wIcUrX@isabelle.db.elephantsql.com/uazlhesv",
{
  dialect: "postgres",
  define: {
    timestamps: false
  }
})

export default  sequelize