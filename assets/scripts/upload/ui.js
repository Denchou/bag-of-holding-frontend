'use strict'

const store = require('../store.js')
// const display = require('./../display.js')
const fileListing = require('./file-listing.handlebars')
const fileListingUser = require('./file-listing-user.handlebars')

const onUploadCreateSuccess = (data) => {
  $('#message').html('Item Successfully Uploaded')
  clearForms()
}

const failure = (data) => {
  $('#message').html('Generic Failure')
  clearForms()
}

const onGetUploadsSuccess = function (data) {
  $('.display-all').html('')
  const showFileListing = fileListing({files: data.uploads})
  $('.display-all').append(showFileListing)
  clearForms()

  console.log('store user id is ', store.user._id)

  // Check for owner
  for (let i = 0; i < data.uploads.length; i++) {
    console.log('data uploads owner is ', data.uploads[i].owner)

    if (data.uploads[i].owner === store.user._id) {

    }
  }

  // Display only owner's data
  const showUserFileListing = fileListingUser({files: data.uploads})
  $('.display-user').append(showUserFileListing)

}

const onGetUploadsFailure = function () {
  $('#message').html('Unable to show files.')
  clearForms()
}

const onDeleteUploadSuccess = function () {
  $('#message').html('Item Successfully Deleted')
  clearForms()
}

const onDeleteUploadFailure = function () {
  $('#message').html('Delete went wrong')
  clearForms()
}
const onUpdateUploadSuccess = function () {
  // $('.display').html('')
  $('#message').html('Item Successfully Updated')
  clearForms()
}

const onUpdateUploadFailure = function () {
  $('#message').html('Update went wrong')
  clearForms()
}

const clearForms = () => {
  $('input').val('')
}
module.exports = {
  onUploadCreateSuccess,
  failure,
  onGetUploadsSuccess,
  onGetUploadsFailure,
  onDeleteUploadSuccess,
  onDeleteUploadFailure,
  onUpdateUploadSuccess,
  onUpdateUploadFailure
}
