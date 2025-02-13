
const models = require("../models");
module.exports = {
          addAdmin: async (parent, args) => {
            return await models.User.create({
              name: args.name,
              email: args.email,
              password: args.password,
              role: args.role,
              key: args.key,
            });
          },

          signUp: async (parent, args) => {
            return await models.User.create({
              name: args.name,
              email: args.email,
              password: args.password,
              role: args.role,
              key: args.key,
            });
          },

          deleteUser: async (parent, args) => {
            try{
            await models.User.findOneAndRemove(args);
              return true;
            }catch (err){
            return false;
            }
          },

        }
