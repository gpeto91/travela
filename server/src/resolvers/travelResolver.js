const Travel = require("../models/Travel");

const travelResolver = {
   Query: {
      async travels() {
         const travels = await Travel.find();

         return travels.length;
      },
      travel(_, { id }) {
         return Travel.findById(id);
      },
   },
   Mutation: {
      async createTravel(_, { travel }) {
         const newTravel = new Travel(travel);

         try {
            const saved = await newTravel.save();

            return {
               code: 200,
               success: true,
               message: "Travel saved successfully!",
               travel: saved
            }
         } catch (err) {
            throw err;
         }
      },
      updateTravel(_, { id, travel }) {
         return Travel.findByIdAndUpdate(id, travel, {
            new: true,
            useFindAndModify: false,
         });
      },
      deleteTravel(_, { id }) {
         return Travel.findByIdAndRemove(id, {
            useFindAndModify: false,
         });
      },
   },
   MutationResponse: {
      __resolveType(mutationResponse, context, info) {
         return null;
      },
   }
};

module.exports = travelResolver;
