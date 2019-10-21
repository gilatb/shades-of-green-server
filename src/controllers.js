'use strict';

const db = require('./models');


exports.getUsers = async (req, res, next) => {
  try {
    const users = await db.Users.findAll()
    res.send(users)
  } catch (e) {
    console.error(e);
    res.status = 500;
  }
};

exports.getPlaces = async (req, res, next) => {
  try {
    const places = await db.Places.findAll();
    res.send(places)
  } catch (e) {
    console.error(e);
    res.status = 500;
  }
};

exports.addVote = async (req, res) => {
  try {
    const { place_google_id, score, user_id } = req.body
    // finding the place with the same id:
    let place = await db.Places.findOne({ 
      where: { google_id: place_google_id } 
    })
    if (!place) {
      // if the place doesn't exist, create a new place:
      place = await db.Places.create({ 
        google_id: place_google_id
      })
    }
    // create a new vote in the votes table, connected to the same place:
    const vote = await db.Votes.create({
      PlaceGoogleId: place_google_id,
      UserId: user_id,
      score
    });
    // update the 
    const [_, [updatedSumNTotal]] = await db.Places.update({ 
      total_score: place.total_score + score, 
      num_of_votes: place.num_of_votes + 1 
    }, { 
      where: { google_id: place_google_id }, returning: true 
    });
    const updatedScore = await db.Places.update({ 
      average_score: updatedSumNTotal.total_score / updatedSumNTotal.num_of_votes 
    }, { 
      where: { google_id: place_google_id }, 
      returning: true
    });
    res.send(updatedScore)
  } catch (e) {
    console.error(e);
    res.status = 500;
  }
};

exports.getCurrentScore = async (req, res) => {
  try {
    const { google_id } = req.body;
    const currentScore = await db.Places.findOne({ 
      where: { 
        google_id: google_id
      } 
    })
    res.send(currentScore) 
  } catch (e) {
    console.error(e);
    res.status = 500;
  }
};

