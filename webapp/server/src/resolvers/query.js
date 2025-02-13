
const models = require("../models");
module.exports = {
            users: async () => {
            return await models.User.find();
          },

          findUser: async (parent, {email, password}) => {
            return await models.User.findOne({email,password});
          },

          findUserByName: async (parent, args) => {
            return await models.User.findOne(args);
          },
          userByID: async (parent, args) => {
            return await models.User.findById(args.id);
          },
     };
