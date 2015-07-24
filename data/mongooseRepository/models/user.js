///<reference path='../../../typings/tsd.d.ts'/>

var mongoose = require('mongoose');
var randomString = require('random-string');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    first: {
      type: String,
      trim: true
    },
    last: {
      type: String,
      trim: true
    }
  },
  token: { type: String, default: null },
  password: { type: String, required: false },
  phone: { type: Number, unique: true, required: true },
  registered: { type: Boolean, default: false, required: true },
  email: String,
  transactionAccount: Schema.Types.Mixed,
  device: { type: String, default: null },
  pushEndpoint: { type: String, default: null },
  settings: Schema.Types.Mixed,
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  paymentAccount: { type: String },
  paymentDefault: {
    brand: { type: String },
    last4: { type: String }
  },
  depositAccount: Schema.Types.Mixed,
  depositRecipient: Schema.Types.Mixed,
  test:{type:String}
});
UserSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  delete obj.token;

  return obj;
};
UserSchema.pre('save', function (next) {
  var currentDate = new Date(),
    user = this;

  user.updatedAt = currentDate;
  if (!user.createdAt) {
    user.createdAt = currentDate;
  }
  if (!this.password) {
    this.password = randomString({
      length: 16,
      numeric: true,
      letters: true,
      special: false
    });
  }

  next();
});
var User;
if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', UserSchema);
}
module.exports.user = User;