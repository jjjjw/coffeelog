var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var NoteSchema = new Schema({
  ///////////////////////////////////
  baristaName:  String,
  coffeeName: String,
  preparationType: String,  // espresso, v60, clever, siphon, bonmac, chemex

  ///////////////////////////////////
  roastDate: Date,
  preparationDate: Date,

  ///////////////////////////////////
  tempOfWater: Number, // F
  grindSetting: Number,
  totalExtractionTime: Number,  // min-secs

  ///////////////////////////////////
  rating: Number,
  SCAAScore: Number,

  ///////////////////////////////////
  preinfuseTime: Number, // secs
  dialInDifficulty: Number,
  weightOfDose: Number,  // g
  weightOfYield: Number,

  ///////////////////////////////////
  weightOfCoffee: Number,
  weightOfWater: Number,
  bloomTime: Number, // secs

  ///////////////////////////////////
  roastId: Number
});

exports.NoteDisplaySchema = {
  ///////////////////////////////////
  baristaName: {
    displayString: 'Barista name',
    inputType: 'string'
  },
  coffeeName: {
    displayString: 'Coffee name',
    inputType: 'string'
  },
  preparationType: {
    displayString: 'Preparation type',
    inputType: 'string'
  },
  ///////////////////////////////////
  roastDate: {
    displayString: 'Roast date',
    inputType: 'date'
  },
  preparationDate: {
    displayString: 'Preparation date',
    inputType: 'date'
  },
  ///////////////////////////////////
  tempOfWater: {
    displayString: 'Water temp (°F)',
    inputType: 'number'
  },
  grindSetting: {
    displayString: 'Grind setting',
    inputType: 'number'
  },
  totalExtractionTime: {
    displayString: 'Extraction time',
    inputType: 'time'
  },


  ///////////////////////////////////
  rating: {
    displayString: 'Rating',
    inputType: 'number'
  },
  SCAAScore: {
    displayString: 'SCAA score',
    inputType: 'number'
  },

  ///////////////////////////////////
  preinfuseTime: {
    displayString: 'Pre-infuse time (secs)',
    inputType: 'number'
  },
  dialInDifficulty: {
    displayString: 'Dial in difficulty',
    inputType: 'number'
  },
  weightOfDose: {
    displayString: 'Weight of dose (g)',
    inputType: 'number'
  },
  weightOfYield: {
    displayString: 'Weight of yield (g)',
    inputType: 'number'
  },

  ///////////////////////////////////
  weightOfCoffee: {
    displayString: 'Weight of coffee',
    inputType: 'number'
  },
  weightOfWater: {
    displayString: 'Weight of water',
    inputType: 'number'
  },
  bloomTime: {
    displayString: 'Bloom time (secs)',
    inputType: 'number'
  },

  ///////////////////////////////////
  roastId: {
    displayString: 'Roast Id',
    inputType: 'string'
  }
}

mongoose.model('Note', NoteSchema);
